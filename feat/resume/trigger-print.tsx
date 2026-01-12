"use client";

import { Button } from "@/components/ui/button";
import { Printer } from "lucide-react";

export function TriggerPrint() {
  return (
    <Button variant="secondary" onClick={() => window.print()}>
      <Printer />
    </Button>
  );
}
