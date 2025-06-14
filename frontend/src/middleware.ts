import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { routes } from './routes';

// This function checks if the requested path is a valid route
function isValidRoute(path: string): boolean {
  return routes.some(r => {
    // Handle dynamic routes (like [slug])
    if (r.path.includes('[')) {
      const pattern = new RegExp('^' + r.path.replace(/\[.*?\]/g, '[^/]+') + '$');
      return pattern.test(path);
    }
    return r.path === path;
  });
}

export function middleware(request: NextRequest) {
  // Get the pathname of the request
  const path = request.nextUrl.pathname;

  // Check if the route exists
  if (!isValidRoute(path)) {
    // Redirect to 404 page for invalid routes
    return NextResponse.redirect(new URL('/404', request.url));
  }

  return NextResponse.next();
}

// Configure which routes the middleware should run on
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     * - pagead (Google Ads)
     * - ads (Google Ads)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|public|pagead|ads).*)',
  ],
}; 