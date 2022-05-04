<template>
    <div class="profile">
        <nav-bar></nav-bar>

        <div class="login">
            <div class="avatar">
                <img src="~assets/img/profile/avatar.svg" alt="">
            </div>
            <div class="login-item">
                <p>登录/注册</p>
                <div><img src="~assets/img/profile/phone.svg" alt="">暂无绑定手机号</div>
            </div>
            <div class="right">
                <img src="~assets/img/common/arrow-left.svg" alt="">
            </div>
        </div>

        <div class="profile-total">
            <div class="profile-total-item">
                <div><span>0.00</span>元</div>
                <p>我的余额</p>
            </div>
            <div class="profile-total-item">
                <div><span>0</span>个</div>
                <p>我的优惠</p>
            </div>
            <div class="profile-total-item">
                <div><span>0</span>分</div>
                <p>我的积分</p>
            </div>
        </div>
        <div class="line"></div>
        <div class="Serve">
            <div class="Serve-item">
                <img src="~assets/img/profile/message.svg" alt="">
                我的消息
            </div>
            <div class="Serve-item">
                <img src="~assets/img/profile/pointer.svg" alt="">
                积分商城
            </div>
            <div class="Serve-item">
                <img src="~assets/img/profile/vip.svg" alt="">
                会员卡
            </div>
            <div class="line"></div>
            <div class="Serve-item">
                <img src="~assets/img/profile/cart.svg" alt="">
                我的购物车
            </div>
            <div class="Serve-item">
                <img src="~assets/img/profile/shopping.svg" alt="">
                下载购物APP
            </div>
        </div>
    </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'

export default {
    data(){
        return {

        }
    },
    components:{
        NavBar
    }
}
</script>

<style scoped>

    .profile-total {
        display: flex;
        background: #fff;
    }
    .profile-total-item {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 13px;
        color: #666;
        padding: 18px;
        border-right: 1px solid rgba(0, 0, 0, .1);
    }
    .profile-total-item div span {
        color: #FF727D;
        font-size: 24px;
        font-weight: 700;
    }
    .profile-total-item p {
        margin-top: 6px;
    }

    .profile-total-item:last-child {
        border-right: 0;
    }
    .login {
        display: flex;
        background-color: #FF627B;
        padding: 6px 15px;
    }
    .avatar {
        width: 70px;
        height: 70px;
    }
    .avatar img {
        width: 100%;
        height: 100%;
        vertical-align: middle;
    }
    .login-item {
        flex: 1;
        color: #fff;
        padding-left: 15px;
        padding-top: 15px;
        
    }
    .login-item div  {
        font-size: 13px;
    }
    .login-item div img {
        position: relative;
        top: 0;
        left: -3px;
        width: 20px;
        height: 30px;
        vertical-align: middle;
    }
    .right {
        width: 20px;
        height: 20px;
        margin: auto 0;
    }
    .right img {
        width: 100%;
        height: 100%;
        vertical-align: middle;
    }

    .Serve {
        background-color: #fff;
        margin-top: 12px;
        font-size: 15px;
        color: #333;
    }

    .Serve-item {
        height: 44px;
        line-height: 44px;
        border-bottom: 1px solid rgba(0, 0, 0, .1);
    }

    .Serve-item img {
        width: 20px;
        height: 20px;
        vertical-align: middle;
        margin-left: 15px;
        margin-right: 10px;
    }
    .Serve-item:last-child {
        border-bottom: 0;
    }
    .line {
        width: 100%;
        height: 12px;
        background-color: #f2f2f2;
    }
</style>