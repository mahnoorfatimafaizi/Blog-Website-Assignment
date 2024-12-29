import React from "react";
import Image from "next/image";
import Link from "next/link";

const SelfMotivation = () => {
  const blogs = [
    {
      id: "3",
      title: "The Power of Small Wins: Building Momentum in Your Daily Routine",
      description:
        "Achieving big goals often starts with small wins. By focusing on daily accomplishments, you can build lasting momentum that propels you toward success.",
      date: "23.12.2024",
      category: "Self Motivation",
      image: "/images/selfmoti01.png",
    },
    {
      id: "11",
      title: "Mastering the Art of Focus: Eliminating Distractions for Success",
      description:
        "Distractions are one of the biggest barriers to productivity. Learn how mastering focus can help you achieve your goals faster and with more efficiency.",
      date: "14.12.2024",
      category: "Self Motivation",
      image: "/images/selfmoti02.png",
    },
    {
      id: "12",
      title: "The Role of Positive Self-Talk in Achieving Your Goals",
      description:
        "Positive self-talk can be a game-changer in overcoming self-doubt and achieving your dreams. Here’s how to use affirmations to stay motivated and focused.",
      date: "13.12.2024",
      category: "Self Motivation",
      image: "/images/selfmoti03.png",
    },
  ];

  return (
    <div className=" flex flex-col gap-12">
      <div className=" bg-red-100 text-center text-3xl font-bold h-[50px]">
        {" "}
        Self Motivation{" "}
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

export default SelfMotivation;
