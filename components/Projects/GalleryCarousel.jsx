"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import CustomImage from "../CustomImage";
import projectsData from "@/data/projects";

export default function GalleryCarousel({ projectId }) {
  return (
    <div dir="ltr" className="mt-12 mb-10 sm:mb-0">
      {projectsData
        .filter((project) => project.id === projectId)
        .map((filterarray, index) => (
          <div className="" key={index}>
            <Carousel className="">
              <CarouselContent>
                {filterarray.imgs.map((filter, idxx) => (
                  <CarouselItem key={"images" + idxx}>
                    <CustomImage
                      src={filter.img}
                      width="1920"
                      height="1080"
                      className="object-cover w-full h-full aspect-video"
                      alt={"project " + " " + idxx}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselNext className="absolute p-2 text-white transform -translate-y-1/2 bg-black bg-opacity-50 rounded-full top-1/2 right-4" />
              <CarouselPrevious className="absolute p-2 text-white transform -translate-y-1/2 bg-black bg-opacity-50 rounded-full top-1/2 left-4" />

              <div className="absolute space-x-2 transform -translate-x-1/2 bottom-4 left-1/2" />
            </Carousel>
          </div>
        ))}
    </div>
  );
}
