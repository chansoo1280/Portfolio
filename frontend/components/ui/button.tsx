import * as React from "react";

import { cn } from "./utils";

function Button({
  className,
    variant,
    size,
    asChild,
  ...props
}: React.ComponentProps<"button"> & {
  variant? : string
  size? : string
  asChild? : boolean
}) {

  return (
    <button
      data-slot="button"
      {...props}
    >
      </button>
  );
}

export { Button };
