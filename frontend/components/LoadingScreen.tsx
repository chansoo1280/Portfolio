export function LoadingScreen() {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      <div className="text-center">
        <div
          className="relative"
        >
          <div
            className="text-6xl sm:text-8xl mb-4"
          >
            {'</>'}
          </div>
          
          <div
            className="flex justify-center gap-2"
          >
            {[0, 1, 2].map((index) => (
              <div
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
