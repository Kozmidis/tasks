function invert(obj) {
  return Object.entries(obj).reduce(
    (accum, [key, value]) => ({
      ...accum,
      [value]: key,
    }),
    { test: 5 }
  );
}

const res = invert({ a: 1, b: "g" });
console.log(res);
