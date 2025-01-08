import { apiPlugin, storyblokInit } from "@storyblok/react/rsc";
import Feature from "@/components/Feature";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import Page from "@/components/Page";
import RecommendedTour from "@/components/RecommendedTour";
import RecommendedTours from "@/components/RecommendedTours";
import Testimonial from "@/components/Testimonial";
import Tour from "@/components/Tour";

export const getStoryblokApi = storyblokInit({
    accessToken: process.env.NEXT_PUBLIC_STORYBLOK_TOKEN,
    use: [apiPlugin],
    components: {
        tour: Tour,
        page: Page,
        hero: Hero,
        grid: Grid,
        feature: Feature,
        testimonial: Testimonial,
        recommended_tours: RecommendedTours,
        recommended_tour: RecommendedTour,
    },
});
