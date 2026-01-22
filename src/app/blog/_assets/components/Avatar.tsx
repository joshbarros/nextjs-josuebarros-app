import Link from "next/link";
import { articleType } from "../content";

const Avatar = ({ article }: { article: articleType }) => {
  return (
    <Link
      href={`/blog/author/${article.author.slug}`}
      className="flex items-center gap-2 link link-hover"
    >
      <div className="avatar placeholder">
        <div className="bg-primary text-primary-content rounded-full w-8">
          <span className="text-xs">{article.author.avatar}</span>
        </div>
      </div>
      <span className="text-sm font-medium">{article.author.name}</span>
    </Link>
  );
};

export default Avatar;