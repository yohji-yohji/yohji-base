import { defineConfig } from "vite";

function mockAdminAjax() {
  const handler = (req, res, next) => {
    const url = req.url ? req.url.split("?")[0] : "";

    if (req.method !== "POST" || url !== "/wp-admin/admin-ajax.php") {
      next();
      return;
    }

    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    req.on("end", () => {
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json; charset=utf-8");
      res.end(
        JSON.stringify({
          result: true,
          action: body.includes("submit_contact_form")
            ? "submit_contact_form"
            : null,
        }),
      );
    });
  };

  return {
    name: "mock-admin-ajax",
    configureServer(server) {
      server.middlewares.use(handler);
    },
    configurePreviewServer(server) {
      server.middlewares.use(handler);
    },
  };
}

export default defineConfig({
  plugins: [mockAdminAjax()],
  server: {
    host: "0.0.0.0",
    port: 4173,
  },
  preview: {
    host: "0.0.0.0",
    port: 4173,
  },
});
