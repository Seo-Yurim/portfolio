import { useEffect, useRef, useState } from "react";

export default function Tab({
  categorys,
  setCategory,
  width = "100%",
}: {
  categorys: string[];
  setCategory: React.Dispatch<React.SetStateAction<string>>;
  width?: string;
}) {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [indicatorStyle, setIndicatorStyle] = useState<{ left: number; width: number }>({
    left: 0,
    width: 0,
  });
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const handleClick = (label: string, idx: number) => {
    setActiveIndex(idx);
    setCategory(label);
  };

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
    <div
      style={{ width: width }}
      className="relative inline-flex items-center justify-between rounded-full bg-primary px-8 py-3 max-md:px-4 max-md:py-2"
    >
      {categorys?.map((label, idx) => (
        <button
          key={label}
          ref={(el) => {
            tabRefs.current[idx] = el;
          }}
          onClick={() => handleClick(label, idx)}
          className={`z-10 text-nowrap text-center font-GWT text-lg transition-colors duration-300 hover:text-white max-md:text-xs ${
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
