import { useEffect, useState } from "react";
//@ts-expect-error no types for this package
import imgGen from "@dudadev/random-img";
import { ReviewDataType } from "../types";

export const useUserImage = ({ userId, gender }: Pick<ReviewDataType, 'userId' | 'gender'>): string | null => {
    const [image, setImage] = useState<string | null>(null);

    useEffect(() => {
        const loadImage = async () => {
            const img = await imgGen({ gender, id: userId })
            setImage(img)
        }
        loadImage()
    }, [userId, gender])

    return image
}