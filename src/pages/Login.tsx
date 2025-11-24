import { Shell } from '@/components/layout/Shell';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Building2 } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login, isAdmin } from '@/services/auth';
import { useToast } from '@/hooks/use-toast';

const Login = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const result = await login(email, password);
      
      if (result.success) {
        toast({
          title: "Welcome back!",
          description: "Login successful.",
        });
        
        // Redirect based on role
        if (isAdmin()) {
          navigate('/admin');
        } else {
          navigate('/portal/dashboard');
        }
      } else {
        toast({
          title: "Login failed",
          description: result.error || "Invalid credentials",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An unexpected error occurred",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Shell hideFooter>
      <section className="min-h-[calc(100vh-80px)] flex items-center justify-center py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <Card className="max-w-md mx-auto p-8">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-4">
                <Building2 className="h-8 w-8 text-accent" />
              </div>
              <h1 className="text-3xl font-bold mb-2">Client Portal Login</h1>
              <p className="text-muted-foreground">
                Access your project dashboard and documents
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your.email@example.com"
                  disabled={loading}
                />
              </div>

              <div>
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  disabled={loading}
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                disabled={loading}
              >
                {loading ? 'Signing in...' : 'Sign In'}
              </Button>
            </form>

            <div className="mt-6 pt-6 border-t border-border">
              <div className="text-sm text-muted-foreground text-center space-y-2">
                <p className="font-medium">Demo Credentials:</p>
                <div className="bg-muted/50 rounded p-3 text-left space-y-1">
                  <p><strong>Client:</strong> james@email.com / demo123</p>
                  <p><strong>Admin:</strong> admin@houinc.com / admin123</p>
                </div>
              </div>
            </div>

            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                Need help accessing your account?{' '}
                <a href="mailto:info@houinc.com" className="text-accent hover:underline">
                  Contact Support
                </a>
              </p>
            </div>
          </Card>
        </div>
      </section>
    </Shell>
  );
};

export default Login;