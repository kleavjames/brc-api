export const processString = (inputString: string): string => {
  let processedString = inputString.replace(/[^A-Z0-9]+/gi, '');

  processedString = processedString.toLowerCase();

  return processedString;
};
