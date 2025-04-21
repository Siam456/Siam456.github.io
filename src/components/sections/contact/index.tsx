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
      <div className=" flex-col gap-5 md:flex-row">
        <div className="mb-10 grid flex-1 grid-cols-1 gap-6 md:grid-cols-3">
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
        <div className="flex flex-1">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2171.0143429665377!2d90.42825095783093!3d23.776021140611586!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c792282b1331%3A0x4128a0a349e69cd6!2sQCGG%2BQMW%2C%20Dhaka%201212!5e0!3m2!1sen!2sbd!4v1721280647125!5m2!1sen!2sbd"
            className="h-96 w-full"
            style={{ border: 0, borderRadius: '1rem' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps Location"
          />
        </div>
      </div>
    </section>
  );
}
