// app/components/projects/ArchitectureDiagram.tsx
"use client";

import { motion } from "framer-motion";

interface Node {
  title: string;
  description: string;
}

interface ArchitectureDiagramProps {
  nodes: Node[];
}

export function ArchitectureDiagram({ nodes }: ArchitectureDiagramProps) {
  return (
    <div className="w-full py-8">
      <div className="relative ml-4 md:ml-6 space-y-10 pb-4">
        {/* Active Data Flow Line */}
        <div className="absolute top-2 bottom-0 left-0 w-0.5 bg-gradient-to-b from-primary/80 via-primary/30 to-transparent rounded-full" />

        {nodes.map((node, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="relative pl-10 md:pl-14 group"
          >
            {/* Glowing Pulse Dot */}
            <div className="absolute -left-[7px] top-5 w-4 h-4 rounded-full bg-background border-2 border-primary group-hover:bg-primary group-hover:scale-125 transition-all duration-300 shadow-[0_0_12px_rgba(var(--primary),0.6)]" />

            {/* Workflow Node Card */}
            <div className="flex flex-col bg-card/40 hover:bg-card/80 border border-border/50 hover:border-primary/30 rounded-xl p-5 md:p-6 shadow-sm hover:shadow-md transition-all duration-300">
              <h4 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors flex items-center gap-3">
                {/* Optional: You can uncomment this if you want an explicit step badge */}
                {/* <span className="text-xs font-mono px-2 py-1 bg-primary/10 text-primary rounded-md">STEP 0{index + 1}</span> */}
                {node.title}
              </h4>
              <p className="text-base text-muted-foreground leading-relaxed">
                {node.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
