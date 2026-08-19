"use client";

import type { ReactNode } from "react";
import { useRegisterModal } from "./RegisterModal";

export default function RegisterModalTrigger({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const openModal = useRegisterModal();
  return (
    <button type="button" onClick={openModal} className={className}>
      {children}
    </button>
  );
}
