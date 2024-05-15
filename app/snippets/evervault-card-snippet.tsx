import React from "react";
import { EvervaultCard, Icon } from "@/components/ui/evervault-card";

export function EvervaultCardSnippet() {
  return (
    <div className="border  flex flex-col items-start max-w-sm mx-auto p-4 relative h-[30rem]">
      <Icon className="absolute h-6 w-6 -top-3 -left-3 " />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 " />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 " />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 " />

      <EvervaultCard text="hover" />

      <h2 className="  mt-4 text-sm font-light">
        Hover over this card to reveal an awesome effect. Running out of copy
        here.
      </h2>
      <p className="text-sm border font-light   rounded-full mt-4   px-2 py-0.5">
        Watch me hover
      </p>
    </div>
  );
}
