export default function useConvertRgb() {
  function extractRgbValues(colorString) {
    const rgbRegex = /rgb\((\d+), (\d+), (\d+)\)/;
    const rgbMatches = colorString.match(rgbRegex);

    if (rgbMatches) {
      const [, r, g, b] = rgbMatches;
      return {
        r,
        g,
        b,
      };
    }

    const hexRegex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
    const hexMatches = colorString.match(hexRegex);

    if (hexMatches) {
      const [, r, g, b] = hexMatches.map((match) => parseInt(match, 16));
      return {
        r,
        g,
        b,
      };
    }

    return {
      r: 0,
      g: 0,
      b: 0,
    };
  }
  return { extractRgbValues };
}
