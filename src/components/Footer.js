import React from "react";
import Image from "next/image";

const imgsFooter = [
  {
    image: "/img/imgFooter/facebook.png",
  },
  {
    image: "/img/imgFooter/tiktok.png",
  },
  {
    image: "/img/imgFooter/www.png",
  },
  {
    image: "/img/imgFooter/wa.png",
  },
];

export default function Footer() {
  return (
    <div className="w-full p-5  bg-primary">
      <div className="container ">
        <h1 className="text-2xl text-textSecondary">Social Media</h1>
        <div className="flex my-5 gap-5">
          {imgsFooter.map((img, index) => (
            <div key={index} className="">
              <Image
                src={img.image}
                width={500}
                height={500}
                quality={100}
                alt="img"
                className="w-7 drop-shadow-xl sm:w-32 md:w-36 mx-auto object-cover bg-center"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="container mb-3">
        <h1 className="text-2xl text-textSecondary">Eli Crew Cilacap</h1>
        <h4 className="text-lg mt-3 text-textSecondary">
          Pusat Pelatihan Kapal Pesiar, Perhotelan & Bahasa Inggris
        </h4>
      </div>
      <hr className="mb-3" />
      <h4 className="flex justify-center text-textSecondary mx-auto">
        ©Copyright 2023. Made by Eli Crew
      </h4>
    </div>
  );
}
