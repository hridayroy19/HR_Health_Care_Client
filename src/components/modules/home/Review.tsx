"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const reviews = [
  {
    id: 1,
    name: "Holden Caulfield",
    role: "UI DEVELOPER",
    image: "https://i.ibb.co.com/zHbc0jXV/images-1-removebg-preview.png",
    text: "Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie 90's microdosing.",
  },
  {
    id: 2,
    name: "Alper Kamu",
    role: "DESIGNER",
    image: "https://i.ibb.co.com/zHbc0jXV/images-1-removebg-preview.png",
    text: "Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard pabst authentic iceland.",
  },
  {
    id: 3,
    name: "Jane Cooper",
    role: "PROJECT MANAGER",
    image: "https://i.ibb.co.com/zHbc0jXV/images-1-removebg-preview.png",
    text: "Working with this team was a game changer. Their professionalism and dedication exceeded my expectations.",
  },
  {
    id: 4,
    name: "John Smith",
    role: "SOFTWARE ENGINEER",
    image: "https://dummyimage.com/109x109",
    text: "Amazing experience! They delivered the project on time with outstanding quality.",
  },
  {
    id: 5,
    name: "Emily Johnson",
    role: "MARKETING HEAD",
    image: "https://dummyimage.com/110x110",
    text: "The team’s creativity and strategic approach really helped us scale our brand effectively.",
  },
  {
    id: 6,
    name: "Michael Brown",
    role: "DATA ANALYST",
    image: "https://dummyimage.com/111x111",
    text: "They turned complex data into simple insights. Highly recommend their expertise!",
  },
  {
    id: 7,
    name: "Sophia Lee",
    role: "HR MANAGER",
    image: "https://dummyimage.com/112x112",
    text: "Excellent communication and collaboration throughout the project. A true pleasure working with them.",
  },
];

const Review = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  return (
    <div className="bg-gradient-to-b from-purple-100 via-purple-50 to-purple-50 ">
      <div className="container lg:px-22 md:px-16 px-14 py-10 mx-auto">
        <h1 className="text-3xl font-normal title-font  mb-12 text-start">
          Patient Feedback
        </h1>

        <Carousel
          plugins={[plugin.current]}
          className="w-full"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent className="-ml-4 gap-2">
            {reviews.map((review) => (
              <CarouselItem
                key={review.id}
                className="pl-4 md:basis-1/2 border lg:basis-1/3"
              >
                <div className="h-full  p-8 rounded shadow-sm hover:shadow-md transition">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="block w-5 h-5 text-gray-600 mb-4"
                    viewBox="0 0 975.036 975.036"
                  >
                    <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                  </svg>
                  <p className="leading-relaxed text-black mb-6">
                    {review.text}
                  </p>
                  <div className="inline-flex items-center">
                    <Image
                      alt={review.name}
                      src={review.image}
                      width={48}
                      height={48}
                      className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                    />
                    <span className="flex-grow flex flex-col pl-4">
                      <span className="title-font font-medium text-gray-900">
                        {review.name}
                      </span>
                      <span className="text-gray-500 text-sm">
                        {review.role}
                      </span>
                    </span>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default Review;
