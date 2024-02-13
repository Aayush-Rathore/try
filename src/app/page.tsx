import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { posts } from "../constants/Home.data";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className="flex justify-center flex-col items-center">
      {posts.map((posts) => {
        return (
          <Carousel
            className={`border-2 p-2 ${styles.carousel}`}
            key={posts.id}
          >
            <CarouselContent>
              {posts.data.map((data, index) => {
                return (
                  <CarouselItem key={index}>
                    <Image
                      src={data.image}
                      alt="Image"
                      className={`${styles.carouselImage}`}
                      width={400}
                      height={300}
                    />
                    <p>{data.content}</p>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
          </Carousel>
        );
      })}
    </div>
  );
}
