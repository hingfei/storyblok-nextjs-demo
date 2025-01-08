import React from "react";
import { StoryblokServerComponent } from "@storyblok/react/rsc";

const Page = (props: any) => {
    return (
        <main>
            {props.blok.blocks.map((nestedBlok: any) => (
                <StoryblokServerComponent blok={nestedBlok} key={nestedBlok._uid} />
            ))}
        </main>
    );
};

export default Page;
