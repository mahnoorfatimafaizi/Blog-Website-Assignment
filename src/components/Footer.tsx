import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="mt-[50px] py-[20px_0] flex flex-col md:flex-row items-center justify-between text-[var(--softTextColor)] mb-5">
      <div className="flex-1 flex flex-col gap-[14px] md:w-1/3">
        <div className="flex items-center gap-[10px]">
          <Image
            src="/images/logo.png"
            alt="lama blog"
            width={50}
            height={50}
          />
          <h1 className="text-[24px]">ExploresByMahnoor</h1>
        </div>
        <p className="font-light">
          Hello, I am Mahnoor. I am a web developer and a tech enthusiast.
        </p>
        <div className="mt-[10px] flex gap-[10px]">
          <Link href="https://www.facebook.com/">
            <Image
              src="/images/facebook.png"
              alt="Facebook"
              width={25}
              height={25}
            />
          </Link>
          <Link href="https://www.instagram.com/">
            <Image
              src="/images/instagram.png"
              alt="Instagram"
              width={25}
              height={25}
            />
          </Link>
          <Link href="https://www.tiktok.com/">
            <Image
              src="/images/tiktok.png"
              alt="TikTok"
              width={25}
              height={25}
            />
          </Link>
          <Link href="https://www.youtube.com/">
            <Image
              src="/images/youtube.png"
              alt="YouTube"
              width={25}
              height={25}
            />
          </Link>
        </div>
      </div>

      <div className="flex-1 flex justify-between flex-col md:flex-row gap-[30px] md:w-2/3 mt-6 md:mt-0">
        <div className="flex flex-col gap-[10px] font-light">
          <span className="font-bold">Links</span>
          <Link href="/">Home</Link>
          <Link href="/pages/about">About</Link>
          <Link href="/pages/contact">Contact</Link>
        </div>
        <div className="flex flex-col gap-[10px] font-light">
          <span className="font-bold">Tags</span>
          <Link href="/pages/tech">Tech</Link>
          <Link href="/pages/webdev">Web Development</Link>
          <Link href="/pages/learning">Learning</Link>
          <Link href="/pages/selfmotivation">Self Motivation</Link>
        </div>
        <div className="flex flex-col gap-[10px] font-light">
          <span className="font-bold">Social</span>
          <Link href="https://www.facebook.com/">Facebook</Link>
          <Link href="https://www.instagram.com/">Instagram</Link>
          <Link href="https://www.tiktok.com/">Tiktok</Link>
          <Link href="https://www.youtube.com/">Youtube</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
