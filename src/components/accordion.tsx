import { ReactNode, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { AnimatePresence, motion } from "framer-motion";

interface AccordionProps {
  title: string;
  children: ReactNode;
  titleStyle?: string;
  childrenStyle?: string;
  showIcon?: boolean;
}

export default function Accordion({
  title,
  children,
  titleStyle,
  childrenStyle,
  showIcon = true,
}: AccordionProps) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="flex flex-col gap-2">
      <button onClick={() => setIsOpen(!isOpen)} aria-expanded={isOpen}>
        <div className="flex items-center gap-2">
          {showIcon && (
            <IoIosArrowUp
              className={`h-6 w-6 transform transition-transform duration-300 ${
                isOpen ? "rotate-180" : "rotate-0"
              }`}
            />
          )}

          <p className={`text-nowrap ${titleStyle}`}>{title}</p>
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={`flex flex-col gap-2 ${childrenStyle}`}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
