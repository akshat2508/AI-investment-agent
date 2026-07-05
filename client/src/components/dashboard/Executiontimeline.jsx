import { Check, X, Loader2, Circle } from "lucide-react";

const DEFAULT_DESCRIPTIONS = {
  profile: "Retrieved company profile and business summary",
  financ: "Analyzed key financial metrics and ratios",
  news: "Collected and scored recent news articles",
  ai: "Generating comprehensive investment report",
  analysis: "Generating comprehensive investment report",
  recommend: "Compiling final investment decision and reasoning",
};

function describeEvent(event) {
  if (event.description) return event.description;
  const lower = event.title.toLowerCase();
  const key = Object.keys(DEFAULT_DESCRIPTIONS).find((k) => lower.includes(k));
  return key ? DEFAULT_DESCRIPTIONS[key] : "";
}

function StatusIcon({ status }) {
  if (status === "completed")
    return (
      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#3ECF8E]">
        <Check size={14} className="text-[#05070A]" strokeWidth={3} />
      </span>
    );
  if (status === "failed")
    return (
      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#FF5C5C]">
        <X size={14} className="text-[#05070A]" strokeWidth={3} />
      </span>
    );
  if (status === "running")
    return (
      <span className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-[#7C93F5] bg-[#101A33]">
        <Loader2 size={13} className="animate-spin text-[#7C93F5]" />
      </span>
    );
  return (
    <span className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-[#1C2530] bg-[#0B0F14]">
      <Circle size={8} className="text-[#3A4552]" fill="#3A4552" />
    </span>
  );
}

function ExecutionTimeline({ events }) {
  if (!events?.length) return null;

  return (
    <div className="rounded-2xl border border-[#1C2530] bg-[#0B0F14] p-6 sm:p-8">
      <div className="mb-6 flex items-center justify-between">
        <p
          style={{ fontFamily: "'IBM Plex Mono', monospace" }}
          className="text-[11px] uppercase tracking-[0.2em] text-[#7C8894]"
        >
          Execution Timeline
        </p>
        <span className="rounded-full border border-[#1C2530] px-3 py-1 text-[10px] font-medium uppercase tracking-[0.1em] text-[#4B5A68]">
          Real-time Updates
        </span>
      </div>

      <div className="flex flex-col">
        {events.map((event, i) => {
          const isLast = i === events.length - 1;
          return (
            <div key={event.id} className="flex gap-4">
              <div className="flex flex-col items-center">
                <StatusIcon status={event.status} />
                {!isLast && <span className="my-1 w-[2px] flex-1 bg-[#1C2530]" />}
              </div>
              <div className="flex-1 pb-6">
                <div className="flex items-center justify-between gap-3">
                  <p
                    className="text-sm font-medium"
                    style={{
                      color:
                        event.status === "pending"
                          ? "#4B5A68"
                          : event.status === "running"
                          ? "#9DAFF8"
                          : "#E7ECF1",
                    }}
                  >
                    {event.title}
                  </p>
                  <span
                    style={{ fontFamily: "'IBM Plex Mono', monospace" }}
                    className="shrink-0 text-xs text-[#4B5A68]"
                  >
                    {event.duration != null
                      ? `${(event.duration / 1000).toFixed(2)}s`
                      : event.status === "running"
                      ? "Running"
                      : "Pending"}
                  </span>
                </div>
                <p className="mt-0.5 text-xs text-[#4B5A68]">{describeEvent(event)}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ExecutionTimeline;