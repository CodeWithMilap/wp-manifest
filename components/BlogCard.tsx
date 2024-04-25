// components/Card.tsx
import Image from "next/image";
import Title from "./Title";
import Link from "next/link";

interface CardProps {
  imageUrl: string;
  category: string;
  date: string;
  title: string;
  description: string;
}

const BlogCard: React.FC<CardProps> = ({
  imageUrl,
  category,
  date,
  title,
  description,
}) => {
  return (
    <div className="max-w-sm flex flex-col gap-6 mb-10">
      <Link href={'#'} className="relative overflow-hidden group block">
        <Image
          src={imageUrl}
          width={350}
          height={250}
          className="w-full scale-110 transition-all duration-300 group-hover:scale-100"
          alt={title} // Using title as alt
        />
      </Link>
      <div className="leading-normal tracking-wide flex flex-col gap-4">
        <div className="flex justify-between text-xs text-Grey-500">
          <div>{category}</div>
          <div>{date}</div>
        </div>
        <Title><Link href={'/blog'}>{title}</Link></Title>
        <p className="text-Grey-700">{description}</p>
      </div>
    </div>
  );
};

export default BlogCard;
