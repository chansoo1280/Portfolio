export function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800" >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 
          className="text-4xl mb-8 dark:text-white"
        >
          연락처
        </h2>
        
        <div
        >
          <div className="p-8 dark:bg-gray-800 dark:border-gray-700">
            <div className="space-y-6">
              <div className="flex items-center justify-center gap-3">
                <div className="text-blue-600 dark:text-blue-400" />
                <a
                  href="mailto:developer@example.com"
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  chansoo1280@naver.com
                </a>
              </div>
              
              <div className="flex items-center justify-center gap-4 pt-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors dark:text-white"
                >
                  <div  />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors dark:text-white"
                >
                  <div  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
