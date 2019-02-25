var get = require('../utils/get') ;

module.exports = { 
    getPriceLogoNewsSummary: async symbol  => { 
        let price = await  get (`https://api.iextrading.com/1.0/stock/${symbol}/price`) ;
        let logo = (await  get (`https://api.iextrading.com/1.0/stock/${symbol}/logo`)).url ;
        let news = (await  get (`https://api.iextrading.com/1.0/stock/${symbol}/news/last/1`))[0].url ;
        return { price , logo , news } ;
    }
}