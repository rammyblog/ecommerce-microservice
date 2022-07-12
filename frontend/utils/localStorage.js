export const localStorageTest = () => {
  let hasLocalStorage = false;
  if (typeof localStorage !== undefined) {
    try {
      const x = 'testStorage';
      localStorage.setItem(x, x);
      localStorage.removeItem(x);
      hasLocalStorage = true;
    } catch (e) {
      hasLocalStorage = false;
    }
  }
  return hasLocalStorage;
};
