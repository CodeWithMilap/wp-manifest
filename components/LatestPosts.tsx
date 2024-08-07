import Link from 'next/link';
import Image from 'next/image';
import BlogCard from './BlogCard';
import Title from './Title';
import React, { useEffect, useState } from 'react';
import ArticleTeaser from './storyblok/ArticleTeaser';
import {
  getStoryblokApi,
  storyblokEditable,
  ISbStoriesParams,
} from '@storyblok/react';
import Container from './Container';


interface Article {
  slug: string;
  // Add other properties of the article here
}

interface AllArticlesProps {
  blok: {
    show_posts: string; // You may adjust the type based on your data
    column_option?: string; // You may adjust the type based on your data
    heading: string;
    style: string;
  };
}

const LatestPosts: React.FC<AllArticlesProps> = ({ blok }) => {

  const [page, setPage] = useState(1);
  // State to store fetched data
  const [data, setData] = useState<Article[]>([]);

  // Convert the string value to a number for items per page
  const ITEMS_PER_PAGE = 3; // parseInt(blok.show_posts, 10);

  useEffect(() => {
    getData(ITEMS_PER_PAGE, page);
  }, [page]);


  // Function to fetch data based on the number of items per page
  const getData = async (ITEMS_PER_PAGE: number, page: number) => {
    // Get an instance of the Storyblok API
    const storyblokApi = getStoryblokApi();

    // Define parameters for fetching data
    const sbParams: ISbStoriesParams = {
      version: 'draft',
      starts_with: 'blog/', // Adjust the starts_with value as needed
      is_startpage: false,
      sort_by: 'created_at:desc',
      per_page: ITEMS_PER_PAGE,
      page: page,
    };

    // Fetch data from Storyblok
    const { data } = await storyblokApi.get(`cdn/stories`, sbParams);

    const articlesWithSlug = data.stories.map((article: any) => {
      article.content.slug = article.slug;
      return article.content;
    });

    if (page === 1) {
      setData(articlesWithSlug);
    } else {
      setData((prevArticles) => [...prevArticles, ...articlesWithSlug]);
    }
  };


  return (
    <section className='py-5 md:py-10'>
      <Container>
        <div className='flex items-center justify-between py-5 md:py-10'>
          <div>
            <Title className='text-2xl'>Latest Posts</Title>
          </div>
          <div>
            <Link href={'#'}>View All</Link>
          </div>
        </div>

        <div className='grid gap-8 md:grid-cols-2 xl:grid-cols-3' {...storyblokEditable(blok)}>
          {data.map((article) => (
            <ArticleTeaser article={article} key={article.slug} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default LatestPosts;

{/* <BlogCard
imageUrl='https://placehold.co/350x250/png'
category='Interface Design'
date='8 June, 2020'
title='UX traffic light colours'
description='UI has to make a huge visual difference between warning, an alert and a success.'
/> */}

// const AllArticles: React.FC<AllArticlesProps> = ({ blok }) => {
//   const [tags, setTags] = useState<Article[]>([]);
//   const [page, setPage] = useState(1);
//   const [checkedTags, setCheckedTags] = useState<string>();
//   const [newDataLoaded, setNewDataLoaded] = useState(false);
//   // State to store fetched data
//   const [data, setData] = useState<Article[]>([]);

//   // Convert the string value to a number for items per page
//   const ITEMS_PER_PAGE = 4; // parseInt(blok.show_posts, 10);

//   useEffect(() => {
//     getData(ITEMS_PER_PAGE, page);
//   }, [page, checkedTags]);

//   useEffect(() => {
//     fetchTags();
//   }, []);

//   // Function to get grid column classes based on the selected option
//   const getGridColumnClasses = (columnOption: string | undefined) => {
//     switch (columnOption) {
//       case '3':
//         return 'lg:grid-cols-3';
//       case '4':
//         return 'xl:grid-cols-4';
//       // Add more column cases as needed
//       default:
//         return 'lg:grid-cols-3'; // Default to 3 columns
//     }
//   };

//   // Get the column option from blok or use the default '3' columns
//   const columnOption = blok.column_option || '3';

//   // Function to fetch data based on the number of items per page
//   const getData = async (ITEMS_PER_PAGE: number, page: number) => {
//     // Get an instance of the Storyblok API
//     const storyblokApi = getStoryblokApi();

//     // Define parameters for fetching data
//     const sbParams: ISbStoriesParams = {
//       version: 'draft',
//       starts_with: 'blog/', // Adjust the starts_with value as needed
//       is_startpage: false,
//       sort_by: 'created_at:desc',
//       per_page: ITEMS_PER_PAGE,
//       page: page,
//       with_tag: checkedTags || '', // Convert the selected tags array to a comma-separated string
//     };

//     // Fetch data from Storyblok
//     const { data } = await storyblokApi.get(`cdn/stories`, sbParams);

//     const articlesWithSlug = data.stories.map((article: any) => {
//       article.content.slug = article.slug;
//       return article.content;
//     });

//     // Check if new data has been loaded and update the state accordingly
//     if (
//       articlesWithSlug.length > 0 &&
//       articlesWithSlug.length === ITEMS_PER_PAGE
//     ) {
//       setNewDataLoaded(true);
//     } else {
//       setNewDataLoaded(false);
//     }

//     if (page === 1) {
//       setData(articlesWithSlug);
//     } else {
//       setData((prevArticles) => [...prevArticles, ...articlesWithSlug]);
//     }
//   };

//   const fetchTags = async () => {
//     // Get an instance of the Storyblok API
//     const storyblokApi = getStoryblokApi();

//     // Define parameters for fetching data
//     const sbParams: ISbStoriesParams = {
//       version: 'draft',
//       starts_with: 'blog/',
//     };

//     // Fetch data from Storyblok
//     const { data } = await storyblokApi.get('cdn/tags', sbParams);
//     setTags(data.tags);
//   };

//   const handleNextClick = () => {
//     setPage((prevPage) => prevPage + 1);
//   };

//   const handleCheckboxChange = (tag: string) => {
//     setPage(1);
//     setCheckedTags(tag === 'All' ? undefined : tag);
//   };
//   return (
//     <div className='px-5 py-10 lg:px-24'>
//       <Container>
//         <div
//           className={`grid w-full gap-8  md:grid-cols-3`}
//           {...storyblokEditable(blok)}
//         >
//           {data.map((article) => (
//             <ArticleTeaser article={article} key={article.slug} />
//           ))}
//         </div>
//         {newDataLoaded && blok.style === 'all' && (
//           <div className='pt-20 text-center'>
//             <button
//               className='inline-flex rounded-sm bg-dark px-6 py-3 text-base font-semibold text-white hover:bg-black'
//               onClick={handleNextClick}
//             >
//               More Articles
//             </button>
//           </div>
//         )}
//       </Container>
//     </div>
//   );
// };

// export default AllArticles;