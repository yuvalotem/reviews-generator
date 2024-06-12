import { ReviewDataType } from "../types";

const USER_REVIEWS_STORAGE_KEY = 'user-reviews'

export const setReviewToLocalStorage = (review: ReviewDataType[]) => localStorage.setItem(USER_REVIEWS_STORAGE_KEY, JSON.stringify(review));

export const getReviewFromLocalStorage = (): ReviewDataType[] => JSON.parse(localStorage.getItem(USER_REVIEWS_STORAGE_KEY) || '[]');