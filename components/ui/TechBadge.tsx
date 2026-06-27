import { cn } from "@/lib/utils";

interface TechBadgeProps {
  label: string;
  size?: "sm" | "md";
  className?: string;
}

export function TechBadge({ label, size = "md", className }: TechBadgeProps) {
  return (
    <span className={cn(
      "inline-flex items-center font-mono border rounded-lg transition-all duration-200",
      "border-[#1A1D35] bg-[#0D0F1C] text-slate-400",
      "hover:border-indigo-500/40 hover:text-indigo-300 hover:bg-indigo-500/5 hover:-translate-y-0.5",
      size === "sm" && "text-xs px-2.5 py-1",
      size === "md" && "text-sm px-3.5 py-1.5",
      className
    )}>
      {label}
    </span>
  );
}
