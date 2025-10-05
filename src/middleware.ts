import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/*
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

// Middleware is now commented out to allow access to the email collection pages
// When you want to disable direct access again, uncomment the code above
