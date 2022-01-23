const GetRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color === '#EBEBEB' ? GetRandomColor() : color
}
export default GetRandomColor

// const hue = Math.floor(Math.random() * 360);
//   const saturation = Math.floor(Math.random() * (100 + 1)) + "%";
//   const lightness = Math.floor(Math.random() * (100 + 1)) + "%";
//   return "hsl(" + hue + ", " + saturation + ", " + lightness + ")";