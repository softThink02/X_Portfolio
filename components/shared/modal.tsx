"use client";

import { X } from "lucide-react";
import { useEffect } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/70"
        onClick={onClose}
      ></div>

      <div className="relative z-40 bg-[#362d2d] text-white rounded-xl p-6 shadow-2xl border border-gray-700 w-[90%] max-w-md mx-auto">
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-3 right-3 p-2 rounded-md hover:bg-white/10 transition"
        >
          
          <X size={20} />
        </button>

        {children}
      </div>
    </div>
  );
}
