export const loadStorage = (key) => {
  try {
    const serializedState = localStorage.getItem(key);
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveStorage = (key, value) => {
  try {
    const serializedState = JSON.stringify(value);
    window.localStorage.setItem(key, serializedState);
  } catch (err) {
    console.log(err);
  }
};

export const delStorage = (key) => {
  try {
    window.localStorage.removeItem(key);
  } catch (err) {
    console.log(err);
  }
};
