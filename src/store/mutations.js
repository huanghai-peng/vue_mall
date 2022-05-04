import { ADDSHOPCOUNT, ADDSHOPCART, UPDATECHECKED, UPDATEADDSHOPCOUNT, UPDATEDECREASESHOPCOUNT } from './mutations_types'

export const mutations = {
    [ADDSHOPCART](state, payload) {
        state.cartList.push(payload);
    },
    [ADDSHOPCOUNT](state, payload) {
        state.cartList.forEach(item => {
            if (payload.iid == item.iid) {
                item.count += payload.count
            }
        })
    },
    // 更新checked
    [UPDATECHECKED](state, payload) {
        let obj = state.cartList.find(item => {
            return item.iid == payload.item.iid && item.sizeId == payload.item.sizeId && item.styleId == payload.item.styleId
        })
        obj.checked = payload.checked
    },
    // 更新购买商品个数
    [UPDATEADDSHOPCOUNT](state, payload) {
        let obj = state.cartList.find(item => {
            return item.iid == payload.iid && item.sizeId == payload.sizeId && item.styleId == payload.styleId
        })
        obj.count++
    },
    [UPDATEDECREASESHOPCOUNT](state, payload) {
        let obj = state.cartList.find(item => {
            return item.iid == payload.iid && item.sizeId == payload.sizeId && item.styleId == payload.styleId
        })
        obj.count--
    }
}