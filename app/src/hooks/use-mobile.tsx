import { useState, useEffect } from "react";
import { debounce } from "@/lib/utils";

const MOBILE_BREAKPOINT = 768; // md breakpoint in Tailwind CSS

export function useMobile() {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < MOBILE_BREAKPOINT : false
  );

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };

    const debouncedCheckMobile = debounce(checkMobile, 100);

    window.addEventListener("resize", debouncedCheckMobile);
    return () => window.removeEventListener("resize", debouncedCheckMobile);
  }, []);

  return isMobile;
}
