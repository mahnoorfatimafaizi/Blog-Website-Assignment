import React from "react";
import Featured from "@/components/Featured";
const featuredPost = {
  id: "1",
  title: "AI Takes Center Stage: How 2024 Is Shaping the Tech Landscape",
  description:
    "Explore 2024's tech revolution, where AI breakthroughs, quantum computing, and sustainable innovations are reshaping the future of technology.",
  image: "/images/tech01.png",
};

const FeaturedPost = () => {
  return (
    <div>
      <Featured post={featuredPost} />
    </div>
  );
};

export default FeaturedPost;
