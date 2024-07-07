import {
  ISbStoriesParams,
  getStoryblokApi,
  StoryblokStory,
} from "@storyblok/react/rsc";
import { draftMode } from "next/headers";

const isDev = process.env.NEXT_PUBLIC_STORYBLOK_VERSION === "draft";
export const revalidate = isDev ? 0 : 3600;

async function fetchData(slug: string) {

  const { isEnabled: isDraft } = draftMode();
  const sbParams: ISbStoriesParams = {
    resolve_links: "url",
    version: isDev || isDraft ? "draft" : "published",
    cv:  Date.now() 
  };

  const storyblokApi = getStoryblokApi();

  // Fetch data from the Storyblok API and return the promise
  return storyblokApi?.get(`cdn/stories/${slug}`, sbParams, { cache: 'no-store' })
    .then((data) => {
      return data;
    })
    .catch((e) => {
      return { data: JSON.parse(e) };
    });
}

type Props = {
  params: { slug: string[] };
};

export default async function Home({ params }: Props) {
  const slug = params?.slug ? params.slug.join("/") : "home";
  const { data } = await fetchData(slug);
  return (
    <>
      {data.story &&
        <StoryblokStory story={data?.story} />
      }
    </>
  );
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
    return { slug: x.full_slug.split('/') };
  });
}