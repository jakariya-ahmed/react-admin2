export const getRandomDate = () => {
  const today = new Date();
  const pastDate = new Date(today);
  pastDate.setDate(today.getDate() - Math.floor(Math.random() * 30)); // random last 30 days

  // Format like "24 May 2022"
  return pastDate.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};