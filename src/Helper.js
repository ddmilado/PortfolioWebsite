import React from "react";
import { createClient } from '@supabase/supabase-js';


export const supabase = createClient(
  "https://iofovtayiigincwopbjx.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlvZm92dGF5aWlnaW5jd29wYmp4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODg1NjA4NTUsImV4cCI6MjAwNDEzNjg1NX0.J2dhm3kLz6bK8cIy5eLmAJC4AFNArvpC8CT6y-5NpOU", {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});