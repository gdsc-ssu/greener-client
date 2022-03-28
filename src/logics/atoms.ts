import { atom } from 'jotai';

export interface User {
  profileImage: string;
}

export const userAtom = atom<User>({
  profileImage: '',
});
