import React from "react";
import { StoryblokStory } from "@storyblok/react/rsc";
import { getStoryblokApi } from "@/lib/storyblok";

const fetchHomePage = async () => {
    const api = getStoryblokApi();
    const { data } = await api.getStory(
        `home`,
        {
            version: process.env.NODE_ENV === "development" ? "draft" : "published",
            resolve_relations: "recommended_tours.tours",
        },
    );
    return data.story;
};

export default async function Home() {
    const story = await fetchHomePage();

    return <StoryblokStory story={story} />;
}
