export const getDataSingleProduct = async (id: string) => {
  const apiUrl = "http://localhost:3000" || process.env.API_URL;
  const res = await fetch(`${apiUrl}/api/products/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed!");
  }
  return res.json();
};
