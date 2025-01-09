import React from "react";
import {
    renderRichText,
    storyblokEditable,
    ISbNode,
    RichTextSchema,
} from "@storyblok/react/rsc";
import Image from "next/image";

const Tour = (props: any) => {
    return (
        <main
            {...storyblokEditable(props.blok)}
            className={"container mx-auto w-full px-4 pb-16 pt-32"}
        >
            <h1 className={"text-3xl font-bold md:text-5xl"}>
                {props.blok.name}
            </h1>
            <Image
                src={props.blok.main_image.filename}
                alt={props.blok.main_image.alt}
                width={
                    props.blok.main_image.filename.split("/")[5].split("x")[0]
                }
                height={
                    props.blok.main_image.filename.split("/")[5].split("x")[1]
                }
                className={"mt-12 w-full"}
                sizes={"(max-width: 1538px) 100vw, 1504px"}
                priority={true}
            />
            <p className={"mt-12 text-lg md:text-2xl md:leading-relaxed"}>
                {props.blok.introduction}
            </p>
            <div
                className={"prose mt-16 max-w-none md:prose-lg"}
                dangerouslySetInnerHTML={{
                    __html:
                        renderRichText(props.blok.body, {
                            schema: {
                                ...RichTextSchema,
                                nodes: {
                                    ...RichTextSchema.nodes,
                                    image: (node: ISbNode) => ({
                                        singleTag: [
                                            {
                                                tag: "img",
                                                attrs: {
                                                    src: `${node.attrs.src}/m/1504x0/filters:quality(75)`,
                                                    alt: node.attrs.alt,
                                                    loading: "lazy",
                                                    width: node.attrs.src
                                                        .split("/")[5]
                                                        .split("x")[0],
                                                    height: node.attrs.src
                                                        .split("/")[5]
                                                        .split("x")[1],
                                                    class: "w-full"
                                                },
                                            },
                                        ],
                                    }),
                                },
                            },
                        }) ?? "",
                }}
            ></div>
        </main>
    );
};

export default Tour;
