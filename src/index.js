module.exports = function makeExchange(currency) {
    let coins = {};
    const value = {
        H: 50,
        Q: 25,
        D: 10,
        N: 5,
        P: 1
    };
    currency = +currency;
    if (currency > 10000) return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    else if (currency <= 0) return coins;
    else {
        for (let key in value) {
            if (currency >= value[key]) {
                const count = Math.floor(currency / value[key]);
                currency = currency % value[key];
                coins[key] = count;
            }
        }
        return coins;
    }
};


