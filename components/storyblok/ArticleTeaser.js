import Image from "next/image";
import Link from "next/link";
import Title from "../Title";

const ArticleTeaser = ({ article }) => {
    return (
        <div className='mb-10 flex flex-col border border-light dark:border-dark rounded-xl overflow-hidden'>
            <Link href={`/blog/${article.slug}`} className='group relative block overflow-hidden'>
                <Image
                    src={article.image.filename}
                    width={350}
                    height={250}
                    className='w-full scale-110 transition-all duration-300 group-hover:scale-100 aspect-video object-cover'
                    alt={article.image.alt} // Using title as alt
                />
            </Link>
            <div className='flex flex-col gap-4 leading-normal tracking-wide p-5'>
                <div className='flex flex-col gap-2'>
                    <div className='flex justify-between text-sm'>
                        {/* <div>{category}</div>
                            <div>{date}</div> */}
                    </div>
                    <Title className='text-lg'>
                        <Link href={`/blog/${article.slug}`}>{article.title}</Link>
                    </Title>
                </div>
                <p className='text-sm'>{article.teaser}</p>
            </div>
        </div>
    )
};
export default ArticleTeaser;
