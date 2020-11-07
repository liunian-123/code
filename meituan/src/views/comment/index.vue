<template>
  <div>
    <!-- header -->
    <comment-header :list="list"></comment-header>
    <comment-list :list="list" @updata="fn"></comment-list>
  </div>
</template>

<script>
import axios from "axios";
import CommentList from "./CommentList";
import CommentHeader from "./CommentHeader";

export default {
  data() {
    return {
      id: this.$route.query.id,
      list: [],
    };
  },
  components: {
    CommentHeader,
    CommentList,
  },
  created() {
   this.getData(1)
  },
  methods: {
    getData(typeId) {
      axios
        .get(
          ` http://admin.gxxmglzx.com/tender/test/get_info?id=${this.id}&type=${typeId}`
        )
        .then((res) => {
          console.log(res.data.data);
          this.list = res.data.data;
        });
    },
    fn(id){
        this.getData(id)
    }
  },
};
</script>

<style lang="scss" scoped>
</style>