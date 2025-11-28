import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://bdxkhfrgtelllybbggtd.supabase.co";  // replace this
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJkeGtoZnJndGVsbGx5YmJnZ3RkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQzNTkwNDMsImV4cCI6MjA3OTkzNTA0M30.aFFJoJv9k9gdG4RF4yUE8p6oUlzxv_goJlYXMOGKuE4";                        // replace this

export const supabase = createClient(supabaseUrl, supabaseKey);
