import React from "react";
import Card from "./Card";

const CardList = () => {
  const blogs = [
    {
      id: "2",
      title: "Next.js 15: The Future of Server-Side Rendering",
      description:
        " Next.js 15 brings several exciting new features, enhancing server-side rendering and improving performance. The latest update makes building web applications faster and more scalable than ever",
      date: "24.12.2024",
      category: "Web Development",
      image: "/images/webdev01.png",
    },
    {
      id: "3",
      title: "The Power of Small Wins: Building Momentum in Your Daily Routine",
      description:
        "Achieving big goals often starts with small wins. By focusing on daily accomplishments, you can build lasting momentum that propels you toward success..",
      date: "23.12.2024",
      category: "Self Motivation",
      image: "/images/selfmoti01.png",
    },
    {
      id: "4",
      title: "Mastering Time Management for Effective Learning",
      description:
        "Time management is essential for successful learning. Discover techniques that will help you make the most of your study time and boost your learning efficiency.",
      date: "15.12.2024",
      category: "Learning",
      image: "/images/learn01.png",
    },
  ];

  return (
    <div className="flex-[5] mb-10 mt-10">
      <h1 className="text-4xl font-semibold my-4 mt-10 py-4">Recent Posts</h1>
      <div>
        {blogs.map((blog) => (
          <Card
            key={blog.id}
            id={blog.id}
            title={blog.title}
            description={blog.description}
            date={blog.date}
            category={blog.category}
            image={blog.image}
          />
        ))}
      </div>
    </div>
  );
};

export default CardList;
