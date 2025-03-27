
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileUp, FileText } from "lucide-react";

interface ProfileStartOptionsProps {
  onSelectUploadCV: () => void;
  onSelectStartFromScratch: () => void;
}

const ProfileStartOptions = ({ 
  onSelectUploadCV, 
  onSelectStartFromScratch 
}: ProfileStartOptionsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in">
      <Card className="hover:shadow-md transition-shadow cursor-pointer" onClick={onSelectUploadCV}>
        <CardContent className="flex flex-col items-center justify-center p-6 h-full">
          <FileUp className="h-16 w-16 mb-4 text-primary" />
          <h3 className="text-xl font-medium text-center">Upload Existing CV</h3>
          <p className="text-center text-gray-500 mt-2">
            Upload your existing CV and we'll automatically extract information to pre-fill your profile.
          </p>
          <Button className="mt-6">
            Upload CV
          </Button>
        </CardContent>
      </Card>

      <Card className="hover:shadow-md transition-shadow cursor-pointer" onClick={onSelectStartFromScratch}>
        <CardContent className="flex flex-col items-center justify-center p-6 h-full">
          <FileText className="h-16 w-16 mb-4 text-primary" />
          <h3 className="text-xl font-medium text-center">Start From Scratch</h3>
          <p className="text-center text-gray-500 mt-2">
            Create your profile step by step with our guided form.
          </p>
          <Button className="mt-6" variant="outline">
            Create New Profile
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfileStartOptions;
