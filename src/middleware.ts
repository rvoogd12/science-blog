import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Empty middleware function that just passes through all requests
export function middleware(request: NextRequest) {
  return NextResponse.next();
}

// Empty matcher to avoid applying this middleware to any routes
export const config = {
  matcher: []
};

/* DISABLED MIDDLEWARE - UNCOMMENT TO BLOCK ACCESS TO WORKSHEET PAGES
// This middleware prevents access to the email collection pages while they're under development
export function middleware(request: NextRequest) {
  // Allow access to PDF files
  if (request.nextUrl.pathname.endsWith('.pdf')) {
    return NextResponse.next();
  }
  
  // Check if the request is for a worksheet collection page (but not the main worksheets page)
  if (request.nextUrl.pathname.startsWith('/worksheets/') && 
      !request.nextUrl.pathname.endsWith('/worksheets')) {
    
    // Redirect to the main worksheets page
    return NextResponse.redirect(new URL('/worksheets', request.url));
  }

  return NextResponse.next();
}

// Configure the paths that should be checked by this middleware
export const config = {
  matcher: [
    // Match all paths under /worksheets except for the main /worksheets page
    '/worksheets/:path*'
  ]
};
*/
