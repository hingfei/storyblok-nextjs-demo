import React from "react";
import { StoryblokStory } from "@storyblok/react/rsc";
import { getStoryblokApi } from "@/lib/storyblok";
import RecommendedTour from "@/components/RecommendedTour";

const fetchToursPage = async () => {
    const api = getStoryblokApi();
    const { data } = await api.getStory(`tours`, {
        version: "draft",
    });
    return data.story;
};

const fetchAllTours = async () => {
    const api = getStoryblokApi();
    const { data } = await api.getStories(
        {
            content_type: "tour",
            version: process.env.NODE_ENV === "development" ? "draft" : "published",
        },
    );
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
