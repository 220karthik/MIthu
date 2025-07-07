
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Send } from 'lucide-react';

const WishesPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    place: '',
    relation: '',
    phone: '',
    wishes: ''
  });
  const navigate = useNavigate();

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
    <div className="min-h-screen bg-gradient-to-br from-stone-50 to-neutral-100 py-16 px-4">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.01)_0%,transparent_50%)]" />
      </div>

      <div className="max-w-2xl mx-auto relative z-10">
        {/* Elegant Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-light text-gray-800 mb-6">
            Your Message
          </h1>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-gray-400 to-transparent mx-auto mb-6" />
          <p className="text-gray-600 text-lg font-light max-w-md mx-auto leading-relaxed">
            Share your heartfelt birthday wishes for Mithran
          </p>
        </div>

        {/* Modern Form Card */}
        <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm animate-[fade-in_1s_ease-out_0.5s_both]">
          <CardHeader className="text-center pb-8">
            <CardTitle className="text-2xl font-light text-gray-800">
              Send Your Wishes
            </CardTitle>
          </CardHeader>
          <CardContent className="px-8 pb-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Name Field */}
              <div className="space-y-3">
                <Label htmlFor="name" className="text-gray-700 font-light text-base">
                  Name *
                </Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your name"
                  required
                  className="border-0 border-b-2 border-gray-200 focus:border-gray-400 rounded-none bg-transparent px-0 py-3 text-base font-light focus-visible:ring-0 focus-visible:ring-offset-0"
                />
              </div>

              {/* Place Field */}
              <div className="space-y-3">
                <Label htmlFor="place" className="text-gray-700 font-light text-base">
                  Location
                </Label>
                <Input
                  id="place"
                  name="place"
                  value={formData.place}
                  onChange={handleInputChange}
                  placeholder="Your location"
                  className="border-0 border-b-2 border-gray-200 focus:border-gray-400 rounded-none bg-transparent px-0 py-3 text-base font-light focus-visible:ring-0 focus-visible:ring-offset-0"
                />
              </div>

              {/* Relation Field */}
              <div className="space-y-3">
                <Label htmlFor="relation" className="text-gray-700 font-light text-base">
                  Relationship
                </Label>
                <Input
                  id="relation"
                  name="relation"
                  value={formData.relation}
                  onChange={handleInputChange}
                  placeholder="Friend, Family, Colleague..."
                  className="border-0 border-b-2 border-gray-200 focus:border-gray-400 rounded-none bg-transparent px-0 py-3 text-base font-light focus-visible:ring-0 focus-visible:ring-offset-0"
                />
              </div>

              {/* Phone Field */}
              <div className="space-y-3">
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
                  className="border-0 border-b-2 border-gray-200 focus:border-gray-400 rounded-none bg-transparent px-0 py-3 text-base font-light focus-visible:ring-0 focus-visible:ring-offset-0"
                />
              </div>

              {/* Wishes Field */}
              <div className="space-y-3">
                <Label htmlFor="wishes" className="text-gray-700 font-light text-base">
                  Your Message *
                </Label>
                <Textarea
                  id="wishes"
                  name="wishes"
                  value={formData.wishes}
                  onChange={handleInputChange}
                  placeholder="Write your heartfelt birthday wishes..."
                  rows={6}
                  required
                  className="border-2 border-gray-200 focus:border-gray-400 rounded-lg bg-transparent px-4 py-3 text-base font-light resize-none focus-visible:ring-0 focus-visible:ring-offset-0"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <Button
                  type="submit"
                  className="w-full bg-gray-800 hover:bg-gray-900 text-white py-4 text-base font-light rounded-full shadow-lg transform hover:scale-[1.02] transition-all duration-300"
                >
                  <Send className="w-4 h-4 mr-3" />
                  Send Message
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Footer Note */}
        <div className="text-center mt-8 animate-[fade-in_1s_ease-out_1s_both]">
          <p className="text-gray-500 text-sm font-light">
            Your message will make this celebration even more special
          </p>
        </div>
      </div>
    </div>
  );
};

export default WishesPage;
