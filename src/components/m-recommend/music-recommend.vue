<template>
  <div class="m-recommend">
    recommend
  </div>
</template>
<script>
import { getRecommend } from "../../api/recommend.js";
export default {
  created() {
    const _self = this;
    _self._getRecommend();
  },
  methods: {
    _getRecommend() {
      getRecommend().then(res => {
        if (res.code === 0) {
          // eslint-disable-next-line
          console.log(">>>>>", res.data.slider);
        }
      });
    }
  }
};
</script>