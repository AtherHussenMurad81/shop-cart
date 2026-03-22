import { useEffect, useRef } from "react";

export function useOutsideClick<T extends HTMLElement>(callback: () => void) {
  const ref = useRef<T>(null);
  useEffect(() => {
    const handelClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        callback();
      }
    };
    document.addEventListener("mousedown", handelClickOutside);
    return () => {
      document.removeEventListener("mousedown", handelClickOutside);
    };
  }, [callback]);
  return ref;
}
