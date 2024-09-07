export const mapRange = (
  inputLower: number,
  inputUpper: number,
  outputLower: number,
  outputUpper: number,
) => {
  const inputRange = inputUpper - inputLower;
  const outputRange = outputUpper - outputLower;

  return (value: number) =>
    outputLower + (((value - inputLower) / inputRange) * outputRange || 0);
};
