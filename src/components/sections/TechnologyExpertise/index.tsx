import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';

import SectionTitle from '../SectionTitle';

export default function TechnologyExpertise() {
  return (
    <section
      className="container relative
  items-center justify-between gap-10 space-y-2"
    >
      <SectionTitle
        title="Technologies Expertise"
        description="I have experience working with a wide range of technologies and
    tools."
      />

      <Tabs className="mx-auto xl:w-5/6" defaultValue="expertise">
        <TabsList className="mx-auto mb-5 grid w-full max-w-xl grid-cols-3">
          <TabsTrigger value="expertise">Expertise</TabsTrigger>
          <TabsTrigger value="comfortable">Comfortable</TabsTrigger>
          <TabsTrigger value="familiar">Familiar</TabsTrigger>
        </TabsList>
        <TabsContent value="expertise">
          <div className="flex w-full flex-wrap justify-center gap-5">
            <Card className=" min-w-32">
              <CardContent className="flex flex-col items-center justify-center gap-2 p-6 py-4">
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                  alt="JavaScript"
                  className="h-8 w-8"
                />
                <p className=" text-xs">JavaScript</p>
              </CardContent>
            </Card>
            <Card className=" min-w-32">
              <CardContent className="flex flex-col items-center justify-center gap-2 p-6 py-4">
                <img
                  src="https://www.typescriptlang.org/icons/icon-144x144.png"
                  alt="TypeScript"
                  className="h-8 w-8"
                />
                <p className=" text-xs">TypeScript</p>
              </CardContent>
            </Card>
            <Card className=" min-w-32">
              <CardContent className="flex flex-col items-center justify-center gap-2 p-6 py-4">
                <img
                  src="https://www.python.org/static/opengraph-icon-200x200.png"
                  alt="Python"
                  className="h-8 w-8"
                />
                <p className=" text-xs">Python</p>
              </CardContent>
            </Card>
            <Card className=" min-w-32">
              <CardContent className="flex flex-col items-center justify-center gap-2 p-6 py-4">
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg "
                  alt="C++"
                  className="h-8 w-8"
                />
                <p className=" text-xs">C++</p>
              </CardContent>
            </Card>

            <Card className=" min-w-32">
              <CardContent className="flex flex-col items-center justify-center gap-2 p-6 py-4">
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"
                  alt="React"
                  className="h-8 w-8"
                />
                <p className=" text-xs">React</p>
              </CardContent>
            </Card>
            <Card className=" min-w-32">
              <CardContent className="flex flex-col items-center justify-center gap-2 p-6 py-4">
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg"
                  alt="Next.js"
                  className="h-8 w-8"
                />
                <p className=" text-xs">Next.js</p>
              </CardContent>
            </Card>
            <Card className=" min-w-32">
              <CardContent className="flex flex-col items-center justify-center gap-2 p-6 py-4">
                <img
                  src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
                  alt="Tailwind CSS"
                  className="h-8 w-8"
                />
                <p className=" text-xs">Tailwind CSS</p>
              </CardContent>
            </Card>

            <Card className=" min-w-32">
              <CardContent className="flex flex-col items-center justify-center gap-2 p-6 py-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="32"
                  viewBox="0 0 36 32"
                  fill="none"
                  className="h-8 w-8"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M30.343 21.976a1 1 0 00.502-.864l.018-5.787a1 1 0 01.502-.864l3.137-1.802a1 1 0 011.498.867v10.521a1 1 0 01-.502.867l-11.839 6.8a1 1 0 01-.994.001l-9.291-5.314a1 1 0 01-.504-.868v-5.305c0-.006.007-.01.013-.007.005.003.012 0 .012-.007v-.006c0-.004.002-.008.006-.01l7.652-4.396c.007-.004.004-.015-.004-.015a.008.008 0 01-.008-.008l.015-5.201a1 1 0 00-1.5-.87l-5.687 3.277a1 1 0 01-.998 0L6.666 9.7a1 1 0 00-1.499.866v9.4a1 1 0 01-1.496.869l-3.166-1.81a1 1 0 01-.504-.87l.028-16.43A1 1 0 011.527.86l10.845 6.229a1 1 0 00.996 0L24.21.86a1 1 0 011.498.868v16.434a1 1 0 01-.501.867l-5.678 3.27a1 1 0 00.004 1.735l3.132 1.783a1 1 0 00.993-.002l6.685-3.839zM31 7.234a1 1 0 001.514.857l3-1.8A1 1 0 0036 5.434V1.766A1 1 0 0034.486.91l-3 1.8a1 1 0 00-.486.857v3.668z"
                    fill="#007FFF"
                  />
                </svg>
                <p className=" text-xs">Material UI</p>
              </CardContent>
            </Card>

            <Card className=" min-w-32">
              <CardContent className="flex flex-col items-center justify-center gap-2 p-6 py-4">
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg"
                  alt="Node.js"
                  className="h-8 w-8"
                />
                <p className=" text-xs">Node.js</p>
              </CardContent>
            </Card>
            <Card className=" min-w-32">
              <CardContent className="flex flex-col items-center justify-center gap-2 p-6 py-4">
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg"
                  alt="Express"
                  className="h-8 w-8"
                />
                <p className=" text-xs">Express</p>
              </CardContent>
            </Card>
            <Card className=" min-w-32">
              <CardContent className="flex flex-col items-center justify-center gap-2 p-6 py-4">
                <img
                  src="https://docs.nestjs.com/assets/logo-small-gradient.svg"
                  alt="Nest.js"
                  className="h-8 w-8"
                />
                <p className=" text-xs">Nest.js</p>
              </CardContent>
            </Card>
            <Card className=" min-w-32">
              <CardContent className="flex flex-col items-center justify-center gap-2 p-6 py-4">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLlrZta2RgrrrPTR2fBrS0clzxCteUELymAc8w3CX3iQ&s"
                  alt="FastAPI"
                  className="h-8 w-8 rounded-full"
                />
                <p className=" text-xs">FastAPI</p>
              </CardContent>
            </Card>

            <Card className=" min-w-32">
              <CardContent className="flex flex-col items-center justify-center gap-2 p-6 py-4">
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg"
                  alt="MongoDB"
                  className="h-8 w-8"
                />
                <p className=" text-xs">MongoDB</p>
              </CardContent>
            </Card>
            <Card className=" min-w-32">
              <CardContent className="flex flex-col items-center justify-center gap-2 p-6 py-4">
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg"
                  alt="PostgreSQL"
                  className="h-8 w-8"
                />
                <p className=" text-xs">PostgreSQL</p>
              </CardContent>
            </Card>

            <Card className=" min-w-32">
              <CardContent className="flex flex-col items-center justify-center gap-2 p-6 py-4">
                <img
                  src="https://w7.pngwing.com/pngs/246/288/png-transparent-firebase-hd-logo-thumbnail.png"
                  alt="Firebase"
                  className="h-8 w-8 rounded-full"
                />
                <p className=" text-xs">Firebase</p>
              </CardContent>
            </Card>
            <Card className=" min-w-32">
              <CardContent className="flex flex-col items-center justify-center gap-2 p-6 py-4">
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redis/redis-original.svg"
                  alt="Redis"
                  className="h-8 w-8"
                />
                <p className=" text-xs">Redis</p>
              </CardContent>
            </Card>
            <Card className=" min-w-32">
              <CardContent className="flex flex-col items-center justify-center gap-2 p-6 py-4">
                <img
                  src="https://prisma.io/favicon.ico"
                  alt="Prisma"
                  className="h-8 w-8"
                />
                <p className=" text-xs">Prisma</p>
              </CardContent>
            </Card>
            <Card className=" min-w-32">
              <CardContent className="flex flex-col items-center justify-center gap-2 p-6 py-4">
                <img
                  src="https://sequelize.org/img/logo.svg"
                  alt="Sequelize"
                  className="h-8 w-8"
                />
                <p className=" text-xs">Sequelize</p>
              </CardContent>
            </Card>

            <Card className=" min-w-32">
              <CardContent className="flex flex-col items-center justify-center gap-2 p-6 py-4">
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg"
                  alt="Docker"
                  className="h-8 w-8"
                />
                <p className=" text-xs">Docker</p>
              </CardContent>
            </Card>
            <Card className=" min-w-32">
              <CardContent className="flex flex-col items-center justify-center gap-2 p-6 py-4">
                <img
                  src="https://www.vectorlogo.zone/logos/rabbitmq/rabbitmq-icon.svg"
                  alt="RabbitMQ"
                  className="h-8 w-8"
                />
                <p className=" text-xs">RabbitMQ</p>
              </CardContent>
            </Card>

            <Card className=" min-w-32">
              <CardContent className="flex flex-col items-center justify-center gap-2 p-6 py-4">
                <img
                  src="https://avatars.githubusercontent.com/u/18133?s=280&v=4"
                  alt="SonarQube"
                  className="h-8 w-8"
                />
                <p className=" text-xs">Git</p>
              </CardContent>
            </Card>
            <Card className=" min-w-32">
              <CardContent className="flex flex-col items-center justify-center gap-2 p-6 py-4">
                <img
                  src="https://github.githubassets.com/favicons/favicon.png"
                  alt="GitHub"
                  className="h-8 w-8"
                />
                <p className=" text-xs">GitHub</p>
              </CardContent>
            </Card>
            <Card className=" min-w-32">
              <CardContent className="flex flex-col items-center justify-center gap-2 p-6 py-4">
                <img
                  src="https://about.gitlab.com/images/press/logo/png/gitlab-icon-rgb.png"
                  alt="GitLab"
                  className="h-8 w-8"
                />
                <p className=" text-xs">GitLab</p>
              </CardContent>
            </Card>

            <Card className=" min-w-32">
              <CardContent className="flex flex-col items-center justify-center gap-2 p-6 py-4">
                <img
                  src="https://www.herokucdn.com/favicon.ico"
                  alt="Heroku"
                  className="h-8 w-8"
                />
                <p className=" text-xs">Heroku</p>
              </CardContent>
            </Card>

            <Card className=" min-w-32">
              <CardContent className="flex flex-col items-center justify-center gap-2 p-6 py-4">
                <img
                  src="https://vercel.com/favicon.ico"
                  alt="Vercel"
                  className="h-8 w-8"
                />
                <p className=" text-xs">Vercel</p>
              </CardContent>
            </Card>
            <Card className=" min-w-32">
              <CardContent className="flex flex-col items-center justify-center gap-2 p-6 py-4">
                <img
                  src="https://aws.amazon.com/favicon.ico"
                  alt="AWS"
                  className="h-8 w-8"
                />
                <p className=" text-xs">AWS</p>
              </CardContent>
            </Card>

            <Card className=" min-w-32">
              <CardContent className="flex flex-col items-center justify-center gap-2 p-6 py-4">
                <svg
                  width="32"
                  height="32"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 90 90"
                  tabIndex={-1}
                  className=" h-8 w-8 "
                >
                  <circle
                    cx="45"
                    cy="45"
                    r="36.25"
                    fill="none"
                    stroke="#3b82f6"
                    strokeWidth="17.5"
                    strokeDasharray="170.824100538945 56.941366846315"
                    strokeDashoffset="113.88273369263"
                    className="DigitalOceanSmileyStyles__StyledCircle-sc-64ca7b97-0 knJbuJ"
                  />
                  <rect
                    x="3.25"
                    y="61.5"
                    width="11"
                    height="11"
                    fill="#3b82f6"
                    className="DigitalOceanSmileyStyles__StyledPixelSm-sc-64ca7b97-1 kcXHQQ"
                  />
                  <rect
                    x="14.25"
                    y="72.5"
                    width="13.5"
                    height="13.5"
                    fill="#3b82f6"
                    className="DigitalOceanSmileyStyles__StyledPixelMd-sc-64ca7b97-2 dzdZv"
                  />
                  <rect
                    x="27.5"
                    y="55.25"
                    width="17.25"
                    height="17.25"
                    fill="#3b82f6"
                    className="DigitalOceanSmileyStyles__StyledPixelLg-sc-64ca7b97-3 movTc"
                  />
                </svg>
                <p className=" text-xs">DigitalOcean</p>
              </CardContent>
            </Card>
            <Card className=" min-w-32">
              <CardContent className="flex flex-col items-center justify-center gap-2 p-6 py-4">
                <img
                  src="https://www.linode.com/favicon.ico"
                  alt="Linode"
                  className="h-8 w-8"
                />
                <p className=" text-xs">Linode</p>
              </CardContent>
            </Card>
            {/* vscode postman */}
            <Card className=" min-w-32">
              <CardContent className="flex flex-col items-center justify-center gap-2 p-6 py-4">
                <img
                  src="https://code.visualstudio.com/favicon.ico"
                  alt="VSCode"
                  className="h-8 w-8"
                />
                <p className=" text-xs">VSCode</p>
              </CardContent>
            </Card>
            <Card className=" min-w-32">
              <CardContent className="flex flex-col items-center justify-center gap-2 p-6 py-4">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.0379 0.13033C14.8991 -0.272747 11.7113 0.264019 8.87752 1.67275C6.04379 3.08148 3.69144 5.29889 2.11796 8.04457C0.544486 10.7903 -0.179442 13.9409 0.0377277 17.098C0.254897 20.2551 1.40341 23.277 3.33802 25.7813C5.27263 28.2857 7.90645 30.1601 10.9064 31.1676C13.9063 32.175 17.1376 32.2702 20.1917 31.4412C23.2457 30.6121 25.9854 28.896 28.0641 26.5099C30.1428 24.1237 31.4672 21.1748 31.8699 18.0359C32.4098 13.8273 31.2559 9.57657 28.6619 6.21869C26.068 2.8608 22.2465 0.670781 18.0379 0.13033Z"
                    fill="#FF6C37"
                  />
                  <path
                    d="M11.5674 17.0111C11.5736 17.0238 11.5841 17.0339 11.5969 17.0397C11.6097 17.0456 11.6242 17.0468 11.6378 17.0431L14.1978 16.4911L13.121 15.3999L11.5866 16.9343C11.5745 16.9425 11.5659 16.9548 11.5623 16.969C11.5588 16.9832 11.5606 16.9982 11.5674 17.0111Z"
                    fill="white"
                  />
                  <path
                    d="M23.5548 6.0193C23.198 6.01966 22.8459 6.10004 22.5243 6.25451C22.2027 6.40898 21.9199 6.63361 21.6966 6.91187C21.4733 7.19012 21.3153 7.51491 21.2342 7.86232C21.153 8.20973 21.1508 8.57091 21.2277 8.91928C21.3047 9.26765 21.4588 9.59433 21.6786 9.87527C21.8985 10.1562 22.1786 10.3842 22.4983 10.5426C22.818 10.701 23.1691 10.7856 23.5259 10.7903C23.8826 10.795 24.2358 10.7196 24.5596 10.5697L22.9372 8.9473C22.9186 8.92872 22.9038 8.90665 22.8937 8.88235C22.8836 8.85805 22.8784 8.83201 22.8784 8.8057C22.8784 8.77939 22.8836 8.75334 22.8937 8.72904C22.9038 8.70475 22.9186 8.68268 22.9372 8.6641L25.0572 6.5457C24.6314 6.20338 24.1011 6.01756 23.5548 6.0193Z"
                    fill="white"
                  />
                  <path
                    d="M25.3483 6.8208L23.3611 8.8L24.9195 10.3584C25.0343 10.2778 25.1414 10.1867 25.2395 10.0864C25.6666 9.6564 25.9152 9.08072 25.9354 8.47497C25.9556 7.86923 25.7458 7.27828 25.3483 6.8208Z"
                    fill="white"
                  />
                  <path
                    d="M21.3722 10.4737H21.337C21.2957 10.4733 21.2544 10.4771 21.2138 10.4849H21.1994C21.1548 10.4945 21.111 10.5073 21.0682 10.5233L21.0346 10.5393C21.0024 10.5527 20.9714 10.5687 20.9418 10.5873L20.9066 10.6097C20.8679 10.6364 20.8315 10.6664 20.7978 10.6993L14.905 16.5936L15.6346 17.3232L21.8746 11.8465C21.9099 11.8155 21.942 11.7812 21.9706 11.7441L21.9978 11.7089C22.0191 11.6776 22.0384 11.645 22.0554 11.6113C22.065 11.5921 22.073 11.5729 22.081 11.5537C22.0918 11.5281 22.1009 11.5019 22.1082 11.4753C22.1082 11.4561 22.1194 11.4369 22.1242 11.4177C22.1321 11.378 22.1375 11.338 22.1402 11.2977V11.2449C22.1402 11.2161 22.1402 11.1873 22.1402 11.1585C22.1402 11.1297 22.1402 11.1201 22.1322 11.1009C22.1026 10.9499 22.0289 10.811 21.9204 10.7019C21.8119 10.5929 21.6735 10.5184 21.5226 10.4881H21.4922C21.4526 10.4804 21.4125 10.4756 21.3722 10.4737Z"
                    fill="white"
                  />
                  <path
                    d="M13.3962 15.1168L14.6058 16.32L20.5146 10.4112C20.7069 10.2232 20.9575 10.1064 21.225 10.08C20.1802 9.28 19.041 9.4896 13.3962 15.1168Z"
                    fill="white"
                  />
                  <path
                    d="M22.2075 12.0769L22.1355 12.1473L15.8955 17.6225L16.9563 18.6817C19.5867 16.1937 21.9211 13.8241 22.2075 12.0769Z"
                    fill="white"
                  />
                  <path
                    d="M6.64277 24.9039C6.64601 24.9153 6.65267 24.9253 6.66182 24.9328C6.67098 24.9402 6.6822 24.9447 6.69397 24.9455L9.41396 25.1327L7.88917 23.6079L6.65557 24.8399C6.64757 24.8483 6.64212 24.8587 6.63985 24.87C6.63759 24.8814 6.6386 24.8931 6.64277 24.9039Z"
                    fill="white"
                  />
                  <path
                    d="M8.17383 23.3247L9.78182 24.9327C9.80091 24.9531 9.82645 24.9663 9.85413 24.9701C9.88181 24.9739 9.90996 24.968 9.93382 24.9535C9.95875 24.9411 9.97861 24.9205 9.98999 24.8951C10.0014 24.8697 10.0036 24.8411 9.99622 24.8143L9.72582 23.6591C9.70831 23.5842 9.71627 23.5056 9.74844 23.4358C9.7806 23.366 9.83514 23.3089 9.90342 23.2735C12.7226 21.8607 14.9962 20.4063 16.665 18.9535L15.545 17.8335L13.145 18.3503L8.17383 23.3247Z"
                    fill="white"
                  />
                  <path
                    d="M15.2012 17.4944L14.5996 16.8928L13.7676 17.7232C13.7616 17.7304 13.7583 17.7395 13.7583 17.7488C13.7583 17.7582 13.7616 17.7672 13.7676 17.7744C13.7714 17.7829 13.7783 17.7898 13.7868 17.7936C13.7954 17.7974 13.805 17.798 13.814 17.7952L15.2012 17.4944Z"
                    fill="white"
                  />
                  <path
                    d="M25.4043 8.11051C25.3961 8.08533 25.3826 8.0622 25.3647 8.04267C25.3469 8.02314 25.325 8.00766 25.3006 7.99728C25.2763 7.9869 25.25 7.98185 25.2235 7.98247C25.197 7.9831 25.171 7.98938 25.1471 8.0009C25.1233 8.01242 25.1022 8.02891 25.0852 8.04926C25.0683 8.06962 25.0559 8.09336 25.0489 8.1189C25.0419 8.14444 25.0404 8.17118 25.0446 8.19733C25.0488 8.22348 25.0585 8.24844 25.0731 8.27051C25.1209 8.36674 25.1399 8.47474 25.1277 8.58148C25.1155 8.68823 25.0726 8.78917 25.0043 8.87211C24.9819 8.89921 24.9676 8.93213 24.9632 8.96703C24.9587 9.00193 24.9643 9.03738 24.9792 9.06924C24.9941 9.10111 25.0178 9.12807 25.0475 9.14699C25.0771 9.16591 25.1116 9.17601 25.1467 9.17611C25.1739 9.17582 25.2007 9.16967 25.2253 9.15807C25.2499 9.14647 25.2716 9.1297 25.2891 9.10891C25.4024 8.97122 25.4735 8.80379 25.4939 8.62669C25.5143 8.4496 25.4832 8.27037 25.4043 8.11051Z"
                    fill="#FF6C37"
                  />
                </svg>
                <p className=" text-xs">Postman</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="comfortable">
          {' '}
          <div className="flex w-full flex-wrap justify-center gap-5">
            <Card className=" min-w-32">
              <CardContent className="flex flex-col items-center justify-center gap-2 p-6 py-4">
                <img
                  src="https://www.jenkins.io/favicon.ico"
                  alt="Jenkins"
                  className="h-8 w-8"
                />
                <p className=" text-xs">Jenkins</p>
              </CardContent>
            </Card>
            <Card className=" min-w-32">
              <CardContent className="flex flex-col items-center justify-center gap-2 p-6 py-4">
                <img
                  src="https://www.sqlite.org/images/sqlite370_banner.gif"
                  alt="SQLite"
                  className="h-8 w-8"
                />
                <p className=" text-xs">SQLite</p>
              </CardContent>
            </Card>
            <Card className=" min-w-32">
              <CardContent className="flex flex-col items-center justify-center gap-2 p-6 py-4">
                <img
                  src="https://circleci.com/circleci-logo-stacked-fb.png"
                  alt="CircleCI"
                  className="h-8 w-8"
                />
                <p className=" text-xs">CircleCI</p>
              </CardContent>
            </Card>
            <Card className=" min-w-32">
              <CardContent className="flex flex-col items-center justify-center gap-2 p-6 py-4">
                <img
                  src="https://cloudinary.com/favicon.ico"
                  alt="Cloudinary"
                  className="h-8 w-8"
                />
                <p className=" text-xs">Cloudinary</p>
              </CardContent>
            </Card>
            <Card className=" min-w-32">
              <CardContent className="flex flex-col items-center justify-center gap-2 p-6 py-4">
                <img
                  src="https://avatars.githubusercontent.com/u/2810941?s=280&v=4"
                  alt="GCP"
                  className="h-8 w-8"
                />
                <p className=" text-xs">GCP</p>
              </CardContent>
            </Card>

            <Card className=" min-w-32">
              <CardContent className="flex flex-col items-center justify-center gap-2 p-6 py-4">
                <img
                  src="https://azure.microsoft.com/favicon.ico"
                  alt="Azure"
                  className="h-8 w-8"
                />
                <p className=" text-xs">Azure</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="familiar">
          <div className="flex w-full flex-wrap justify-center gap-5">
            <Card className=" min-w-32">
              <CardContent className="flex flex-col items-center justify-center gap-2 p-6 py-4">
                <img
                  src="https://reactnative.dev/img/favicon.ico"
                  alt="React Native"
                  className="h-8 w-8"
                />
                <p className=" text-xs">React Native</p>
              </CardContent>
            </Card>

            <Card className=" min-w-32">
              <CardContent className="flex flex-col items-center justify-center gap-2 p-6 py-4">
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg"
                  alt="PHP"
                  className="h-8 w-8"
                />
                <p className=" text-xs">PHP</p>
              </CardContent>
            </Card>

            <Card className=" min-w-32">
              <CardContent className="flex flex-col items-center justify-center gap-2 p-6 py-4">
                <img
                  src="https://wordpress.org/favicon.ico"
                  alt="WordPress"
                  className="h-8 w-8"
                />
                <p className=" text-xs">WordPress</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
}
