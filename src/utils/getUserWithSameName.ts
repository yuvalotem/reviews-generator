import { ReviewDataType } from "../types";

export const getUserWithSameName = (
    { reviews, name }: { reviews: ReviewDataType[], name: string }) =>
    reviews.find((review) => review.name.toLowerCase() === name.toLowerCase());