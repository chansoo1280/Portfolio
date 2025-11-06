export function AboutSkills() {
  const isInView = true;
  // const isInView = useInView(ref, { once: true, amount: 0.3 });

  const skills = [
    'React',
    'TypeScript',
    'Next.js',
    'Tailwind CSS',
    'Redux',
    'Git',
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 
          className="text-4xl mb-6 dark:text-white"
        >
          소개
        </h2>
        <p 
          className="text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto"
        >
          사용자 경험을 최우선으로 생각하며, React와 TypeScript를 활용하여 
          직관적이고 아름다운 웹 애플리케이션을 만듭니다.
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          {skills.map((skill, index) => (
            <div
              key={index}
            >
              <div>
                {skill}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
