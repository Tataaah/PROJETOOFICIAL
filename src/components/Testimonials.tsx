import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonialImages = [
  "https://i.im.ge/2025/04/20/vuiFbf.IMG-5417.th.jpeg",
  "https://i.im.ge/2025/04/20/vuiXZp.IMG-5416.th.jpeg",
  "https://i.im.ge/2025/04/20/vuirXP.IMG-5413.th.jpeg", 
  "https://i.im.ge/2025/04/20/vuiowq.IMG-5414.th.jpeg",
  "https://i.im.ge/2025/04/20/vuiMH4.IMG-5415.th.jpeg"
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonialRef = useRef<HTMLDivElement>(null);

  const scrollToTestimonial = (index: number) => {
    if (index < 0) {
      setCurrentIndex(testimonialImages.length - 1);
    } else if (index >= testimonialImages.length) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(index);
    }
  };

  return (
    <div className="py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
        O QUE NOSSAS CLIENTES ESTÃO FALANDO SOBRE OS RECHEIOS
      </h2>
      
      <div className="relative max-w-2xl mx-auto">
        <button 
          onClick={() => scrollToTestimonial(currentIndex - 1)}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-70 rounded-full p-2 shadow-md hover:bg-opacity-100 transition-all duration-300"
          aria-label="Previous testimonial"
        >
          <ChevronLeft size={24} />
        </button>
        
        <div 
          ref={testimonialRef}
          className="relative overflow-hidden rounded-lg shadow-lg"
        >
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonialImages.map((src, index) => (
              <div key={index} className="min-w-full">
                <img 
                  src={src} 
                  alt={`Depoimento de cliente ${index + 1}`} 
                  className="w-full h-auto"
                />
              </div>
            ))}
          </div>
          
          <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
            {testimonialImages.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToTestimonial(index)}
                className={`w-3 h-3 rounded-full ${
                  currentIndex === index ? 'bg-pink-600' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
        <button 
          onClick={() => scrollToTestimonial(currentIndex + 1)}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-70 rounded-full p-2 shadow-md hover:bg-opacity-100 transition-all duration-300"
          aria-label="Next testimonial"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default Testimonials;