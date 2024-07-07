import API_INSTANCE from ".";

export const createOrder = async (body) => {
    const res = await API_INSTANCE.post('/order', body);
    return res;
}
