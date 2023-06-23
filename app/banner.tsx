"use client";
import Carousel from "react-bootstrap/Carousel";
import Image from "next/image";

export default function Banner() {
  return (
    <div className="h-[480px] w-[876px] overflow-hidden">
      <Carousel interval={2000}>
        <Carousel.Item>
          <Image
            src="/react-demo/banner1.jpg?"
            alt="Banner"
            width={875.214}
            height={480}
            className="mx-auto"
            priority
          />
        </Carousel.Item>
        <Carousel.Item>
          <Image
            src="/react-demo/banner2.jpg?"
            alt="Banner"
            width={853.333}
            height={480}
            className="mx-auto"
            priority
          />
        </Carousel.Item>
        <Carousel.Item>
          <Image
            src="/react-demo/banner3.jpg?"
            alt="Banner"
            width={853.333}
            height={480}
            className="mx-auto"
            priority
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
