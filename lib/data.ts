export const projectsData = [
  {
    title: "TaskGlyph",
    slug: "taskglyph",
    description:
      "A next-gen 'Local-First' workspace that combines tasks, notes, and focus timers engineered to work 100% offline.",
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
        "Many modern productivity tools rely heavily on continuous internet connectivity, causing severe disruption to user workflows in offline or low-connectivity environments.",
      challenges:
        "Ensuring strict data integrity during offline editing and handling conflict resolution seamlessly when the network reconnects, without resulting in data loss or duplicated entries.",
      architectureNodes: [
        {
          title: "1. Zero-Latency UI",
          description:
            "The application utilizes optimistic rendering, allowing the UI to update instantly upon user interaction without waiting for server validation.",
        },
        {
          title: "2. Local Persistence (Dexie.js)",
          description:
            "Data mutations are immediately written to the browser's IndexedDB, serving as the temporary, highly available source of truth.",
        },
        {
          title: "3. Background Sync Engine",
          description:
            "A custom queue monitors network status. Upon reconnection, it flushes stored actions to PostgreSQL and resolves versioning conflicts automatically.",
        },
      ],
      whyArchitecture:
        "An IndexedDB-first approach guarantees zero-latency interactions. Next.js 15 provides fast initial server-side rendering, while Dexie.js simplifies complex client-side database management.",
      keyFeatures: [
        "Zero-latency interactions backed by robust local storage.",
        "100% functional offline task and note management.",
        "Integrated Pomodoro timer that syncs directly to task history.",
        "Automated background cloud sync with timestamp conflict resolution.",
      ],
      performance:
        "Initial page load is under 800ms. Subsequent data mutations process in <5ms due to localized state execution.",
      tradeOffs:
        "Relying heavily on local state increases the initial hydration payload and makes the application dependent on varying browser storage quotas.",
      lessonsLearned:
        "Gained deep insights into distributed state management and conflict resolution strategies by engineering a custom background synchronization engine from scratch.",
    },
  },
  {
    title: "TriaGen",
    slug: "triagen",
    description:
      "An enterprise-grade Incident Management Platform featuring real-time 'War Rooms', SLA monitoring, and automated escalation pipelines.",
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
        "Traditional issue tracking tools lack real-time collaboration features, leading to delayed communication and slower incident resolution during critical system outages.",
      challenges:
        "Maintaining a high volume of active WebSocket connections and executing real-time SLA computations without blocking the Node.js event loop.",
      architectureNodes: [
        {
          title: "1. Event Trigger & Broadcast",
          description:
            "NestJS processes incident payloads and instantly broadcasts updates to all active clients in the 'War Room' via Socket.io.",
        },
        {
          title: "2. Asynchronous Offloading",
          description:
            "Resource-intensive tasks (SLA calculations, notifications) are handed off to Redis and BullMQ, keeping the main thread responsive.",
        },
        {
          title: "3. Immutable Storage",
          description:
            "Post-mortem reports and critical attachments are streamed directly to AWS S3, serving as a secure evidence locker.",
        },
      ],
      whyArchitecture:
        "NestJS offers a highly scalable, modular foundation. Offloading intensive tasks to Redis ensures the main thread remains unblocked for lightning-fast WebSocket broadcasting.",
      keyFeatures: [
        "Real-time 'War Room' dashboards with instant multi-user synchronization.",
        "Automated background SLA breach detection and escalation pipelines.",
        "Strict Role-Based Access Control (RBAC) for sensitive system logs.",
        "Fully containerized deployment via Docker and GitHub Actions.",
      ],
      performance:
        "WebSocket message delivery achieves <50ms latency. Background SLA checks process up to 1,000 items/second in Redis without impacting client performance.",
      tradeOffs:
        "Persistent WebSocket connections consume more client resources than standard HTTP polling, and running Redis alongside the main server increases infrastructure overhead.",
      lessonsLearned:
        "Mastered the limitations of Node's single-threaded nature and validated the necessity of asynchronous message queues for heavy background processing.",
    },
  },
  {
    title: "VeriStamp dApp",
    slug: "veristamp-dapp",
    description:
      "A full-stack decentralized application for creating immutable, on-chain proof of existence for any digital file.",
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
        "Establishing verifiable proof of existence and ownership for digital files typically requires centralized, trusted third parties, making the process expensive and vulnerable to tampering.",
      challenges:
        "Storing large files directly on-chain is cost-prohibitive. The primary challenge was verifying a file's existence without storing the actual file data on the blockchain.",
      architectureNodes: [
        {
          title: "1. Client-Side Hashing",
          description:
            "The browser generates a unique SHA-256 hash of the selected file locally. The physical file never leaves the user's device.",
        },
        {
          title: "2. Web3 Contract Execution",
          description:
            "Next.js utilizes wagmi to interact with the user's wallet, sending the unique hash and timestamp to the deployed Solidity smart contract.",
        },
        {
          title: "3. On-Chain Verification",
          description:
            "The contract anchors the hash to the blockchain, allowing anyone to independently verify the document's origin by querying the contract.",
        },
      ],
      whyArchitecture:
        "Processing hashes locally ensures data privacy and reduces gas costs by 99% since only a cryptographic string is stored. Next.js and RainbowKit abstract Web3 complexities for a smoother user experience.",
      keyFeatures: [
        "Zero-knowledge architecture ensuring user files are never uploaded to a server.",
        "Immutable, timestamped proof of existence anchored on the blockchain.",
        "Frictionless wallet connection and transaction signing via RainbowKit.",
        "Clean, responsive interface built with Tailwind CSS.",
      ],
      performance:
        "Local SHA-256 hashing for files up to 50MB completes in under 2 seconds. Blockchain confirmation resolves reliably within standard network block times.",
      tradeOffs:
        "The application is dependent on network gas fees, meaning transaction costs can fluctuate based on blockchain congestion.",
      lessonsLearned:
        "Developed a strong understanding of Web3 UX patterns, particularly handling transaction latency and building resilient loading states for asynchronous blockchain interactions.",
    },
  },
  {
    title: "Rephrase AI Platform",
    slug: "rephrase-ai-platform",
    description:
      "An AI-driven platform to enhance and rephrase written content, powered by advanced language models.",
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
    story: {
      problem:
        "Users often struggle to achieve the desired tone in professional writing, and existing AI tools either lack nuance or generate excessively long, uneditable responses.",
      challenges:
        "Mitigating the inherent high latency of LLM API calls to prevent users from abandoning the application while waiting for text generation.",
      architectureNodes: [
        {
          title: "1. Edge Processing",
          description:
            "A Next.js Edge Function intercepts the user's text, sanitizes the input, and dynamically structures the prompt for the LLM.",
        },
        {
          title: "2. Server-Sent Events (SSE) Stream",
          description:
            "The LLM processes the prompt and streams the output back iteratively, updating the client UI in real-time.",
        },
        {
          title: "3. Persistence & Billing",
          description:
            "Upon completion, the final text is logged to PostgreSQL and usage metrics are updated against the user's Stripe subscription.",
        },
      ],
      whyArchitecture:
        "Next.js Edge Functions facilitate immediate streaming connections, bypassing the cold-start penalties of traditional serverless environments and drastically improving perceived performance.",
      keyFeatures: [
        "Real-time text streaming for immediate visual feedback.",
        "Context-aware tone adjustments (Professional, Casual, Academic).",
        "Secure authentication flow with a historical dashboard of generations.",
        "Integrated Stripe billing to manage premium usage tiers and webhooks.",
      ],
      performance:
        "Edge streaming ensures a Time-To-First-Byte (TTFB) consistently under 800ms, providing near-instantaneous feedback to the user.",
      tradeOffs:
        "The platform maintains a strict dependency on third-party LLM uptime, requiring robust retry logic to handle potential API outages.",
      lessonsLearned:
        "Implementing streaming data via SSE significantly enhances perceived performance and user retention compared to waiting for large, monolithic response payloads.",
    },
  },
  {
    title: "Arogya (Health Vault)",
    slug: "atop-health-vault",
    description:
      "A secure digital health platform for managing medical records and connecting patients with doctors.",
    image: "/images/project-atop.png",
    liveLink: "https://arogya-for-all.vercel.app/",
    githubLink: null,
    tags: ["MERN Stack", "Next.js", "PostgreSQL", "TypeScript"],
    achievement: "🥇 1st Place - DSU Hack-O-Verse 2024",
    story: {
      problem:
        "Fragmented medical records across different healthcare providers lead to redundant testing, inefficient care, and a lack of immediate access to critical patient history.",
      challenges:
        "Balancing strict data security and encryption requirements for sensitive medical payloads with the necessity for authorized healthcare providers to access records quickly.",
      architectureNodes: [
        {
          title: "1. Strict Auth Gateway",
          description:
            "The system validates user roles (Patient vs. Doctor) via strict JWT protocols before routing to specialized dashboards.",
        },
        {
          title: "2. Pre-Storage Encryption",
          description:
            "The Node.js backend intercepts and encrypts all sensitive medical payloads prior to database insertion.",
        },
        {
          title: "3. Secure Vault Retrieval",
          description:
            "Authorized requests fetch the encrypted blob from PostgreSQL, which the server decrypts and securely delivers to the authenticated client.",
        },
      ],
      whyArchitecture:
        "While initiated on the MERN stack for rapid prototyping, migrating to PostgreSQL provided the necessary structured, relational integrity required for complex healthcare data mapping.",
      keyFeatures: [
        "Encrypted digital vault for securing prescriptions and test results.",
        "Dedicated doctor-patient portal for authorized record sharing.",
        "Emergency access protocol for first responders to view critical data.",
        "High-contrast, accessible UI optimized for diverse devices.",
      ],
      performance:
        "Optimized relational indexing in PostgreSQL ensures that retrieving comprehensive medical histories executes in under 200ms.",
      tradeOffs:
        "To meet hackathon deadlines, end-to-end client-side encryption was temporarily deferred in favor of robust server-side encryption and strict access controls.",
      lessonsLearned:
        "Careful relational database schema design is critical for secure, efficient data retrieval and preventing data leakage in complex multi-role applications.",
    },
  },
  {
    title: "Blog Platform",
    slug: "blog-platform",
    description:
      "A full-featured blogging system with CRUD functionality, protected routes, and role-based access control.",
    image: "/images/project-blog.png",
    liveLink: null,
    githubLink: "https://github.com/ramanakumar2580/blog-app.git",
    tags: ["React", "Tailwind CSS", "Node.js", "JWT"],
    story: {
      problem:
        "Traditional monolithic CMS platforms often suffer from performance bloat and lack developer flexibility for building custom, highly responsive frontend architectures.",
      challenges:
        "Implementing a robust rich-text editor that supports complex formatting while strictly preventing Cross-Site Scripting (XSS) vulnerabilities.",
      architectureNodes: [
        {
          title: "1. Client Validation",
          description:
            "The React frontend intercepts markdown input, providing a real-time preview while route guards validate the user's session.",
        },
        {
          title: "2. API Gateway & Sanitization",
          description:
            "The Express.js backend receives the payload, strictly sanitizes the HTML to remove malicious scripts, and validates JWT roles.",
        },
        {
          title: "3. Content Delivery",
          description:
            "Clean data is stored in MongoDB, and optimized REST queries deliver paginated content rapidly to the client.",
        },
      ],
      whyArchitecture:
        "A decoupled architecture utilizing a React SPA ensures a highly responsive administrative experience, while the Express backend remains lightweight as a dedicated JSON API.",
      keyFeatures: [
        "Custom rich-text editor with comprehensive markdown support.",
        "JWT-based authentication isolating administrative capabilities.",
        "Dynamic pagination and tag-based search filtering.",
        "Optimized image handling to maintain low cumulative layout shift (CLS).",
      ],
      performance:
        "Aggressive code-splitting and React component memoization reduced the initial bundle size, improving page load speeds by 45%.",
      tradeOffs:
        "As a standard React Single Page Application, out-of-the-box SEO optimization is inherently lower compared to Server-Side Rendered (SSR) alternatives.",
      lessonsLearned:
        "Gained extensive practical experience in secure authentication flows, specifically managing JWT lifecycles and implementing silent token refreshes.",
    },
  },
  {
    title: "CaseCobra E-Commerce",
    slug: "casecobra-ecommerce",
    description:
      "A modern e-commerce store for custom phone cases with a focus on a seamless user experience.",
    image: "/images/project-casecobra.png",
    liveLink: null,
    githubLink: "https://github.com/ramanakumar2580/case-cobra.git",
    tags: ["Next.js", "PostgreSQL", "Stripe", "CI/CD", "TypeScript"],
    story: {
      problem:
        "Many custom merchandise platforms offer poor visualization tools, leading to high cart abandonment rates as users struggle to preview their final product accurately.",
      challenges:
        "Building an interactive, highly performant canvas that allows users to manipulate images on a 3D-like mockup while accurately capturing final crop coordinates for manufacturing.",
      architectureNodes: [
        {
          title: "1. Interactive Canvas Preview",
          description:
            "Next.js manages client-side interactions, utilizing CSS masking and Canvas APIs to overlay images onto realistic product mockups.",
        },
        {
          title: "2. Payment Intent & Data Handoff",
          description:
            "Crop coordinates and configuration metadata are validated and securely transmitted to Stripe to generate a checkout session.",
        },
        {
          title: "3. Webhook Fulfillment",
          description:
            "Upon payment success, Stripe fires a webhook to the backend, which logs the order in PostgreSQL and updates the administrative fulfillment queue.",
        },
      ],
      whyArchitecture:
        "Next.js provides essential SEO benefits and fast load times for product pages. PostgreSQL handles the strict relational data requirements necessary for e-commerce order management.",
      keyFeatures: [
        "Fluid, drag-and-drop interactive product customizer.",
        "PCI-compliant, secure checkout flow integrated with Stripe.",
        "Administrative dashboard for tracking order fulfillment and revenue metrics.",
        "Automated CI/CD pipeline ensuring highly available, zero-downtime deployments.",
      ],
      performance:
        "Image uploads and canvas manipulations are processed locally in the browser, ensuring a highly responsive, zero-latency user experience prior to checkout.",
      tradeOffs:
        "The advanced customizer relies on modern browser APIs, which may degrade to a basic upload form on legacy or unsupported devices.",
      lessonsLearned:
        "Implementing Stripe webhooks emphasized the critical importance of idempotency in backend logic to prevent duplicate processing of financial transactions.",
    },
  },
];
