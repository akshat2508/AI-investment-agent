import { Search, Download, Plus, Loader2 } from "lucide-react";

function Topbar({ company, setCompany, onAnalyze, onExport, loading, exportDisabled }) {
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !loading) onAnalyze();
  };

  return (
    <header className="flex items-center gap-3 border-b border-[#1C2530] bg-[#070A0F] px-6 py-4">
      <div className="relative max-w-md flex-1">
        <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#4B5A68]" />
        <input
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Search company (e.g. Apple, Microsoft, Tesla...)"
          className="w-full rounded-lg border border-[#1C2530] bg-[#0D1117] py-2.5 pl-10 pr-4 text-sm text-[#E7ECF1] placeholder:text-[#4B5A68] outline-none transition-colors focus:border-[#7C93F5]"
        />
      </div>

      <div className="flex-1" />

      <button
        type="button"
        onClick={onExport}
        disabled={exportDisabled}
        className="flex items-center gap-2 rounded-lg border border-[#1C2530] bg-[#0D1117] px-4 py-2.5 text-sm font-medium text-[#7C8894] transition-colors hover:text-[#E7ECF1] disabled:cursor-not-allowed disabled:opacity-40"
      >
        <Download size={15} />
        Export Report
      </button>

      <button
        type="button"
        onClick={onAnalyze}
        disabled={loading}
        className="flex items-center gap-2 rounded-lg bg-[#7C93F5] px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#6B82E4] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? <Loader2 size={15} className="animate-spin" /> : <Plus size={15} />}
        New Research
      </button>
    </header>
  );
}

export default Topbar;