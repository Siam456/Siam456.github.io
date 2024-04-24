import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import {
  DownloadIcon,
  GitHubLogoIcon,
  TwitterLogoIcon,
  LinkedInLogoIcon,
} from '@radix-ui/react-icons';
import Link from 'next/link';
import React from 'react';

export default function HomeSection() {
  return (
    <>
      <svg
        className="absolute inset-0 -z-10 h-full max-h-screen w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)] dark:stroke-gray-800"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
            width="200"
            height="200"
            x="50%"
            y="-1"
            patternUnits="userSpaceOnUse"
          >
            <path d="M100 200V.5M.5 .5H200" fill="none" />
          </pattern>
        </defs>
        <svg
          x="50%"
          y="-1"
          className="overflow-visible fill-gray-200 dark:fill-primary-foreground/10"
        >
          <path
            d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
            strokeWidth="0"
          />
        </svg>
        <rect
          width="100%"
          height="100%"
          strokeWidth="0"
          fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"
        />
      </svg>
      <section
        className="container relative
       flex min-h-[calc(100vh-75px)] items-center justify-between gap-10 space-y-2"
      >
        <div className="z-10 flex-1 py-10">
          <h1 className="text-4xl font-bold opacity-80">Hi! I'm</h1>

          <h1
            className="animate-typing
          overflow-hidden whitespace-nowrap pr-5 text-5xl font-extrabold 
          sm:text-6xl"
          >
            <span className="text-green-700">Hasibul</span> Hasan
          </h1>
          <h3 className="mt-2 text-2xl font-semibold opacity-90">
            <div className="bg-gradient-to-r from-slate-200/60 to-slate-200 to-50% bg-clip-text text-3xl  [text-wrap:balance] md:text-4xl">
              <span className="inline-flex h-[calc(theme(fontSize.3xl)*theme(lineHeight.tight))] flex-col overflow-hidden text-indigo-500 md:h-[calc(theme(fontSize.4xl)*theme(lineHeight.tight))]">
                <ul className="block animate-text-slide-3 text-left leading-tight [&_li]:block">
                  <li>Software Engineer</li>

                  <li>Designer</li>
                  <li>Full-stack developer</li>

                  <li aria-hidden="true">Software Engineer</li>
                </ul>
              </span>
            </div>
          </h3>
          <hr className="my-6" />
          <p className="mt-2 text-muted-foreground">
            Passionate about building products that are user-friendly and
            accessible. I love to contribute to the community. I have a strong
            background in computer science and I have been working in the tech
            industry for nearly 3 years.
          </p>
          <div className="mt-10">
            <Button
              onClick={() => {
                window.open('/Hasibul-Hasan.pdf', '_blank');
              }}
              className="mr-3"
            >
              <DownloadIcon className="mr-2 h-5" /> Download CV
            </Button>
            <Link
              href="https://github.com/Siam456"
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={cn(
                  buttonVariants({
                    variant: 'ghost',
                  }),
                  'w-9 px-0',
                )}
              >
                <GitHubLogoIcon className="h-5 w-5 fill-current" />
                <span className="sr-only">GitHub</span>{' '}
              </div>
            </Link>

            <Link
              href="https://twitter.com/HasibulSiam8"
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={cn(
                  buttonVariants({
                    variant: 'ghost',
                  }),
                  'w-9 px-0',
                )}
              >
                <TwitterLogoIcon className="h-5 w-5 fill-current" />
                <span className="sr-only">Twitter</span>
              </div>
            </Link>

            <Link
              href="https://www.linkedin.com/in/hasib11038/"
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={cn(
                  buttonVariants({
                    variant: 'ghost',
                  }),
                  'w-9 px-0',
                )}
              >
                <LinkedInLogoIcon className="h-5 w-5 fill-current" />
                <span className="sr-only">LinkedIn</span>
              </div>
            </Link>
            <Link
              href="https://www.facebook.com/hasibulsiam456"
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={cn(
                  buttonVariants({
                    variant: 'ghost',
                  }),
                  'w-9 px-0',
                )}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  className="h-5 w-5 fill-current"
                >
                  <path d="M 21.125 0 L 4.875 0 C 2.183594 0 0 2.183594 0 4.875 L 0 21.125 C 0 23.816406 2.183594 26 4.875 26 L 21.125 26 C 23.816406 26 26 23.816406 26 21.125 L 26 4.875 C 26 2.183594 23.816406 0 21.125 0 Z M 20.464844 14.003906 L 18.03125 14.003906 L 18.03125 23.007813 L 13.96875 23.007813 L 13.96875 14.003906 L 12.390625 14.003906 L 12.390625 10.96875 L 13.96875 10.96875 L 13.96875 9.035156 C 13.96875 6.503906 15.019531 5 18.007813 5 L 21.03125 5 L 21.03125 8.023438 L 19.273438 8.023438 C 18.113281 8.023438 18.035156 8.453125 18.035156 9.265625 L 18.03125 10.96875 L 20.796875 10.96875 Z" />
                </svg>

                <span className="sr-only">Facebook</span>
              </div>
            </Link>
          </div>
        </div>
        <div className="top-0 z-0 flex flex-1 items-center justify-center max-md:hidden">
          {/* <video
            src="/videos/azuki-sleepy-teaser-COMPRESSED.mp4"
            width="320"
            height="240"
            className="animate-fade-up h-auto w-full rounded-lg lg:w-2/3 "
            loop
            autoPlay
            muted
            preload="none"
          >
            {' '}
            <source
              src="https://videos.ctfassets.net/j7912igus1qi/2RphpZ4SwyRxr1g1TuYI4A/4c9a36baab3a0837df47ec73336e9bfa/azuki-sleepy-teaser-COMPRESSED.mp4"
              type="video/mp4"
            />{' '}
          </video> */}
          <img
            src="/img/bg2.jpg"
            alt="hero"
            className="animate-fade-up h-auto w-full rounded-lg lg:w-3/4 "
          />
        </div>
      </section>
    </>
  );
}
