import React from 'react';

const clientImages = [
  "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
  "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",            
  "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",           
  "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg"                 
];

const OurClient = () => {
  return (
    <div className="mt-16 w-full md:w-4/5 mx-auto px-4 mb-4">

      <h1 className="text-center text-2xl font-bold mb-2">OUR PARTNERS</h1>
      <p className="text-center text-gray-600 mb-6">Trusted By Over 15 Companies</p>

      <div className="flex flex-wrap justify-center gap-6">
        {clientImages.map((img, index) => (
          <div
            key={index}
            className="h-[100px] w-[150px] rounded-lg border border-gray-300 shadow-lg flex justify-center items-center bg-white p-3"
          >
            <img
              src={img}
              alt={`Client ${index + 1}`}
              className="object-contain h-full w-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurClient;
