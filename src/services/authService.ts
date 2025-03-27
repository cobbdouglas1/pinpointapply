
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { toast as sonnerToast } from 'sonner';
import { useNavigate } from 'react-router-dom';

export const signUp = async (email: string, password: string, fullName: string) => {
  try {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: fullName,
        },
        emailRedirectTo: `${window.location.origin}/dashboard`,
      },
    });

    if (error) throw error;
    
    // Create user record in users table
    if (data.user) {
      await supabase.from('users').insert({
        id: data.user.id,
        full_name: fullName,
        email: email,
        phone: '',
        location_city: '',
        location_country: '',
        created_at: new Date().toISOString(),
      });
    }
    
    return data;
  } catch (error) {
    console.error('Error signing up:', error);
    throw error;
  }
};

export const signInWithEmail = async (email: string, password: string) => {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error signing in:', error);
    throw error;
  }
};

export const signInWithGoogle = async () => {
  try {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/dashboard`,
      },
    });

    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error signing in with Google:', error);
    throw error;
  }
};

export const signInWithGithub = async () => {
  try {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'github',
      options: {
        redirectTo: `${window.location.origin}/dashboard`,
      },
    });

    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error signing in with GitHub:', error);
    throw error;
  }
};

export const signOut = async () => {
  try {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
    sonnerToast.success('Signed out successfully');
    return true;
  } catch (error) {
    console.error('Error signing out:', error);
    sonnerToast.error('Failed to sign out');
    throw error;
  }
};

export const useAuth = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  
  const handleSignUp = async (email: string, password: string, fullName: string) => {
    try {
      await signUp(email, password, fullName);
      toast({
        title: "Success",
        description: "Account created. Please check your email for verification.",
      });
      return true;
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to create account",
        variant: "destructive",
      });
      return false;
    }
  };

  const handleSignIn = async (email: string, password: string) => {
    try {
      const data = await signInWithEmail(email, password);
      if (data.session) {
        toast({
          title: "Success",
          description: "Signed in successfully",
        });
        return true;
      } else {
        toast({
          title: "Error",
          description: "Authentication failed. Please try again.",
          variant: "destructive",
        });
        return false;
      }
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to sign in",
        variant: "destructive",
      });
      return false;
    }
  };

  const handleSocialSignIn = async (provider: 'google' | 'github') => {
    try {
      if (provider === 'google') {
        await signInWithGoogle();
      } else if (provider === 'github') {
        await signInWithGithub();
      }
      return true;
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || `Failed to sign in with ${provider}`,
        variant: "destructive",
      });
      return false;
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut();
      toast({
        title: "Success",
        description: "Signed out successfully",
      });
      navigate('/');
      return true;
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to sign out",
        variant: "destructive",
      });
      return false;
    }
  };

  return {
    handleSignUp,
    handleSignIn,
    handleSocialSignIn,
    handleSignOut,
  };
};
