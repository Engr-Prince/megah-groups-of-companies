import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Lock, User, Shield } from "lucide-react";

const Admin = () => {
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
              <form className="space-y-6">
                <div>
                  <Label htmlFor="username" className="flex items-center space-x-2">
                    <User className="h-4 w-4" />
                    <span>Username</span>
                  </Label>
                  <Input 
                    id="username" 
                    type="text" 
                    placeholder="Enter your username"
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor="password" className="flex items-center space-x-2">
                    <Lock className="h-4 w-4" />
                    <span>Password</span>
                  </Label>
                  <Input 
                    id="password" 
                    type="password" 
                    placeholder="Enter your password"
                    className="mt-1"
                  />
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
                
                <Button type="submit" className="w-full megah-btn-primary py-3">
                  Sign In
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