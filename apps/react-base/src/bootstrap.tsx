import { createRoot } from "react-dom/client";
import { App } from "@/base/components/app";

export function bootstrap(target: HTMLElement) {
    createRoot(target).render(<App />);
}
