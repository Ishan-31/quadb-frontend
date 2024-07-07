import API_INSTANCE from ".";

export const getallProducts = async () => {
  const res = await API_INSTANCE.get("/product/all");
  return res;
};

export const getProductById = async (id) => {
  const res = await API_INSTANCE.get(`/product/${id}`);
  return res;
}
