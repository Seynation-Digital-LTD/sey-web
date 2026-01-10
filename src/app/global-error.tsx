'use client';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <div className="flex h-screen w-full flex-col items-center justify-center bg-black text-white px-4 font-sans">
          <h2 className="mb-4 text-2xl font-bold">Something went wrong!</h2>
          <p className="mb-8 text-gray-400 text-center max-w-md">
            A critical error occurred.
          </p>
          <button
            onClick={() => reset()}
            className="rounded-full bg-white text-black px-8 py-3 text-sm font-bold transition-transform hover:scale-105 active:scale-95"
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
