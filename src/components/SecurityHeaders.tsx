// Security headers component for CSP and other security measures
import { useEffect } from 'react';

const SecurityHeaders = () => {
  useEffect(() => {
    // Add meta tags for security
    const metaTags = [
      { name: 'X-Content-Type-Options', content: 'nosniff' },
      { name: 'X-Frame-Options', content: 'DENY' },
      { name: 'X-XSS-Protection', content: '1; mode=block' },
      { name: 'Referrer-Policy', content: 'strict-origin-when-cross-origin' },
      { name: 'Permissions-Policy', content: 'camera=(), microphone=(), geolocation=()' }
    ];

    metaTags.forEach(({ name, content }) => {
      const existing = document.querySelector(`meta[name="${name}"]`);
      if (!existing) {
        const meta = document.createElement('meta');
        meta.name = name;
        meta.content = content;
        document.head.appendChild(meta);
      }
    });

    // Add CSP meta tag (basic content security policy)
    const cspMeta = document.querySelector('meta[http-equiv="Content-Security-Policy"]');
    if (!cspMeta) {
      const meta = document.createElement('meta');
      meta.setAttribute('http-equiv', 'Content-Security-Policy');
      meta.content = `
        default-src 'self';
        script-src 'self' 'unsafe-inline' https://api.mapbox.com;
        style-src 'self' 'unsafe-inline' https://api.mapbox.com;
        img-src 'self' data: https: blob:;
        connect-src 'self' https://api.mapbox.com https://events.mapbox.com;
        font-src 'self' data: https:;
        worker-src 'self' blob:;
        child-src 'self' blob:;
        frame-ancestors 'none';
        base-uri 'self';
        form-action 'self';
      `.replace(/\s+/g, ' ').trim();
      document.head.appendChild(meta);
    }
  }, []);

  return null;
};

export default SecurityHeaders;