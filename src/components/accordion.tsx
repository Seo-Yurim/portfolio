import { ReactNode, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { AnimatePresence, motion } from "framer-motion";

interface AccordionProps {
  title: string;
  children: ReactNode;
}

export default function Accordion({ title, children }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col gap-2">
      <button onClick={() => setIsOpen(!isOpen)} className="w-fit" aria-expanded={isOpen}>
        <div className="flex items-center gap-2 hover:text-white/70 transition-colors duration-300">
          <IoIosArrowUp
            className={`w-6 h-6 transform transition-transform duration-300 ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
          />
          <p className="font-GWT text-2xl text-nowrap">{title}</p>
        </div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="pl-10 text-lg font-medium flex flex-col gap-2"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
