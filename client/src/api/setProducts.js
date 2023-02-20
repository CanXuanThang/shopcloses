import * as httpRequest from './httpRequest';

export const getProduct = async ({ page }) => {
    try {
        const res = await httpRequest.get('product', {
            params: {
                page,
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
