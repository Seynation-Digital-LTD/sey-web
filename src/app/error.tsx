'use client'; // Error components must be Client Components

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-black text-white px-4">
      <h2 className="mb-4 text-2xl font-bold font-mina">Something went wrong!</h2>
      <p className="mb-8 text-gray-400 font-inter text-center max-w-md">
        We encountered an unexpected error. Our team has been notified.
        <br />
        <span className="text-red-500 text-sm mt-4 block p-4 border border-red-500/20 rounded-lg bg-red-500/5">
          {error.message || "Unknown Error"}
        </span>
      </p>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
        className="rounded-full bg-primaryOne px-8 py-3 text-sm font-bold text-white transition-transform hover:scale-105 active:scale-95"
      >
        Try again
      </button>
    </div>
  );
}
