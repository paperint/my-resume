function randomColor() {
  const min = 150; // Minimum RGB value for pastel colors (0-255)
  const max = 230; // Maximum RGB value for pastel colors (0-255)
  return `rgb(${Math.floor(
    Math.random() * (max - min + 1) + min
  )}, ${Math.floor(Math.random() * (max - min + 1) + min)}, ${Math.floor(
    Math.random() * (max - min + 1) + min
  )})`;
}

export default randomColor;
