import { Building2, TrendingUp, FileText, Brain, Target, Check } from "lucide-react";

const ICON_RULES = [
  { keys: ["profile", "company"], icon: Building2 },
  { keys: ["financ"], icon: TrendingUp },
  { keys: ["news"], icon: FileText },
  { keys: ["ai", "analysis", "report", "invest"], icon: Brain },
  { keys: ["recommend", "final"], icon: Target },
];

function pickIcon(title = "") {
  const lower = title.toLowerCase();
  const match = ICON_RULES.find(({ keys }) => keys.some((k) => lower.includes(k)));
  return match ? match.icon : Building2;
}

const STATUS_STYLES = {
  pending: { border: "#1C2530", bg: "#0B0F14", icon: "#3A4552", glow: "none" },
  running: { border: "#7C93F5", bg: "#101A33", icon: "#9DAFF8", glow: "0 0 28px rgba(124,147,245,0.5)" },
  completed: { border: "#3ECF8E", bg: "#0E1F17", icon: "#3ECF8E", glow: "0 0 20px rgba(62,207,142,0.35)" },
  failed: { border: "#FF5C5C", bg: "#22110F", icon: "#FF5C5C", glow: "0 0 20px rgba(255,92,92,0.35)" },
};

function ExecutionFlow({ events }) {
  if (!events?.length) {
    return (
      <div className="rounded-2xl border border-[#1C2530] bg-[#0B0F14] p-8 text-center text-sm text-[#4B5A68]">
        Run a search to start the agent execution flow.
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-[#1C2530] bg-[#0B0F14] p-6 sm:p-8">
      <div className="mb-8 flex items-center justify-between">
        <p
          style={{ fontFamily: "'IBM Plex Mono', monospace" }}
          className="text-[11px] uppercase tracking-[0.2em] text-[#7C8894]"
        >
          Agent Execution Flow
        </p>
        <span className="rounded-full border border-[#7C93F5]/30 bg-[#7C93F5]/10 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.1em] text-[#9DAFF8]">
          LangGraph Workflow
        </span>
      </div>

      <div className="flex items-start overflow-x-auto pb-2">
        {events.map((event, i) => {
          const s = STATUS_STYLES[event.status] || STATUS_STYLES.pending;
          const Icon = pickIcon(event.title);
          const isLast = i === events.length - 1;

          return (
            <div key={event.id} className="flex min-w-[130px] flex-1 items-start">
              <div className="flex min-w-[130px] flex-col items-center text-center">
                <div
                  className="relative flex h-12 w-12 mt-2 items-center justify-center rounded-2xl border-2 transition-all duration-500"
                  style={{ borderColor: s.border, backgroundColor: s.bg, boxShadow: s.glow }}
                >
                  <Icon size={26} style={{ color: s.icon }} />
                  {event.status === "completed" && (
                    <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-[#3ECF8E]">
                      <Check size={12} className="text-[#05070A]" strokeWidth={3} />
                    </span>
                  )}
                </div>

                <p className="mt-3 text-sm font-medium text-[#E7ECF1]">
                  {i + 1}. {event.title}
                </p>
                {event.description && (
                  <p className="mt-1 text-xs leading-tight text-[#4B5A68]">{event.description}</p>
                )}
                <p
                  style={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    color:
                      event.status === "completed"
                        ? "#3ECF8E"
                        : event.status === "running"
                        ? "#7C93F5"
                        : "#4B5A68",
                  }}
                  className="mt-2 text-xs font-medium"
                >
                  {event.duration != null
                    ? `${(event.duration / 1000).toFixed(2)}s`
                    : event.status === "running"
                    ? "Running…"
                    : "Pending"}
                </p>
              </div>

              {!isLast && (
                <div className="relative mt-8 h-[2px] flex-1 overflow-hidden rounded-full bg-[#1C2530]">
                  <div
                    className="absolute inset-y-0 left-0 rounded-full transition-all duration-700"
                    style={{
                      width:
                        event.status === "completed" ? "100%" : event.status === "running" ? "50%" : "0%",
                      background: "linear-gradient(90deg, #3ECF8E, #7C93F5)",
                    }}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ExecutionFlow;