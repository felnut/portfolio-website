import { useState } from "react";
import { Code2, Cpu, Database, IdCard } from "lucide-react";

const CategoryIcons = {
  Frontend: <Code2 className="text-(--sec)" />,
  Programming: <Cpu className="text-(--sec)" />,
  Database: <Database className="text-(--sec)" />,
  자격증: <IdCard className="text-(--sec)" />,
};

// 공식 브랜드 SVG(Simple Icons 기반, /public/svg). 자격증처럼 회사 로고가
// 없는 항목은 매핑에서 빠지고 기존 불릿(•)으로 표시된다.
const skillIcons: Record<string, { src: string; alt: string }[]> = {
  "HTML/CSS": [
    { src: "/svg/HTML5.svg", alt: "HTML5" },
    { src: "/svg/CSS3.svg", alt: "CSS3" },
  ],
  JavaScript: [{ src: "/svg/javaScript.svg", alt: "JavaScript" }],
  Python: [{ src: "/svg/python.svg", alt: "Python" }],
  Java: [{ src: "/svg/java.svg", alt: "Java" }],
  "C / C++": [
    { src: "/svg/c.svg", alt: "C" },
    { src: "/svg/cplusplus.svg", alt: "C++" },
  ],
  SQLite: [{ src: "/svg/sqlite.svg", alt: "SQLite" }],
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
      <h3 className="text-3xl font-semibold text-(--white) md:mb-6 md:text-4xl">What I do?</h3>
      <ul className="mt-4 space-y-4 text-lg">
        {Object.entries(skills).map(([category, items]) => (
          <li key={category} className="w-full">
            <div
              onClick={() => toggleItem(category)}
              className="hover:bg-opacity-80 w-full cursor-pointer overflow-hidden rounded-2xl border border-(--white-icon-tr) bg-[#1414149c] text-left transition-all md:w-100"
            >
              <div className="flex items-center gap-3 p-4">
                {CategoryIcons[category as keyof typeof CategoryIcons]}
                <div className="flex grow items-center justify-between gap-2">
                  <div className="max-w-50 min-w-0 overflow-hidden md:max-w-none">
                    <span className="block truncate text-lg text-(--white)">{category}</span>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className={`h-6 w-6 shrink-0 transform text-(--white) transition-transform ${
                      openItem === category ? "rotate-180" : ""
                    }`}
                  >
                    <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
                  </svg>
                </div>
              </div>

              <div
                className={`px-4 transition-all duration-300 ${
                  openItem === category ? "max-h-125 pb-4 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <ul className="space-y-2 text-sm text-(--white-icon)">
                  {items.map((item, index) => (
                    <li key={index} className="flex items-center">
                      {skillIcons[item] ? (
                        <span className="flex items-center gap-1.5 pl-1">
                          {skillIcons[item].map((icon) => (
                            <img
                              key={icon.alt}
                              src={icon.src}
                              alt={icon.alt}
                              className="h-4 w-4 object-contain opacity-70 brightness-0 invert"
                              loading="lazy"
                            />
                          ))}
                        </span>
                      ) : (
                        <span className="pl-1">•</span>
                      )}
                      <span className="pl-3">{item}</span>
                    </li>
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
