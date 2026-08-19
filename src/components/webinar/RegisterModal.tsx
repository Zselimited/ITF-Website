"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import FullRegisterForm from "./FullRegisterForm";

const RegisterModalContext = createContext<() => void>(() => {});

export function useRegisterModal() {
  return useContext(RegisterModalContext);
}

export function RegisterModalProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <RegisterModalContext.Provider value={() => setOpen(true)}>
      {children}
      {open && (
        <div
          className="fixed inset-0 z-[100] overflow-y-auto bg-ink/70 px-4 py-10 backdrop-blur-sm"
          onClick={(e) => {
            if (e.target === e.currentTarget) setOpen(false);
          }}
        >
          <div className="relative mx-auto w-full max-w-xl">
            <button
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="absolute -top-3 -right-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-ink text-lg text-cream shadow-lg hover:bg-[#0a3335]"
            >
              ✕
            </button>
            <FullRegisterForm />
          </div>
        </div>
      )}
    </RegisterModalContext.Provider>
  );
}
