import Image from "next/image";
import React from "react";

const partners = [
  "https://i.ibb.co.com/v6gZ3jVR/images-4.jpg",
  "https://i.ibb.co.com/1t8Thcdh/images.png",
  "https://i.ibb.co.com/VXXPWX6/images-3.jpg",
  "https://i.ibb.co.com/cK6CDqxw/download-4.jpg",
  "https://i.ibb.co.com/xK6DGZkV/download-3.jpg",
  "https://i.ibb.co.com/8njmYMkM/download-1.png",
  "https://i.ibb.co.com/gbX1cp3g/download-2.jpg",
  "https://i.ibb.co.com/My5HgW0g/download-1.jpg",
  "https://i.ibb.co.com/PvKyY1s3/download.png",
  "https://i.ibb.co.com/0ypgwsjm/download.jpg",
];

const Partners = () => {
  return (
    <div className=" bg-purple-100 ">
      <div className="w-full mx-auto py-12 lg:px-28 px-16 ">
        <div className="text-center mb-10">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
            Our Hospital Partners
          </h3>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 items-center justify-center">
          {partners.map((src, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4  shadow rounded-xl hover:scale-105 transition-transform duration-300"
            >
              <Image
                width={300}
                height={100}
                src={src}
                alt={`Partner ${index + 1}`}
                className="h-16 md:h-24 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
