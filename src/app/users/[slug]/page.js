"use client";
import { use } from "react";
import { useParams } from "next/navigation";
import ShinyText from "../../../components/landing/shinyText";

export default function BlogPostPage({ params }) {
  const { slug } = use(params);

  return (
    <div className="flex flex-row min-h-screen justify-center items-center">
      <p className="text-gray-900 text-7xl dark:text-white center">
        {"Welcome " + slug}
      </p>
    </div>
  );
}
