// Security utilities for input validation and sanitization

export interface ValidationResult {
  isValid: boolean;
  errors: string[];
}

// Input sanitization
export const sanitizeInput = (input: string): string => {
  if (!input) return '';
  
  return input
    .replace(/[<>]/g, '') // Remove potential HTML tags
    .replace(/javascript:/gi, '') // Remove javascript: URLs
    .replace(/on\w+=/gi, '') // Remove event handlers
    .trim();
};

// Email validation
export const validateEmail = (email: string): ValidationResult => {
  const errors: string[] = [];
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  if (!email) {
    errors.push('Email is required');
  } else if (!emailRegex.test(email)) {
    errors.push('Please enter a valid email address');
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
};

// Phone validation
export const validatePhone = (phone: string): ValidationResult => {
  const errors: string[] = [];
  const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
  
  if (phone && !phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''))) {
    errors.push('Please enter a valid phone number');
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
};

// Name validation
export const validateName = (name: string, fieldName: string): ValidationResult => {
  const errors: string[] = [];
  const nameRegex = /^[a-zA-ZÀ-ÿ\s\-\'\.]{2,50}$/;
  
  if (!name) {
    errors.push(`${fieldName} is required`);
  } else if (!nameRegex.test(name)) {
    errors.push(`${fieldName} must contain only letters, spaces, hyphens, and apostrophes (2-50 characters)`);
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
};

// Message validation
export const validateMessage = (message: string): ValidationResult => {
  const errors: string[] = [];
  
  if (!message) {
    errors.push('Message is required');
  } else if (message.length < 10) {
    errors.push('Message must be at least 10 characters long');
  } else if (message.length > 2000) {
    errors.push('Message must be less than 2000 characters');
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
};

// Mapbox token validation
export const validateMapboxToken = (token: string): ValidationResult => {
  const errors: string[] = [];
  const tokenRegex = /^pk\.[a-zA-Z0-9_\-]{20,}$/;
  
  if (!token) {
    errors.push('Mapbox token is required');
  } else if (!tokenRegex.test(token)) {
    errors.push('Invalid Mapbox token format. Token should start with "pk." followed by at least 20 characters');
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
};

// Admin credentials validation
export const validateAdminCredentials = (username: string, password: string): ValidationResult => {
  const errors: string[] = [];
  
  if (!username) {
    errors.push('Username is required');
  } else if (username.length < 3) {
    errors.push('Username must be at least 3 characters long');
  }
  
  if (!password) {
    errors.push('Password is required');
  } else if (password.length < 8) {
    errors.push('Password must be at least 8 characters long');
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
};

// Rate limiting (client-side)
export class RateLimiter {
  private attempts: Map<string, number[]> = new Map();
  
  canAttempt(key: string, maxAttempts: number = 5, windowMs: number = 300000): boolean {
    const now = Date.now();
    const attempts = this.attempts.get(key) || [];
    
    // Remove old attempts outside the window
    const recentAttempts = attempts.filter(time => now - time < windowMs);
    
    if (recentAttempts.length >= maxAttempts) {
      return false;
    }
    
    recentAttempts.push(now);
    this.attempts.set(key, recentAttempts);
    return true;
  }
}

// Content Security Policy helpers
export const generateNonce = (): string => {
  const array = new Uint8Array(16);
  crypto.getRandomValues(array);
  return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
};

// XSS protection
export const escapeHtml = (text: string): string => {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, char => map[char]);
};