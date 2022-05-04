import { request } from './request'

export function getDetailData(iid) {
    return request({
        url: '/detail',
        params: {
            iid
        }
    })
}

export class BaseInfo {
    constructor(itemInfo, shopInfo, columns) {
        this.title = itemInfo.title,
            this.price = itemInfo.price,
            this.oldPrice = itemInfo.oldPrice,
            this.discountDesc = itemInfo.discountDesc,
            this.discountBgColor = itemInfo.discountBgColor,
            this.columns = columns,
            this.services = shopInfo.services

    }
}

export class ShopInfo {
    constructor(shopInfo) {
        this.shopLogo = shopInfo.shopLogo,
            this.name = shopInfo.name,
            this.cSells = shopInfo.cSells,
            this.cGoods = shopInfo.cGoods,
            this.score = shopInfo.score
    }
}

export function getRecommend() {
    return request({
        url: '/recommend'
    })
}