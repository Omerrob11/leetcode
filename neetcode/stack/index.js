function isValid(s) {
  if (s.length === 0) {
    return true;
  }

  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
      stack.push(s[i]);
    } else {
      if (stack.length === 0) {
        return false;
      }
      const lastElement = stack.pop();

      switch (s[i]) {
        case ")":
          if (lastElement !== "(") {
            return false;
          }
          break;

        case "]": {
          if (lastElement !== "[") {
            return false;
          }
          break;
        }

        case "}":
          if (lastElement !== "{") return false;
          break;

        default:
          // Handle unexpected characters
          return false;
      }
    }
  }

  // check if all the parenthesis have been closed
  return stack.length === 0;
}
