var { getPriceLogoNewsSummary } = require('../services/stockLookup');

it('should get a Stock Ticker Symbol Lookup', async () => {
    expect.assertions(1);
    let res = await getPriceLogoNewsSummary('msft') ;
    let obj = {
        "price": res.price,
        "logo": "https://storage.googleapis.com/iex/api/logos/MSFT.png",
        "news": "https://api.iextrading.com/1.0/stock/msft/article/6852915516775644"
    } ;
    expect(res).toMatchObject(obj);
});

it('should throw and error on a bad request', async () => {
    expect(getPriceLogoNewsSummary('msftFDSAFASDFDAS')).rejects.toEqual(new Error('404'))
});

it('should get a logo url for a Stock Ticker Symbol', async () => {
    let res = await getPriceLogoNewsSummary('msft') ;
    expect(res.logo).toBe('https://storage.googleapis.com/iex/api/logos/MSFT.png')
});
