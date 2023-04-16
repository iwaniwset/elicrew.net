import React from "react";
import Image from "next/image";

const images = [
  {
    id: 1,
    imageUrl: "/img/imageGallery/1.jpg",
  },
  {
    id: 2,
    imageUrl: "/img/imageGallery/2.jpg",
  },
  {
    id: 3,
    imageUrl: "/img/imageGallery/3.jpg",
  },
  {
    id: 4,
    imageUrl: "/img/imageGallery/4.jpg",
  },
  {
    id: 5,
    imageUrl: "/img/imageGallery/5.jpg",
  },
  {
    id: 6,
    imageUrl: "/img/imageGallery/6.jpg",
  },
  {
    id: 7,
    imageUrl: "/img/imageGallery/7.jpg",
  },
  {
    id: 8,
    imageUrl: "/img/imageGallery/8.jpg",
  },
  {
    id: 9,
    imageUrl: "/img/imageGallery/9.jpg",
  },
  {
    id: 10,
    imageUrl: "/img/imageGallery/10.jpg",
  },
  {
    id: 11,
    imageUrl: "/img/imageGallery/11.jpg",
  },
  {
    id: 12,
    imageUrl: "/img/imageGallery/12.jpg",
  },
  {
    id: 13,
    imageUrl: "/img/imageGallery/13.jpg",
  },
  {
    id: 14,
    imageUrl: "/img/imageGallery/14.jpg",
  },
  {
    id: 15,
    imageUrl: "/img/imageGallery/15.jpg",
  },
  {
    id: 16,
    imageUrl: "/img/imageGallery/16.jpg",
  },
  {
    id: 17,
    imageUrl: "/img/imageGallery/17.jpg",
  },
  {
    id: 18,
    imageUrl: "/img/imageGallery/18.jpg",
  },
  {
    id: 19,
    imageUrl: "/img/imageGallery/19.jpg",
  },
  {
    id: 20,
    imageUrl: "/img/imageGallery/20.jpg",
  },
  {
    id: 21,
    imageUrl: "/img/imageGallery/21.jpg",
  },
  {
    id: 22,
    imageUrl: "/img/imageGallery/22.jpg",
  },
  {
    id: 23,
    imageUrl: "/img/imageGallery/23.jpg",
  },
  {
    id: 24,
    imageUrl: "/img/imageGallery/24.jpg",
  },
  {
    id: 25,
    imageUrl: "/img/imageGallery/25.jpg",
  },
  {
    id: 26,
    imageUrl: "/img/imageGallery/26.jpg",
  },
  {
    id: 27,
    imageUrl: "/img/imageGallery/27.jpg",
  },
  {
    id: 28,
    imageUrl: "/img/imageGallery/28.jpg",
  },
];

export default function Gallery() {
  return (
    <div className="bg-blue-300 p-5">
      <h1 className="py-5 tracking-wide text-3xl text-slate-800 text-center">
        Gallery
      </h1>
      <div class="grid grid-cols-2 md:grid-cols-3 gap-4 self-center">
        {images.map((image, index) => (
          <div key={index}>
            <Image
              src={image.imageUrl}
              width={100}
              quality={100}
              height={100}
              priority={true}
              // objectFit={cover}
              className="h-full w-full rounded-lg shadow-lg object-cover"
            />{" "}
          </div>
        ))}
      </div>
    </div>
  );
}