import React from 'react';
import { generateKashierOrderHash } from '@/utils/generateKashierOrderHash';
import config from '@/utils/Config2'; 
import { useRouter } from 'next/router';

const PayPage = () => {
  const router = useRouter();
 

  const { baseUrl } = config;
  const configObj = config[config.mode];

  const order = {
    amount: '1.00',
    currency: 'EGP',
    merchantOrderId: Date.now(),
    mid: configObj.mid,
    secret: configObj.PaymentApiKey,
    baseUrl: configObj.baseUrl,
    metaData: JSON.stringify({
      'Customer Name': 'Mohamed Khaled',
      'Cutomer Phone': '+20100XXX',
      'Cutomer Email': 'mkhalid@kashier.io',
    }),
    merchantRedirect: 'http://localhost:3000/api/payment-redirect',
    display: 'en',
    failureRedirect: 'true',
    redirectMethod: 'get',
    allowedMethods: 'wallet,card',
    brandColor: 'rgba(163, 0, 0, 1)',
  };

  order.hash = generateKashierOrderHash(order);

  const hppUrl =
    `${configObj.baseUrl}?` +
    `merchantId=${order.mid}` +
    `&orderId=${order.merchantOrderId}` +
    `&amount=${order.amount}` +
    `&currency=${order.currency}` +
    `&hash=${order.hash}` +
    `&merchantRedirect=${order.merchantRedirect}` +
    `&metaData=${order.metaData ? order.metaData : ''}` +
    `&allowedMethods=${order.allowedMethods ? order.allowedMethods : ''}` +
    `&failureRedirect=${order.failureRedirect ? order.failureRedirect : ''}` +
    `&redirectMethod=${order.redirectMethod ? order.redirectMethod : ''}` +
    `&display=${order.display ? order.display : ''}` +
    `&brandColor=${encodeURIComponent(order.brandColor)}` +
    `&mode=${configObj.mode}`;

  return (
    <div>
      <a href={hppUrl} target="_blank" rel="noopener noreferrer">Hosted Checkout</a><br />

      <script
        id="kashier-iFrame"
        src={`${baseUrl}/kashier-checkout.js`}
        data-amount={order.amount}
        data-hash={order.hash}
        data-currency={order.currency}
        data-orderId={order.merchantOrderId}
        data-merchantId={order.mid}
        data-merchantRedirect={order.merchantRedirect}
        data-display={order.display}
        data-mode={config.mode}
        data-metaData={order.metaData}
        data-redirectMethod={order.redirectMethod}
        data-failureRedirect={order.failureRedirect}
        data-allowedMethods={order.allowedMethods}
        data-brandcolor={order.brandColor}
      ></script>
    </div>
  );
};

export default PayPage;
