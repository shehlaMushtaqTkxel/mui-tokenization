import themeJson from "./theme.json";

const allColors: any = { ...themeJson["material/colors"] };

// Function to resolve color values in an object if they are strings
function resolveColors(data: any) {
  if (typeof data !== "object" || data === null) return data; // Return non-object data as is

  const resolvedData: any = {};

  for (let [key, value] of Object.entries(data)) {
    if (typeof value === "string") {
      // Check if value matches pattern like colorFamily[shade]
      const match = value.match(/^(.+?)\[(\d+|A\d+)\]$/);
      if (match) {
        const [_, colorFamily, shade] = match;

        // Replace color reference with hex code if available
        resolvedData[key] =
          allColors[colorFamily] && allColors[colorFamily][shade]
            ? allColors[colorFamily][shade]
            : value;
      } else {
        resolvedData[key] = value; // Keep original value if not a color reference
      }
    } else {
      resolvedData[key] = value; // Keep non-string values as is
    }
  }

  return resolvedData;
}
export const palette = {
  ...allColors,
  primary: {
    ...resolveColors(themeJson.colorSchemes.light.palette.primary),
  },
  secondary: {
    ...resolveColors(themeJson.colorSchemes.light.palette.secondary),
  },
  error: {
    ...resolveColors(themeJson.colorSchemes.light.palette.error),
  },
  warning: {
    ...resolveColors(themeJson.colorSchemes.light.palette.warning),
  },
  info: {
    ...resolveColors(themeJson.colorSchemes.light.palette.info),
  },
  success: {
    ...resolveColors(themeJson.colorSchemes.light.palette.success),
  },
};
