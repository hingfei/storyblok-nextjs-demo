import React from "react";
import RecommendedTour from "@/components/RecommendedTour";

const RecommendedTours = (params: any) => {
    return (
        <section className={"container mx-auto w-full py-16 px-4"}>
            <h2 className={"text-3xl md:text-4l font-bold text-center"}>{params.blok.headline}</h2>
            <div className={"grid md:grid-cols-2 gap-8 mt-16"}>
                {params.blok.tours.map((tour: any) => (
                    <RecommendedTour key={tour.content._uid} story={tour} />
                ))}
            </div>
        </section>
    );
};

export default RecommendedTours;
