// app/components/projects/TechStackBadge.tsx
export function TechStackBadge({ name }: { name: string }) {
  return (
    <span className="px-4 py-2 rounded-lg bg-muted/50 text-foreground text-sm font-semibold border border-border/50 shadow-sm transition-all duration-300 hover:bg-muted hover:scale-105 hover:border-foreground/20 cursor-default">
      {name}
    </span>
  );
}
