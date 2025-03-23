
import { supabase } from '@/lib/supabase';
import type { Tables } from '@/lib/supabase';

export type GeneratedDoc = Omit<Tables['generated_docs'], 'created_at'>;

export const getGeneratedDocs = async (): Promise<GeneratedDoc[]> => {
  try {
    const { data: user } = await supabase.auth.getUser();
    
    if (!user.user) {
      return [];
    }
    
    const { data, error } = await supabase
      .from('generated_docs')
      .select('*')
      .eq('user_id', user.user.id)
      .order('created_at', { ascending: false });
    
    if (error) throw error;
    
    return data as GeneratedDoc[];
  } catch (error) {
    console.error('Error fetching generated docs:', error);
    throw error;
  }
};

export const getGeneratedDoc = async (id: string): Promise<GeneratedDoc | null> => {
  try {
    const { data: user } = await supabase.auth.getUser();
    
    if (!user.user) {
      return null;
    }
    
    const { data, error } = await supabase
      .from('generated_docs')
      .select('*')
      .eq('id', id)
      .eq('user_id', user.user.id)
      .single();
    
    if (error) throw error;
    
    return data as GeneratedDoc;
  } catch (error) {
    console.error('Error fetching generated doc:', error);
    throw error;
  }
};

export const createGeneratedDoc = async (doc: Omit<GeneratedDoc, 'id' | 'user_id'>): Promise<GeneratedDoc> => {
  try {
    const { data: user } = await supabase.auth.getUser();
    
    if (!user.user) {
      throw new Error('User not authenticated');
    }
    
    const newDoc = {
      user_id: user.user.id,
      ...doc,
    };
    
    const { data, error } = await supabase
      .from('generated_docs')
      .insert(newDoc)
      .select()
      .single();
    
    if (error) throw error;
    
    return data as GeneratedDoc;
  } catch (error) {
    console.error('Error creating generated doc:', error);
    throw error;
  }
};

export const deleteGeneratedDoc = async (id: string): Promise<void> => {
  try {
    const { data: user } = await supabase.auth.getUser();
    
    if (!user.user) {
      throw new Error('User not authenticated');
    }
    
    const { error } = await supabase
      .from('generated_docs')
      .delete()
      .eq('id', id)
      .eq('user_id', user.user.id);
    
    if (error) throw error;
  } catch (error) {
    console.error('Error deleting generated doc:', error);
    throw error;
  }
};
