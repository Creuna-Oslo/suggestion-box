export const getColor = index => {
  const colors = ['red', 'green', 'yellow', 'purple', 'teal'];
  return colors[index % colors.length];
};
