import React from "react";

interface BlokTypes {
    blok: {
        name: string;
        comment: string;
    };
}

const Testimonial = ({ blok }: BlokTypes) => {
    return (
        <div className={"bg-white p-8 rounded-sm shadow-md"}>
            <p className={"text-xl leading-relaxed text-gray-700"}>{blok.comment}</p>
            <h3 className={"text-lg font-semibold mt-6"}>{blok.name}</h3>
        </div>
    );
};

export default Testimonial;
