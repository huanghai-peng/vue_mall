<template>
    <div class="params">
        <table v-if="paramsInfo.rule">
            <tr v-for="(item,index) in paramsInfo.rule.tables[0]" :key="index">
                <td v-for="(v,i) in item" :key="i">{{v}}</td>
            </tr>
        </table>
        <table v-if="paramsInfo.info">
            <tr v-for="(item,index) in paramsInfo.info.set" :key="index">
                <td style="width: 95px;">{{item.key}}</td>
                <td style="color: #eb4868;">{{item.value}}</td>
            </tr>
        </table>
    </div>
</template>
<script>
export default {
    props:{
        paramsInfo:{
            type:Object,
            default(){
                return {}
            }
        }
    }
}
</script>

<style scoped>
    .params {
        padding: 20px 15px;
        font-size: 14px;
        border-bottom: 5px solid #F2F5F8;
    }
    .params table {
        width: 100%;
    }
    .params table tr {
        height: 41px;
        
    }
    .params table tr td {
        border-bottom: 1px solid #E8E8E8;
    }
</style>