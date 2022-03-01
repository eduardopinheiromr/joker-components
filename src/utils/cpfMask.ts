export const cpfMask = (value: string) => {
  return value
    .split("")
    .map((char, index) => {
      if (index === 2 || index === 5) {
        return `${char}.`;
      }
      if (index === 9) {
        return `-${char}`;
      }
      return char;
    })
    .join("");
};
