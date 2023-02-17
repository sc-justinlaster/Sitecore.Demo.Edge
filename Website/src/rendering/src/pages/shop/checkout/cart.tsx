import { useEffect } from 'react';
import Head from 'next/head';
import { logViewEvent } from 'src/services/CdpService';
import { ShopLayout } from 'components/Products/Shop';
import CartDetails from 'components/Checkout/CartDetails';

const Cart = (): JSX.Element => {
  useEffect(() => {
    logViewEvent();
  });

  return (
    <ShopLayout>
      <Head>
        <title>PLAY! SHOP - Cart</title>
      </Head>

      <CartDetails editable={true} />
      <div data-rfkid="rfkid_11"></div>
    </ShopLayout>
  );
};

export default Cart;
