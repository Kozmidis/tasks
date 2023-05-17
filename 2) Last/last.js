function last(array) {
  if (!Array.isArray(array)) {
    return undefined;
  }

  return array[array.length - 1];
}
