export const getDataCategory = async (category: string) => {
  const apiUrl = "http://localhost:3000" || process.env.API_URL;
  const res = await fetch(`${apiUrl}/api/products?cat=${category}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed!");
  }
  return res.json();
};
