import React from "react";
import { storyblokEditable } from "@storyblok/react/rsc";

const Hero = (params: any) => {
    return (
        <section
            {...storyblokEditable(params.blok)}
            className={"container mx-auto w-full px-4 pb-16 pt-32"}
        >
            <h1 className={"text-center text-5xl font-bold md:text-7xl"}>
                {params.blok.headline}
            </h1>
            <p className={"mt-8 text-center text-xl"}>{params.blok.content}</p>
        </section>
    );
};

export default Hero;
