import React from 'react';

const Gallery: React.FC = () => {
  const images = [
    {
      src: "https://i.im.ge/2025/04/20/vrNEdh.download-4.jpeg",
      alt: "Receita 1"
    },
    {
      src: "https://i.im.ge/2025/04/20/vrNtI9.download-3.jpeg",
      alt: "Receita 2"
    },
    {
      src: "https://i.im.ge/2025/04/20/vrNAJ8.download.jpeg",
      alt: "Receita 3"
    },
    {
      src: "https://i.im.ge/2025/04/20/vrNyxX.recipeshub24-recipeshub24-on-Threads.jpeg",
      alt: "Receita 4"
    },
    {
      src: "https://i.im.ge/2025/04/20/vrN3fY.Como-fazer-ovos-de-Pascoa-na-Colher-receita-facil.jpeg",
      alt: "Ovos de Páscoa na Colher"
    },
    {
      src: "https://i.im.ge/2025/04/20/vrNxPM.brigadeiro-.jpeg",
      alt: "Brigadeiro"
    }
  ];

  return (
    <section className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10 text-pink-900">
          <span className="relative inline-block">
            APRENDA A FAZER DIVERSOS TIPOS DE RECEITAS COMO ESTAS:
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-pink-300 to-yellow-400"></span>
          </span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-64 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;