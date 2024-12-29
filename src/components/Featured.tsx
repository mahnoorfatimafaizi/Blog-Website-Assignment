"use client";

import React from "react";

import Image from "next/image";
import Link from "next/link";

interface Post {
  id: string;
  title: string;
  description: string;
  image: string;
}

interface FeaturedProps {
  post: Post;
}

const Featured = ({ post }: FeaturedProps) => {
  const { id, title, description, image } = post;
  return (
    <div className="mt-[30px]">
      <h1 className=" text-3xl md:text-5xl sm:text-2xl text-xl font-light mt-4 py-2">
        <b className="text-4xl md:text-6xl sm:text-3xl text-2xl mb-4">
          Tech & Growth Chronicles:
        </b>{" "}
        Exploring the Future of Technology, Web Development, and Personal Growth
      </h1>

      <div className="mt-[60px] flex items-center gap-[50px]">
        <div className="flex-1 h-[500px] relative hidden sm:flex">
          <Image
            src={image}
            alt="Featured post preview"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="flex-1 flex flex-col gap-[20px]">
          <h1 className="text-[40px]">{title}</h1>
          <p className="text-[20px] font-light text-softTextColor">
            {description}
          </p>

          <Link href={`/posts/${id}`}>
            <button className="bg-gray-200 text-indigo-900 px-6 py-3 mt-5 font-medium rounded-md hover:bg-gray-300">
              Read More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Featured;
