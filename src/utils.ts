// Capitalize the first letter
function capitalize(str: string): string {
    if (typeof str !== 'string' || str.length === 0) {
      return str;
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  
  export { capitalize };