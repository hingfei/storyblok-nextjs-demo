import React from "react";
import { StoryblokStory } from "@storyblok/react/rsc";
import { draftMode } from "next/headers";
import { getStoryblokApi } from "@/lib/storyblok";

export const generateStaticParams = async () => {
    const client = getStoryblokApi();
    const response = await client.getStories({
        content_type: "tour",
        version: process.env.NODE_ENV === "development" ? "draft" : "published",
    });

    return response.data.stories.map((story) => ({ slug: story.slug }));
};

const fetchTourPage = async (slug: string) => {
    const { isEnabled } = await draftMode();
    const api = getStoryblokApi();
    const { data } = await api.getStory(`tours/${slug}`, {
        version:
            process.env.NODE_ENV === "development" || isEnabled
                ? "draft"
                : "published",
    });
    return data.story;
};

const TourPage = async (props: any) => {
    const { slug } = await props.params;
    const story = await fetchTourPage(slug);

    return <StoryblokStory story={story} />;
};

export default TourPage;
