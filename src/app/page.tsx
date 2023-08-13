import React from 'react';

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center p-24">
      <svg width="200" height="100">
        <text x="10" y="40" className="outlined-text">
          mk codelab
        </text>
      </svg>
      <svg width="100" height="100">
        <circle cx="50" cy="50" r="40" className="text-blue-500 fill-current" />
      </svg>
    </main>
  );
}
