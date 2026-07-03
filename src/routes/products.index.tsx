import { createFileRoute, redirect } from "@tanstack/react-router";

// Products are discovered from the navbar mega menu; there is no separate catalogue page.
export const Route = createFileRoute("/products/")({
  beforeLoad: () => {
    throw redirect({ to: "/" });
  },
});
