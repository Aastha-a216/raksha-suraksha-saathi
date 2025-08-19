import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface PresentationSlideProps {
  children: ReactNode;
  className?: string;
  background?: "gradient" | "subtle" | "white";
}

export const PresentationSlide = ({ 
  children, 
  className,
  background = "white" 
}: PresentationSlideProps) => {
  const backgroundStyles = {
    gradient: "bg-gradient-hero",
    subtle: "bg-gradient-subtle", 
    white: "bg-card"
  };

  return (
    <div className={cn(
      "min-h-screen flex flex-col justify-center items-center p-8 transition-smooth",
      backgroundStyles[background],
      className
    )}>
      <div className="max-w-6xl w-full mx-auto">
        {children}
      </div>
    </div>
  );
};