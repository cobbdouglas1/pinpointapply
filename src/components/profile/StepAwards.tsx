
import React from 'react';
import { UseFormReturn } from 'react-hook-form';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

interface StepAwardsProps {
  form: UseFormReturn<any>;
}

const StepAwards = ({ form }: StepAwardsProps) => {
  return (
    <div className="space-y-4 animate-fade-in">
      <div className="border p-4 rounded-md">
        <h3 className="font-medium mb-3">Award/Achievement (Optional)</h3>
        <div className="space-y-3">
          <div>
            <Label className="block text-sm font-medium mb-1">Award Title</Label>
            <Input type="text" placeholder="Best Innovative Solution Award" />
          </div>
          <div>
            <Label className="block text-sm font-medium mb-1">Issuing Organization</Label>
            <Input type="text" placeholder="Tech Innovation Summit" />
          </div>
          <div>
            <Label className="block text-sm font-medium mb-1">Date</Label>
            <Input type="text" placeholder="November 2022" />
          </div>
          <div>
            <Label className="block text-sm font-medium mb-1">Description (Optional)</Label>
            <Textarea 
              rows={2} 
              placeholder="Briefly describe the award criteria and your achievement..."
            />
          </div>
        </div>
      </div>
      <Button type="button" variant="outline" size="sm" className="mt-2">
        + Add Another Award
      </Button>
    </div>
  );
};

export default StepAwards;
