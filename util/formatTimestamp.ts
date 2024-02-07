// Function to format given date object to a timestamp with format day-month-year
export const formatTimeStamp = (timestamp?: Date) => {
  if (timestamp) {
    const dateObject = new Date(timestamp);

    const day = dateObject.getDate().toString().padStart(2, "0");
    const month = (dateObject.getMonth() + 1).toString().padStart(2, "0"); // Month is zero-based
    const year = dateObject.getFullYear();

    return `${day}-${month}-${year}`;
  }
  return;
};
