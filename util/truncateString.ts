// Function to truncate a given string based on its length
export const truncateString = (
  stringToTruncate: string,
  maxLength: number = 10
) => {
  if (stringToTruncate.length > maxLength) {
    return `${stringToTruncate.substring(0, maxLength)}...`;
  }

  return stringToTruncate;
};
