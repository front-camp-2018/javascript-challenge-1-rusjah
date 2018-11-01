/* eslint-disable-next-line */
export const doubleNum = num => {
  const s = String(num);
  const length = s.length;
  if (length % 2 === 0 && s.slice(0, length / 2) === s.slice(length / 2)) {
    return num;

  }
  return num * 2;
};
