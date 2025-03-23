
import React from 'react';
import { UseFormReturn } from 'react-hook-form';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { FormDescription } from "@/components/ui/form";

interface StepSkillsProps {
  form: UseFormReturn<any>;
}

const StepSkills = ({ form }: StepSkillsProps) => {
  return (
    <div className="space-y-4 animate-fade-in">
      <div>
        <Label className="block text-sm font-medium mb-1">Hard Skills (Technical) *</Label>
        <Textarea 
          rows={3} 
          placeholder="React, JavaScript, Python, SQL, AWS, Docker, CI/CD, etc."
        />
        <FormDescription className="text-xs text-gray-500 mt-1">
          List your technical or role-specific skills, separated by commas
        </FormDescription>
      </div>
      <div>
        <Label className="block text-sm font-medium mb-1">Soft Skills *</Label>
        <Textarea 
          rows={3} 
          placeholder="Communication, Leadership, Problem-solving, Teamwork, Adaptability, etc."
        />
        <FormDescription className="text-xs text-gray-500 mt-1">
          List your interpersonal and transferable skills, separated by commas
        </FormDescription>
      </div>
      <div className="border p-4 rounded-md">
        <h3 className="font-medium mb-3">Skill Proficiency (Optional)</h3>
        <div className="space-y-3">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label className="block text-sm font-medium mb-1">Skill</Label>
              <Input type="text" placeholder="JavaScript" />
            </div>
            <div>
              <Label className="block text-sm font-medium mb-1">Proficiency</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="beginner">Beginner</SelectItem>
                  <SelectItem value="intermediate">Intermediate</SelectItem>
                  <SelectItem value="advanced">Advanced</SelectItem>
                  <SelectItem value="expert">Expert</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
        <Button type="button" variant="outline" size="sm" className="mt-3">
          + Add Another Skill
        </Button>
      </div>
    </div>
  );
};

export default StepSkills;
