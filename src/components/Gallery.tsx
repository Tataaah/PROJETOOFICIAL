import React from 'react';

const images = [
  "https://i.im.ge/2025/04/20/vrNEdh.download-4.jpeg",
  "https://i.im.ge/2025/04/20/vrNtI9.download-3.jpeg",
  "https://i.im.ge/2025/04/20/vrNAJ8.download.jpeg",
  "https://i.im.ge/2025/04/20/vrNyxX.recipeshub24-recipeshub24-on-Threads.jpeg",
  "https://i.im.ge/2025/04/20/vrN3fY.Como-fazer-ovos-de-Pascoa-na-Colher-receita-facil.jpeg",
  "https://i.im.ge/2025/04/20/vrNxPM.brigadeiro-.jpeg"
];

const Gallery = () => {
  return (
    <div className="py-12">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {images.map((src, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <img 
              src={src} 
              alt={`Receita exemplo ${index + 1}`} 
              className="w-full h-40 object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;