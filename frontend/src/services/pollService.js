export const getAll = async () => {
  const response = await fetch('http://localhost:3001/api/polls');
  const data = await response.json();
  return data;
};
