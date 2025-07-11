import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Switch } from "@/components/ui/switch";
import { 
  ArrowRight, 
  FileText, 
  Search, 
  MessageSquare, 
  Quote,
  Sun,
  Moon,
  Menu,
  X,
  Twitter,
  Github,
  Linkedin,
  Check,
  Upload,
  Zap,
  Shield,
  Globe,
  Clock,
  Users,
  Star
} from "lucide-react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Intersection Observer for scroll animations
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            entry.target.classList.remove('scroll-animate');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    // Observe all elements with scroll-animate class
    const elements = document.querySelectorAll('.scroll-animate');
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="flex items-center space-x-2">
                  <FileText className="h-8 w-8 text-primary" />
                  <span className="font-bold text-xl text-foreground">ChatDocs</span>
                </div>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#home" className="text-foreground hover:text-primary px-3 py-2 text-sm font-medium transition-colors">
                  Home
                </a>
                <a href="#how-it-works" className="text-muted-foreground hover:text-primary px-3 py-2 text-sm font-medium transition-colors">
                  How it Works
                </a>
                <a href="#features" className="text-muted-foreground hover:text-primary px-3 py-2 text-sm font-medium transition-colors">
                  Features
                </a>
                <a href="#pricing" className="text-muted-foreground hover:text-primary px-3 py-2 text-sm font-medium transition-colors">
                  Pricing
                </a>
              </div>
            </div>

            {/* Right side */}
            <div className="hidden md:flex items-center space-x-4">
              {/* Dark mode toggle */}
              <div className="flex items-center space-x-2">
                <Sun className="h-4 w-4" />
                <Switch checked={darkMode} onCheckedChange={toggleDarkMode} />
                <Moon className="h-4 w-4" />
              </div>
              
              <Button variant="ghost" size="sm">
                Sign In
              </Button>
              <Button size="sm" className="bg-primary hover:bg-primary/90">
                <Upload className="mr-2 h-4 w-4" />
                Upload Document
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <div className="px-4 py-4 space-y-4">
            <a 
              href="#home" 
              className="block text-foreground hover:text-primary py-2 text-base font-medium transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </a>
            <a 
              href="#how-it-works" 
              className="block text-muted-foreground hover:text-primary py-2 text-base font-medium transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              How it Works
            </a>
            <a 
              href="#features" 
              className="block text-muted-foreground hover:text-primary py-2 text-base font-medium transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#pricing" 
              className="block text-muted-foreground hover:text-primary py-2 text-base font-medium transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </a>
            
            {/* Mobile Dark Mode Toggle */}
            <div className="flex items-center justify-between py-2">
              <span className="text-muted-foreground text-base font-medium">Dark Mode</span>
              <div className="flex items-center space-x-2">
                <Sun className="h-4 w-4" />
                <Switch checked={darkMode} onCheckedChange={toggleDarkMode} />
                <Moon className="h-4 w-4" />
              </div>
            </div>
            
            {/* Mobile Action Buttons */}
            <div className="pt-4 space-y-3">
              <Button variant="ghost" size="sm" className="w-full justify-start">
                Sign In
              </Button>
              <Button size="sm" className="w-full bg-primary hover:bg-primary/90">
                <Upload className="mr-2 h-4 w-4" />
                Upload Document
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section with Advanced Video Background */}
      <section id="home" className="relative py-20 md:py-32 overflow-hidden">
        {/* Simple Gradient Background */}
        <div className="video-background-hero"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
                Chat with any{" "}
                <span className="gradient-text">
                  Document
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
                Upload your documents and start asking questions instantly. Get summaries, find specific information, and extract insights with AI-powered conversations.
              </p>
            </div>
            
            {/* Upload Area */}
            <div className="max-w-2xl mx-auto">
              <div className="border-2 border-dashed border-primary/30 rounded-2xl p-12 bg-background/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:bg-background/70 group">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto transition-transform group-hover:scale-110">
                    <Upload className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Drop your document here or click to upload</h3>
                    <p className="text-sm text-muted-foreground">Supports PDF, DOC, DOCX files up to 50MB</p>
                  </div>
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    <Upload className="mr-2 h-5 w-5" />
                    Choose Document
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-8 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Free to start</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>No account required</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Instant results</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-muted/20 relative">
        <div className="video-background"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-4 mb-16 scroll-animate">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              How It Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get answers from your documents in three simple steps
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            <div className="text-center space-y-4 scroll-animate">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto relative">
                <Upload className="h-10 w-10 text-primary" />
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                  1
                </div>
              </div>
              <h3 className="text-2xl font-bold text-foreground">Upload Document</h3>
              <p className="text-muted-foreground">
                Simply drag and drop your document or click to upload. We support PDF, DOC, DOCX files up to 50MB.
              </p>
            </div>
            
            <div className="text-center space-y-4 scroll-animate">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto relative">
                <MessageSquare className="h-10 w-10 text-primary" />
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                  2
                </div>
              </div>
              <h3 className="text-2xl font-bold text-foreground">Ask Questions</h3>
              <p className="text-muted-foreground">
                Type your questions in natural language. Ask for summaries, specific details, or explanations.
              </p>
            </div>
            
            <div className="text-center space-y-4 scroll-animate">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto relative">
                <Zap className="h-10 w-10 text-primary" />
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                  3
                </div>
              </div>
              <h3 className="text-2xl font-bold text-foreground">Get Instant Answers</h3>
              <p className="text-muted-foreground">
                Receive accurate answers with page references and citations from your document.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16 scroll-animate">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Why Choose ChatDocs?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Powerful AI technology meets intuitive design
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-0 shadow-lg scroll-animate">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                  <Zap className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">Lightning Fast</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-base">
                  Get instant answers from your documents. Our AI processes files in seconds.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg scroll-animate">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">100% Secure</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-base">
                  Your documents are encrypted and never stored permanently. Complete privacy guaranteed.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg scroll-animate">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                  <Globe className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">Any Language</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-base">
                  Chat with documents in over 95 languages. Get answers in your preferred language.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 scroll-animate">
            <p className="text-muted-foreground font-medium">Trusted by over 1 million users worldwide</p>
            <div className="flex items-center justify-center space-x-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
              ))}
              <span className="ml-2 text-foreground font-semibold">4.8/5 from 50,000+ reviews</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16 scroll-animate">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Simple Pricing
            </h2>
            <p className="text-xl text-muted-foreground">
              Start free, upgrade when you need more
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Free Plan */}
            <Card className="p-8 border shadow-lg scroll-animate">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl font-bold">Free</CardTitle>
                <div className="text-5xl font-bold text-foreground my-6">
                  $0
                  <span className="text-xl font-normal text-muted-foreground">/month</span>
                </div>
                <CardDescription className="text-lg">Perfect for trying out ChatDocs</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-4">
                  <li className="flex items-center space-x-3">
                    <Check className="h-6 w-6 text-green-500" />
                    <span className="text-lg">2 documents per day</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="h-6 w-6 text-green-500" />
                    <span className="text-lg">120 questions per document</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="h-6 w-6 text-green-500" />
                    <span className="text-lg">Up to 10MB file size</span>
                  </li>
                </ul>
                <Button className="w-full" variant="outline" size="lg">
                  Start Free
                </Button>
              </CardContent>
            </Card>

            {/* Pro Plan */}
            <Card className="p-8 border-primary shadow-xl scroll-animate scale-105">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-primary text-primary-foreground px-6 py-2 rounded-full text-sm font-bold">
                  Most Popular
                </span>
              </div>
              <CardHeader className="text-center">
                <CardTitle className="text-3xl font-bold">Pro</CardTitle>
                <div className="text-5xl font-bold text-foreground my-6">
                  $20
                  <span className="text-xl font-normal text-muted-foreground">/month</span>
                </div>
                <CardDescription className="text-lg">For power users and professionals</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-4">
                  <li className="flex items-center space-x-3">
                    <Check className="h-6 w-6 text-green-500" />
                    <span className="text-lg">Unlimited documents</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="h-6 w-6 text-green-500" />
                    <span className="text-lg">Unlimited questions</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="h-6 w-6 text-green-500" />
                    <span className="text-lg">Up to 50MB file size</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="h-6 w-6 text-green-500" />
                    <span className="text-lg">Priority support</span>
                  </li>
                </ul>
                <Button className="w-full bg-primary hover:bg-primary/90" size="lg">
                  Upgrade to Pro
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16 scroll-animate">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Frequently Asked Questions
            </h2>
          </div>
          
          <div className="max-w-3xl mx-auto scroll-animate">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-background rounded-lg px-6 border">
                <AccordionTrigger className="text-left font-semibold text-lg">
                  Is ChatDocs free to use?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">
                  Yes! ChatDocs offers a free plan that allows you to chat with 2 documents per day with up to 120 questions each.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-background rounded-lg px-6 border">
                <AccordionTrigger className="text-left font-semibold text-lg">
                  Is my data safe and private?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">
                  Absolutely. Your documents are securely processed and automatically deleted after your session.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-background rounded-lg px-6 border">
                <AccordionTrigger className="text-left font-semibold text-lg">
                  How accurate are the answers?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">
                  ChatDocs uses advanced AI to provide highly accurate answers with page references.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-background relative overflow-hidden">
        <div className="video-background-hero opacity-30"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-8 max-w-4xl mx-auto scroll-animate">
            <h2 className="text-5xl md:text-6xl font-bold text-foreground">
              Ready to chat with your{" "}
              <span className="gradient-text">Documents?</span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground">
              Join over 1 million users who are already getting instant answers from their documents.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-4">
                <Upload className="mr-2 h-5 w-5" />
                Upload Your First Document
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                Try Demo Document
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <FileText className="h-8 w-8 text-primary" />
                <span className="font-bold text-xl">ChatDocs</span>
              </div>
              <p className="text-gray-300 max-w-xs">
                Transform your documents into interactive conversations with AI-powered precision.
              </p>
              <div className="flex space-x-4">
                <Twitter className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                <Github className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                <Linkedin className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-4">Product</h3>
              <ul className="space-y-3 text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">How it Works</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-4">Company</h3>
              <ul className="space-y-3 text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-4">Support</h3>
              <ul className="space-y-3 text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ChatDocs. All rights reserved. Made with ❤️ for document lovers.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
