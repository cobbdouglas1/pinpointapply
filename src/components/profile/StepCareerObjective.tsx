
import React from 'react';
import { UseFormReturn } from 'react-hook-form';
import { 
  FormField, 
  FormItem, 
  FormLabel, 
  FormControl,
  FormDescription,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";

interface StepCareerObjectiveProps {
  form: UseFormReturn<any>;
}

const StepCareerObjective = ({ form }: StepCareerObjectiveProps) => {
  return (
    <div className="space-y-4 animate-fade-in">
      <FormField
        control={form.control}
        name="careerObjective"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Career Objective/Personal Summary *</FormLabel>
            <FormControl>
              <Textarea 
                rows={5} 
                placeholder="Write a brief summary of your career goals, professional identity, and what makes you unique..."
                {...field}
              />
            </FormControl>
            <FormDescription>
              This will appear at the top of your CV and helps employers understand your professional brand
            </FormDescription>
          </FormItem>
        )}
      />
    </div>
  );
};

export default StepCareerObjective;
