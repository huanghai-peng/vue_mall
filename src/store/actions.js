import { ADDSHOPCOUNT, ADDSHOPCART, ADDCARTS, UPDATECHECKED, UPDATEADDSHOPCOUNT, UPDATEDECREASESHOPCOUNT } from './mutations_types'

export const actions = {
    [ADDCARTS](centext, payload) {
        return new Promise((resolve, reject) => {
            // 判断该商品是否在cartList中，规格和尺码是否一样
            let flag = false
            if (payload.length == 0) {
                reject('加入购物车失败')
            } else {
                centext.state.cartList.forEach((item) => {
                    if (payload.iid == item.iid && payload.styleId == item.styleId && payload.sizeId == item.sizeId) {
                        // 说明存在
                        flag = true;
                    }
                })

                if (flag) {
                    resolve('商品已存在，数量加' + payload.count)
                    centext.commit(ADDSHOPCOUNT, payload)
                } else {
                    resolve('加入购物车成功')
                    centext.commit(ADDSHOPCART, payload);
                }
            }

        })
    },
    // 更新checked
    [UPDATECHECKED](context, payload) {
        return new Promise((resolve, reject) => {
            resolve('22');
            context.commit(UPDATECHECKED, payload)
        })
    },
    // 更新购买商品个数
    [UPDATEADDSHOPCOUNT](context, payload) {
        return new Promise((resolve, reject) => {
            if (payload.count == 10) {
                resolve('只能限购10个哦');
            } else {
                // resolve('')
                context.commit(UPDATEADDSHOPCOUNT, payload)
            }
        })
    },
    [UPDATEDECREASESHOPCOUNT](context, payload) {
        return new Promise((resolve, reject) => {
            if (payload.count == 1) {
                resolve('不能再少了哦');
            } else {
                // resolve('')
                context.commit(UPDATEDECREASESHOPCOUNT, payload)
            }
        })
    }
}