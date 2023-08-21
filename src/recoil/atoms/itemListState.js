import { atom } from 'recoil';

export const itemListState = atom({
  key: 'itemListState',
  default: {
    page: 0,
    size: 15,
    sort: 'createdAt,desc',
    searchKeyword: '',
    genre: '전체',
    category: '',
  },
});
