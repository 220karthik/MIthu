
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, Send } from 'lucide-react';

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
    <div className="min-h-screen bg-gradient-to-br from-rose-100 via-pink-50 to-purple-100 py-8 px-4">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-pink-300/20 rounded-full animate-[float_4s_ease-in-out_infinite]" />
        <div className="absolute top-40 right-16 w-16 h-16 bg-purple-300/20 rounded-full animate-[float_4s_ease-in-out_infinite_1s]" />
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-rose-300/20 rounded-full animate-[float_4s_ease-in-out_infinite_2s]" />
        <div className="absolute bottom-20 right-10 w-18 h-18 bg-yellow-300/20 rounded-full animate-[float_4s_ease-in-out_infinite_0.5s]" />
      </div>

      <div className="max-w-2xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-8 animate-fade-in">
          <div className="flex justify-center items-center mb-4">
            <Heart className="w-8 h-8 text-pink-500 mr-2 animate-pulse" />
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              Share Your Wishes
            </h1>
            <Heart className="w-8 h-8 text-pink-500 ml-2 animate-pulse" />
          </div>
          <p className="text-gray-600 text-lg">
            Send your heartfelt birthday wishes to Mithran
          </p>
        </div>

        {/* Form Card */}
        <Card className="shadow-2xl border-0 bg-white/80 backdrop-blur-sm animate-[fade-in_1s_ease-out_0.5s_both]">
          <CardHeader className="text-center pb-6">
            <CardTitle className="text-2xl text-gray-800">
              Your Birthday Message
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div className="space-y-2">
                <Label htmlFor="name" className="text-gray-700 font-medium">
                  Your Name *
                </Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your name"
                  required
                  className="border-2 border-pink-200 focus:border-pink-400 transition-colors duration-300"
                />
              </div>

              {/* Place Field */}
              <div className="space-y-2">
                <Label htmlFor="place" className="text-gray-700 font-medium">
                  Your Place
                </Label>
                <Input
                  id="place"
                  name="place"
                  value={formData.place}
                  onChange={handleInputChange}
                  placeholder="Enter your location"
                  className="border-2 border-pink-200 focus:border-pink-400 transition-colors duration-300"
                />
              </div>

              {/* Relation Field */}
              <div className="space-y-2">
                <Label htmlFor="relation" className="text-gray-700 font-medium">
                  Your Relation
                </Label>
                <Input
                  id="relation"
                  name="relation"
                  value={formData.relation}
                  onChange={handleInputChange}
                  placeholder="Friend, Family, Colleague, etc."
                  className="border-2 border-pink-200 focus:border-pink-400 transition-colors duration-300"
                />
              </div>

              {/* Phone Field */}
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-gray-700 font-medium">
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Enter your phone number"
                  className="border-2 border-pink-200 focus:border-pink-400 transition-colors duration-300"
                />
              </div>

              {/* Wishes Field */}
              <div className="space-y-2">
                <Label htmlFor="wishes" className="text-gray-700 font-medium">
                  Your Birthday Wishes *
                </Label>
                <Textarea
                  id="wishes"
                  name="wishes"
                  value={formData.wishes}
                  onChange={handleInputChange}
                  placeholder="Write your heartfelt birthday wishes for Mithran..."
                  rows={5}
                  required
                  className="border-2 border-pink-200 focus:border-pink-400 transition-colors duration-300 resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white py-3 text-lg font-semibold shadow-lg transform hover:scale-105 transition-all duration-300"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Birthday Wishes
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Decorative Elements */}
        <div className="text-center mt-8 animate-[fade-in_1s_ease-out_1s_both]">
          <p className="text-gray-500 text-sm">
            Your wishes will make Mithran's birthday extra special! 🎉
          </p>
        </div>
      </div>
    </div>
  );
};

export default WishesPage;
