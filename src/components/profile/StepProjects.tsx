
import React from 'react';
import { UseFormReturn } from 'react-hook-form';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

interface StepProjectsProps {
  form: UseFormReturn<any>;
}

const StepProjects = ({ form }: StepProjectsProps) => {
  return (
    <div className="space-y-4 animate-fade-in">
      <div className="border p-4 rounded-md">
        <h3 className="font-medium mb-3">Project 1 (Optional)</h3>
        <div className="space-y-3">
          <div>
            <Label className="block text-sm font-medium mb-1">Project Title</Label>
            <Input type="text" placeholder="E-commerce Platform" />
          </div>
          <div>
            <Label className="block text-sm font-medium mb-1">Your Role</Label>
            <Input type="text" placeholder="Lead Developer" />
          </div>
          <div>
            <Label className="block text-sm font-medium mb-1">Description</Label>
            <Textarea 
              rows={4} 
              placeholder="Describe the project goals, technologies used, and outcomes..."
            />
          </div>
          <div>
            <Label className="block text-sm font-medium mb-1">Demo/Repository Link</Label>
            <Input type="url" placeholder="https://github.com/username/project" />
          </div>
        </div>
      </div>
      <Button type="button" variant="outline" size="sm" className="mt-2">
        + Add Another Project
      </Button>
    </div>
  );
};

export default StepProjects;
