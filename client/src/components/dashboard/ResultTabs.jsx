function ResultTabs({ tabs, active, onChange }) {
  return (
    <div className="flex gap-6 border-b border-[#E4E4E1]">
      {tabs.map((tab, i) => {
        const isActive = tab.id === active;
        return (
          <button
            key={tab.id}
            onClick={() => onChange(tab.id)}
            className={`relative pb-3 text-sm font-medium transition-colors ${
              isActive ? "text-[#16181C]" : "text-[#9C9EA3] hover:text-[#5B5D63]"
            }`}
          >
            <span
              style={{ fontFamily: "'IBM Plex Mono', monospace" }}
              className="mr-2 text-[11px] text-[#9C9EA3]"
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            {tab.label}
            {isActive && (
              <span className="absolute -bottom-px left-0 h-[2px] w-full bg-[#1F3A5F]" />
            )}
          </button>
        );
      })}
    </div>
  );
}

export default ResultTabs;
