import http from "node:http";
import { URL } from "node:url";
import { executeAudit } from "../functions/lib/auditEngine.mjs";

const PORT = 3001;

const server = http.createServer(async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.writeHead(204);
    res.end();
    return;
  }

  const parsedReqUrl = new URL(req.url, `http://localhost:${PORT}`);

  if (parsedReqUrl.pathname === "/api/audit") {
    const rawUrl = parsedReqUrl.searchParams.get("url") || "";
    try {
      const result = await executeAudit(rawUrl, { allowLocal: true, timeoutMs: 15000 });
      res.writeHead(result.status, { "Content-Type": "application/json" });
      res.end(JSON.stringify(result.body));
    } catch (err) {
      res.writeHead(500, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ error: err?.message || "Internal server error" }));
    }
    return;
  }

  res.writeHead(404, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ error: "Not found" }));
});

server.listen(PORT, () => {
  console.log(`[Sociodigit Audit Dev Engine] listening on http://localhost:${PORT}/api/audit`);
});
