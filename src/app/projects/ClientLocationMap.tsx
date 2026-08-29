"use client";

import { useState, useEffect } from "react";

export default function ClientLocationMap() {
  const [MapComponent, setMapComponent] = useState<React.ComponentType | null>(
    null,
  );

  useEffect(() => {
    // Only import the map component on the client side
    import("../components/InteractiveMap/InteractiveMap").then((mod) => {
      setMapComponent(() => mod.default);
    });
  }, []);

  // Show a placeholder while the map is loading on the client
  if (!MapComponent) {
    return <div className="h-[600px] w-full bg-neutral-100" />;
  }

  return <MapComponent />;
}
