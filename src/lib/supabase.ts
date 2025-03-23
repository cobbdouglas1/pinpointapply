
import { createClient } from '@supabase/supabase-js';

// Use the Supabase URL and anon key directly
const supabaseUrl = "https://ypgnkbzgridhtuctonhk.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlwZ25rYnpncmlkaHR1Y3RvbmhrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI2OTAwNTUsImV4cCI6MjA1ODI2NjA1NX0.65BhOTcEvKty0c8sSeVnQmy_tU16iPiAhJm9KIC6lC0";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Tables = {
  users: {
    id: string;
    full_name: string;
    email: string;
    phone: string;
    location_city: string;
    location_country: string;
    linkedin_url?: string;
    github_url?: string;
    professional_headline?: string;
    created_at: string;
  };
  career_profiles: {
    id: string;
    user_id: string;
    career_objective?: string;
    skills_hard: any;
    skills_soft: any;
    work_experience: any;
    education: any;
    certifications?: any;
    projects?: any;
    volunteering?: any;
    awards?: any;
    languages: any;
    extras?: any;
    created_at: string;
  };
  generated_docs: {
    id: string;
    user_id: string;
    doc_type: 'CV' | 'CoverLetter';
    template_used: string;
    company_info?: string;
    value_proposition?: string;
    personal_touch?: string;
    additional_notes?: string;
    final_doc_url: string;
    created_at: string;
  };
};
