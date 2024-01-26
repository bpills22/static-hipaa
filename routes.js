import { Router, edgioRoutes } from '@edgio/core/router'



export default new Router()
  .get("/:path*", ({ serveStatic }) => serveStatic("src/:path*"))
  .get("/", ({ serveStatic }) => serveStatic("src/index.html"))
  // automatically adds all routes from the Node.js connector
  .use(edgioRoutes)

  .always({
    //enable-no-cache
    caching: { bypass_cache: true },

    //set geo header and req cookie
    headers: {
      set_response_headers: { "edg-user-geo": "%{geo_city}" },
      set_request_headers: { "cookie": "logged_in=false" }
    }
  })

  //HTTP > HTTPS Redirect
  .match(
    { scheme: "HTTP" },
    {
      comment: "redirect HTTP to HTTPS for requests",
      url: {
        url_redirect: { source: "(.*)", destination: "https://$1", code: 302 },
      },
    }
  );

