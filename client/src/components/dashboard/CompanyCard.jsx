import Card from "../ui/Card";

function CompanyCard({ company }) {
  if (!company) {
    return (
      <Card>
        <p className="text-sm text-[#9C9EA3]">
          No company loaded yet — search above to begin analysis.
        </p>
      </Card>
    );
  }

  return (
    <Card>
      <div className="flex flex-col gap-6 sm:flex-row">
        <img
          src={`https://logo.clearbit.com/${new URL(company.website).hostname}`}
          alt={company.name}
          className="h-14 w-14 shrink-0 rounded-md border border-[#E4E4E1] bg-white p-2"
          onError={(e) => (e.target.style.display = "none")}
        />

        <div className="flex-1">
          <h2 className="text-2xl font-semibold tracking-tight text-[#16181C]">
            {company.name}
          </h2>

          <p className="mt-2 leading-7 text-[#5B5D63]">{company.description}</p>

          <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-3">
            <Info title="Industry" value={company.industry} />
            <Info title="Sector" value={company.sector} />
            <Info title="Country" value={company.country} />
            <Info title="Employees" value={company.employees?.toLocaleString()} />
            <Info
              title="Website"
              value={
                <a
                  href={company.website}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#1F3A5F] underline decoration-[#1F3A5F]/30 underline-offset-2 hover:decoration-[#1F3A5F]"
                >
                  Visit ↗
                </a>
              }
            />
          </div>
        </div>
      </div>
    </Card>
  );
}

function Info({ title, value }) {
  return (
    <div className="rounded-md border border-[#E4E4E1] p-3">
      <p
        style={{ fontFamily: "'IBM Plex Mono', monospace" }}
        className="text-[10px] uppercase tracking-[0.12em] text-[#9C9EA3]"
      >
        {title}
      </p>
      <p className="mt-1 font-medium text-[#16181C]">{value || "—"}</p>
    </div>
  );
}

export default CompanyCard;
