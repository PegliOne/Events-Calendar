export const formatLabel = (camelCaseStr: string) => {
  if (camelCaseStr === "url") return camelCaseStr.toUpperCase();
  const label = camelCaseStr.replace(/[A-Z]/g, " $&");
  return label[0].toUpperCase() + label.slice(1);
};
