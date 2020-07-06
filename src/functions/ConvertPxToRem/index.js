export default function pxToRem(px) {
  if (px) {
    const valueInRem = px / 16;

    return `${valueInRem}rem`;
  }

  return '1rem';
}
