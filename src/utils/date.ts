import { format } from "date-fns";

export const formatDate = (dateString: string): string => {
  try {
    const originalDate = new Date(dateString);
    return format(originalDate, "dd.MM.yyyy");
  } catch (e) {
    return "";
  }
};
