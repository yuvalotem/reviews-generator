import { useCallback, useMemo, useState } from "react";
import { AddReviewPayload, ReviewDataType } from "../types";
import { generateReviewId, generateUserId, getUserWithSameName, randomGender } from "../utils";
import { getReviewFromLocalStorage, setReviewToLocalStorage } from "../storage";

export const useReviews = () => {
    const [reviews, setReviews] = useState<ReviewDataType[]>([]);

    const loadReviews = useCallback((): ReviewDataType[] => {
        const newReviews = getReviewFromLocalStorage();
        setReviews(newReviews)
        return newReviews;
    }, [])

    const updateReview = useCallback((reviewData: ReviewDataType) => {
        const reviews = getReviewFromLocalStorage();
        const updatedReviews = reviews.map((review) => review.id === reviewData.id ? reviewData : review)
        setReviewToLocalStorage(updatedReviews)
        setReviews(updatedReviews);
    }, [])

    const addReview = useCallback((reviewData: AddReviewPayload) => {
        const reviews = getReviewFromLocalStorage();
        const id = generateReviewId(reviews);
        const userWithSameName = getUserWithSameName({ reviews, name: reviewData.name });
        const userId = userWithSameName?.userId ?? generateUserId(reviews);
        const gender = userWithSameName?.gender ?? randomGender();
        reviews.push({ ...reviewData, id, userId, gender });
        setReviewToLocalStorage(reviews)
        setReviews(reviews);
    }, [])

    const deleteReview = useCallback((id: string) => {
        const reviews = getReviewFromLocalStorage();
        const updatedReviews = reviews.filter((review) => review.id !== id)
        setReviewToLocalStorage(updatedReviews)
        setReviews(updatedReviews);
    }, [])

    return useMemo(() => ({ reviews, loadReviews, addReview, updateReview, deleteReview }), [reviews, loadReviews, addReview, updateReview, deleteReview])
}