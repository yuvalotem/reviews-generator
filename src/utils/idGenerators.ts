import { ReviewDataType } from "../types";

export const generateId = (reviews: ReviewDataType[], key: keyof ReviewDataType) =>
    (reviews[reviews.length - 1]?.[key] ?? 0) + 1

export const generateReviewId = (reviews: ReviewDataType[]) => generateId(reviews, 'id')

export const generateUserId = (reviews: ReviewDataType[]) => generateId(reviews, 'userId')