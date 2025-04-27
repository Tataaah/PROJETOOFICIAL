import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonialImages = [
    {
      src: "https://i.im.ge/2025/04/20/vuiFbf.IMG-5417.jpeg",
      alt: "Depoimento 1"
    },
    {
      src: "https://i.im.ge/2025/04/20/vuiXZp.IMG-5416.jpeg",
      alt: "Depoimento 2"
    },
    {
      src: "https://i.im.ge/2025/04/20/vuirXP.IMG-5413.jpeg",
      alt: "Depoimento 3"
    },
    {
      src: "https://i.im.ge/2025/04/20/vuiowq.IMG-5414.jpeg",
      alt: "Depoimento 4"
    },
    {
      src: "https://i.im.ge/2025/04/20/vuiMH4.IMG-5415.jpeg",
      alt: "Depoimento 5"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollToTestimonial = (index: number) => {
    if (scrollRef.current) {
      const scrollPosition = index * scrollRef.current.offsetWidth;
      scrollRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
      setCurrentIndex(index);
    }
  };

  const nextTestimonial = () => {
    const newIndex = (currentIndex + 1) % testimonialImages.length;
    scrollToTestimonial(newIndex);
  };

  const prevTestimonial = () => {
    const newIndex = (currentIndex - 1 + testimonialImages.length) % testimonialImages.length;
    scrollToTestimonial(newIndex);
  };

  return (
    <div className="max-w-5xl mx-auto px-4">
      <div className="relative">
        <div 
          ref={scrollRef}
          className="flex overflow-x-scroll snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {testimonialImages.map((image, index) => (
            <div key={index} className="min-w-full snap-center flex justify-center">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-lg">
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-6 space-x-4">
          <button 
            onClick={prevTestimonial}
            className="p-2 rounded-full bg-pink-500 text-white hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-400"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={nextTestimonial}
            className="p-2 rounded-full bg-pink-500 text-white hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-400"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
        
        <div className="flex justify-center mt-4">
          {testimonialImages.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToTestimonial(index)}
              className={`w-3 h-3 mx-1 rounded-full ${
                currentIndex === index ? 'bg-pink-500' : 'bg-gray-300'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;