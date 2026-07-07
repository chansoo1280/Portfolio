"use client";
import { DarkModeToggle } from "@/components/DarkModeToggle";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useState, useEffect } from "react";
export default function Home() {
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "프론트엔드 개발자";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 150);

    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const skills = [
    "React",
    "TypeScript",
    "Next.js",
    "Tailwind CSS",
    "Redux",
    "Git",
  ];
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "현대적인 UI/UX를 갖춘 전자상거래 플랫폼",
      image:
        "https://images.unsplash.com/photo-1658297063569-162817482fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlfGVufDF8fHx8MTc2MjQyNzE2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["React", "TypeScript", "Tailwind CSS"],
      github: "https://github.com",
      demo: "https://demo.com",
    },
    {
      title: "Task Management Dashboard",
      description: "실시간 데이터 시각화 대시보드",
      image:
        "https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXNoYm9hcmQlMjBhbmFseXRpY3N8ZW58MXx8fHwxNzYyMzM1OTQ1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Next.js", "React Query", "Recharts"],
      github: "https://github.com",
      demo: "https://demo.com",
    },
  ];
  return (
    <>
      <DarkModeToggle />
      <ScrollToTop />
      <div className="min-h-screen bg-white transition-colors duration-300 dark:bg-gray-900">
        <section
          id="home"
          className="relative flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
        >
          <div className="mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 lg:px-8">
            <div className="space-y-6">
              <p className="text-gray-600 dark:text-gray-400">
                안녕하세요, 저는
              </p>
              <p className="mx-auto max-w-2xl text-xl text-gray-700 sm:text-2xl dark:text-gray-300">
                <span className="text-blue-600 dark:text-blue-400">
                  {displayedText}
                  <span className="animate-pulse">|</span>
                </span>
              </p>
              <div className="space-y-2">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl dark:text-white">
                  김찬수
                </h1>
              </div>

              <p className="text-gray-600 dark:text-gray-400">입니다.</p>

              <div className="flex flex-wrap items-center justify-center gap-4 pt-8">
                <Button size="lg" onClick={() => scrollToSection("projects")}>
                  프로젝트 보기
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => scrollToSection("contact")}
                >
                  연락하기
                </Button>
                <Button size="lg" variant="secondary" asChild>
                  <a
                    href="/resume.pdf"
                    download
                    className="flex items-center gap-2"
                  >
                    <div />
                    이력서 다운로드
                  </a>
                </Button>
              </div>

              <div className="flex items-center justify-center gap-4 pt-8">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full p-2 transition-colors hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                >
                  <div />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full p-2 transition-colors hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                >
                  <div />
                </a>
                <a
                  href="mailto:developer@example.com"
                  className="rounded-full p-2 transition-colors hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                >
                  <div />
                </a>
              </div>
            </div>

            <button
              onClick={() => scrollToSection("about")}
              className="absolute bottom-8 left-1/2 -translate-x-1/2 transform animate-bounce"
            >
              <div className="text-gray-400 dark:text-gray-500" />
            </button>
          </div>
        </section>
        <section id="about" className="bg-white py-20 dark:bg-gray-800">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="mb-6 text-4xl dark:text-white">소개</h2>
            <p className="mx-auto mb-8 max-w-2xl text-gray-700 dark:text-gray-300">
              사용자 경험을 최우선으로 생각하며, React와 TypeScript를 활용하여
              직관적이고 아름다운 웹 애플리케이션을 만듭니다.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div>{skill}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="projects" className="bg-white py-20 dark:bg-gray-900">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-4xl dark:text-white">프로젝트</h2>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {projects.map((project, index) => (
                <div key={index}>
                  <div>
                    <Card className="h-full overflow-hidden transition-shadow hover:shadow-xl dark:border-gray-700 dark:bg-gray-800">
                      <div className="aspect-video w-full overflow-hidden bg-gray-100 dark:bg-gray-700">
                        <div
                          // src={project.image}
                          // alt={project.title}
                          className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="mb-2 dark:text-white">
                          {project.title}
                        </h3>
                        <p className="mb-4 text-gray-600 dark:text-gray-400">
                          {project.description}
                        </p>
                        <div className="mb-4 flex flex-wrap gap-2">
                          {project.tags.map((tag, tagIndex) => (
                            <div key={tagIndex}>{tag}</div>
                          ))}
                        </div>
                        <div className="flex gap-3">
                          <Button variant="outline" size="sm" asChild>
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2"
                            >
                              <div />
                              Code
                            </a>
                          </Button>
                          <Button size="sm" asChild>
                            <a
                              href={project.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2"
                            >
                              <div />
                              Demo
                            </a>
                          </Button>
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section
          id="contact"
          className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800"
        >
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="mb-8 text-4xl dark:text-white">연락처</h2>

            <div>
              <div className="p-8 dark:border-gray-700 dark:bg-gray-800">
                <div className="space-y-6">
                  <div className="flex items-center justify-center gap-3">
                    <div className="text-blue-600 dark:text-blue-400" />
                    <a
                      href="mailto:developer@example.com"
                      className="text-gray-700 transition-colors hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
                    >
                      chansoo1280@naver.com
                    </a>
                  </div>

                  <div className="flex items-center justify-center gap-4 pt-4">
                    <a
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full p-2 transition-colors hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                    >
                      <div />
                    </a>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full p-2 transition-colors hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                    >
                      <div />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer className="bg-gray-900 py-8 text-white dark:bg-black">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="mb-2">© 2025 KimChanSoo</p>
              <p className="text-gray-400 dark:text-gray-500">
                Made with Next.js, TypeScript & Tailwind CSS
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
