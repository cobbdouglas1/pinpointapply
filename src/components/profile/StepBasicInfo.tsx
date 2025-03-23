
import React from 'react';
import { UseFormReturn } from 'react-hook-form';
import { 
  FormField, 
  FormItem, 
  FormLabel, 
  FormControl,
  FormDescription,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

interface StepBasicInfoProps {
  form: UseFormReturn<any>;
}

const StepBasicInfo = ({ form }: StepBasicInfoProps) => {
  return (
    <div className="space-y-4 animate-fade-in">
      <FormField
        control={form.control}
        name="fullName"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Full Name *</FormLabel>
            <FormControl>
              <Input placeholder="John Doe" {...field} />
            </FormControl>
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Email Address *</FormLabel>
            <FormControl>
              <Input type="email" placeholder="email@example.com" {...field} />
            </FormControl>
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="phone"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Phone Number *</FormLabel>
            <FormControl>
              <Input type="tel" placeholder="+1 234 567 8901" {...field} />
            </FormControl>
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="location"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Location *</FormLabel>
            <FormControl>
              <Input placeholder="City, Country" {...field} />
            </FormControl>
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="headline"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Professional Headline (Optional)</FormLabel>
            <FormControl>
              <Input placeholder="Senior Software Engineer" {...field} />
            </FormControl>
            <FormDescription>
              A short title that describes your professional identity
            </FormDescription>
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="linkedin"
        render={({ field }) => (
          <FormItem>
            <FormLabel>LinkedIn (Optional)</FormLabel>
            <FormControl>
              <Input type="url" placeholder="https://linkedin.com/in/username" {...field} />
            </FormControl>
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="github"
        render={({ field }) => (
          <FormItem>
            <FormLabel>GitHub/Portfolio (Optional)</FormLabel>
            <FormControl>
              <Input type="url" placeholder="https://github.com/username" {...field} />
            </FormControl>
          </FormItem>
        )}
      />
    </div>
  );
};

export default StepBasicInfo;
