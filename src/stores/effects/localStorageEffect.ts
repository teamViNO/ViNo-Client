import { recoilPersist } from 'recoil-persist';

const { persistAtom: localStorageEffect } = recoilPersist({
  key: 'vino',
  storage: localStorage,
});

export default localStorageEffect;
