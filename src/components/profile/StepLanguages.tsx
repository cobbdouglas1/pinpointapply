
import React from 'react';
import { UseFormReturn } from 'react-hook-form';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface StepLanguagesProps {
  form: UseFormReturn<any>;
}

const StepLanguages = ({ form }: StepLanguagesProps) => {
  return (
    <div className="space-y-4 animate-fade-in">
      <div className="border p-4 rounded-md">
        <h3 className="font-medium mb-3">Language Proficiency</h3>
        <div className="space-y-3">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label className="block text-sm font-medium mb-1">Language</Label>
              <Input type="text" placeholder="English" />
            </div>
            <div>
              <Label className="block text-sm font-medium mb-1">Proficiency</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="native">Native</SelectItem>
                  <SelectItem value="fluent">Fluent</SelectItem>
                  <SelectItem value="advanced">Advanced</SelectItem>
                  <SelectItem value="intermediate">Intermediate</SelectItem>
                  <SelectItem value="basic">Basic</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
        <Button type="button" variant="outline" size="sm" className="mt-3">
          + Add Another Language
        </Button>
      </div>
    </div>
  );
};

export default StepLanguages;
