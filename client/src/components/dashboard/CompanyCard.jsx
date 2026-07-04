import Card from "../ui/Card";

function CompanyCard({ company }) {
  if (!company) {
    return (
      <Card>
        <p className="text-slate-500">Search a company to begin analysis.</p>
      </Card>
    );
  }

  return (
    <Card>
      <div className="flex gap-6">
        <img
          src={`https://logo.clearbit.com/${new URL(company.website).hostname}`}
          alt={company.name}
          className="h-16 w-16 rounded-xl border p-2"
          onError={(e) => (e.target.style.display = "none")}
        />

        <div className="flex-1">
          <h2 className="text-2xl font-bold">{company.name}</h2>

          <p className="mt-2 text-slate-600">
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
                  className="text-blue-600"
                >
                  Visit
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
    <div>
      <p className="text-sm text-slate-500">{title}</p>
      <p className="font-semibold">{value || "-"}</p>
    </div>
  );
}

export default CompanyCard;