<template>
  <div>
    <!-- header -->
    <comment-header :list="list"></comment-header>
    <comment-list :list="list"></comment-list>
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
    axios
      .get(
        ` http://admin.gxxmglzx.com/tender/test/get_info?id=${this.id}&type=1`
      )
      .then((res) => {
        console.log(res.data.data);
        this.list = res.data.data;
      });
  },
};
</script>

<style lang="scss" scoped>
</style>