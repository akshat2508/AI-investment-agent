import Card from "../ui/Card";

function NewsCard({ news }) {
  if (!news) {
    return (
      <Card>
        <p className="font-mono text-sm text-[#5B6B7A]">
          NO SIGNALS — latest news will appear here.
        </p>
      </Card>
    );
  }

  return (
    <div className="space-y-3">
      {news.map((article, index) => (
        <Card key={index}>
          <div className="flex gap-4">
            <span className="font-mono text-xs text-[#5B6B7A]">
              {String(index + 1).padStart(2, "0")}
            </span>

            <div className="flex-1">
              <h3
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                className="text-lg font-semibold text-[#E7ECF1]"
              >
                {article.title}
              </h3>

              <p className="mt-3 line-clamp-4 leading-6 text-[#8A99A8]">
                {article.content}
              </p>

              <a
                href={article.url}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-block font-mono text-xs font-semibold uppercase tracking-[0.15em] text-[#7C93F5] hover:text-[#93A6F7]"
              >
                Read Full Article →
              </a>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}

export default NewsCard;