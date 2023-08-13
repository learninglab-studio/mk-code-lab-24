import BigTitle from '@/components/BigTitle';
import React from 'react';

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center p-24">
      <BigTitle>mk codelab</BigTitle>
      <svg width="100" height="100">
        <circle cx="50" cy="50" r="40" className="text-blue-500 fill-current" />
      </svg>
    </main>
  );
}
