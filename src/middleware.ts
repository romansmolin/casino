import createMiddleware from 'next-intl/middleware';
import { routing } from './shared/lib/i18n/routing';
import { NextRequest } from 'next/server';
 
// export default createMiddleware(routing);
const handleI18nRouting = createMiddleware(routing);
export function middleware(request: NextRequest) {
  const res = handleI18nRouting(request);
  const {headers, url} = request;

  console.log(res.headers.get('x-middleware-request-x-next-intl-locale'));
  
  return res;
}
 
export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(ru|en)/:path*']
};

