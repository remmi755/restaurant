export const getDataProducts = async () => {
  const apiUrl = "http://localhost:3000" || process.env.API_URL;
  const res = await fetch(`${apiUrl}/api/products`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed!");
  }
  return res.json();
};
