import TimelineNode from "./TimelineNode";

function Timeline({ events }) {
  if (!events.length) return null;

  const completed = events.filter((e) => e.status === "completed").length;

  return (
    <div className="rounded-lg border border-[#E4E4E1] bg-white px-6 py-6">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-sm font-semibold text-[#16181C]">Agent progress</h2>
        <span
          style={{ fontFamily: "'IBM Plex Mono', monospace" }}
          className="text-xs text-[#9C9EA3]"
        >
          {completed}/{events.length}
        </span>
      </div>

      <div className="flex items-start overflow-x-auto pb-1">
        {events.map((event, i) => (
          <TimelineNode key={event.id} event={event} isLast={i === events.length - 1} />
        ))}
      </div>
    </div>
  );
}

export default Timeline;
