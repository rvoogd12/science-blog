import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// This middleware prevents access to the email collection pages while they're under development
export function middleware(request: NextRequest) {
  // Check if the request is for a worksheet collection page
  if (request.nextUrl.pathname.startsWith('/worksheets/') && 
      !request.nextUrl.pathname.endsWith('/worksheets')) {
    
    // Redirect to the main worksheets page
    return NextResponse.redirect(new URL('/worksheets', request.url));
  }

  return NextResponse.next();
}

// Configure the paths that should be checked by this middleware
export const config = {
  matcher: '/worksheets/:path*',
};
