export default function middleware(request) {
  const url = new URL(request.url);
  
  if (url.hostname === 'admin.bizupms.com') {
    if (!url.pathname.startsWith('/admin')) {
      url.pathname = '/admin' + url.pathname;
      return Response.redirect(url, 307);
    }
  }
}

export const config = {
  matcher: '/((?!_next|admin/).*)',
};
