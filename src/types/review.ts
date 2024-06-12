export type AddReviewPayload = {
    name: string;
    comment: string;
}

export enum UserGender {
    Men = 'men',
    Women = 'women'
}

export type ReviewDataType = AddReviewPayload & {
    id: string
    userId: string
    gender: UserGender
}
