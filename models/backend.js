import crypto from 'crypto';

const generateKashierOrderHash = (order) => {
    const { mid, amount, currency, merchantOrderId, secret } = order;
    const path = `/?payment=${mid}.${merchantOrderId}.${amount}.${currency}`;

    const hash = crypto.createHmac('sha256', secret)
        .update(path)
        .digest('hex');

    return hash;
};

const validateSignature = (query, secret) => {
    const queryString =
        "&paymentStatus=" + query["paymentStatus"] +
        "&cardDataToken=" + query["cardDataToken"] +
        "&maskedCard=" + query["maskedCard"] +
        "&merchantOrderId=" + query["merchantOrderId"] +
        "&orderId=" + query["orderId"] +
        "&cardBrand=" + query["cardBrand"] +
        "&orderReference=" + query["orderReference"] +
        "&transactionId=" + query["transactionId"] +
        "&amount=" + query["amount"] +
        "&currency=" + query["currency"];

    const finalUrl = queryString.substring(1);
    const signature = crypto.createHmac('sha256', secret)
        .update(finalUrl)
        .digest('hex');

    if (signature == query.signature) {
        console.log("Success Signature");
        return true;
    } else {
        console.log("Failed Signature !!");
        return false;
    }
};

export { generateKashierOrderHash, validateSignature };
