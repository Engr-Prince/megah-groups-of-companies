-- Create partnership_inquiries table
CREATE TABLE public.partnership_inquiries (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  organization TEXT,
  support_type TEXT NOT NULL,
  message TEXT NOT NULL,
  status TEXT DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'completed')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL
);

-- Enable RLS (public can insert, only admins can view)
ALTER TABLE public.partnership_inquiries ENABLE ROW LEVEL SECURITY;

-- Policy: Anyone can submit partnership inquiries
CREATE POLICY "Anyone can submit partnership inquiries"
ON public.partnership_inquiries
FOR INSERT
TO anon
WITH CHECK (true);

-- Create index for faster queries
CREATE INDEX idx_partnership_inquiries_created_at ON public.partnership_inquiries(created_at DESC);
CREATE INDEX idx_partnership_inquiries_status ON public.partnership_inquiries(status);