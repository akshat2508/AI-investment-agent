function statusStyles(status) {
  switch (status) {
    case "completed":
      return {
        node: "border-[#1F7A5C] bg-[#1F7A5C] text-white",
        label: "text-[#16181C]",
        line: "bg-[#1F7A5C]",
      };
    case "running":
      return {
        node: "border-[#1F3A5F] bg-white text-[#1F3A5F]",
        label: "text-[#16181C]",
        line: "bg-[#E4E4E1]",
      };
    case "failed":
      return {
        node: "border-[#B23A3A] bg-[#B23A3A] text-white",
        label: "text-[#B23A3A]",
        line: "bg-[#E4E4E1]",
      };
    default:
      return {
        node: "border-[#E4E4E1] bg-white text-[#9C9EA3]",
        label: "text-[#9C9EA3]",
        line: "bg-[#E4E4E1]",
      };
  }
}

function TimelineNode({ event, isLast }) {
  const s = statusStyles(event.status);

  return (
    <div className="flex flex-1 items-center">
      <div className="flex min-w-[104px] flex-col items-center text-center">
        <div className="relative flex h-9 w-9 items-center justify-center">
          {event.status === "running" && (
            <span className="absolute inset-0 rounded-full border-2 border-[#1F3A5F]/30 animate-ping" />
          )}
          <span
            key={event.status}
            className={`flex h-9 w-9 items-center justify-center rounded-full border-2 ${s.node} ${
              event.status === "completed" ? "animate-[glowPop_0.6s_ease-out]" : ""
            }`}
            style={
              event.status === "completed"
                ? { boxShadow: "0 0 0 4px rgba(31,122,92,0.15)" }
                : event.status === "running"
                ? { boxShadow: "0 0 0 4px rgba(31,58,95,0.12)" }
                : undefined
            }
          >
            {event.status === "completed" ? (
              <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 fill-none stroke-white stroke-[2.2]">
                <path d="M3 8.5L6.2 11.5L13 4.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            ) : event.status === "failed" ? (
              <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 fill-none stroke-white stroke-[2.2]">
                <path d="M4 4L12 12M12 4L4 12" strokeLinecap="round" />
              </svg>
            ) : event.status === "running" ? (
              <span className="h-2 w-2 rounded-full bg-[#1F3A5F]" />
            ) : (
              <span className="h-1.5 w-1.5 rounded-full bg-[#CFCFC9]" />
            )}
          </span>
        </div>

        <p className={`mt-2 text-xs font-medium leading-tight ${s.label}`}>
          {event.title}
        </p>
        {event.duration != null && (
          <span
            style={{ fontFamily: "'IBM Plex Mono', monospace" }}
            className="mt-1 text-[10px] text-[#9C9EA3]"
          >
            {event.duration}ms
          </span>
        )}
      </div>

      {!isLast && <span className={`mb-6 h-px flex-1 ${s.line}`} />}
    </div>
  );
}

export default TimelineNode;
