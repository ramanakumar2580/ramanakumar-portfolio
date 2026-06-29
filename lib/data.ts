export const projectsData = [
  {
    title: "TaskGlyph",
    slug: "taskglyph",
    description:
      "A local-first productivity platform that combines tasks, notes, journals and focus sessions while remaining fully functional both online and offline.",
    image: "/images/project-TaskGlyph.png",
    liveLink: "https://taskglyph.vercel.app/",
    githubLink: "https://github.com/ramanakumar2580/TaskGlyph.git",
    tags: [
      "Local-First",
      "Next.js 15",
      "IndexedDB",
      "Dexie.js",
      "PostgreSQL",
      "Offline Sync",
    ],
    story: {
      problem:
        "Most productivity applications depend on a stable internet connection. When users lose connectivity, creating or updating tasks, notes, or journals becomes impossible, interrupting their workflow. I wanted to build an application that remains fully usable regardless of network availability.",

      challenges:
        "The biggest challenge was maintaining data consistency between local storage and the cloud. Every user action needed to work instantly while offline and synchronize automatically once the internet connection was restored without creating duplicate or conflicting records.",

      architectureNodes: [
        {
          title: "1. Local-First Data Layer",
          description:
            "All user actions, including creating tasks, notes, diary entries, and updating existing content, are first written to IndexedDB using Dexie.js. This allows the application to continue working even when there is no internet connection.",
        },
        {
          title: "2. Background Synchronization",
          description:
            "When the application detects that the device is back online, pending changes are synchronized with PostgreSQL in the background. A last-write-wins strategy is used to resolve conflicts between local and remote data.",
        },
        {
          title: "3. Integrated Platform Services",
          description:
            "Authentication is handled through NextAuth.js with Google OAuth, media uploads are stored in AWS S3, Razorpay manages Pro subscriptions, and AI-generated weekly summaries are delivered through server-side APIs.",
        },
      ],

      whyArchitecture:
        "A local-first architecture provides a better user experience because every interaction is completed immediately without depending on network availability. Dexie.js simplifies IndexedDB management, while Next.js keeps both the frontend and backend within a single codebase.",

      keyFeatures: [
        "Offline-first task, note, and diary management.",
        "Automatic background synchronization with PostgreSQL.",
        "Markdown-based notes with image uploads stored in AWS S3.",
        "Built-in Pomodoro timer integrated with daily productivity.",
        "Google authentication using NextAuth.js.",
        "AI-powered weekly productivity summaries.",
        "Freemium subscription model with Razorpay integration.",
      ],

      performance:
        "The application continues to function normally during internet interruptions by serving user interactions directly from IndexedDB. Once connectivity is restored, synchronization runs automatically in the background without interrupting the user.",

      tradeOffs:
        "Supporting both offline and online workflows adds additional complexity around synchronization, conflict resolution, and maintaining consistency across multiple devices. A local-first architecture also requires careful management of browser storage.",

      lessonsLearned:
        "Building TaskGlyph gave me practical experience designing local-first applications, working with IndexedDB through Dexie.js, implementing background synchronization, handling conflict resolution, integrating cloud storage with AWS S3, authentication using NextAuth.js, and subscription payments through Razorpay.",
    },
  },
  {
    title: "TriaGen",
    slug: "triagen",
    description:
      "A real-time incident management platform that helps remote engineering teams collaborate, track production issues, and coordinate incident response from a single workspace.",
    image: "/images/project-TriaGen.png",
    liveLink: "https://triagen.40.192.34.253.sslip.io",
    githubLink: "https://github.com/ramanakumar2580/TriaGen.git",
    tags: [
      "NestJS",
      "Next.js 15",
      "Socket.io",
      "AWS S3 & EC2",
      "Docker",
      "Redis (BullMQ)",
      "CI/CD Pipelines",
    ],
    story: {
      problem:
        "Remote engineering teams often rely on multiple tools such as chat applications, emails, and issue trackers when production incidents occur. Important updates become scattered across conversations, making it difficult to understand the current status of an incident or coordinate a response efficiently.",

      challenges:
        "The main challenge was keeping all connected users synchronized in real time while processing background tasks such as SLA monitoring, automatic escalation, and evidence management without slowing down the application.",

      architectureNodes: [
        {
          title: "1. Real-Time Collaboration",
          description:
            "NestJS receives incident events and broadcasts updates through Socket.io. Status changes, comments, assignments, acknowledgements, and notifications are immediately reflected across every connected client without requiring a page refresh.",
        },
        {
          title: "2. Background Job Processing",
          description:
            "BullMQ and Redis handle scheduled operations such as SLA monitoring and automatic escalation. Separating these tasks from the main request cycle keeps the application responsive while ensuring background jobs continue to execute reliably.",
        },
        {
          title: "3. Cloud Storage & Deployment",
          description:
            "Evidence such as screenshots, logs, and supporting documents is stored securely in AWS S3. The frontend and backend are containerized with Docker and deployed to AWS EC2 through GitHub Actions, providing a consistent deployment workflow.",
        },
      ],

      whyArchitecture:
        "The application separates real-time communication, background processing, and persistent storage into dedicated responsibilities. NestJS provides a modular backend, Socket.io enables live collaboration, and BullMQ processes scheduled work independently, making the overall system easier to maintain and extend.",

      keyFeatures: [
        "Dedicated incident rooms for real-time team collaboration.",
        "Live status updates, comments, assignments, and notifications using Socket.io.",
        "Role-based access control for administrators, responders, and team members.",
        "Automatic SLA monitoring and escalation using BullMQ with Redis.",
        "Evidence management with secure AWS S3 file storage.",
        "Post-mortem report generation for completed incidents.",
        "Dockerized deployment with GitHub Actions on AWS EC2.",
      ],

      performance:
        "Real-time communication is handled through persistent WebSocket connections, while scheduled operations such as escalation and SLA monitoring run independently in background workers. This separation allows users to continue collaborating without waiting for long-running tasks to complete.",

      tradeOffs:
        "Supporting WebSocket communication, background workers, and cloud storage increases the overall system complexity compared to a traditional CRUD application. Coordinating events across multiple services also requires careful handling to keep client state consistent.",

      lessonsLearned:
        "Building TriaGen gave me hands-on experience designing real-time applications with Socket.io, building modular backend services using NestJS, processing asynchronous jobs with BullMQ and Redis, integrating AWS S3 for file storage, and deploying containerized applications through Docker and GitHub Actions.",
    },
  },
  {
    title: "VeriStamp dApp",
    slug: "veristamp-dapp",
    description:
      "A decentralized application that creates immutable proof of existence for digital files by recording their cryptographic hash on the Ethereum blockchain.",
    image: "/images/project-veristamp.png",
    liveLink: "https://veristamp-dapp.vercel.app/",
    githubLink: "https://github.com/ramanakumar2580/veristamp-dapp.git",
    tags: [
      "Solidity",
      "Hardhat",
      "Next.js",
      "TypeScript",
      "wagmi",
      "RainbowKit",
      "Tailwind CSS",
    ],
    achievement: "🥈 2nd Place - AlgoBharat Hackathon",
    story: {
      problem:
        "Verifying the authenticity of digital documents often depends on centralized services that require users to trust a third party. I wanted to build a decentralized solution where anyone could verify a document without uploading the original file or relying on a central authority.",

      challenges:
        "The biggest challenge was proving the existence of a file without storing the actual document on-chain. The solution needed to preserve user privacy while keeping blockchain storage and transaction costs practical.",

      architectureNodes: [
        {
          title: "1. Client-Side Hash Generation",
          description:
            "The selected file is hashed directly inside the browser using keccak256 before any blockchain interaction takes place. Since only the generated hash is used, the original document never leaves the user's device.",
        },
        {
          title: "2. Smart Contract Registration",
          description:
            "The generated hash is submitted through RainbowKit and wagmi to a Solidity smart contract, where it is permanently recorded together with the wallet address and blockchain timestamp.",
        },
        {
          title: "3. Public Verification",
          description:
            "To verify a document, the application generates its hash again and compares it with the value stored on-chain. Matching hashes confirm the document has not been modified since registration.",
        },
      ],

      whyArchitecture:
        "Keeping hashing on the client protects user privacy while reducing blockchain storage requirements. Separating the smart contract and frontend into a monorepo also made development and testing easier to manage.",

      keyFeatures: [
        "Client-side document hashing using keccak256.",
        "Immutable proof of existence stored on Ethereum.",
        "Wallet integration with RainbowKit and wagmi.",
        "Public verification without uploading original files.",
        "Smart contract development and testing using Hardhat.",
      ],

      performance:
        "Only the generated hash is submitted to the blockchain, allowing verification without transferring or storing the original document.",

      tradeOffs:
        "Blockchain transactions depend on wallet availability, network congestion, and gas fees. Confirmation times also vary depending on network conditions.",

      lessonsLearned:
        "Building VeriStamp strengthened my understanding of Solidity, smart contract development, wallet integration, blockchain transactions, and designing applications that protect user privacy through client-side cryptographic operations.",
    },
  },
  {
    title: "Rephrase AI Platform",
    slug: "rephrase-ai-platform",
    description:
      "An AI-powered platform for summarizing PDF documents using multiple language models with automatic fallback between providers.",
    image: "/images/project-rephrase-ai.png",
    liveLink: "https://rephrase-ai-xvug.vercel.app/",
    githubLink: null,
    tags: [
      "Next.js",
      "TypeScript",
      "GPT-4",
      "Hugging Face",
      "Stripe",
      "Framer Motion",
    ],
    story: {
      problem:
        "Large documents can take a long time to read, and applications that depend on a single AI provider become unreliable when APIs reach rate limits or experience downtime. I wanted to build a summarization platform that continues working even when one provider is unavailable.",

      challenges:
        "Supporting multiple AI providers required handling different request formats, response structures, and failure scenarios while keeping the experience consistent for users.",

      architectureNodes: [
        {
          title: "1. Document Processing",
          description:
            "Uploaded PDF documents are processed on the server before being prepared for AI summarization. The application validates the input and generates prompts suitable for different language models.",
        },
        {
          title: "2. Multi-Provider AI Pipeline",
          description:
            "Requests are first sent to OpenAI. If the request fails because of rate limits or service availability, the application automatically retries using Google Gemini and finally Hugging Face, ensuring summarization remains available.",
        },
        {
          title: "3. Subscription Management",
          description:
            "Stripe manages subscription payments while webhook verification keeps premium access synchronized after successful transactions.",
        },
      ],

      whyArchitecture:
        "Supporting multiple AI providers reduces dependency on a single external service and improves application reliability without requiring users to retry failed requests manually.",

      keyFeatures: [
        "AI-powered PDF summarization.",
        "Automatic fallback between OpenAI, Gemini, and Hugging Face.",
        "Stripe subscription integration.",
        "Responsive interface built with Next.js and TypeScript.",
        "Interactive UI with Framer Motion animations.",
      ],

      performance:
        "The fallback pipeline automatically switches providers whenever the primary AI service is unavailable, allowing users to continue generating summaries without interruption.",

      tradeOffs:
        "Maintaining multiple AI integrations increases application complexity because each provider exposes different APIs, response formats, and usage limits.",

      lessonsLearned:
        "This project helped me gain practical experience integrating multiple AI providers, designing fallback strategies, managing payment workflows with Stripe, and building applications that remain reliable despite third-party service failures.",
    },
  },
  {
    title: "Arogya (Health Vault)",
    slug: "atop-health-vault",
    description:
      "A digital health platform that allows patients to securely manage medical records and share them with authorized healthcare professionals.",
    image: "/images/project-atop.png",
    liveLink: "https://arogya-for-all.vercel.app/",
    githubLink: null,
    tags: ["MERN Stack", "Next.js", "PostgreSQL", "TypeScript"],
    achievement: "🥇 1st Place - DSU Hack-O-Verse 2024",
    story: {
      problem:
        "Medical records are often scattered across different hospitals and clinics, making it difficult for patients and healthcare providers to access important information when it is needed. I wanted to build a centralized platform that allows patients to securely manage and share their medical history.",

      challenges:
        "Protecting sensitive healthcare data while allowing authorized doctors to access patient records required careful authentication, access control, and secure data handling throughout the application.",

      architectureNodes: [
        {
          title: "1. Authentication & Access Control",
          description:
            "Users authenticate into the application and are provided role-specific access based on whether they are a patient or a healthcare provider. Protected routes ensure users only access information they are authorized to view.",
        },
        {
          title: "2. Secure Medical Records",
          description:
            "Medical reports, prescriptions, and healthcare information are securely stored and associated with the appropriate patient records, allowing authorized users to retrieve them whenever required.",
        },
        {
          title: "3. Doctor-Patient Collaboration",
          description:
            "Patients can securely share medical information with healthcare providers, making it easier to review previous reports, prescriptions, and treatment history from a single platform.",
        },
      ],

      whyArchitecture:
        "A relational database was better suited for managing healthcare records because patient information, doctors, appointments, and medical documents have well-defined relationships that require strong consistency.",

      keyFeatures: [
        "Role-based authentication for patients and doctors.",
        "Secure digital storage of medical records.",
        "Doctor-patient record sharing.",
        "Centralized medical history management.",
        "Responsive interface built with Next.js.",
      ],

      performance:
        "Using a relational database allows medical information to remain organized while making it easier to retrieve related patient records when required.",

      tradeOffs:
        "Applications handling healthcare information require stricter security, validation, and authorization compared to typical CRUD applications, increasing overall development complexity.",

      lessonsLearned:
        "Building Arogya helped me understand role-based authorization, relational database design, secure handling of sensitive information, and designing applications where data integrity is a primary concern.",
    },
  },
  {
    title: "Blog Platform",
    slug: "blog-platform",
    description:
      "A full-stack blogging platform with authentication, role-based access control, and content management features.",
    image: "/images/project-blog.png",
    liveLink: null,
    githubLink: "https://github.com/ramanakumar2580/blog-app.git",
    tags: ["React", "Tailwind CSS", "Node.js", "MongoDB", "JWT"],
    story: {
      problem:
        "Many blogging platforms are either too complex for small projects or provide limited control over authentication and content management. I built this project to understand how a complete blogging system works from user authentication to publishing articles.",

      challenges:
        "Building a secure authentication flow while allowing administrators to manage content required careful route protection, JWT validation, and backend authorization.",

      architectureNodes: [
        {
          title: "1. Authentication Layer",
          description:
            "Users authenticate using JWT-based authentication. Protected routes ensure only authenticated users can access dashboard functionality, while administrators have additional privileges for managing content.",
        },
        {
          title: "2. Content Management",
          description:
            "Blog posts are created, updated, and deleted through REST APIs. The backend validates incoming requests before storing articles in MongoDB.",
        },
        {
          title: "3. Client Experience",
          description:
            "React provides a responsive interface for browsing articles, while administrators can manage posts through a dedicated dashboard with role-based permissions.",
        },
      ],

      whyArchitecture:
        "Separating the frontend and backend helped me understand how client applications communicate with REST APIs while keeping authentication and business logic centralized on the server.",

      keyFeatures: [
        "JWT-based authentication.",
        "Role-based access control.",
        "Create, update, and delete blog posts.",
        "Protected dashboard for administrators.",
        "Responsive React interface built with Tailwind CSS.",
      ],

      performance:
        "REST APIs return only the data required by the client, keeping communication between the frontend and backend simple and predictable.",

      tradeOffs:
        "Using JWT authentication requires careful token management and secure route protection to prevent unauthorized access.",

      lessonsLearned:
        "This project gave me practical experience building authentication systems, designing REST APIs, managing role-based authorization, and developing CRUD applications using the MERN stack.",
    },
  },
  {
    title: "CaseCobra E-Commerce",
    slug: "casecobra-ecommerce",
    description:
      "An e-commerce platform that allows users to customize phone cases, place orders, and complete secure online payments.",
    image: "/images/project-casecobra.png",
    liveLink: null,
    githubLink: "https://github.com/ramanakumar2580/case-cobra.git",
    tags: ["Next.js", "PostgreSQL", "Stripe", "TypeScript", "CI/CD"],
    story: {
      problem:
        "Customers purchasing personalized products want to preview their design before placing an order. I built this project to provide an interactive customization experience while integrating secure online payments and order management.",

      challenges:
        "The application needed to accurately capture user customizations, securely process payments, and ensure completed orders were stored correctly after successful transactions.",

      architectureNodes: [
        {
          title: "1. Product Customization",
          description:
            "Users can upload images, position them on a phone case preview, and customize their design before checkout. The application stores the final configuration for order processing.",
        },
        {
          title: "2. Secure Checkout",
          description:
            "Stripe Checkout handles payment processing while webhook events notify the backend after successful transactions, allowing completed orders to be recorded safely.",
        },
        {
          title: "3. Order Management",
          description:
            "Order information is stored in PostgreSQL and made available through an administrative dashboard where purchases can be tracked and managed.",
        },
      ],

      whyArchitecture:
        "Next.js provides a fast frontend experience while PostgreSQL maintains structured order data. Stripe simplifies payment processing and webhook handling without requiring sensitive payment information to pass through the application.",

      keyFeatures: [
        "Interactive phone case customization.",
        "Secure Stripe payment integration.",
        "Order management dashboard.",
        "PostgreSQL database integration.",
        "Next.js application built with TypeScript.",
      ],

      performance:
        "Image customization is handled in the browser, allowing users to preview changes immediately before placing an order.",

      tradeOffs:
        "Integrating payment gateways introduces asynchronous workflows because order status depends on webhook events rather than immediate client responses.",

      lessonsLearned:
        "This project helped me understand payment gateway integration, webhook processing, relational database design, and building complete e-commerce workflows using Next.js and PostgreSQL.",
    },
  },
];
