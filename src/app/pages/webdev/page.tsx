import React from "react";
import Image from "next/image";
import Link from "next/link";

const WebDev = () => {
  const blogs = [
    {
      id: "2",
      title: "Next.js 15: The Future of Server-Side Rendering",
      description:
        "Next.js 15 brings several exciting new features, enhancing server-side rendering and improving performance. The latest update makes building web applications faster and more scalable than ever",
      date: "24.12.2024",
      category: "Web Development",
      image: "/images/webdev01.png",
    },
    {
      id: "7",
      title: "Tailwind CSS: The Ultimate Utility-First Framework",
      description:
        " Tailwind CSS has become a staple for modern web development, enabling developers to build responsive, aesthetically pleasing websites with ease. Here’s why it’s gaining so much traction.",
      date: "18.12.2024",
      category: "Web Development",
      image: "/images/webdev02.png",
    },
    {
      id: "8",
      title: "Design Systems: The Secret to Consistent UI/UX",
      description:
        " A well-structured design system can revolutionize your web development workflow. Here’s why it’s a must-have.",
      date: "17.12.2024",
      category: "Web Development",
      image: "/images/webdev03.png",
    },
  ];

  return (
    <div className=" flex flex-col gap-12">
      <div className=" bg-pink-100 text-center text-3xl font-bold h-[50px]">
        {" "}
        Web Development{" "}
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

export default WebDev;
