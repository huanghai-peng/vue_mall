export const getters = {
    getLength(state) {
        return state.cartList.length
    },
    getTotalPrice(state) {
        let sum = 0;
        state.cartList.forEach(item => {
            if (item.checked) {
                sum += item.nowprice * item.count
            }
        })
        return sum
    },
    getTotalLength(state) {
        let num = 0;
        state.cartList.forEach(item => {
            if (item.checked) {
                num++
            }
        })
        return num
    }
}