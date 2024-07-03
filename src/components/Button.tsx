import { cn } from "@/lib/utils";

export default function Button({ children, className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn("px-4 py-2 rounded-md bg-primary text-white", className)}
      {...props}
    >
      {children}
    </button>
  );
}
