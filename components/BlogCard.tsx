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
      <Image
        src={imageUrl}
        width={350}
        height={250}
        className="w-full"
        alt={title} // Using title as alt
      />
      <div className="leading-normal tracking-wide flex flex-col gap-6">
        <div className="flex justify-between text-xs text-gray-500">
          <div>{category}</div>
          <div>{date}</div>
        </div>
        <Title><Link href={'/blog'}>{title}</Link></Title>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default BlogCard;
