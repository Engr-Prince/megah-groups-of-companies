import { useState } from "react";
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Lock, User, Shield, AlertCircle, Eye, EyeOff } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { validateAdminCredentials, sanitizeInput, RateLimiter } from "@/lib/security";

const Admin = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loginAttempts, setLoginAttempts] = useState(0);
  const rateLimiter = new RateLimiter();

  const handleInputChange = (field: string, value: string) => {
    const sanitizedValue = sanitizeInput(value);
    setFormData(prev => ({ ...prev, [field]: sanitizedValue }));
    
    if (formErrors[field]) {
      setFormErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Rate limiting check
    if (!rateLimiter.canAttempt('admin-login', 3, 900000)) { // 15 minutes
      toast({
        title: "Too many login attempts",
        description: "Please wait 15 minutes before trying again.",
        variant: "destructive",
      });
      return;
    }

    const validation = validateAdminCredentials(formData.username, formData.password);
    
    if (!validation.isValid) {
      const errors: Record<string, string> = {};
      validation.errors.forEach(error => {
        if (error.includes('Username')) {
          errors.username = error;
        } else if (error.includes('Password')) {
          errors.password = error;
        }
      });
      setFormErrors(errors);
      return;
    }

    setIsSubmitting(true);
    setLoginAttempts(prev => prev + 1);
    
    // Simulate authentication check
    setTimeout(() => {
      toast({
        title: "Authentication Required",
        description: "Please connect to Supabase to enable admin authentication.",
        variant: "destructive",
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 megah-hero-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-slide-up">
            Admin <span className="megah-gradient-text bg-gradient-to-r from-megah-yellow to-megah-green bg-clip-text text-transparent">Portal</span>
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Secure access to MEGAH administrative functions
          </p>
        </div>
      </section>

      {/* Login Form */}
      <section className="py-20 bg-background">
        <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-2 border-primary/20">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-2xl megah-gradient-text">Administrator Login</CardTitle>
              <p className="text-muted-foreground">
                Enter your credentials to access the admin panel
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="username" className="flex items-center space-x-2">
                    <User className="h-4 w-4" />
                    <span>Username</span>
                  </Label>
                  <Input 
                    id="username" 
                    type="text" 
                    placeholder="Enter your username"
                    className={`mt-1 ${formErrors.username ? 'border-destructive' : ''}`}
                    value={formData.username}
                    onChange={(e) => handleInputChange('username', e.target.value)}
                    maxLength={50}
                    required
                    autoComplete="username"
                  />
                  {formErrors.username && (
                    <p className="text-sm text-destructive mt-1 flex items-center">
                      <AlertCircle className="h-4 w-4 mr-1" />
                      {formErrors.username}
                    </p>
                  )}
                </div>
                
                <div>
                  <Label htmlFor="password" className="flex items-center space-x-2">
                    <Lock className="h-4 w-4" />
                    <span>Password</span>
                  </Label>
                  <div className="relative">
                    <Input 
                      id="password" 
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      className={`mt-1 pr-10 ${formErrors.password ? 'border-destructive' : ''}`}
                      value={formData.password}
                      onChange={(e) => handleInputChange('password', e.target.value)}
                      maxLength={128}
                      required
                      autoComplete="current-password"
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                  {formErrors.password && (
                    <p className="text-sm text-destructive mt-1 flex items-center">
                      <AlertCircle className="h-4 w-4 mr-1" />
                      {formErrors.password}
                    </p>
                  )}
                </div>
                
                <div className="flex items-center justify-between">
                  <label className="flex items-center space-x-2 text-sm">
                    <input type="checkbox" className="rounded" />
                    <span>Remember me</span>
                  </label>
                  <a href="#" className="text-sm text-primary hover:underline">
                    Forgot password?
                  </a>
                </div>
                
                {loginAttempts > 0 && (
                  <div className="text-sm text-muted-foreground text-center">
                    Login attempts: {loginAttempts}/3
                  </div>
                )}
                
                <Button 
                  type="submit" 
                  className="w-full megah-btn-primary py-3"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Signing In...' : 'Sign In'}
                </Button>
              </form>
            </CardContent>
          </Card>
          
          {/* Security Notice */}
          <div className="mt-8 text-center text-sm text-muted-foreground">
            <p className="flex items-center justify-center space-x-2">
              <Lock className="h-4 w-4" />
              <span>This area is restricted to authorized personnel only</span>
            </p>
            <p className="mt-2">
              All access attempts are logged and monitored for security purposes.
            </p>
          </div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold megah-gradient-text mb-4">Admin Panel Features</h2>
            <p className="text-muted-foreground">
              Comprehensive tools for managing the MEGAH platform
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Analytics Dashboard</h3>
              <p className="text-muted-foreground">
                Track website performance, user engagement, and business metrics
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">👥</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">User Management</h3>
              <p className="text-muted-foreground">
                Manage client accounts, team members, and access permissions
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">📁</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Content Management</h3>
              <p className="text-muted-foreground">
                Update website content, manage projects, and handle inquiries
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Admin;