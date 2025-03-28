
import { RealtimeChannel, SupabaseClient, createClient } from '@supabase/supabase-js';
import type { Database } from '../integrations/supabase/types';

export type Tables<T extends keyof Database['public']['Tables']> = Database['public']['Tables'][T]['Row'];

// Initialize the Supabase client
export const supabase = createClient<Database>(
  import.meta.env.VITE_SUPABASE_URL || '',
  import.meta.env.VITE_SUPABASE_ANON_KEY || ''
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
