import React, { ReactElement } from 'react';
import { ISbStoriesParams, getStoryblokApi } from '@storyblok/react/rsc';
import StoryblokStory from '@storyblok/react/story';
import type { Metadata } from 'next';

export default async function Page({
  params,
}: {
  params: { slug: string[]; locale: string };
}): Promise<ReactElement> {
  const { data } = await fetchData(params.slug);

  // Render the StoryblokStory component if there's valid data
  return <>{data?.story && <StoryblokStory story={data?.story} />}</>;
}

// Function to fetch data from the Storyblok API
const fetchData = (slug: string[]) => {
  const _slug = slug || ['home'];
  const storyblokApi = getStoryblokApi();

  // Determine the version to fetch based on the environment (preview or published)
  const preview = process.env.NEXT_PUBLIC_STORYBLOK_VERSION === 'draft';
  const sbParams: ISbStoriesParams = {
    version: preview ? 'draft' : 'published',
    resolve_links: 'url',
    resolve_relations: [
      'FeaturedProjects.projects',
    ],
  };

  // Fetch data from the Storyblok API
  return storyblokApi
    .get(`cdn/stories/${_slug.join('/')}`, sbParams)
    .then((data) => {
      return data;
    })
    .catch((e) => {
      return { data: JSON.parse(e) };
    });
};

// Function to generate metadata for the page
export async function generateMetadata({
  params,
}: {
  params: { slug: string[] };
}): Promise<Metadata> {
  const { data } = await fetchData(params.slug);
  try {
    // Extract metadata values from the Storyblok content
    const title =
      data?.story?.content?.title || data?.story?.name || '';
    const description = data?.story?.content?.description || '';
    const og_title = data?.story?.content?.title;
    const og_description = data?.story?.content?.description;
    const og_image = data?.story?.content?.og_image;
    const twitter_title = data?.story?.content?.title;
    const twitter_description =
      data?.story?.content?.description;
    const twitter_image = data?.story?.content?.og_image;

    // Create and return metadata object with extracted values
    return {
      title,
      description,
      openGraph: {
        title: og_title,
        description: og_description,
        images: og_image,
      },
      twitter: {
        card: 'summary_large_image',
        title: twitter_title,
        description: twitter_description,
        images: twitter_image,
      },
    };
  } catch (error) {
    console.error('Error generating metadata:', error);
    throw error;
  }
}

export async function generateStaticParams(): Promise<Array<object>> {
  const preview = process.env.NEXT_PUBLIC_STORYBLOK_VERSION === 'draft';
  const storyblokApi = getStoryblokApi();
  const perPage = 100; // You can change this value as needed.
  let currentPage = 1;
  let allStories = [] as any;

  while (true) {
    const stories = await storyblokApi.get(`cdn/stories`, {
      per_page: perPage,
      page: currentPage,
      version: preview ? 'draft' : 'published',
      // excluding_slugs: "config,find-a-members/*,member-resources/*,about/*,members-only/*,news-and-events/*"
    });
    const currentStories = stories?.data?.stories || [];
    if (currentStories.length === 0) {
      break; // No more results, exit the loop.
    }

    allStories = [...allStories, ...currentStories];
    currentPage++;
  }
  return allStories.map((x: any) => {
    return { slug: x.full_slug.split("/") };
  });
}