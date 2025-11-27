-- Allow admins to delete contact inquiries
CREATE POLICY "Admins can delete contact inquiries"
ON public.contact_inquiries
FOR DELETE
USING (has_role(auth.uid(), 'admin'::app_role));

-- Allow admins to delete partnership inquiries
CREATE POLICY "Admins can delete partnership inquiries"
ON public.partnership_inquiries
FOR DELETE
USING (has_role(auth.uid(), 'admin'::app_role));