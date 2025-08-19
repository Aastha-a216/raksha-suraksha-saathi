import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface SlideNavigationProps {
  currentSlide: number;
  totalSlides: number;
  onPrevious: () => void;
  onNext: () => void;
}

export const SlideNavigation = ({ 
  currentSlide, 
  totalSlides, 
  onPrevious, 
  onNext 
}: SlideNavigationProps) => {
  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-4 bg-card/90 backdrop-blur-sm rounded-full px-6 py-3 shadow-elegant">
      <Button
        variant="ghost"
        size="sm"
        onClick={onPrevious}
        disabled={currentSlide === 0}
        className="rounded-full"
      >
        <ChevronLeft className="w-4 h-4" />
      </Button>
      
      <div className="flex gap-2">
        {Array.from({ length: totalSlides }, (_, index) => (
          <div
            key={index}
            className={cn(
              "w-2 h-2 rounded-full transition-smooth",
              index === currentSlide 
                ? "bg-primary" 
                : "bg-muted-foreground/30"
            )}
          />
        ))}
      </div>
      
      <Button
        variant="ghost"
        size="sm"
        onClick={onNext}
        disabled={currentSlide === totalSlides - 1}
        className="rounded-full"
      >
        <ChevronRight className="w-4 h-4" />
      </Button>
      
      <span className="text-sm text-muted-foreground ml-2">
        {currentSlide + 1} / {totalSlides}
      </span>
    </div>
  );
};