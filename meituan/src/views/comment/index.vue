<template>
  <div class="comment-wrapper">
    <div>
      <!-- header -->
      <comment-header :list="list"></comment-header>
      <!-- list -->
      <comment-list :list="list" @xx="fn"></comment-list>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import CommentList from "./CommentList";
import CommentHeader from "./CommentHeader";
import BetterScroll from "better-scroll";
export default {
  data() {
    return {
      id: this.$route.query.id,
      list: {}
    };
  },
  components: {
    CommentHeader,
    CommentList
  },
  created() {
    // 请求评论也数据
    // id商家id  type评论类型 1（全部）
    this.getData(1);
  },
  methods: {
    fn(id) {
      //   修改type = id
      this.getData(id);
    },
    getData(typeId) {
      axios
        .get(
          `http://admin.gxxmglzx.com/tender/test/get_info?id=${this.id}&type=${typeId}`
        )
        .then(res => {
          console.log(res.data.data);
          this.list = res.data.data;
          this.$nextTick(()=>{
            new BetterScroll(".comment-wrapper",{
              bounce:false,
              click:true
            })
          })
          // this.score.delivery =
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.comment-wrapper{
  // calc中 - 左右两边必须有空格
height: calc(100vh - 44px);
}
</style>