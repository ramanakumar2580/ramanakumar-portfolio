// lib/data.ts
export const projectsData = [
  {
    title: "Rephrase AI Platform",
    slug: "rephrase-ai-platform",
    description:
      "An AI-driven platform to enhance and rephrase written content, powered by advanced language models.",
    longDescription:
      "Rephrase AI is a sophisticated web application designed to serve as an intelligent writing assistant. By leveraging the power of advanced language models like GPT-4, the platform can analyze user-provided text and generate high-quality alternative phrasing. It's built for a wide audience, including students, content creators, and professionals who need to refine their writing for clarity, tone, and impact. The architecture is built on Next.js for a fast, server-rendered frontend, ensuring a smooth user experience. The backend is designed to be scalable and resilient, capable of handling numerous concurrent requests to the AI models while providing users with real-time feedback on the rephrasing process.",
    image: "/images/project-rephrase-ai.png",
    liveLink: "https://rephrase-ai-xvug.vercel.app/",
    githubLink: null,
    tags: [
      "Next.js",
      "TypeScript",
      "GPT-4",
      "Hugging Face",
      "PostgreSQL",
      "Stripe",
    ],
  },
  {
    title: "CaseCobra E-Commerce",
    slug: "casecobra-ecommerce",
    description:
      "A modern e-commerce store for custom phone cases with a focus on a seamless user experience.",
    longDescription:
      "CaseCobra is a full-stack e-commerce solution that demonstrates a complete product customization and purchasing flow. Users can upload images, select different case materials, and preview their custom designs in a 3D-like interface before purchasing. The application is built with a robust Next.js frontend and a PostgreSQL backend to manage user data, orders, and product information. It integrates the Stripe API for secure payment processing. This project showcases key e-commerce functionalities, including state management for the shopping cart, a secure authentication system, and an admin dashboard for order fulfillment.",
    image: "/images/project-casecobra.png",
    liveLink: null,
    githubLink: "https://github.com/ramanakumar2580/case-cobra.git",
    tags: ["Next.js", "PostgreSQL", "Stripe", "CI/CD", "TypeScript"],
  },
  {
    title: "Blog Platform",
    slug: "blog-platform",
    description:
      "A full-featured blogging system with CRUD functionality, protected routes, and role-based access control.",
    longDescription:
      "This project is a comprehensive Content Management System (CMS) for a modern blog. It allows authors to create, edit, and publish articles through a secure and intuitive interface. Key features include JWT-based authentication for protected routes, role-based access control to distinguish between users and administrators, and a clean, readable design optimized for content delivery. The frontend was heavily optimized using techniques like memoization and code-splitting to boost page load speeds by 45%.",
    image: "/images/project-blog.png",
    liveLink: null,
    githubLink: "https://github.com/ramanakumar2580/blog-app.git",
    tags: ["React", "Tailwind CSS", "Node.js", "JWT"],
  },
  {
    title: "Arogya (Health Vault)",
    slug: "atop-health-vault",
    description:
      "A secure digital health platform for managing medical records and connecting patients with doctors.",
    longDescription:
      "Born from a winning hackathon entry, 'Arogya For All' is a socially impactful application designed to empower users by giving them control over their medical data. It acts as a secure digital health vault where individuals can store, manage, and share their health records with medical professionals. Built with a strong emphasis on data privacy, the application uses modern encryption standards and a secure authentication system to protect sensitive information. This project showcases the practical application of web technology to solve real-world problems, demonstrating skills in building secure, data-intensive applications with a user-centric design.",
    image: "/images/project-atop.png",
    liveLink: "https://arogya-for-all.vercel.app/",
    githubLink: null,
    tags: ["MERN Stack", "Next.js", "PostgreSQL", "TypeScript"],
  },
];
