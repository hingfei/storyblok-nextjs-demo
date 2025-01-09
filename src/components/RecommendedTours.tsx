import React from "react";
import { storyblokEditable } from "@storyblok/react";
import RecommendedTour from "@/components/RecommendedTour";

const RecommendedTours = (params: any) => {
    return (
        <section
            {...storyblokEditable(params.blok)}
            className={"container mx-auto w-full px-4 py-16"}
        >
            <h2 className={"md:text-4l text-center text-3xl font-bold"}>
                {params.blok.headline}
            </h2>
            <div className={"mt-16 grid gap-8 md:grid-cols-2"}>
                {params.blok.tours.map((tour: any) => (
                    <RecommendedTour key={tour.content._uid} story={tour} />
                ))}
            </div>
        </section>
    );
};

export default RecommendedTours;
