import { LayoutGrid, Search, Star, Bookmark, Settings, Activity } from "lucide-react";
import logo from "../../assets/logo.png"; // adjust the path as needed
const NAV_ITEMS = [
  { label: "Overview", icon: LayoutGrid },
  { label: "Research", icon: Search },
  { label: "Watchlist", icon: Star },
  { label: "Saved Reports", icon: Bookmark },
  { label: "Settings", icon: Settings },
];

function Sidebar({ active = "Overview" }) {
  return (
    <aside className="hidden w-64 flex-col border-r border-[#1C2530] bg-[#070A0F] px-4 py-5 lg:flex">
      <div className="flex items-center gap-3 px-2">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#000000] to-[#000000]">
  <img
    src={logo}
    alt="AI Research Agent"
    className="h-10 w-10 object-contain"
  />
</div>
        <div>
          <p
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            className="text-sm font-semibold text-[#E7ECF1]"
          >
            AI Research Agent
          </p>
          <p
            style={{ fontFamily: "'IBM Plex Mono', monospace" }}
            className="text-[9px] uppercase tracking-[0.14em] text-[#4B5A68]"
          >
            Powered by Altuni AI Labs
          </p>
        </div>
      </div>

      <nav className="mt-8 flex flex-col gap-1">
        {NAV_ITEMS.map(({ label, icon: Icon }) => {
          const isActive = label === active;
          return (
            <button
              key={label}
              type="button"
              onClick={() => {}}
              className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                isActive
                  ? "bg-[#7C93F5]/15 text-[#9DAFF8]"
                  : "text-[#7C8894] hover:bg-[#0D1117] hover:text-[#E7ECF1]"
              }`}
            >
              <Icon size={16} />
              {label}
            </button>
          );
        })}
      </nav>

      <div className="mt-auto flex flex-col gap-3 pt-6">
        <div className="rounded-xl border border-[#1C2530] bg-[#0D1117] p-4">
          <div className="flex items-center justify-between">
            <p className="text-xs font-medium text-[#E7ECF1]">System Status</p>
            <span className="h-1.5 w-1.5 rounded-full bg-[#3ECF8E]" />
          </div>
          <p className="mt-1 text-[11px] text-[#4B5A68]">All Systems Operational</p>
          <svg viewBox="0 0 200 40" className="mt-3 h-8 w-full">
            <polyline
              points="0,28 15,22 30,26 45,14 60,20 75,8 90,16 105,10 120,18 135,6 150,14 165,4 180,12 200,2"
              fill="none"
              stroke="#3ECF8E"
              strokeWidth="2"
            />
          </svg>
        </div>

        <div className="rounded-xl border border-[#1C2530] bg-[#0D1117] p-4">
          <p
            style={{ fontFamily: "'IBM Plex Mono', monospace" }}
            className="text-[10px] uppercase tracking-[0.12em] text-[#4B5A68]"
          >
            LLM Provider
          </p>
          <p className="mt-1.5 text-sm font-medium text-[#E7ECF1]">Google Gemini 2.5 Pro</p>
        </div>

        <button
          type="button"
          className="flex items-center gap-3 rounded-xl border border-[#1C2530] bg-[#0D1117] p-3 text-left transition-colors hover:bg-[#121820]"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#7C93F5]/20 text-xs font-semibold text-[#9DAFF8]">
            AD
          </div>
          <div className="flex-1">
            <p className="flex items-center gap-1.5 text-xs font-medium text-[#E7ECF1]">
              Demo User
              <span className="rounded bg-[#7C93F5] px-1 py-[1px] text-[9px] font-semibold text-white">
                PRO
              </span>
            </p>
            <p className="text-[10px] text-[#4B5A68]">Premium Plan</p>
          </div>
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;