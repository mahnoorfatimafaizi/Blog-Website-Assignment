import React from "react";
import Image from "next/image";
import Link from "next/link";

const Tech = () => {
  const blogs = [
    {
      id: "1",
      title: "AI Takes Center Stage: How 2024 Is Shaping the Tech Landscape",
      description:
        "Explore 2024's tech revolution, where AI breakthroughs, quantum computing, and sustainable innovations are reshaping the future of technology.",
      date: "26.12.2024",
      category: "Technology",
      image: "/images/tech01.png",
    },
    {
      id: "5",
      title: "The Rise of Quantum Computing: A Glimpse into the Future",
      description:
        "Quantum computing is pushing the boundaries of what’s possible in technology, offering solutions to problems that classical computers can’t solve. As research progresses, its real-world applications are becoming clearer.",
      date: "20.12.2024",
      category: "Technology",
      image: "/images/tech02.png",
    },
    {
      id: "6",
      title: "Decentralized AI: The Future of Cybersecurity",
      description:
        "Decentralized AI is transforming cybersecurity by creating systems that are not reliant on central authorities, offering new ways to combat cyber threats. This technology is paving the way for a more secure digital world.",
      date: "15.12.2024",
      category: "Technology",
      image: "/images/tech03.png",
    },
  ];

  return (
    <div className=" flex flex-col gap-12">
      <div className=" bg-blue-100 text-center text-3xl font-bold h-[50px]">
        {" "}
        Technology{" "}
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

export default Tech;
