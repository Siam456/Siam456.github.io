import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import { EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline';
import { DevicePhoneMobileIcon } from '@heroicons/react/24/solid';
import SectionTitle from '../SectionTitle';

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="container relative
items-center justify-between gap-10 space-y-2"
    >
      <SectionTitle
        title="Contact"
        description="Feel free to reach out to me for any queries or collaborations."
      />{' '}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 ">
        <Card>
          <CardHeader>
            <MapPinIcon className=" h-16 " />
          </CardHeader>
          <CardContent className="space-y-2 text-center">
            <CardTitle>Location</CardTitle>
            <p>
              <a
                href="https://maps.app.goo.gl/6cvoXve6ragxJAbFA"
                target="_blank"
                rel="noreferrer"
                className="text-blue-500 hover:underline"
              >
                Dhaka, Bangladesh
              </a>
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <EnvelopeIcon className=" h-16 " />
          </CardHeader>
          <CardContent className="space-y-2 text-center">
            <CardTitle>Email</CardTitle>
            <p>
              <a
                href="mailto:hasibulsiam27@gmail.com"
                className="text-blue-500 hover:underline"
              >
                hasibulsiam27@gmail.com
              </a>
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <DevicePhoneMobileIcon className=" h-16 " />
          </CardHeader>
          <CardContent className="space-y-2 text-center">
            <CardTitle>Phone</CardTitle>
            <p className="flex flex-col">
              <a
                href="tel:01755770538"
                className="text-blue-500 hover:underline"
              >
                +88 017 5570538
              </a>
              {/* <a href="tel:01643126129">+88 016 43126129</a> */}
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
