
import React from 'react';
import { UseFormReturn } from 'react-hook-form';
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

interface StepAdditionalInfoProps {
  form: UseFormReturn<any>;
}

const StepAdditionalInfo = ({ form }: StepAdditionalInfoProps) => {
  return (
    <div className="space-y-4 animate-fade-in">
      <div>
        <Label className="block text-sm font-medium mb-1">Publications (Optional)</Label>
        <Textarea 
          rows={3} 
          placeholder="List any articles, papers, or books you've published..."
        />
      </div>
      <div>
        <Label className="block text-sm font-medium mb-1">Speaking Engagements (Optional)</Label>
        <Textarea 
          rows={3} 
          placeholder="List any conferences, webinars, or events where you've spoken..."
        />
      </div>
      <div>
        <Label className="block text-sm font-medium mb-1">Patents (Optional)</Label>
        <Textarea 
          rows={2} 
          placeholder="List any patents you hold or have applied for..."
        />
      </div>
      <div>
        <Label className="block text-sm font-medium mb-1">References/Testimonials (Optional)</Label>
        <Textarea 
          rows={3} 
          placeholder="Add references or testimonials from colleagues or supervisors..."
        />
      </div>
      <div>
        <Label className="block text-sm font-medium mb-1">Career Gap Explanation (Optional)</Label>
        <Textarea 
          rows={3} 
          placeholder="If you have gaps in your career history, you can explain them here..."
        />
      </div>
    </div>
  );
};

export default StepAdditionalInfo;
