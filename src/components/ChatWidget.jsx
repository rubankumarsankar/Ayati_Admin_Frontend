import React, { useEffect, useRef, useState } from "react";

/** Hard-coded API base (change for prod if needed) */
const API_BASE = "http://localhost:8787";

const ASK_URL = `${API_BASE}/api/ask`;
const PING_URL = `${API_BASE}/api/ping`;
const INGEST_URL = `${API_BASE}/api/ingest`;
const STATUS_URL = `${API_BASE}/api/status`;

export default function ChatWidget({ endpoint = ASK_URL, title = "Ask Ayati" }) {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hi! 👋 Ask me anything  ,  I can answer general questions or guide you to the right page on this website.",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [online, setOnline] = useState(null);
  const [ingesting, setIngesting] = useState(false);
  const endRef = useRef(null);

  /** Auto-scroll */
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  /** Quick health check when panel opens */
  useEffect(() => {
    if (!open) return;
    let cancelled = false;
    (async () => {
      try {
        const r = await fetch(PING_URL);
        if (!cancelled) setOnline(r.ok);
      } catch {
        if (!cancelled) setOnline(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [open]);

  const send = async () => {
    const q = input.trim();
    if (!q || loading) return;

    setInput("");
    setMessages((m) => [...m, { role: "user", content: q }]);
    setLoading(true);

    const page =
      typeof window !== "undefined" && typeof document !== "undefined"
        ? {
            url: window.location.href,
            path: window.location.pathname,
            title: document.title,
          }
        : { url: "", path: "", title: "" };

    const payload = { question: q, session: "web", page };

    try {
      const res = await fetch(endpoint || ASK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        setMessages((m) => [
          ...m,
          { role: "assistant", content: `Server error (${res.status})` },
        ]);
        return;
      }

      const data = await res.json();
      setMessages((m) => [
        ...m,
        {
          role: "assistant",
          content: data.answer || "I’m not sure, but I’ll try to help!",
          links: Array.isArray(data.links) ? data.links : [],
        },
      ]);
    } catch {
      setMessages((m) => [
        ...m,
        { role: "assistant", content: "Network error. Please try again." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  };

  /** Manual ingest */
  const runIngest = async () => {
    const origin = typeof window !== "undefined" ? window.location.origin : "";
    const sitemapDefault = origin ? `${origin}/sitemap.xml` : "https://yourdomain.com/sitemap.xml";
    const startDefault = origin ? `${origin}/` : "https://yourdomain.com/";

    const sitemapUrl = window.prompt("Enter sitemap URL (recommended):", sitemapDefault);
    const startUrl = sitemapUrl ? null : window.prompt("No sitemap. Enter a start URL:", startDefault);

    if (!sitemapUrl && !startUrl) return;

    setIngesting(true);
    try {
      const res = await fetch(INGEST_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sitemapUrl: sitemapUrl || undefined, startUrl: startUrl || undefined }),
      });
      const data = await res.json();
      setMessages((m) => [
        ...m,
        {
          role: "assistant",
          content: data?.ok
            ? `Indexed ${data.pagesIndexed || 0} pages (${data.chunks || 0} chunks).`
            : `Ingest failed: ${data?.error || "unknown error"}`,
        },
      ]);
    } catch {
      setMessages((m) => [...m, { role: "assistant", content: "Ingest request failed." }]);
    } finally {
      setIngesting(false);
    }
  };

  return (
    <>
      {/* Floating bubble */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-5 right-5 z-50 rounded-full shadow-xl bg-black text-white px-5 py-4 text-sm hover:opacity-90"
      >
        {open ? "Close" : "Chat"}
      </button>

      {/* Panel */}
      {open && (
        <div
          className="fixed bottom-20 right-5 z-50 w-[360px] max-h-[70vh] rounded-2xl bg-white shadow-2xl ring-1 ring-black/10 flex flex-col overflow-hidden"
          role="dialog"
        >
          <div className="px-4 py-3 border-b text-sm font-semibold flex items-center justify-between">
            <span>{title}</span>
            <div className="flex items-center gap-2">
              <span
                className={`inline-block h-2 w-2 rounded-full ${
                  online ? "bg-green-500" : online === false ? "bg-red-500" : "bg-gray-300"
                }`}
                title={online ? "API online" : online === false ? "API offline" : "Checking..."}
              />
              <button
                onClick={runIngest}
                disabled={ingesting || online === false}
                className="text-xs rounded-md border px-2 py-1 hover:bg-black/5 disabled:opacity-60"
              >
                {ingesting ? "Indexing…" : "Index"}
              </button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-3 space-y-3">
            {messages.map((m, i) => (
              <div key={i} className={m.role === "user" ? "text-right" : "text-left"}>
                <div
                  className={
                    "inline-block rounded-2xl px-3 py-2 text-sm " +
                    (m.role === "user" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-900")
                  }
                >
                  <div className="whitespace-pre-wrap">{m.content}</div>
                  {m.role === "assistant" && m.links?.length > 0 && (
                    <ul className="mt-2 space-y-1">
                      {m.links.map((lnk, idx) => (
                        <li key={idx}>
                          <a className="underline text-xs" href={lnk.url} target="_blank" rel="noreferrer">
                            {lnk.title || lnk.url}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
            {loading && (
              <div className="text-left">
                <div className="inline-block rounded-2xl px-3 py-2 text-sm bg-gray-100 text-gray-900">
                  Typing…
                </div>
              </div>
            )}
            <div ref={endRef} />
          </div>

          <div className="p-2 border-t">
            <textarea
              rows={2}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={onKeyDown}
              placeholder="Ask about anything  ,  pricing, services, or even general knowledge!"
              className="w-full resize-none rounded-xl border px-3 py-2 text-sm outline-none focus:ring"
            />
            <div className="flex justify-between items-center mt-2">
              <div className="text-[11px] text-gray-500">
                API: <code className="select-all">{endpoint || ASK_URL}</code>
              </div>
              <button
                onClick={send}
                disabled={loading || !input.trim()}
                className="rounded-lg bg-blue-600 text-white px-3 py-2 text-sm disabled:opacity-60"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
