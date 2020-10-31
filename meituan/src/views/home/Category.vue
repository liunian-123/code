<template>
    <div>
        <ul class="list-box">
            <!-- v-for  循环 cateList 中的obj  -->
            <li v-for="obj in cateList" :key="obj.id" class="list">
                <img :src="obj.img" alt="">
                <p>{{obj.name}}</p>
            </li>
        </ul>
    </div>
</template>

<script>
    //cnpm  i axios 下载
    import axios from 'axios'
    // 进来立刻发请求
    export default {
        data(){
            return {
                cateList:[]
            }
        },
        created(){
            axios.get('http://admin.gxxmglzx.com/tender/test/get_type')
            .then((res)=>{ //成功
                // axios返回的数据 res.data
                console.log(res.data)
                // res.data：
                // data: (10) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, __ob__: Observer]
                // errcode: 200
                // errmsg: "成功"
                let result = res.data;
                if(result.errcode == 200){
                    this.cateList = result.data;
                }
            }).catch((error)=>{ //失败
                console.log(error)
            })
        }
    }
</script>

<style lang="scss" scoped>
.list-box{
    display: flex;
    flex-wrap: wrap;
}
.list{
    width: 20%;
    text-align: center;
    margin-top: 0.3rem;
}
.list img{
    width: 60%;
}
</style>