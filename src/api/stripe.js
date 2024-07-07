import API_INSTANCE from ".";

export const makeStripePayment = async (body, headers) => {
    const res = await API_INSTANCE.post('/payment/create-checkout-session', body, {
        headers: headers
    });
    return res;
}
