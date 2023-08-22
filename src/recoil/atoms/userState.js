import { atom, selector } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const userState = atom({
  key: 'userState',
  default: {
    email: '',
    role: '',
    profileUrl: '',
  },
  effects_UNSTABLE: [persistAtom],
});

export const loginState = selector({
  key: 'loginState',
  get: ({ get }) => (get(userState).email !== '' ? true : false),
});

export const customerState = selector({
  key: 'customerState',
  get: ({ get }) => get(userState).role === 'CONSUMER',
});
