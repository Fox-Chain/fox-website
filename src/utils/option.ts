const Opt = {
  map: <T, U>(val: Option<T>, fn: (val: T) => U): Option<U> => {
    if (val !== undefined) {
      return fn(val);
    } else {
      return undefined;
    }
  },
};

export default Opt;
