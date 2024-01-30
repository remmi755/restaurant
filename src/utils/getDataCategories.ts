export const getDataCategories = async () => {
  const apiUrl = "http://localhost:3000" || process.env.API_URL;
  const res = await fetch(`${apiUrl}/api/categories`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed!");
  }
  return res.json();
};
