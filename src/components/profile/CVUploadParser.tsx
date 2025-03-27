
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Upload, FileUp, FileText, AlertCircle } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { useAuthContext } from "@/context/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

interface CVUploadParserProps {
  onParseComplete: (data: any) => void;
  onCancel: () => void;
}

const CVUploadParser = ({ onParseComplete, onCancel }: CVUploadParserProps) => {
  const [file, setFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [isParsing, setIsParsing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();
  const { user } = useAuthContext();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      
      // Check file type
      const validTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (!validTypes.includes(selectedFile.type)) {
        setError('Please upload a PDF or Word document (.pdf, .doc, .docx)');
        setFile(null);
        return;
      }
      
      // Check file size (5MB max)
      if (selectedFile.size > 5 * 1024 * 1024) {
        setError('File size exceeds 5MB limit');
        setFile(null);
        return;
      }
      
      setFile(selectedFile);
      setError(null);
    }
  };

  const handleUpload = async () => {
    if (!file || !user) return;
    
    try {
      setIsUploading(true);
      setError(null);
      
      // Upload file to temporary storage
      const fileName = `cv_${user.id}_${Date.now()}.${file.name.split('.').pop()}`;
      const { error: uploadError } = await supabase.storage
        .from('cv_uploads')
        .upload(fileName, file);
      
      if (uploadError) throw new Error(uploadError.message);
      
      // Get public URL for the file
      const { data: urlData } = supabase.storage
        .from('cv_uploads')
        .getPublicUrl(fileName);
      
      if (!urlData) throw new Error('Failed to get file URL');
      
      // Start parsing
      setIsUploading(false);
      setIsParsing(true);
      
      // Simulate CV parsing - In a real app, this would call a parsing service
      // For this demo, we'll simulate extracting some basic information
      setTimeout(() => {
        const parsedData = simulateParsingCV(file.name);
        
        // Notify successful parsing
        toast({
          title: "CV Parsed Successfully",
          description: "Your career profile has been pre-filled with information from your CV.",
        });
        
        // Clean up the temporary file
        supabase.storage
          .from('cv_uploads')
          .remove([fileName])
          .then(() => console.log('Temporary file removed'));
        
        setIsParsing(false);
        onParseComplete(parsedData);
      }, 2000);
      
    } catch (err: any) {
      setIsUploading(false);
      setIsParsing(false);
      setError(err.message || 'An error occurred while processing your CV');
      toast({
        title: "Upload Failed",
        description: err.message || 'An error occurred while processing your CV',
        variant: "destructive",
      });
    }
  };
  
  // This function simulates parsing a CV - in a real app, you would use a proper CV parsing service
  const simulateParsingCV = (filename: string) => {
    // Generate some mock data based on the filename to simulate parsed results
    return {
      fullName: filename.split('.')[0].replace(/_/g, ' '),
      email: `${filename.split('.')[0].toLowerCase().replace(/_/g, '.')}@example.com`,
      phone: '+1 (555) 123-4567',
      location: 'New York, USA',
      headline: 'Software Developer',
      careerObjective: 'Passionate software developer with experience in web technologies, seeking opportunities to create innovative solutions.',
      work_experience: [
        {
          company: 'Tech Solutions Inc.',
          position: 'Frontend Developer',
          startDate: '2020-01',
          endDate: '2022-12',
          current: false,
          description: 'Developed and maintained web applications using React and TypeScript.'
        }
      ],
      education: [
        {
          institution: 'University of Technology',
          degree: 'Bachelor of Science in Computer Science',
          startDate: '2016-09',
          endDate: '2020-05',
          current: false,
          description: 'Graduated with honors. Focused on software engineering and web development.'
        }
      ],
      skills_hard: ['JavaScript', 'TypeScript', 'React', 'Node.js', 'HTML', 'CSS'],
      skills_soft: ['Communication', 'Problem Solving', 'Teamwork', 'Time Management'],
      languages: [
        { name: 'English', proficiency: 'Native' },
        { name: 'Spanish', proficiency: 'Intermediate' }
      ]
    };
  };

  return (
    <Card className="w-full">
      <CardContent className="pt-6">
        {error && (
          <Alert variant="destructive" className="mb-4">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
        
        <div className="space-y-6">
          <div className="text-center">
            <h3 className="text-lg font-medium">Upload Your Existing CV</h3>
            <p className="text-sm text-gray-500 mt-1">
              We'll extract information to pre-fill your career profile
            </p>
          </div>
          
          <div className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-gray-300 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
            <Upload className="h-12 w-12 text-gray-400 mb-2" />
            <p className="text-sm text-gray-500 mb-4">PDF or Word documents up to 5MB</p>
            <Input
              type="file"
              className="hidden"
              id="cv-upload"
              accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
              onChange={handleFileChange}
              disabled={isUploading || isParsing}
            />
            <label htmlFor="cv-upload">
              <Button variant="outline" className="cursor-pointer" disabled={isUploading || isParsing}>
                <FileUp className="h-4 w-4 mr-2" />
                Browse Files
              </Button>
            </label>
            
            {file && (
              <div className="flex items-center mt-4 p-2 bg-primary/10 rounded-md w-full">
                <FileText className="h-5 w-5 text-primary mr-2" />
                <span className="text-sm text-gray-700 truncate max-w-[200px]">{file.name}</span>
                <span className="text-xs text-gray-500 ml-2">
                  ({(file.size / 1024 / 1024).toFixed(2)} MB)
                </span>
              </div>
            )}
          </div>
          
          <div className="flex justify-between space-x-4">
            <Button 
              variant="outline" 
              className="w-1/2" 
              onClick={onCancel}
              disabled={isUploading || isParsing}
            >
              Cancel
            </Button>
            <Button 
              className="w-1/2" 
              onClick={handleUpload}
              disabled={!file || isUploading || isParsing}
            >
              {isUploading ? 'Uploading...' : isParsing ? 'Parsing...' : 'Upload & Parse'}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CVUploadParser;
