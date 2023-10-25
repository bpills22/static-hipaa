import { Router, edgioRoutes } from '@edgio/core/router'



export default new Router()
.get("/:path*",({serveStatic})=> serveStatic("src/:path*"))
.get("/",({serveStatic})=> serveStatic("src/index.html"))
  // automatically adds all routes from the Node.js connector
  .use(edgioRoutes)

  //enable-no-cache
  .always({ caching: { bypass_cache: true } });

  //redirect HTTP > HTTPS
  .match(
    { scheme: "HTTP" },
    {
      comment: "redirect HTTP to HTTPS for all requests",
      url: {
        url_redirect: {
          source: "(.*)",
          destination: "https://%{host}$1",
          code: 302,
        },
      },
    }
  );