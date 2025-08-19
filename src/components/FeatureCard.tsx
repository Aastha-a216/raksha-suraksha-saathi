import { ReactNode } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  variant?: "default" | "safety" | "emergency";
  className?: string;
}

export const FeatureCard = ({ 
  icon, 
  title, 
  description, 
  variant = "default",
  className 
}: FeatureCardProps) => {
  const variantStyles = {
    default: "hover:shadow-elegant border-primary/20",
    safety: "hover:shadow-safety border-safety/20 bg-safety/5",
    emergency: "hover:shadow-glow border-emergency/20 bg-emergency/5"
  };

  return (
    <Card className={cn(
      "transition-smooth hover:scale-105 border-2",
      variantStyles[variant],
      className
    )}>
      <CardContent className="p-6 text-center">
        <div className="flex justify-center mb-4 text-primary">
          {icon}
        </div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm">{description}</p>
      </CardContent>
    </Card>
  );
};