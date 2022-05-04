<template>
    <div class="detail-shop">
        <div class="shop-header">
            <div class="logo">
                <img :src="shopInfo.shopLogo" alt="">
            </div>
            <div class="name">{{shopInfo.name}}</div>
        </div>
        <div class="score">
            <div class="score-left">
                <div class="sales">
                    <div>38.5万</div>
                    <div>总销量</div>
                </div>
                <div class="all-baby">
                    <div>339</div>
                    <div>全部宝贝</div>
                </div>
            </div>
            <div class="score-right">
                <table>
                    <tr v-for="(item,index) in shopInfo.score" :key="index">
                        <td>{{item.name}}</td>
                        <td :class="item.score>=5 ? 'highcolor':'lowcolor'">{{item.score}}</td>
                        <td><span :class="item.isBetter ? 'highbg':'lowbg'">{{item.isBetter ? '高' : '低'}}</span></td>
                    </tr>
                </table>
            </div>
        </div>
        <div class="go-shopping">
                进店逛逛
            </div>
        <!-- <div style="height:300px"></div> -->
    </div>
</template>

<script>
export default {
    props:{
        shopInfo:{
            type:Object,
            default(){
                return {}
            }
        }
    }
}
</script>

<style scoped>
.detail-shop {
    border-bottom: 5px solid #F2F5F8;
    padding: 20px 8px;

}
.shop-header {
    display: flex;
}
    .logo {
        width: 45px;
        height: 45px;
        border-radius: 50%;
        overflow: hidden;
        border: 1px solid #ccc;
        margin-right: 10px;
    }
    .logo img {
        width: 100%;
        height: 100%;
        vertical-align: middle;
    }
    .name {
        line-height: 45px;
    }

    .score{
        display: flex;

    }
    .score>div {
        flex: 1;
    }
    .score-left {
        display: flex;
        border-right: 1px solid #EEEEEE;
    }
    .score-left>div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        flex: 1;
        text-align: center;
    }
    
    .sales div:first-child,
    .all-baby div:first-child {
        margin-bottom: 10px;
        font-size: 18px;
    }

    .sales div:last-child,
    .all-baby div:last-child {
        font-size: 12px;
    }

    .all-baby {
        padding-top: 4px;
    }
    .score-right {
        color: #333;
        font-size: 13px;
    }
    .score-right table {
        width: 120px;
        margin-left: 30px;
    }
    .score-right tr td {
        padding: 5px 0;
        /* margin-right: 5px; */
    }
    .lowbg {
        background-color: #5EA732;
        color: #fff;
        text-align: center;
    }
    .highbg {
        background-color: #F13E3A;
        color: #fff;
        text-align: center;
    }
    .lowcolor {
        color: #5EA732;
    }
    .highcolor {
        color: #F13E3A;
    }
    .go-shopping {
        width: 150px;
        height: 30px;
        text-align: center;
        line-height: 30px;
        border-radius: 10px;
        margin: 10px auto 0;
        background-color: #F2F5F8;
        color: #666666;
    }
</style>