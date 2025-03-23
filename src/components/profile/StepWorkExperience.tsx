
import React from 'react';
import { UseFormReturn } from 'react-hook-form';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

interface StepWorkExperienceProps {
  form: UseFormReturn<any>;
}

const StepWorkExperience = ({ form }: StepWorkExperienceProps) => {
  return (
    <div className="space-y-4 animate-fade-in">
      <div className="border p-4 rounded-md">
        <h3 className="font-medium mb-3">Work Experience 1</h3>
        <div className="space-y-3">
          <div>
            <Label className="block text-sm font-medium mb-1">Company/Organization *</Label>
            <Input type="text" placeholder="Company Inc." />
          </div>
          <div>
            <Label className="block text-sm font-medium mb-1">Job Title *</Label>
            <Input type="text" placeholder="Software Engineer" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label className="block text-sm font-medium mb-1">Start Date *</Label>
              <Input type="text" placeholder="Jan 2020" />
            </div>
            <div>
              <Label className="block text-sm font-medium mb-1">End Date *</Label>
              <Input type="text" placeholder="Present" />
            </div>
          </div>
          <div>
            <Label className="block text-sm font-medium mb-1">Location</Label>
            <Input type="text" placeholder="City, Country" />
          </div>
          <div>
            <Label className="block text-sm font-medium mb-1">Responsibilities & Achievements *</Label>
            <Textarea 
              rows={4} 
              placeholder="Describe your role, responsibilities, key achievements, and impact..."
            />
          </div>
          <div>
            <Label className="block text-sm font-medium mb-1">Key Projects/Initiatives (Optional)</Label>
            <Textarea 
              rows={3} 
              placeholder="Describe any notable projects you worked on and their outcomes..."
            />
          </div>
        </div>
      </div>
      <Button type="button" variant="outline" size="sm" className="mt-2">
        + Add Another Work Experience
      </Button>
    </div>
  );
};

export default StepWorkExperience;
