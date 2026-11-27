import { executeAudit } from "../lib/auditEngine.mjs";

interface Env {
  // Add environment variables if needed
}

export async function onRequest(context: { request: Request; env: Env }): Promise<Response> {
  const { request } = context;

  if (request.method === "OPTIONS") {
    return new Response(null, {
      status: 204,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    });
  }

  const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  };

  try {
    let targetUrl = "";

    if (request.method === "GET") {
      const urlObj = new URL(request.url);
      targetUrl = urlObj.searchParams.get("url") || "";
    } else if (request.method === "POST") {
      const body = (await request.json().catch(() => ({}))) as { url?: string };
      targetUrl = body.url || "";
    }

    const result = await executeAudit(targetUrl, { allowLocal: false, timeoutMs: 10000 });
    return new Response(JSON.stringify(result.body), {
      status: result.status,
      headers: corsHeaders,
    });
  } catch (err: any) {
    return new Response(
      JSON.stringify({ error: err?.message || "Internal server error during audit." }),
      { status: 500, headers: corsHeaders }
    );
  }
}
