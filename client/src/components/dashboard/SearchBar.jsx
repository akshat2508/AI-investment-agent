import { Search, ArrowRight, Loader2 } from "lucide-react";

function SearchBar({ company, setCompany, onAnalyze, loading }) {
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !loading) onAnalyze();
  };

  return (
    <div className="flex flex-col gap-3 rounded-lg border border-[#E4E4E1] bg-white p-2 transition-colors focus-within:border-[#1F3A5F] md:flex-row md:items-center">
      <div className="relative flex-1">
        <Search
          size={16}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9C9EA3]"
        />
        <input
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          onKeyDown={handleKeyDown}
          type="text"
          placeholder="Enter a ticker or company name — e.g. Apple, Tesla, Nvidia"
          className="w-full rounded-md bg-transparent py-3.5 pl-11 pr-4 text-sm text-[#16181C] placeholder:text-[#9C9EA3] outline-none"
        />
      </div>

      <button
        onClick={() => onAnalyze()}
        disabled={loading}
        className="flex items-center justify-center gap-2 rounded-md bg-[#1F3A5F] px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-[#16283F] disabled:cursor-not-allowed disabled:opacity-50"
      >
        {loading ? (
          <>
            <Loader2 size={15} className="animate-spin" />
            Analyzing
          </>
        ) : (
          <>
            Run analysis
            <ArrowRight size={15} />
          </>
        )}
      </button>
    </div>
  );
}

export default SearchBar;
