import React from "react";

const Hero = (params: any) => {
    return (
        <section className={"container mx-auto px-4 w-full pt-32 pb-16"}>
            <h1 className={"text-center text-5xl md:text-7xl font-bold"}>{params.blok.headline}</h1>
            <p className={"text-center text-xl mt-8"}>{params.blok.content}</p>
        </section>
    );
};

export default Hero;
