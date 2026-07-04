import { Search, ArrowRight } from "lucide-react";

function SearchBar({ company, setCompany, onAnalyze, loading }) {
  return (
    <div className="relative rounded-lg border border-[#212B35] bg-[#10161D] p-2">
      <div className="flex flex-col gap-2 md:flex-row md:items-center">
        <div className="relative flex-1">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 font-mono text-sm text-[#5B6B7A]">
            &gt;
          </span>

          <Search
            size={16}
            className="absolute left-9 top-1/2 -translate-y-1/2 text-[#5B6B7A]"
          />

          <input
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            type="text"
            placeholder="TICKER OR COMPANY NAME — e.g. APPLE, TESLA, NVIDIA"
            className="w-full rounded-md bg-transparent py-4 pl-16 pr-4 font-mono text-sm uppercase tracking-wide text-[#E7ECF1] placeholder:text-[#5B6B7A] outline-none"
          />
        </div>

        <button
          onClick={() => onAnalyze()}
          disabled={loading}
          className="group flex items-center justify-center gap-2 rounded-md bg-[#7C93F5] px-6 py-4 font-mono text-xs font-semibold uppercase tracking-[0.15em] text-[#0A0E13] transition hover:bg-[#93A6F7] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? "Analyzing…" : "Run Analysis"}
          {!loading && (
            <ArrowRight
              size={14}
              className="transition group-hover:translate-x-0.5"
            />
          )}
        </button>
      </div>
    </div>
  );
}

export default SearchBar;