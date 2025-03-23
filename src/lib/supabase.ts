
import { createClient } from '@supabase/supabase-js';

// Replace with your Supabase URL and anon key
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase URL or Anon Key. Set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY environment variables.');
}

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
