import React from "react";
import Image from "next/image";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Title from "./Title";

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
    <div>
      <div className="hidden xl:block bg-gradient-to-t  from-primary to-sky-500 ">
        <div className="pt-5 container flex flex-col justify-center items-center py-16 ">
          <Title title="Our Student" />
          <Splide
            options={{
              type: "loop",
              gap: 10,
              perPage: 3,
              perMove: 2,
              autoplay: true,
              pauseOnHover: false,
              resetProgress: false,
              arrows: true,
              pagination: false,
            }}
            aria-label="My Favorite Images"
          >
            {images.map((image, index) => (
              <SplideSlide className="w-full    relative " key={index}>
                {/* <img src="image1.jpg" alt="Image 1" /> */}
                <Image
                  className="w-full h-96 drop-shadow-xl rounded-lg object-cover object-center"
                  src={image.imageUrl}
                  width={1000}
                  height={1000}
                  alt="Cruise"
                  priority={true}
                />
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>
      <div className=" hidden md:block xl:hidden bg-gradient-to-t  from-primary to-sky-500 ">
        <div className="pt-5 container flex flex-col justify-center items-center py-16 ">
          <Title title="Our Student" />
          <Splide
            options={{
              type: "loop",
              gap: 10,
              perPage: 2,
              perMove: 2,
              autoplay: true,
              pauseOnHover: false,
              resetProgress: false,
              arrows: true,
              pagination: false,
            }}
            aria-label="My Favorite Images"
          >
            {images.map((image, index) => (
              <SplideSlide className="w-full    relative " key={index}>
                {/* <img src="image1.jpg" alt="Image 1" /> */}
                <Image
                  className="w-full h-96 drop-shadow-xl rounded-lg object-cover object-center"
                  src={image.imageUrl}
                  width={1000}
                  height={1000}
                  alt="Cruise"
                  priority={true}
                />
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>

      <div className="bg-gradient-to-t md:hidden from-primary to-sky-500 ">
        <div className="pt-5 container flex flex-col justify-center items-center py-16 ">
          <Title title="Our Student" />
          <Splide
            options={{
              type: "loop",
              gap: 10,
              perPage: 1,
              perMove: 2,
              autoplay: true,
              pauseOnHover: false,
              resetProgress: false,
              arrows: true,
              pagination: false,
            }}
            aria-label="My Favorite Images"
          >
            {images.map((image, index) => (
              <SplideSlide className="w-full    relative " key={index}>
                {/* <img src="image1.jpg" alt="Image 1" /> */}
                <Image
                  className="w-full h-96 drop-shadow-xl rounded-lg object-cover object-center"
                  src={image.imageUrl}
                  width={1000}
                  height={1000}
                  alt="Cruise"
                  priority={true}
                />
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>
    </div>
  );
}
