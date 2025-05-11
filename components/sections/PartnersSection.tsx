"use client";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

const CompanyCarousel = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  const companies = [
    { img: "/images/aat.png" },
    { img: "/images/acca.png" },
    { img: "/images/cpd.png" },
    { img: "/images/icaew.png" },
    { img: "/images/ifa.png" },
    { img: "/images/aatTraining.png" },
    { img: "/images/aat.png" },
    { img: "/images/acca.png" },
    { img: "/images/cpd.png" },
    { img: "/images/icaew.png" },
    { img: "/images/ifa.png" },
    { img: "/images/aatTraining.png" },
    { img: "/images/aat.png" },
    { img: "/images/acca.png" },
    { img: "/images/cpd.png" },
    { img: "/images/icaew.png" },
    { img: "/images/ifa.png" },
    { img: "/images/aatTraining.png" },
  ];

  useEffect(() => {
    let frameId: number;

    const scroll = () => {
      setOffset((prev) => {
        const container = carouselRef.current;
        if (!container) return prev;

        const scrollWidth = container.scrollWidth / 2;
        const newOffset = prev + 1;

        if (newOffset >= scrollWidth) {
          return 0;
        }

        return newOffset;
      });

      frameId = requestAnimationFrame(scroll);
    };

    frameId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(frameId);
  }, []);

  return (
    <div className="w-full overflow-hidden bg-gray-50 py-12">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
          Our Trusted Partners
        </h2>
        <div className="relative w-full overflow-hidden">
          <div
            ref={carouselRef}
            className="flex gap-16"
            style={{
              transform: `translateX(-${offset}px)`,
              transition: "transform 0.01s linear",
              width: "max-content",
            }}
          >
            {[...companies, ...companies].map((company, index) => (
              <div key={index} className="flex items-center justify-center">
                <Image
                  src={company.img}
                  alt="partner logo"
                  width={150}
                  height={150}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyCarousel;
