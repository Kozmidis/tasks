function isEmpty(value) {
  if ([null, undefined, true, false, ""].includes(value)) {
    return true;
  }

  if (Array.isArray(value) || typeof value === "string") {
    return !value.length;
  }

  if (!Number.isNaN(Number(value))) {
    return true;
  }

  if (!Object.entries(value).length) {
    return true;
  }

  return false;
}
