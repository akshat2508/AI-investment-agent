import { Search } from "lucide-react";

function SearchBar() {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-lg">
      <div className="flex flex-col gap-4 md:flex-row">
        <div className="relative flex-1">
          <Search
            size={20}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type="text"
            placeholder="Enter a company name (e.g. Apple, Tesla, Nvidia)"
            className="w-full rounded-xl border border-slate-200 py-4 pl-12 pr-4 outline-none transition focus:border-blue-500"
          />
        </div>

        <button className="rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700">
          Analyze Company
        </button>
      </div>
    </div>
  );
}

export default SearchBar;