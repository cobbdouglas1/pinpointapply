
import React from 'react';
import { UseFormReturn } from 'react-hook-form';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface StepEducationProps {
  form: UseFormReturn<any>;
}

const StepEducation = ({ form }: StepEducationProps) => {
  return (
    <div className="space-y-4 animate-fade-in">
      <div className="border p-4 rounded-md">
        <h3 className="font-medium mb-3">Education 1</h3>
        <div className="space-y-3">
          <div>
            <Label className="block text-sm font-medium mb-1">Degree *</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select degree" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="bachelor">Bachelor's</SelectItem>
                <SelectItem value="master">Master's</SelectItem>
                <SelectItem value="phd">PhD</SelectItem>
                <SelectItem value="associate">Associate's</SelectItem>
                <SelectItem value="highschool">High School</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label className="block text-sm font-medium mb-1">Institution *</Label>
            <Input type="text" placeholder="University of Example" />
          </div>
          <div>
            <Label className="block text-sm font-medium mb-1">Field of Study/Major *</Label>
            <Input type="text" placeholder="Computer Science" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label className="block text-sm font-medium mb-1">Start Year *</Label>
              <Input type="text" placeholder="2016" />
            </div>
            <div>
              <Label className="block text-sm font-medium mb-1">Graduation Year *</Label>
              <Input type="text" placeholder="2020" />
            </div>
          </div>
          <div>
            <Label className="block text-sm font-medium mb-1">Relevant Coursework (Optional)</Label>
            <Input type="text" placeholder="Data Structures, Algorithms, Machine Learning" />
          </div>
        </div>
      </div>
      <div className="border p-4 rounded-md mt-4">
        <h3 className="font-medium mb-3">Certifications (Optional)</h3>
        <div className="space-y-3">
          <div>
            <Label className="block text-sm font-medium mb-1">Certification Name</Label>
            <Input type="text" placeholder="AWS Certified Solutions Architect" />
          </div>
          <div>
            <Label className="block text-sm font-medium mb-1">Issuing Organization</Label>
            <Input type="text" placeholder="Amazon Web Services" />
          </div>
          <div>
            <Label className="block text-sm font-medium mb-1">Date Obtained</Label>
            <Input type="text" placeholder="June 2021" />
          </div>
        </div>
      </div>
      <Button type="button" variant="outline" size="sm" className="mt-2">
        + Add Another Education/Certification
      </Button>
    </div>
  );
};

export default StepEducation;
