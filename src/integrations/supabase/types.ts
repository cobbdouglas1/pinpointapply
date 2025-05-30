export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      career_profiles: {
        Row: {
          awards: Json | null
          career_objective: string | null
          certifications: Json | null
          created_at: string
          education: Json
          extras: Json | null
          id: string
          languages: Json
          projects: Json | null
          skills_hard: Json
          skills_soft: Json
          user_id: string
          volunteering: Json | null
          work_experience: Json
        }
        Insert: {
          awards?: Json | null
          career_objective?: string | null
          certifications?: Json | null
          created_at?: string
          education?: Json
          extras?: Json | null
          id?: string
          languages?: Json
          projects?: Json | null
          skills_hard?: Json
          skills_soft?: Json
          user_id: string
          volunteering?: Json | null
          work_experience?: Json
        }
        Update: {
          awards?: Json | null
          career_objective?: string | null
          certifications?: Json | null
          created_at?: string
          education?: Json
          extras?: Json | null
          id?: string
          languages?: Json
          projects?: Json | null
          skills_hard?: Json
          skills_soft?: Json
          user_id?: string
          volunteering?: Json | null
          work_experience?: Json
        }
        Relationships: [
          {
            foreignKeyName: "career_profiles_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      generated_docs: {
        Row: {
          additional_notes: string | null
          company_info: string | null
          created_at: string
          doc_type: string
          final_doc_url: string
          id: string
          personal_touch: string | null
          template_used: string
          user_id: string
          value_proposition: string | null
        }
        Insert: {
          additional_notes?: string | null
          company_info?: string | null
          created_at?: string
          doc_type: string
          final_doc_url: string
          id?: string
          personal_touch?: string | null
          template_used: string
          user_id: string
          value_proposition?: string | null
        }
        Update: {
          additional_notes?: string | null
          company_info?: string | null
          created_at?: string
          doc_type?: string
          final_doc_url?: string
          id?: string
          personal_touch?: string | null
          template_used?: string
          user_id?: string
          value_proposition?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "generated_docs_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      users: {
        Row: {
          created_at: string
          email: string
          full_name: string
          github_url: string | null
          id: string
          linkedin_url: string | null
          location_city: string
          location_country: string
          phone: string
          professional_headline: string | null
        }
        Insert: {
          created_at?: string
          email: string
          full_name: string
          github_url?: string | null
          id: string
          linkedin_url?: string | null
          location_city: string
          location_country: string
          phone: string
          professional_headline?: string | null
        }
        Update: {
          created_at?: string
          email?: string
          full_name?: string
          github_url?: string | null
          id?: string
          linkedin_url?: string | null
          location_city?: string
          location_country?: string
          phone?: string
          professional_headline?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
