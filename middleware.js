export default function middleware(request) {
  const url = new URL(request.url);

  if (url.hostname === "admin.bizupms.com") {
    if (!url.pathname.startsWith("/admin")) {
      const rewriteUrl = new URL(
        "/admin" + (url.pathname === "/" ? "" : url.pathname),
        url.origin,
      );
      return fetch(rewriteUrl, {
        headers: request.headers,
        method: request.method,
        body: request.body,
      });
    }
  }
}

export const config = {
  matcher: ["/((?!_next|admin|js/|css/|images/|fonts/|favicon).*)"],
};
