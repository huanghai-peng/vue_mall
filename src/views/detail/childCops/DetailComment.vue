<template>
    <div class="comment">
        <div class="comment-hd">
            <div>用户评价</div>
            <div class="move">更多&gt;&gt;</div>
        </div>
        <div class="comment-td">
            <div class="user" v-if="commentInfo.user">
                <img :src="commentInfo.user.avatar" alt="">
                <span>{{commentInfo.user.uname}}</span>
            </div>
            <div class="content">{{commentInfo.content}}</div>
            <div class="created">
                <span>{{commentInfo.created | getDate}}</span>
                <span>{{commentInfo.style}}</span>
            </div>
            <div class="images" v-if="commentInfo.images">
                <img :src="item" alt="" v-for="(item,index) in commentInfo.images" :key="index" @load="imgLoad">
            </div>
        </div>
    </div>
</template>

<script>
    import {dayjs} from 'common/utils'
export default {
    props:{
        commentInfo:{
            type:Object,
            default(){
                return {}
            }
        }
    },
    filters: {
        getDate(old){
            let newDate =parseInt(old) * 1000;
            return dayjs(newDate).format('YYYY-MM-DD HH:mm:ss')
        }
    },
    methods:{
        imgLoad(){
            this.$emit('imagesLoad');
        }
    }
}
</script>

<style scoped>
    .comment {
        padding: 20px 15px;
        border-bottom: 5px solid #F2F5F8;
    }
    .comment-hd {
        display: flex;
        font-size: 15px;
        height: 50px;
        line-height: 50px;
        border-bottom: 1px solid rgba(0, 0, 0, .1);
    }
    .comment-hd>div {
        flex: 1;
    }
    .move {
        text-align: right;
        font-size: 13px;
    }
    .user {
        padding: 10px 0 15px;
    }
    .user img {
        width: 42px;
        height: 42px;
        border-radius: 50%;
        vertical-align: middle;
        margin-right: 10px;
    }
    .content {
        font-size: 14px;
        color: #777;
    }
    .created {
        font-size: 12px;
        color: #999;
        margin: 10px 0;
    }
    .images img {
        width: 70px;
        height: 70px;
        margin-right: 5px;
        vertical-align: middle;
    }
</style>