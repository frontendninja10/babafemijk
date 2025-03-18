"use client";

import React, { useState } from "react";
import {
  FaTwitter,
  FaFacebook,
  FaLinkedin,
  FaCopy,
  FaCheckCircle,
} from "react-icons/fa";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface ShareButtonsProps {
  url: string;
  title: string;
}

const ShareButtons = ({ url, title }: ShareButtonsProps) => {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(url);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 3000);
  };

  return (
    <>
      <h3>Share this post 💌</h3>
      <p>
        If you enjoyed this post, it would mean a lot to me if you could share
        it with your friends.
      </p>
      <div
        style={{
          width: "30%", // Changed from 100% to 50%
          height: "0",
          paddingBottom: "31.5%", // Changed from 83% to 41.5% (half of original to maintain aspect ratio)
          position: "relative",
          margin: "0 auto", // Added to center the gif
        }}
      >
        <iframe
          src="https://giphy.com/embed/6WoPOewVHFrQTK6uEz"
          width="100%"
          height="100%"
          style={{
            position: "absolute",
          }}
          frameBorder="0"
          className="giphy-embed"
          allowFullScreen
        ></iframe>
      </div>
      <p style={{ textAlign: "center", marginBottom: "40px" }}>
        <a href="https://giphy.com/gifs/lilpotates-lilpotate-lil-potate-6WoPOewVHFrQTK6uEz">
          via GIPHY
        </a>
      </p>
      <div className="flex gap-4 justify-center items-center">
        <Link
          href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter className="text-xl text-[#132052]" />
        </Link>
        <Link
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook className="text-xl text-[#132052]" />
        </Link>
        {/* <Link
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="text-xl text-[#132052]" />
        </Link> */}
        <Button
          className="text-xl text-[#132052] text-md bg-white hover:bg-green-400 hover:text-white"
          onClick={handleCopy}
        >
          {isCopied ? (
            <FaCheckCircle className="text-xl text-[#132052]" />
          ) : (
            <FaCopy className="text-xl text-[#132052]" />
          )}
          {isCopied ? "Link copied" : "Copy link"}
        </Button>
      </div>
    </>
  );
};

export default ShareButtons;
