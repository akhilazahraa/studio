"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Info, X, Download } from "lucide-react";

export default function DownloadBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="bg-accent text-accent-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3">
          <div className="flex items-center gap-4">
            <Download className="h-6 w-6" />
            <div className="text-sm font-medium">
              <p>
                To download your project, click the <span className="font-bold">More</span> menu (three dots icon) in the top-right corner of the screen, then select <span className="font-bold">Download as zip</span>.
              </p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsVisible(false)}
            className="hover:bg-accent/80"
          >
            <X className="h-5 w-5" />
            <span className="sr-only">Dismiss</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
