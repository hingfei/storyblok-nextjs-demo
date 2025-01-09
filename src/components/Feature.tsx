import React from "react";
import { storyblokEditable } from "@storyblok/react/rsc";

const Feature = (params: any) => {
    return (
        <div
            {...storyblokEditable(params.blok)}
            className={"rounded-sm bg-white p-8 shadow-md"}
        >
            <h3 className={"text-3xl font-bold"}>{params.blok.headline}</h3>
            <p className={"mt-6 text-lg"}>{params.blok.content}</p>
        </div>
    );
};

export default Feature;
