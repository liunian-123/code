<template>
  <div class="list-container">
    <div class="type-box">
      <span
        :class="{ active: obj.id == typeId }"
        v-for="obj in list.label"
        :key="obj.id"
        @click="change(obj.id)"
      >
        {{ obj.name }}({{ obj.count }})
      </span>
    
    </div>
    <ul class="list-box">
      <li class="list" v-for="obj in list.rate" :key="obj.id">
        <img class="list-img" :src="obj.portrait" alt />
        <div class="list-info">
          <div class="name">{{ obj.name }}</div>
          <div class="desc">{{ obj.content }}</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["list"],
  data() {
    return {
      typeId: 1,
    };
  },
  methods: {
    change(id) {
      //获得当前id 传给父组件
      this.$emit("updata", id);
      //修改typeId
      this.typeId = id;
    },
  },
};
</script>

<style lang="scss" scoped>
.list-container {
  padding: 0.2rem;
  border-top: 0.2rem solid #f4f4f4;

  .type-box {
    padding-bottom: 0.3rem;
    border-bottom: 0.01rem solid #bbb;
    span {
      display: inline-block;
      padding: 0.1rem 0.24rem;
      border: 1px solid #bbb;
      border-radius: 0.28rem;
      margin-right: 0.2rem;
      &.active {
      background: #fffbf1;
      border: 1px solid #ffb000;
    }
    }
    
  }
  .list-box {
    .list {
      display: flex;
      padding-top: 0.5rem;
      border-bottom: 0.01rem solid #bbb;
      .list-img {
        width: 0.8rem;
        height: 0.8rem;
        border-radius: 50%;
        padding-right: 0.1rem;
      }
    }
  }
}
</style>