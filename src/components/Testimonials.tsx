import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      image: "https://i.im.ge/2025/04/20/vuiFbf.IMG-5417.th.jpeg",
      alt: "Depoimento 1"
    },
    {
      id: 2,
      image: "https://i.im.ge/2025/04/20/vuiXZp.IMG-5416.th.jpeg",
      alt: "Depoimento 2"
    },
    {
      id: 3,
      image: "https://i.im.ge/2025/04/20/vuirXP.IMG-5413.th.jpeg",
      alt: "Depoimento 3"
    },
    {
      id: 4,
      image: "https://i.im.ge/2025/04/20/vuiowq.IMG-5414.th.jpeg",
      alt: "Depoimento 4"
    },
    {
      id: 5,
      image: "https://i.im.ge/2025/04/20/vuiMH4.IMG-5415.th.jpeg",
      alt: "Depoimento 5"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (containerRef.current) {
      const container = containerRef.current;
      const scrollAmount = direction === 'left' ? -300 : 300;
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      
      if (direction === 'left' && currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      } else if (direction === 'right' && currentIndex < testimonials.length - 1) {
        setCurrentIndex(currentIndex + 1);
      }
    }
  };

  return (
    <section className="py-12 px-4 bg-[#FFF4E6]">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold font-serif text-center mb-8 text-[#4C1C24]">
          O QUE NOSSOS CLIENTES ESTÃO FALANDO SOBRE OS RECHEIOS
        </h2>
        
        <div className="relative">
          <button 
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-[#4C1C24] p-2 rounded-full shadow-lg transition-all duration-300"
            onClick={() => scroll('left')}
            aria-label="Anterior"
          >
            <ChevronLeft size={24} />
          </button>
          
          <div 
            ref={containerRef}
            className="flex overflow-x-auto hide-scrollbar snap-x snap-mandatory gap-4 py-4 px-10"
          >
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id}
                className="flex-none snap-center bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:scale-105"
              >
                <img 
                  src={testimonial.image} 
                  alt={testimonial.alt} 
                  className="w-full h-auto"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
          
          <button 
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-[#4C1C24] p-2 rounded-full shadow-lg transition-all duration-300"
            onClick={() => scroll('right')}
            aria-label="Próximo"
          >
            <ChevronRight size={24} />
          </button>
        </div>
        
        <div className="flex justify-center mt-6 gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-[#4C1C24]' : 'bg-[#4C1C24]/30'
              }`}
              onClick={() => {
                setCurrentIndex(index);
                if (containerRef.current) {
                  containerRef.current.scrollTo({
                    left: index * 280,
                    behavior: 'smooth'
                  });
                }
              }}
              aria-label={`Ver depoimento ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};