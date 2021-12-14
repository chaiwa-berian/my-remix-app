import { Links, LiveReload, Outlet } from "remix";

export default function App() {
  console.log("process.env.NODE_ENV", process.env.NODE_ENV);
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>Remix: So great, it's funny!</title>
        <Links />
      </head>
      <body>
        <Outlet />
        {process.env.NODE_ENV === "development" ? <LiveReload /> : null}
      </body>
    </html>
  );
}
