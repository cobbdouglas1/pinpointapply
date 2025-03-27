
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import ProfileStartOptions from './ProfileStartOptions';
import CVUploadParser from './CVUploadParser';

interface ProfileStartWrapperProps {
  hasExistingProfile: boolean;
  onStartFromScratch: () => void;
  onCVParseComplete: (parsedData: any) => Promise<void>;
}

const ProfileStartWrapper = ({ 
  hasExistingProfile, 
  onStartFromScratch, 
  onCVParseComplete 
}: ProfileStartWrapperProps) => {
  const [showCVUpload, setShowCVUpload] = useState(false);

  const handleUploadCV = () => {
    setShowCVUpload(true);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Create Your Career Profile</CardTitle>
        <CardDescription>
          Choose how you want to start building your career profile
        </CardDescription>
      </CardHeader>
      <CardContent>
        {!showCVUpload ? (
          <ProfileStartOptions 
            onSelectUploadCV={handleUploadCV}
            onSelectStartFromScratch={onStartFromScratch}
          />
        ) : (
          <CVUploadParser 
            onParseComplete={onCVParseComplete}
            onCancel={() => setShowCVUpload(false)}
          />
        )}
      </CardContent>
    </Card>
  );
};

export default ProfileStartWrapper;
