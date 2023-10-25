import { Router, edgioRoutes } from '@edgio/core/router'



export default new Router()
.get("/:path*",({serveStatic})=> serveStatic("src/:path*"))
.get("/",({serveStatic})=> serveStatic("src/index.html"))
  // automatically adds all routes from the Node.js connector
  .use(edgioRoutes)

  //enable-no-cache
  .always({ caching: { bypass_cache: true } })

  //HTTP > HTTPS Redirect
  .match(
    { scheme: "HTTP" },
    {
      comment: "redirect HTTP to HTTPS for requests",
      url: {
        url_redirect: { source: "(.*)", destination: "https://$1", code: 302 },
      },
    }
  )

  //restrict site access to Massachusetts
  .if(
    { edgeControlCriteria: { "!==": [{ location: "region_code" }, "US-MA"] } },
    { access: { deny_access: true } }
  );

 