import React from "react";
import Image from "next/image";
import Link from "next/link";

const Learning = () => {
  const blogs = [
    {
      id: "4",
      title: "Mastering Time Management for Effective Learning",
      description:
        "Time management is essential for successful learning. Discover techniques that will help you make the most of your study time and boost your learning efficiency.",
      date: "21.12.2024",
      category: "Learning",
      image: "/images/learn01.png",
    },
    {
      id: "9",
      title: "Embracing Lifelong Learning in a Rapidly Changing World",
      description:
        " In today’s fast-paced world, continuous learning is essential to stay relevant. Embracing lifelong learning opens doors to personal and professional growth.",
      date: "16.12.2024",
      category: "Learning",
      image: "/images/learn02.png",
    },
    {
      id: "10",
      title: "The Power of Active Learning: How to Retain More Information",
      description:
        " A well-structured design system can revolutionize your web development workflow. Here’s why it’s a must-have.",
      date: "15.12.2024",
      category: "Learning",
      image: "/images/learn03.png",
    },
  ];

  return (
    <div className=" flex flex-col gap-12">
      <div className=" bg-green-100 text-center text-3xl font-bold h-[50px]">
        {" "}
        Learning{" "}
      </div>

      <div className="flex flex-col gap-8">
        {blogs.map((blog) => (
          <div key={blog.id} className="flex flex-col md:flex-row gap-4">
            <div className="relative w-full md:w-[350px] h-[350px]">
              <Image
                src={blog.image}
                alt={blog.title}
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
            </div>

            <div className="flex-1 flex flex-col justify-between mb-5">
              <div className="detail">
                <span className="text-gray-500">{blog.date} - </span>
                <span className="text-red-700 font-medium">
                  {blog.category}
                </span>
              </div>

              <Link href={`/posts/${blog.id}`}>
                <h1 className="text-3xl font-semibold my-3">{blog.title}</h1>
              </Link>
              <p className="text-[18px] font-light text-[var(--softTextColor)]">
                {blog.description}
              </p>
              <Link
                href={`/posts/${blog.id}`}
                className="border-b-[1px] border-red-400 w-max py-[2px]"
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Learning;
