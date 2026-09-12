import { useState } from "react";
import { Code2, Cpu, Database, IdCard } from "lucide-react";

const CategoryIcons = {
  Frontend: <Code2 className="text-[var(--sec)]" />,
  Programming: <Cpu className="text-[var(--sec)]" />,
  Database: <Database className="text-[var(--sec)]" />,
  자격증: <IdCard className="text-[var(--sec)]" />,
};

const SkillsList = () => {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const skills: Record<string, string[]> = {
    Frontend: ["HTML/CSS", "JavaScript"],
    Programming: ["Python", "Java", "C / C++"],
    Database: ["SQLite"],
    자격증: ["프로그래밍 기능사"],
  };

  const toggleItem = (item: string) => {
    setOpenItem(openItem === item ? null : item);
  };

  return (
    <div className="pt-3 text-left md:pt-9">
      <h3 className="text-3xl font-semibold text-[var(--white)] md:mb-6 md:text-4xl">What I do?</h3>
      <ul className="mt-4 space-y-4 text-lg">
        {Object.entries(skills).map(([category, items]) => (
          <li key={category} className="w-full">
            <div
              onClick={() => toggleItem(category)}
              className="w-full cursor-pointer overflow-hidden rounded-2xl border border-[var(--white-icon-tr)] bg-[#1414149c] text-left transition-all hover:bg-opacity-80 md:w-[400px]"
            >
              <div className="flex items-center gap-3 p-4">
                {CategoryIcons[category as keyof typeof CategoryIcons]}
                <div className="flex flex-grow items-center justify-between gap-2">
                  <div className="min-w-0 max-w-[200px] overflow-hidden md:max-w-none">
                    <span className="block truncate text-lg text-[var(--white)]">{category}</span>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className={`h-6 w-6 flex-shrink-0 transform text-[var(--white)] transition-transform ${
                      openItem === category ? "rotate-180" : ""
                    }`}
                  >
                    <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
                  </svg>
                </div>
              </div>

              <div
                className={`px-4 transition-all duration-300 ${
                  openItem === category ? "max-h-[500px] pb-4 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <ul className="space-y-2 text-sm text-[var(--white-icon)]">
                  {items.map((item, index) => (
                    <div key={index} className="flex items-center">
                      <span className="pl-1">•</span>
                      <li className="pl-3">{item}</li>
                    </div>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsList;
