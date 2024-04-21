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
        className=" absolute left-5"
      />
      <CarouselNext
        onClick={() => {
          scrollNext();
          textTruncatedClose();
        }}
        className=" absolute right-5"
      />
    </>
  );
}
