import React from "react";
import { storyblokEditable } from "@storyblok/react/rsc";

interface BlokTypes {
    blok: {
        name: string;
        comment: string;
    };
}

const Testimonial = ({ blok }: BlokTypes) => {
    return (
        <div
            {...storyblokEditable(blok)}
            className={"rounded-sm bg-white p-8 shadow-md"}
        >
            <p className={"text-xl leading-relaxed text-gray-700"}>
                {blok.comment}
            </p>
            <h3 className={"mt-6 text-lg font-semibold"}>{blok.name}</h3>
        </div>
    );
};

export default Testimonial;
