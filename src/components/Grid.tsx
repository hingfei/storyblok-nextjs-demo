import React from "react";
import { StoryblokServerComponent } from "@storyblok/react/rsc";

const Grid = (params: any) => {
    return (
        <section className={"bg-blue-100 py-16"}>
            <div className={"container mx-auto w-full px-4"}>
                <h2 className={"text-3xl font-bold md:text-4xl"}>
                    {params.blok.headline}
                </h2>
                <div className={"grid md:grid-flow-col auto-cols-fr mt-12 gap-8"}>
                    {params.blok.items.map((blok: any) => (
                        <StoryblokServerComponent blok={blok} key={blok._uid} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Grid;
