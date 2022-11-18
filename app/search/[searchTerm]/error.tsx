'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <p className='text-red-500'>Whoops! Something went wrong.</p>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
