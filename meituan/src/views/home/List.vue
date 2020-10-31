<template>
    <div>
<ul class="store-list-box">
    <li class="store-list" v-for="obj in list" :key ="obj.id">
        <img :src="obj.img" alt="" class="store-img">
        <div class="store-info">
            <h2>{{obj.name}}</h2>
            <div>{{obj.num}}</div>
            <div>配送时间：{{obj.minute}}</div>
        </div>
    </li>
</ul>
    </div>
</template>

<script>
import axios from "axios"

    export default {
        data(){
            return {
                list:[]
            }
        },
        created(){
            axios.get('http://admin.gxxmglzx.com/tender/test/get_store?current=1&size=10')
            .then((res)=>{
                console.log(res.data);
                let result = res.data;
                
                this.list = result.data.list;
            }).catch((err)=>{
                console.log(err)
            })

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
</style>