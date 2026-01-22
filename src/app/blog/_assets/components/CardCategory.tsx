import type { JSX } from "react";
import Link from "next/link";
import { categoryType } from "../content";

const CardCategory = ({
  category,
  tag = "h2",
}: {
  category: categoryType;
  tag?: keyof JSX.IntrinsicElements;
}) => {
  const TitleTag = tag;

  return (
    <Link
      href={`/blog/category/${category.slug}`}
      className="card bg-base-200 rounded-box p-6 hover:bg-base-300 transition-colors"
    >
      <TitleTag className="text-lg font-semibold mb-2">
        {category.title}
      </TitleTag>
      <p className="text-sm text-base-content/70">
        {category.descriptionShort || category.description}
      </p>
    </Link>
  );
};

export default CardCategory;