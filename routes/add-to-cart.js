import { defineEventHandler, readBody } from 'h3';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { variantId, quantity } = body;

  try {
    const response = await $fetch(
      'https://cobacha-ranch.myshopify.com/cart/add.js',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: {
          items: [
            {
              id: variantId,
              quantity: quantity,
            },
          ],
        },
      }
    );

    return response;
  } catch (error) {
    console.error('Error adding to cart:', error);
    throw error;
  }
});
