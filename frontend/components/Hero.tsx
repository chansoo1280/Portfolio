import { Button } from './ui/button';
import { useState, useEffect } from 'react';

export function Hero() {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = '프론트엔드 개발자';

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
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="space-y-6">
          <p className="text-gray-600 dark:text-gray-400">안녕하세요, 저는</p>
          <p 
            className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto"
          >
            <span className="text-blue-600 dark:text-blue-400">
              {displayedText}
              <span className="animate-pulse">|</span>
            </span>
          </p>
          <div 
            className="space-y-2"
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl dark:text-white">
              김찬수
            </h1>
          </div>

            <p className="text-gray-600 dark:text-gray-400">입니다.</p>


          <div 
            className="flex items-center justify-center gap-4 pt-8 flex-wrap"
          >
            <Button
              size="lg"
              onClick={() => scrollToSection('projects')}
            >
              프로젝트 보기
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('contact')}
            >
              연락하기
            </Button>
            <Button
              size="lg"
              variant="secondary"
              asChild
            >
              <a
                href="/resume.pdf"
                download
                className="flex items-center gap-2"
              >
                <div/>
                이력서 다운로드
              </a>
            </Button>
          </div>

          <div 
            className="flex items-center justify-center gap-4 pt-8"
          >
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors dark:text-white"
            >
              <div />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors dark:text-white"
            >
              <div />
            </a>
            <a
              href="mailto:developer@example.com"
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors dark:text-white"
            >
              <div />
            </a>
          </div>
        </div>

        <button
          onClick={() => scrollToSection('about')}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          < div className="text-gray-400 dark:text-gray-500" />
        </button>
      </div>
    </section>
  );
}
