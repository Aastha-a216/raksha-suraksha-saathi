import { ReactNode } from "react";
import { Card, CardContent } from "@/components/ui/card";

interface StatsCardProps {
  icon: ReactNode;
  value: string;
  label: string;
  color?: "primary" | "safety" | "emergency";
}

export const StatsCard = ({ icon, value, label, color = "primary" }: StatsCardProps) => {
  const colorStyles = {
    primary: "text-primary",
    safety: "text-safety",
    emergency: "text-emergency"
  };

  return (
    <Card className="hover:shadow-elegant transition-smooth">
      <CardContent className="p-6 text-center">
        <div className={`flex justify-center mb-3 ${colorStyles[color]}`}>
          {icon}
        </div>
        <div className="text-2xl font-bold mb-1">{value}</div>
        <div className="text-sm text-muted-foreground">{label}</div>
      </CardContent>
    </Card>
  );
};