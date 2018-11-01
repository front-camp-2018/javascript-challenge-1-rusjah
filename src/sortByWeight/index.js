/* eslint-disable-next-line */
export const sortByWeight = arr => {
  return arr
    .map(el =>
      ({
        el,
        weight: el
          .split('')
          .reduce((acc, next) => +next + acc, 0)
      })
    )
    .sort((a, b) => {
      if (a.weight > b.weight) {
        return 1;
      } else if (b.weight > a.weight) {
        return -1;
      }
      return 0;
    })
    .map(elObj => elObj.el);
};
