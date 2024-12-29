import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const About = () => {
  return (
    <div className="container mt-[35px] mb-[60px] px-4">
      
      <h1 className="text-[32px] font-bold text-center text-[var(--primaryTextColor)] mb-[20px]">
        About Explore&apos;s by Mahnoor
      </h1>

      
      <div className="flex justify-center mb-[30px]">
        <div className="relative h-[300px] w-[250px]">
          <Image
            src="/images/about.png" 
            alt="Mahnoor"
            layout="fill"
            objectFit="cover"
            className="rounded-full border-4 border-indigo-900"
          />
        </div>
      </div>

      
      <div className="flex flex-col items-center gap-[20px] text-[18px] text-gray-700">
        <p className="max-w-3xl text-center">
          Welcome, I&apos;m Mahnoor! Happy to have you here. This is a dummy blog website created by me. This is 
          my GIAIC project.
        </p>
        <p className="max-w-3xl text-center">
          I created it using Next.js 15, TypeScript, and Tailwind CSS. I do dynamic routing, create React components, and many more.
        </p>
        <p className="max-w-3xl text-center">
          Thanks for visiting! Don&apos;t forget to give feedback on my LinkedIn Account.
        </p>

        <Link href="https://www.linkedin.com/in/mahnoor-fatima-f-76782b257/">
          <button className="bg-gray-200 text-indigo-900 px-6 py-3 mt-5 font-medium rounded-md hover:bg-gray-300">
            My LinkedIn Account
          </button>
        </Link>
      </div>
    </div>
  );
};

export default About;




