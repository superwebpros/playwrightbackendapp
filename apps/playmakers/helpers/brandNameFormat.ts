const replaceSpacesAndAmpersands = (str: string) => {
  // Replace spaces and ampersands with dashes
  str = str.replace(/[\s&]/g, "-");
  // Convert to lowercase
  str = str.toLowerCase();
  return str;
};

export default replaceSpacesAndAmpersands;
