'use client';

import React from 'react';
import SearchHandler from '../components/SearchHandler';

export default function SearchProvider({ children }: { children: React.ReactNode }) {
  return (
    <SearchHandler>
      {children}
    </SearchHandler>
  );
}
