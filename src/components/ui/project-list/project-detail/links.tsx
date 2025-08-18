import Link from "next/link";
import { IoDocumentsSharp } from "react-icons/io5";
import { LinkItem } from "@/types/project";
import { PROJECT_LINKS } from "@/constants/project";

export function Links({ links }: { links: LinkItem[] }) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2 border-b-2 border-blue-200 dark:border-white">
        <IoDocumentsSharp className="h-4 w-4" />
        <h2 className="text-xl font-bold">서비스 관련 자료</h2>
      </div>

      <div className="flex items-center gap-8">
        {links.map((link, idx) => (
          <Link
            key={idx}
            href={link.url}
            className="flex items-center gap-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="group relative w-fit rounded-full border-2 border-blue-200 p-2 transition-colors duration-300 hover:bg-blue-200 hover:text-white">
              {PROJECT_LINKS[link.label]}

              <div className="absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap rounded-full bg-blue-200 px-4 py-1 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <p className="text-white">{link.label}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
