"use client";

import { useHideable } from "@/components/hoc/hideable";
import { Button } from "@/components/ui/button";
import { TbLayersOff, TbLayersSubtract } from "react-icons/tb";

export function ToggleHideable() {
  const { hideable, setHideable } = useHideable();
  const label = hideable
    ? "Disable print visibility mode"
    : "Enable print visibility mode";

  return (
    <Button
      variant="secondary"
      title={label}
      aria-label={label}
      onClick={() => setHideable((prev) => !prev)}
    >
      {hideable ? <TbLayersOff /> : <TbLayersSubtract />}
    </Button>
  );
}
