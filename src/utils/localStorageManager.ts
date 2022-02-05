export const getLocalValue = (field: string) => {
  if (typeof window !== "undefined") {
    const localValues = localStorage.getItem(field);
    return localValues ? JSON.parse(localValues) : "";
  }
};

export const setLocalValue = (field: string, value: any) => {
  localStorage.setItem(field, JSON.stringify(value));
};
