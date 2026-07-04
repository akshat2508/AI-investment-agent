import Card from "../ui/Card";

function CompanyCard({ company }) {
  if (!company) {
    return (
      <Card>
        <p className="font-mono text-sm text-[#5B6B7A]">
          NO TARGET LOADED — search a company to begin analysis.
        </p>
      </Card>
    );
  }

  return (
    <Card>
      <div className="flex gap-6">
        <img
          src={`https://logo.clearbit.com/${new URL(company.website).hostname}`}
          alt={company.name}
          className="h-16 w-16 rounded-lg border border-[#212B35] bg-[#0A0E13] p-2"
          onError={(e) => (e.target.style.display = "none")}
        />

        <div className="flex-1">
          <h2
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            className="text-2xl font-semibold text-[#E7ECF1]"
          >
            {company.name}
          </h2>

          <p className="mt-2 leading-6 text-[#8A99A8]">
            {company.description}
          </p>

          <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3">
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
                  className="text-[#7C93F5] underline decoration-[#7C93F5]/30 underline-offset-2 hover:decoration-[#7C93F5]"
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
    <div className="rounded-md border border-[#212B35] bg-[#0A0E13] p-3">
      <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#5B6B7A]">
        {title}
      </p>
      <p className="mt-1 font-semibold text-[#E7ECF1]">{value || "—"}</p>
    </div>
  );
}

export default CompanyCard;