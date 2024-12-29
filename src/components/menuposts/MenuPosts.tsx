// import Image from "next/image";
// import Link from "next/link";
// import React from "react";
// import styles from "./menuPosts.module.css";

// // Defining the prop types
// interface MenuPostsProps {
//   withImage: boolean;
// }

// const MenuPosts: React.FC<MenuPostsProps> = ({ withImage }) => {
//   return (
//     <div className={styles.items}>
//       <Link href="/" className={styles.item}>
//         {withImage && (
//           <div className={styles.imageContainer}>
//             <Image src="/images/test.png" alt="" fill className={styles.image} />
//           </div>
//         )}
//         <div className={styles.textContainer}>
//           <span className={`${styles.category} ${styles.travel}`}>Travel</span>
//           <h3 className={styles.postTitle}>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit.
//           </h3>
//           <div className={styles.detail}>
//             <span className={styles.username}>John Doe</span>
//             <span className={styles.date}> - 10.03.2023</span>
//           </div>
//         </div>
//       </Link>
//       <Link href="/" className={styles.item}>
//         {withImage && (
//           <div className={styles.imageContainer}>
//             <Image src="/images/test.png" alt="" fill className={styles.image} />
//           </div>
//         )}
//         <div className={styles.textContainer}>
//           <span className={`${styles.category} ${styles.culture}`}>Culture</span>
//           <h3 className={styles.postTitle}>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit.
//           </h3>
//           <div className={styles.detail}>
//             <span className={styles.username}>John Doe</span>
//             <span className={styles.date}> - 10.03.2023</span>
//           </div>
//         </div>
//       </Link>
//       <Link href="/" className={styles.item}>
//         {withImage && (
//           <div className={styles.imageContainer}>
//             <Image src="/images/test.png" alt="" fill className={styles.image} />
//           </div>
//         )}
//         <div className={styles.textContainer}>
//           <span className={`${styles.category} ${styles.food}`}>Food</span>
//           <h3 className={styles.postTitle}>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit.
//           </h3>
//           <div className={styles.detail}>
//             <span className={styles.username}>John Doe</span>
//             <span className={styles.date}> - 10.03.2023</span>
//           </div>
//         </div>
//       </Link>
//       <Link href="/" className={styles.item}>
//         {withImage && (
//           <div className={styles.imageContainer}>
//             <Image src="/images/test.png" alt="" fill className={styles.image} />
//           </div>
//         )}
//         <div className={styles.textContainer}>
//           <span className={`${styles.category} ${styles.fashion}`}>Fashion</span>
//           <h3 className={styles.postTitle}>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit.
//           </h3>
//           <div className={styles.detail}>
//             <span className={styles.username}>John Doe</span>
//             <span className={styles.date}> - 10.03.2023</span>
//           </div>
//         </div>
//       </Link>
//     </div>
//   );
// };

// export default MenuPosts;

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const MenuPosts = () => {
  const blogs = [
    {
      id: '12',
      title: 'The Role of Positive Self-Talk in Achieving Your Goals',
      description: 'Positive self-talk can be a game-changer in overcoming self-doubt and achieving your dreams. Here’s how to use affirmations to stay motivated and focused.',
      date: '13.12.2024',
      category: 'Self Motivation',
      image: '/images/selfmoti03.png',
    },
    {
      id: '9',
      title: 'Embracing Lifelong Learning in a Rapidly Changing World',
      description: ' In today’s fast-paced world, continuous learning is essential to stay relevant. Embracing lifelong learning opens doors to personal and professional growth.',
      date: '16.12.2024',
      category: 'Learning',
      image: '/images/learn02.png',
    },
    {
      id: '7',
      title: 'Tailwind CSS: The Ultimate Utility-First Framework',
      description: ' Tailwind CSS has become a staple for modern web development, enabling developers to build responsive, aesthetically pleasing websites with ease. Here’s why it’s gaining so much traction.',
      date: '18.12.2024',
      category: 'Web Development',
      image: '/images/webdev02.png',
    },
    {
      id: '6',
      title: 'Decentralized AI: The Future of Cybersecurity',
      description: 'Decentralized AI is transforming cybersecurity by creating systems that are not reliant on central authorities, offering new ways to combat cyber threats. This technology is paving the way for a more secure digital world.',
      date: '15.12.2024',
      category: 'Technology',
      image: '/images/tech03.png',
    },
  ];

  return (
    <div className="container mt-[35px] mb-[60px] flex flex-col gap-[35px]">
      {blogs.map((blog) => (
        <div key={blog.id} className="flex items-center gap-[20px]">
          {/* Image Container */}
          <div className="relative h-[70px] w-[70px]">
            <Image
              src={blog.image}
              alt={blog.title}
              layout="fill"
              objectFit="cover"
              className="rounded-full border-[3px] border-lightgray"
            />
          </div>

          {/* Blog Content */}
          <div className="flex-1 flex flex-col gap-[5px]">
            {/* Date and Category */}
            <div>
              <span className="text-gray-500">{blog.date} - </span>
              <span className="text-gray-500">{blog.category}</span>
            </div>
            
            {/* Title with Link */}
            <Link href={`/posts/${blog.id}`}>
              <h1 className="text-[18px] font-medium text-[var(--softTextColor)]">{blog.title}</h1>
            </Link>

            {/* Description */}
            <p className="text-[12px]">{blog.description}</p>

            {/* Read More Link */}
            <Link href={`/posts/${blog.id}`} className="border-b-[1px] border-red-400 w-max py-[2px]">
              Read More
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuPosts;

