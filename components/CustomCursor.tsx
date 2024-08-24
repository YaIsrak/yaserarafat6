"use client";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Cursor } from "./ui/cursor";

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseOver = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (target.matches("a, button, .hover-target")) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <Cursor
      className="z-[1000]"
      variants={{
        initial: { scale: 1, opacity: 0.8 },
        animate: { scale: 1.2, opacity: 1 },
        exit: { scale: 1, opacity: 0.8 },
      }}
    >
      <motion.div
        animate={{
          width: isHovering ? 80 : 16,
          height: isHovering ? 32 : 16,
        }}
        whileTap={{ scale: 0.95 }}
        className={cn(
          "flex items-center justify-center rounded-[24px] bg-secondary/40 backdrop-blur-md transition-colors",
          isHovering && "bg-primary/40",
        )}
      >
        <AnimatePresence>
          {isHovering ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              className="inline-flex w-full items-center justify-center"
            >
              <div className="inline-flex items-center text-xs text-secondary">
                Click 👆
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </motion.div>
      {/* </motion.div> */}
    </Cursor>
  );
}
