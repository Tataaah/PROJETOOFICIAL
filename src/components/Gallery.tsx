import React from 'react';

export const Gallery = () => {
  const images = [
    {
      url: "https://i.im.ge/2025/04/20/vrNEdh.download-4.jpeg",
      alt: "Sobremesa de Chocolate"
    },
    {
      url: "https://i.im.ge/2025/04/20/vrNtI9.download-3.jpeg",
      alt: "Bolo Decorado"
    },
    {
      url: "https://i.im.ge/2025/04/20/vrNAJ8.download.jpeg",
      alt: "Bolo de Festa"
    },
    {
      url: "https://i.im.ge/2025/04/20/vrNyxX.recipeshub24-recipeshub24-on-Threads.jpeg",
      alt: "Doces Gourmet"
    },
    {
      url: "https://i.im.ge/2025/04/20/vrN3fY.Como-fazer-ovos-de-Pascoa-na-Colher-receita-facil.jpeg",
      alt: "Ovos de Páscoa na Colher"
    },
    {
      url: "https://i.im.ge/2025/04/20/vrNxPM.brigadeiro-.jpeg",
      alt: "Brigadeiro Gourmet"
    }
  ];

  return (
    <section className="py-12 px-4 bg-gradient-to-b from-[#FFF4E6] to-[#FFF4E6]/70">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold font-serif text-center mb-8 text-[#4C1C24]">
          TRANSFORME SUA COZINHA EM UMA FONTE DE RENDA
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div 
              key={index} 
              className="overflow-hidden rounded-lg shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-xl"
            >
              <img 
                src={image.url} 
                alt={image.alt} 
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};