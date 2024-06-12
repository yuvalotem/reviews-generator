import { UserGender } from '../types';
import { getReviewFromLocalStorage, setReviewToLocalStorage } from './reviewStorage';


const mockData = [
    {
        id: '1',
        userId: '1',
        name: 'John Doe',
        comment: 'This is a comment',
        gender: UserGender.Women
    },
]

describe('reviewStorage test', () => {

    describe('getReviewFromLocalStorage', () => {
        it('should return empty array when no data in storage', async () => {
            const reviews = getReviewFromLocalStorage()
            expect(reviews).toEqual([]);
        });

        it('should return correct data', async () => {
            localStorage.setItem('user-reviews', JSON.stringify(mockData))
            const reviews = getReviewFromLocalStorage()
            expect(reviews).toEqual(mockData);
        });
    });


    describe('setReviewToLocalStorage', () => {
        it('should save items correctly', async () => {
            setReviewToLocalStorage(mockData)
            const reviews = JSON.parse(localStorage.getItem('user-reviews') ?? '[]')
            expect(reviews).toEqual([]);
        });
    });

});
