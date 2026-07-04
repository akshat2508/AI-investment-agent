import { useState } from "react";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import Card from "../ui/Card";

function NewsCard({ news }) {
  if (!news) {
    return (
      <Card>
        <p className="text-sm text-[#9C9EA3]">
          No signals yet — latest news will appear here.
        </p>
      </Card>
    );
  }

  return (
    <div className="space-y-3">
      {news.map((article, index) => (
        <NewsItem key={index} article={article} index={index} />
      ))}
    </div>
  );
}

function NewsItem({ article, index }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <Card>
      <div className="flex gap-4">
        <span
          style={{ fontFamily: "'IBM Plex Mono', monospace" }}
          className="text-xs text-[#9C9EA3]"
        >
          {String(index + 1).padStart(2, "0")}
        </span>

        <div className="flex-1">
          <h3 className="text-lg font-semibold tracking-tight text-[#16181C]">
            {article.title}
          </h3>

          <p className={`mt-3 leading-7 text-[#5B5D63] ${expanded ? "" : "line-clamp-4"}`}>
            {article.content}
          </p>

          <div className="mt-4 flex items-center gap-5">
            <a
              href={article.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-[#1F3A5F] hover:underline"
            >
              Read full article
              <ArrowUpRight size={13} />
            </a>

            {article.content && article.content.length > 240 && (
              <button
                onClick={() => setExpanded((v) => !v)}
                className="inline-flex items-center gap-1 text-xs font-medium text-[#9C9EA3] hover:text-[#5B5D63]"
              >
                {expanded ? "Show less" : "Show more"}
                <ChevronDown
                  size={13}
                  className={`transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}
                />
              </button>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
}

export default NewsCard;
