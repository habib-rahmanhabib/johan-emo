import { getShoppingCart } from "../fakedb";

const cartProductLoder = async () => {
    const loaderProducts = await fetch('data.json');
    const products = await loaderProducts.json();
    //   if cart data in database, you  have to use async await
    const storeCart = getShoppingCart()
    const savedCart = [];

    for (const id in storeCart) {
        const addedProduct = products.find(pd => pd.id === id);
        if (addedProduct) {
            const quantity = storeCart[id];
            addedProduct.quantity = quantity;
            savedCart.push(addedProduct)
        }
    }
    // if you want to send two things, you must use to [] or {} without use it js never give you permission
    // return [product, saveCart]
    // another option
    // return {products, Cart: saveCart}
    return savedCart;

}
export default cartProductLoder;