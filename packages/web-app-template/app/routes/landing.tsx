import type { Route } from "./+types/landing.ts";
import { LandingPage } from "../pages/LandingPage.tsx";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Landing() {
  return <LandingPage />;
}
