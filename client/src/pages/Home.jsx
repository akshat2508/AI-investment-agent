import { useState } from "react";
import Sidebar from "../components/dashboard/Sidebar";
import Topbar from "../components/dashboard/Topbar";
import ExecutionFlow from "../components/dashboard/ExecutionFlow";
import ExecutionTimeline from "../components/dashboard/ExecutionTimeline";
import ResultsPanel from "../components/dashboard/ResultsPanel";
import SectionTitle from "../components/common/SectionTitle";
import CompanyCard from "../components/dashboard/CompanyCard";
import FinancialCard from "../components/dashboard/FinancialCard";
import NewsCard from "../components/dashboard/NewsCard";
import RecommendationCard from "../components/dashboard/RecommendationCard";
import { useResearch } from "../hooks/useResearch";
import { useTimeline } from "../hooks/useTimeline";
import { exportReport } from "../utils/exportReport";

function Home() {
  const [company, setCompany] = useState("");
  const { analysis, loading, error, analyzeCompany } = useResearch();
  const { events, clearTimeline } = useTimeline();

  const handleAnalyze = () => {
    if (!company.trim()) return;
    clearTimeline();
    analyzeCompany(company);
  };

  return (
    <div className="flex h-screen bg-[#05070A]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500;600&display=swap');
        body { font-family: 'Inter', sans-serif; }
      `}</style>

      <Sidebar active="Overview" />

      <div className="flex flex-1 flex-col overflow-hidden">
        <Topbar
          company={company}
          setCompany={setCompany}
          onAnalyze={handleAnalyze}
          onExport={() => exportReport(analysis)}
          exportDisabled={!analysis}
          loading={loading}
        />

        <div className="flex-1 overflow-y-auto">
          <div className="grid grid-cols-1 gap-6 p-6 xl:grid-cols-[1fr_400px]">
            {/* Main column */}
            <div className="space-y-6">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2">
                    <h1
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                      className="text-2xl font-bold text-[#E7ECF1]"
                    >
                      AI Investment Research Agent
                    </h1>
                    {loading && (
                      <span className="flex items-center gap-1.5 rounded-full border border-[#3ECF8E]/30 bg-[#3ECF8E]/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.1em] text-[#3ECF8E]">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#3ECF8E]" />
                        Live
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-sm text-[#7C8894]">
                    Comprehensive AI-powered analysis and investment recommendation
                  </p>
                </div>

                {analysis?.company && (
                  <div className="text-right">
                    <p className="text-xs text-[#4B5A68]">Researching</p>
                    <p
                      style={{ fontFamily: "'IBM Plex Mono', monospace" }}
                      className="text-sm font-medium text-[#3ECF8E]"
                    >
                      {analysis.company.name}
                    </p>
                  </div>
                )}
              </div>

              {error && (
                <p className="rounded-lg border border-[#FF5C5C]/30 bg-[#FF5C5C]/10 px-4 py-3 font-mono text-sm text-[#FF5C5C]">
                  ERROR — {error}
                </p>
              )}

              <ExecutionFlow events={events} />
              <ExecutionTimeline events={events} />

              {analysis && (
                <div className="space-y-10 pt-4">
                  <div>
                    <SectionTitle
                      index="01"
                      total="04"
                      title="Company Overview"
                      subtitle="Full company profile"
                    />
                    <CompanyCard company={analysis.company} />
                  </div>
                  <div>
                    <SectionTitle
                      index="02"
                      total="04"
                      title="Financial Health"
                      subtitle="Key financial metrics and performance"
                    />
                    <FinancialCard market={analysis.market} />
                  </div>
                  <div>
                    <SectionTitle
                      index="03"
                      total="04"
                      title="Latest News"
                      subtitle="Recent developments affecting the company"
                    />
                    <NewsCard news={analysis.news} />
                  </div>
                  <div>
                    <SectionTitle
                      index="04"
                      total="04"
                      title="Investment Recommendation"
                      subtitle="Full reasoning and SWOT breakdown"
                    />
                    <RecommendationCard analysis={analysis.analysis} />
                  </div>
                </div>
              )}
            </div>

            {/* Right column */}
            <ResultsPanel analysis={analysis} loading={loading} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;