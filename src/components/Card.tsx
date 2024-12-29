import React from "react";
import Image from "next/image";
import Link from "next/link";

interface CardProps {
  id: string;
  title: string;
  description: string;
  date: string;
  category: string;
  image: string;
}

const Card: React.FC<CardProps> = ({
  id,
  title,
  description,
  date,
  category,
  image,
}) => {
  return (
    <div className="mb-12 flex items-center gap-12">
      <div className="flex-1 h-[350px] relative hidden md:block">
        <Image src={image} alt={title} fill className="w-[120px]" />
      </div>

      <div className="flex-1 flex flex-col gap-8">
        <div>
          <span className="text-gray-500">{date} - </span>
          <span className="text-red-700 font-medium">{category}</span>
        </div>

        <Link href={`/posts/${id}`}>
          <h1 className="text-3xl font-semibold my-3">{title}</h1>
        </Link>
        <p className="text-[18px] font-light text-[var(--softTextColor)]">
          {description}
        </p>
        <Link
          href={`/posts/${id}`}
          className="border-b-[1px] border-red-400 w-max py-[2px]"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
