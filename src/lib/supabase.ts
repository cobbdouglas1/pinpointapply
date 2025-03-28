
import { RealtimeChannel, SupabaseClient, createClient } from '@supabase/supabase-js';
import type { Database } from '../integrations/supabase/types';

export type Tables<T extends keyof Database['public']['Tables']> = Database['public']['Tables'][T]['Row'];

// Initialize the Supabase client with proper environment variables
// Using a consistent client configuration across the application
export const supabase = createClient<Database>(
  import.meta.env.VITE_SUPABASE_URL || 'https://ypgnkbzgridhtuctonhk.supabase.co',
  import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlwZ25rYnpncmlkaHR1Y3RvbmhrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI2OTAwNTUsImV4cCI6MjA1ODI2NjA1NX0.65BhOTcEvKty0c8sSeVnQmy_tU16iPiAhJm9KIC6lC0',
  {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
      storage: typeof window !== 'undefined' ? localStorage : undefined
    }
  }
);

// Initialize storage buckets
export const initializeStorage = async () => {
  try {
    // Check if the CV uploads bucket exists
    const { data: buckets, error: bucketsError } = await supabase
      .storage
      .listBuckets();
    
    if (bucketsError) {
      console.error('Error checking storage buckets:', bucketsError);
      return;
    }
    
    const cvBucketExists = buckets.some(bucket => bucket.name === 'cv_uploads');
    
    // Create the CV uploads bucket if it doesn't exist
    if (!cvBucketExists) {
      const { error: createError } = await supabase
        .storage
        .createBucket('cv_uploads', {
          public: false,
          fileSizeLimit: 5242880, // 5MB in bytes
          allowedMimeTypes: [
            'application/pdf',
            'application/msword',
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
          ]
        });
      
      if (createError) {
        console.error('Error creating storage bucket:', createError);
      } else {
        console.log('CV uploads bucket created successfully');
        
        // Set up bucket policy to allow authenticated uploads
        const { error: policyError } = await supabase
          .storage
          .from('cv_uploads')
          .createSignedUploadUrl('test-policy-file');
        
        if (policyError && policyError.message !== 'The resource already exists') {
          console.error('Error setting bucket policy:', policyError);
        }
      }
    }
  } catch (error) {
    console.error('Error initializing storage:', error);
  }
};
