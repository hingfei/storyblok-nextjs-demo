import React from "react";
import { renderRichText } from "@storyblok/react/rsc";

const Tour = (props: any) => {
    return (
        <main className={"container mx-auto w-full px-4 pb-16 pt-32"}>
            <h1 className={"text-3xl font-bold md:text-5xl"}>
                {props.blok.name}
            </h1>
            <img
                src={props.blok.main_image.filename}
                alt=""
                className={"mt-12 w-full"}
            />
            <p className={"mt-12 text-lg md:text-2xl md:leading-relaxed"}>
                {props.blok.introduction}
            </p>
            <div
                className={"prose md:prose-lg mt-16 max-w-none"}
                dangerouslySetInnerHTML={{
                    __html: renderRichText(props?.blok?.body) || "",
                }}
            ></div>
        </main>
    );
};

export default Tour;
