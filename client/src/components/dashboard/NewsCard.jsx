import Card from "../ui/Card";

function NewsCard({ news }) {

  if (!news) {
    return (
      <Card>
        <p className="text-slate-500">
          Latest news will appear here.
        </p>
      </Card>
    );
  }

  return (
    <div className="space-y-4">

      {news.map((article, index) => (

        <Card key={index}>

          <h3 className="text-lg font-bold">
            {article.title}
          </h3>

          <p className="mt-3 text-slate-600 line-clamp-4">
            {article.content}
          </p>

          <a
            href={article.url}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-block text-blue-600 font-medium"
          >
            Read Full Article →
          </a>

        </Card>

      ))}

    </div>
  );
}

export default NewsCard;