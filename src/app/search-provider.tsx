'use client';

import React, { Suspense } from 'react';
import SearchHandler from '../components/SearchHandler';

// Simple fallback component while search is loading
function SearchFallback() {
  return <></>;
}

export default function SearchProvider({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={<SearchFallback />}>
      <SearchHandler>
        {children}
      </SearchHandler>
    </Suspense>
  );
}
