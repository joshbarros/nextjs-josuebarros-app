import Link from "next/link";
import { categoryType } from "../content";

const BadgeCategory = ({
  category,
  link = true,
}: {
  category: categoryType;
  link?: boolean;
}) => {
  const content = (
    <span className="badge badge-outline badge-primary">
      {category.titleShort || category.title}
    </span>
  );

  if (link) {
    return (
      <Link
        href={`/blog/category/${category.slug}`}
        className="link link-hover"
      >
        {content}
      </Link>
    );
  }

  return content;
};

export default BadgeCategory;