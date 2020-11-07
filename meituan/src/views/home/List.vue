<template>
    <div>
<ul class="store-list-box">
    <li class="store-list" v-for="obj in list" :key ="obj.id">
        <img :src="obj.img" alt="" class="store-img">
        <div class="store-info">
            <h2>{{obj.name}}</h2>
            
            <div>
                  <Star :num="parseFloat(obj.score)"></Star>
              <!-- <Star num="3.5"></Star>  -->
              月销： {{obj.num}}
            
          </div>
            <div>配送时间：{{obj.minute}}</div>
        </div>
    </li>
</ul>
  <img class="loading" v-show="isShow" src="@/assets/images/loading.gif" alt="">
    </div>
</template>

<script>
import axios from "axios"
import Star from '@/components/Star'

    export default {
        data(){
            return {
                list:[],
                pageNum:0,
                isShow:true,
                isFinished:false

            }
        },
          components:{
        Star
    },methods:{
        getData(){
        // axios.get('http://admin.gxxmglzx.com/tender/test/get_store?current=1&size=10')
              axios.get("http://admin.gxxmglzx.com/tender/test/get_store?current="+this.pageNum+"&size=10")
            .then((res)=>{
                // console.log(res.data);
                // let result = res.data;
                // this.list = result.data.list;
                    this.list = [...this.list,...res.data.data.list]
                    this.pageNum++;
                    this.isShow = false; //loading隐藏
            // 判断是不是请求完了
                    // console.log(this.pageNum)
                    if(this.list.length == res.data.data.total){
                    this.isFinished = true
            }
            }).catch((err)=>{
                console.log(err)
              
            })
        }
    },
    // 生存周期
        created(){
             // 获取列表的数据
         this.getData();
         window.onscroll = () =>{
              // 判断 当滚动条滚动高度 + 可视区的高度  = 整个页面的高度
        // 滚动事件
          let scrollTtop = document.documentElement.scrollTop;  // 获滚动条滚动高度
          let clientHeight = document.documentElement.clientHeight;//可视区高度
          let scrollHeight = document.documentElement.scrollHeight;//整个页面的高度
          console.log(scrollTtop,clientHeight,scrollHeight)
        //   if( scrollHeight == Math.floor(scrollTtop) + clientHeight){//到底了 请求下10条数据
            if((Math.floor(scrollTtop)+ clientHeight == scrollHeight) && !this.isFinished ){//页面到底了 并且 数据没有加载完
            this.isShow = true; //loading
            this.getData();
          }
         }

        }
    };
</script>

<style lang="scss" scoped>
.store-list-box {
    padding: 0.2rem;
  .store-list {
    display: flex;
    margin-top: 0.3rem;
    .store-img {
      width: 1.52rem;
    }
    .store-info {
      flex: 1;
      margin-left: 0.3rem;
    }
  }
}
.loading{
  position: fixed;
  left:50%;
  top:50%;
  transform: translate(-50%,-50%);
  width:1.4rem;
  height:1.4rem;
}
</style>