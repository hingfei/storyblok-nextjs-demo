import React from "react";
import Link from "next/link";

const RecommendedTour = (props: any) => {
    return (
        <div className={"rounded-sm bg-white shadow-md"}>
            <img
                src={`${props.story.content.main_image.filename}/m/736x414/filters:quality(70)`}
                width={736}
                height={414}
                alt={props.story.content.main_image.alt}
                loading={"lazy"}
                className={"aspect-video w-full object-cover"}
            />
            <div className={"p-8"}>
                <div className={"flex justify-between gap-4 text-lg font-bold"}>
                    <h3>{props.story.content.name}</h3>
                    <p>
                        {Number(props.story.content.price).toLocaleString(
                            "en-US",
                            {
                                style: "currency",
                                currency: "TWD",
                                minimumFractionDigits: 0,
                            }
                        )}
                    </p>
                </div>
                <p
                    className={
                        "mt-2 text-sm font-bold uppercase tracking-wide text-gray-700"
                    }
                >
                    {props.story.content.location}, Taiwan
                </p>
                <Link
                    className={
                        "mt-8 block text-base font-bold underline underline-offset-4"
                    }
                    href={`/${props.story.full_slug}`}
                >
                    View Tour
                </Link>
            </div>
        </div>
    );
};

export default RecommendedTour;
