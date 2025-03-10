import {
  CarouselPrevious,
  CarouselNext,
  useCarousel,
} from '@/components/ui/carousel';
import React from 'react';

export default function CarouselButtons({
  textTruncatedClose,
}: {
  textTruncatedClose: () => void;
}) {
  const { scrollPrev, scrollNext } = useCarousel();

  return (
    <>
      <CarouselPrevious
        onClick={() => {
          scrollPrev();
          textTruncatedClose();
        }}
        className="absolute left-5 h-12 w-12 rounded-full backdrop-blur-md bg-white/20 border border-white/30 shadow-lg hover:bg-white/30 transition-all duration-300 hover:scale-110"
      />
      <CarouselNext
        onClick={() => {
          scrollNext();
          textTruncatedClose();
        }}
        className="absolute right-5 h-12 w-12 rounded-full backdrop-blur-md bg-white/20 border border-white/30 shadow-lg hover:bg-white/30 transition-all duration-300 hover:scale-110"
      />
    </>
  );
}
