
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Send, Heart } from 'lucide-react';

const WishesPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    place: '',
    relation: '',
    phone: '',
    wishes: ''
  });
  const [animatedElements, setAnimatedElements] = useState({
    header: false,
    form: false,
    fields: false
  });
  const navigate = useNavigate();

  useEffect(() => {
    const timers = [
      setTimeout(() => setAnimatedElements(prev => ({ ...prev, header: true })), 300),
      setTimeout(() => setAnimatedElements(prev => ({ ...prev, form: true })), 800),
      setTimeout(() => setAnimatedElements(prev => ({ ...prev, fields: true })), 1200)
    ];

    return () => timers.forEach(clearTimeout);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Wishes submitted:', formData);
    navigate('/thankyou');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-neutral-100 to-slate-100 py-16 px-4 relative overflow-hidden">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(0,0,0,0.02)_0%,transparent_50%)] animate-[pulse_8s_ease-in-out_infinite]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(0,0,0,0.01)_0%,transparent_50%)] animate-[pulse_10s_ease-in-out_infinite_3s]" />
        
        {/* Floating Hearts */}
        <div className="absolute top-20 left-10 opacity-20 animate-[floatHeart_12s_ease-in-out_infinite]">
          <Heart className="w-4 h-4 text-gray-400" />
        </div>
        <div className="absolute top-40 right-20 opacity-15 animate-[floatHeart_15s_ease-in-out_infinite_4s]">
          <Heart className="w-3 h-3 text-gray-300" />
        </div>
        <div className="absolute bottom-32 left-20 opacity-25 animate-[floatHeart_10s_ease-in-out_infinite_2s]">
          <Heart className="w-5 h-5 text-gray-400" />
        </div>
      </div>

      <div className="max-w-2xl mx-auto relative z-10">
        {/* Enhanced Header with Staggered Animation */}
        <div className="text-center mb-12">
          <h1 className={`text-5xl md:text-6xl font-light text-gray-800 mb-6 transition-all duration-1000 ${
            animatedElements.header 
              ? 'opacity-100 transform translate-y-0 scale-100' 
              : 'opacity-0 transform translate-y-8 scale-95'
          }`}>
            Your Message
          </h1>
          <div className={`w-24 h-0.5 bg-gradient-to-r from-transparent via-gray-400 to-transparent mx-auto mb-6 transition-all duration-1000 delay-300 ${
            animatedElements.header 
              ? 'opacity-100 scale-x-100' 
              : 'opacity-0 scale-x-0'
          }`} />
          <p className={`text-gray-600 text-lg font-light max-w-md mx-auto leading-relaxed transition-all duration-1000 delay-500 ${
            animatedElements.header 
              ? 'opacity-100 transform translate-y-0' 
              : 'opacity-0 transform translate-y-4'
          }`}>
            Share your heartfelt birthday wishes for Mithran
          </p>
        </div>

        {/* Enhanced Form Card */}
        <Card className={`shadow-2xl border-0 bg-white/90 backdrop-blur-sm transition-all duration-1000 delay-200 ${
          animatedElements.form 
            ? 'opacity-100 transform translate-y-0 scale-100' 
            : 'opacity-0 transform translate-y-8 scale-95'
        }`}>
          <CardHeader className="text-center pb-8">
            <CardTitle className="text-2xl font-light text-gray-800 flex items-center justify-center gap-3">
              <Heart className="w-6 h-6 text-pink-400 animate-pulse" />
              Send Your Wishes
              <Heart className="w-6 h-6 text-pink-400 animate-pulse" />
            </CardTitle>
          </CardHeader>
          <CardContent className="px-8 pb-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Enhanced Form Fields with Individual Animations */}
              <div className={`space-y-3 transition-all duration-700 delay-300 ${
                animatedElements.fields 
                  ? 'opacity-100 transform translate-x-0' 
                  : 'opacity-0 transform translate-x-4'
              }`}>
                <Label htmlFor="name" className="text-gray-700 font-light text-base flex items-center gap-2">
                  Name *
                  <span className="text-pink-400">♥</span>
                </Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your name"
                  required
                  className="border-0 border-b-2 border-gray-200 focus:border-pink-300 rounded-none bg-transparent px-0 py-3 text-base font-light focus-visible:ring-0 focus-visible:ring-offset-0 transition-all duration-300"
                />
              </div>

              <div className={`space-y-3 transition-all duration-700 delay-500 ${
                animatedElements.fields 
                  ? 'opacity-100 transform translate-x-0' 
                  : 'opacity-0 transform translate-x-4'
              }`}>
                <Label htmlFor="place" className="text-gray-700 font-light text-base">
                  Location
                </Label>
                <Input
                  id="place"
                  name="place"
                  value={formData.place}
                  onChange={handleInputChange}
                  placeholder="Your location"
                  className="border-0 border-b-2 border-gray-200 focus:border-pink-300 rounded-none bg-transparent px-0 py-3 text-base font-light focus-visible:ring-0 focus-visible:ring-offset-0 transition-all duration-300"
                />
              </div>

              <div className={`space-y-3 transition-all duration-700 delay-700 ${
                animatedElements.fields 
                  ? 'opacity-100 transform translate-x-0' 
                  : 'opacity-0 transform translate-x-4'
              }`}>
                <Label htmlFor="relation" className="text-gray-700 font-light text-base">
                  Relationship
                </Label>
                <Input
                  id="relation"
                  name="relation"
                  value={formData.relation}
                  onChange={handleInputChange}
                  placeholder="Friend, Family, Colleague..."
                  className="border-0 border-b-2 border-gray-200 focus:border-pink-300 rounded-none bg-transparent px-0 py-3 text-base font-light focus-visible:ring-0 focus-visible:ring-offset-0 transition-all duration-300"
                />
              </div>

              <div className={`space-y-3 transition-all duration-700 delay-900 ${
                animatedElements.fields 
                  ? 'opacity-100 transform translate-x-0' 
                  : 'opacity-0 transform translate-x-4'
              }`}>
                <Label htmlFor="phone" className="text-gray-700 font-light text-base">
                  Phone
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Your phone number"
                  className="border-0 border-b-2 border-gray-200 focus:border-pink-300 rounded-none bg-transparent px-0 py-3 text-base font-light focus-visible:ring-0 focus-visible:ring-offset-0 transition-all duration-300"
                />
              </div>

              <div className={`space-y-3 transition-all duration-700 delay-1100 ${
                animatedElements.fields 
                  ? 'opacity-100 transform translate-x-0' 
                  : 'opacity-0 transform translate-x-4'
              }`}>
                <Label htmlFor="wishes" className="text-gray-700 font-light text-base flex items-center gap-2">
                  Your Message *
                  <span className="text-pink-400">♥</span>
                </Label>
                <Textarea
                  id="wishes"
                  name="wishes"
                  value={formData.wishes}
                  onChange={handleInputChange}
                  placeholder="Write your heartfelt birthday wishes..."
                  rows={6}
                  required
                  className="border-2 border-gray-200 focus:border-pink-300 rounded-lg bg-transparent px-4 py-3 text-base font-light resize-none focus-visible:ring-0 focus-visible:ring-offset-0 transition-all duration-300"
                />
              </div>

              {/* Enhanced Submit Button */}
              <div className={`pt-6 transition-all duration-700 delay-1300 ${
                animatedElements.fields 
                  ? 'opacity-100 transform translate-y-0' 
                  : 'opacity-0 transform translate-y-4'
              }`}>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-800 hover:to-black text-white py-4 text-base font-light rounded-full shadow-xl transform hover:scale-105 transition-all duration-500 hover:shadow-2xl animate-[glow_3s_ease-in-out_infinite_alternate]"
                >
                  <Send className="w-4 h-4 mr-3 animate-pulse" />
                  Send Message
                  <Heart className="w-4 h-4 ml-3 text-pink-300 animate-pulse" />
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Enhanced Footer Note */}
        <div className={`text-center mt-8 transition-all duration-1000 delay-1500 ${
          animatedElements.fields 
            ? 'opacity-100 transform translate-y-0' 
            : 'opacity-0 transform translate-y-4'
        }`}>
          <p className="text-gray-500 text-sm font-light animate-pulse">
            Your message will make this celebration even more special ✨
          </p>
        </div>
      </div>
    </div>
  );
};

export default WishesPage;
