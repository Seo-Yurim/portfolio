import { useEffect, useRef, useState } from "react";

const tabs = ["Menu 1", "Menu 2", "Menu 3", "Menu 4"];

export default function Tab() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [indicatorStyle, setIndicatorStyle] = useState<{ left: number; width: number }>({
    left: 0,
    width: 0,
  });
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    const currentTab = tabRefs.current[activeIndex];

    if (currentTab) {
      const rect = currentTab.getBoundingClientRect();
      const parentRect = currentTab.parentElement?.getBoundingClientRect();

      if (parentRect) {
        const padding = 16;
        setIndicatorStyle({
          left: rect.left - parentRect.left - padding,
          width: rect.width + padding * 2,
        });
      }
    }
  }, [activeIndex]);

  return (
    <div className="relative inline-flex w-fit items-center gap-8 rounded-full bg-primary px-8 py-3">
      {tabs.map((label, idx) => (
        <button
          key={label}
          ref={(el) => {
            tabRefs.current[idx] = el;
          }}
          onClick={() => setActiveIndex(idx)}
          className={`z-10 text-nowrap text-center font-GWT text-lg transition-colors duration-300 hover:text-white ${
            activeIndex === idx ? "text-white" : "text-primary-foreground"
          }`}
        >
          {label}
        </button>
      ))}

      <div
        className="absolute top-[50%] h-8 translate-y-[-50%] rounded-full bg-primary-foreground transition-all duration-300"
        style={{
          left: indicatorStyle.left,
          width: indicatorStyle.width,
        }}
      />
    </div>
  );
}
