<template>
  <div class="header-box">
    <div class="store-score">
      <div class="num">{{list.delivery}}</div>
      <div>商家评分</div>
    </div>
    <div class="score">
      <div>
        <div class="star">口味 <Star :num="list.flavor"></Star> {{list.flavor}}分</div>

        <div class="star">包装 <Star :num="list.packing"></Star> {{list.packing}}分</div>
      </div>
    </div>
    <div class="peisong-score">
      <div class="num">{{list.score}}</div>
      <div>配送评分</div>
    </div>
  </div>
</template>

<script>
import Star from "@/components/Star";
export default {
  props: ['list'],
  components: {
    Star,
  },
};
</script>

<style lang="scss" scoped>
.header-box {
  display: flex;
  padding: 0.3rem;
  .store-score,
  .peisong-score {
    width: 1.86rem;
    text-align: center;
    font-size: 0.28rem;
    .num {
      font-size: 0.54rem;
      font-weight: bold;
      line-height: 0.54rem;
    }
  }
  .store-score {
    .num {
      color: #ffb000;
    }
  }

  .peisong-score {
    border-left: 0.05rem solid #999;

    .num {
      color: #999;
    }
  }

  .score {
    flex: 1;
    // border-right: 0.05rem solid  #999;
    .star {
      display: flex;
    }
  }
}
</style>