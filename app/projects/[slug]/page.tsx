"use client";

import { useParams } from "next/navigation";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default function ProjectDetailPage() {
  const params = useParams();
  const slug = params.slug;
  const project = projectsData.find((p) => p.slug === slug);

  useEffect(() => {
    if (project) {
      document.title = `${project.title} | Ramana Kumar`;
    }
  }, [project]);

  if (!project) {
    return (
      <div className="flex justify-center items-center w-full py-20">
        <h1 className="text-2xl text-black dark:text-white">
          Project Not Found
        </h1>
      </div>
    );
  }

  return (
    <div className="w-full flex items-start justify-center py-12">
      <div className="max-w-6xl mx-auto pt-20 pb-20 px-4 sm:px-6 lg:px-8">
        {/* --- Image Section --- */}
        <div className="max-w-4xl mx-auto">
          <div className="relative w-full aspect-video bg-gray-100 dark:bg-gray-900/50 rounded-lg border border-gray-200 dark:border-gray-800 overflow-hidden mb-12">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-contain p-4 sm:p-8"
            />
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* --- Header --- */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-y-4 gap-x-8 mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-black dark:text-white leading-tight flex-shrink-0">
              {project.title}
            </h1>
            <div className="flex flex-wrap gap-2 md:justify-end">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-neutral-300 text-xs font-medium px-3 py-1 rounded-full border border-gray-300 dark:border-gray-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <hr className="my-8 border-gray-200 dark:border-gray-800" />

          {/* --- Long Description --- */}
          <div className="prose prose-lg max-w-none text-gray-600 dark:text-neutral-400 leading-relaxed">
            <p>{project.longDescription}</p>
          </div>

          {/* --- Links --- */}
          <div className="mt-12 flex justify-start flex-wrap gap-4">
            {project.liveLink && (
              <Link
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
                View Live Site
              </Link>
            )}
            {project.githubLink && (
              <Link
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 font-semibold text-white bg-gray-800 dark:bg-gray-700 rounded-lg hover:bg-black dark:hover:bg-gray-600 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
                View on GitHub
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
