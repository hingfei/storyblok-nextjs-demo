import React from "react";
import { StoryblokStory } from "@storyblok/react/rsc";
import { draftMode } from "next/headers";
import RecommendedTour from "@/components/RecommendedTour";
import { getStoryblokApi } from "@/lib/storyblok";

const fetchToursPage = async () => {
    const { isEnabled } = await draftMode();
    const api = getStoryblokApi();
    const { data } = await api.getStory(`tours`, {
        version:
            process.env.NODE_ENV === "development" || isEnabled
                ? "draft"
                : "published",
    });
    return data.story;
};

const fetchAllTours = async () => {
    const { isEnabled } = await draftMode();
    const api = getStoryblokApi();
    const { data } = await api.getStories({
        content_type: "tour",
        version:
            process.env.NODE_ENV === "development" || isEnabled
                ? "draft"
                : "published",
    });
    return data.stories;
};

const ToursPage = async () => {
    const story = await fetchToursPage();
    const tours = await fetchAllTours();

    return (
        <div>
            <StoryblokStory story={story} />
            <div
                className={
                    "container mx-auto grid w-full gap-8 px-4 py-16 md:grid-cols-2"
                }
            >
                {tours.map((tour: any) => (
                    <RecommendedTour key={tour.content._uid} story={tour} />
                ))}
            </div>
        </div>
    );
};

export default ToursPage;
