
import React from 'react';
import { UseFormReturn } from 'react-hook-form';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

interface StepActivitiesProps {
  form: UseFormReturn<any>;
}

const StepActivities = ({ form }: StepActivitiesProps) => {
  return (
    <div className="space-y-4 animate-fade-in">
      <div className="border p-4 rounded-md">
        <h3 className="font-medium mb-3">Extracurricular Activity/Volunteering (Optional)</h3>
        <div className="space-y-3">
          <div>
            <Label className="block text-sm font-medium mb-1">Organization/Group</Label>
            <Input type="text" placeholder="Coding Mentorship Program" />
          </div>
          <div>
            <Label className="block text-sm font-medium mb-1">Position/Role</Label>
            <Input type="text" placeholder="Volunteer Mentor" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label className="block text-sm font-medium mb-1">From</Label>
              <Input type="text" placeholder="January 2022" />
            </div>
            <div>
              <Label className="block text-sm font-medium mb-1">To</Label>
              <Input type="text" placeholder="Present" />
            </div>
          </div>
          <div>
            <Label className="block text-sm font-medium mb-1">Contributions/Achievements</Label>
            <Textarea 
              rows={3} 
              placeholder="Describe your role and key contributions..."
            />
          </div>
        </div>
      </div>
      <Button type="button" variant="outline" size="sm" className="mt-2">
        + Add Another Activity
      </Button>
    </div>
  );
};

export default StepActivities;
