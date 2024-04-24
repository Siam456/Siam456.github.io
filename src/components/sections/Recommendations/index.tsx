import React, { useState } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import RecommendationData from '@/utils/recommendation';
import SectionTitle from '../SectionTitle';
import CarouselButtons from './CarouselButtons';

export default function RecommendationSection() {
  const [isTextTruncated, setIsTextTruncated] = useState(true);

  const toggleTextTruncation = () => {
    setIsTextTruncated(!isTextTruncated);
  };

  const textTruncatedClose = () => {
    setIsTextTruncated(true);
  };
  return (
    <section
      className=" relative items-center justify-between
gap-10 space-y-2 md:container max-md:px-3"
    >
      <SectionTitle
        title="Recommendations"
        description="What people say about me."
      />

      <div className="relative">
        <Carousel className="relative mx-auto lg:w-[calc(100%-200px)]">
          <CarouselContent>
            {RecommendationData.map((Recommendation, index) => (
              <CarouselItem
                className="carousel flex flex-col items-center justify-center"
                key={`card-${index + 1}`}
              >
                <Card className="card flex-1 text-white shadow">
                  <CardContent className="h-full items-center justify-center p-6 md:flex">
                    <div className="flex flex-1 items-center justify-center">
                      <img
                        src={Recommendation.avatar}
                        alt="avatar"
                        className="w-80 rounded-lg"
                      />
                    </div>
                    <div className=" flex-1 space-y-5 max-md:pt-5 md:m-10 ">
                      <a
                        target="_blank"
                        href={Recommendation.linkedin}
                        className="mt-4 text-2xl font-extrabold duration-300 hover:underline md:text-5xl"
                        rel="noreferrer"
                      >
                        {Recommendation.name}
                      </a>
                      <div className=" rounded-lg bg-white/20 p-4">
                        <p className=" text-lg text-gray-50">
                          {Recommendation.designation}
                        </p>
                        <p className=" text-sm text-gray-300">
                          at {Recommendation.company}
                        </p>
                      </div>

                      <p className="mt-2 text-sm">
                        {isTextTruncated
                          ? Recommendation.recommendation
                              .substring(0, 300)
                              .split('\n')
                              .map((line, idx) => (
                                <span key={`text-${idx + 1}`}>
                                  {line}
                                  {Recommendation.recommendation.length > 300 &&
                                  idx + 1 ===
                                    Recommendation.recommendation
                                      .substring(0, 300)
                                      .split('\n').length
                                    ? '...'
                                    : ''}
                                  {idx <
                                    Recommendation.recommendation.length -
                                      1 && <br />}
                                </span>
                              ))
                          : Recommendation.recommendation
                              .split('\n')
                              .map((line, idx) => (
                                <span key={`text-${idx + 1}`}>
                                  {line}
                                  {idx + 1 !==
                                    Recommendation.recommendation.length &&
                                    idx <
                                      Recommendation.recommendation.length -
                                        1 && <br />}
                                </span>
                              ))}

                        {Recommendation.recommendation.length > 300 && (
                          <button
                            className="mt-2 text-gray-300"
                            onClick={toggleTextTruncation}
                          >
                            {isTextTruncated ? 'Show More' : 'Show Less'}
                          </button>
                        )}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselButtons textTruncatedClose={textTruncatedClose} />
        </Carousel>
      </div>
    </section>
  );
}
