<template>
  <div class="m-recommend">
    <h1>歌曲推荐</h1>
    <!-- recommendList.length > 0 保证了数据已经存在了再渲染页面，否则会有问题 -->
    <banner-slider v-if="recommendList.length > 0">
      <div slot="m-banner-content"
           v-for="(item, index) in recommendList"
           :key="index">
        <a :href="item.linkUrl">
          <img :src="item.picUrl"
               :srcset="item.picUrl">
        </a>
      </div>
    </banner-slider>
  </div>
</template>
<script>
import { getRecommend } from "../../api/recommend.js";
import BannerSlider from "../../base_componends/banner.vue";
export default {
  data() {
    return {
      recommendList: []
    };
  },
  created() {
    const _self = this;
    _self._getRecommend();
  },
  methods: {
    _getRecommend() {
      const _self = this;
      getRecommend().then(res => {
        if (res.code === 0) {
          // eslint-disable-next-line
          console.log(">>>>>", res.data.slider);
          _self.recommendList = res.data.slider;
        }
      });
    }
  },
  components: {
    BannerSlider
  }
};
</script>
<style lang="stylus" scoped>
.m-recommend {
  width: 100%;
  height: auto;

  h1 {
    line-height: 32px;
    text-align: center;
    font-size: 1rem;
    letter-spacing: 0.1rem;
  }
}
</style>
