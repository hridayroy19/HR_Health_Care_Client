"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const blogData = [
  {
    id: 1,
    title: "10 Best Female Skin Specialists (Dermatologist) in Dhaka",
    date: "4 months ago",
    description:
      "Get treatment from the top 10 best female skin specialists in Dhaka. Solve all your skin-related issues with our expert dermatologists.",
    imageUrl: "https://i.ibb.co.com/B5bBHvQr/images-2.jpg",
    altText: "A group of female dermatologists.",
  },
  {
    id: 2,
    title: "Common Mental Health Challenges and Disorders in Bangladesh",
    date: "4 months ago",
    description:
      "Explore the mental health challenges in Bangladesh, where common mental health issues are often overlooked. Learn about the most prevalent conditions and available support.",
    imageUrl: "https://i.ibb.co.com/7wwSfNW/DD-1024x686-1.webp",
    altText: "A person holding their head in frustration.",
  },
  {
    id: 3,
    title: "Understanding Seasonal Allergies: Causes, Symptoms, and Treatment",
    date: "3 months ago",
    description:
      "Learn about the common causes, symptoms, and effective treatment options for seasonal allergies. Discover how to manage your symptoms and enjoy the season.",
    imageUrl: "https://i.ibb.co.com/fV2q30f8/images.jpg",
    altText: "A person sneezing with a tissue.",
  },
  {
    id: 4,
    title: "The Importance of Regular Health Check-ups",
    date: "2 months ago",
    description:
      "Regular health check-ups can help detect health issues early, preventing more serious conditions. Read about why routine health screenings are crucial for your well-being.",
    imageUrl: "https://i.ibb.co.com/dJQd5wXY/6-BENEFITS.jpg",
    altText: "A doctor and patient during a consultation.",
  },
  {
    id: 5,
    title: "Tips for a Healthy Diet and Active Lifestyle",
    date: "1 month ago",
    description:
      "Adopting a healthy diet and an active lifestyle is key to long-term health. We share practical tips to help you eat better and stay active every day.",
    imageUrl: "https://i.ibb.co.com/k253r9Jy/images-1.jpg",
    altText: "A selection of healthy fruits and vegetables.",
  },
];

export default function Blogs() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  return (
    <div className="w-full max-w-7xl mx-auto py-8 px-4 bg-purple-50 lg:px-20 md:px-8">
      <div className="text-start mb-10">
        <p className="mt-2 text-xl text-purple-600 font-semibold">
          Recent Blogs
        </p>
        <h2 className="text-3xl font-normal tracking-tight text-gray-900 sm:text-4xl">
          Read our latest blogs from
          <br />
          Health Experts
        </h2>
      </div>
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
        <CarouselContent className="-ml-4">
          {blogData.map((blog) => (
            <CarouselItem
              key={blog.id}
              className="pl-4 md:basis-1/2 lg:basis-1/3"
            >
              <div className="p-1">
                <Card>
                  <CardContent className="p-0">
                    <article className="overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg">
                      <Image
                        alt={blog.altText}
                        src={blog.imageUrl}
                        className="h-56 w-full object-cover"
                        width={500}
                        height={350}
                      />
                      <div className="bg-white p-4 sm:p-6">
                        <time
                          dateTime={blog.date}
                          className="block text-xs text-gray-500"
                        >
                          {blog.date}
                        </time>
                        <a href="#">
                          <h3 className="mt-0.5 text-lg font-bold text-gray-900">
                            {blog.title}
                          </h3>
                        </a>
                        <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                          {blog.description}
                        </p>
                      </div>
                    </article>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
