import React from "react";
import { StoryblokStory } from "@storyblok/react/rsc";
import { draftMode } from "next/headers";
import { getStoryblokApi } from "@/lib/storyblok";

const fetchHomePage = async () => {
    const { isEnabled } = await draftMode();
    const api = getStoryblokApi();
    const { data } = await api.getStory(`home`, {
        version:
            process.env.NODE_ENV === "development" || isEnabled
                ? "draft"
                : "published",
        resolve_relations: "recommended_tours.tours",
    });
    return data.story;
};

export default async function Home() {
    const story = await fetchHomePage();

    return <StoryblokStory story={story} />;
}
