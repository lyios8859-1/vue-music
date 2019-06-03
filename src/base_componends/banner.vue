<template>
  <div class="m-banner"
       ref="refBanner">
    <div class="m-banner-grop"
         ref="refBannerGroup">
      <slot name="m-banner-content"></slot>
    </div>
    <div class="m-banner-dots">
      <span class="m-banner-dot"
            v-for="(item, index) in dots"
            :class="{active: currentPageIndex === index}"
            :key="index"></span>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
@import '../common/style/variable.styl';

.m-banner {
  position: relative;
  width: 100%;
  height: auto;
  background: #ddd;
  overflow: hidden;

  .m-banner-grop {
    white-space: nowrap;

    .banner-item {
      float: left;
      box-sizing: border-box;
      overflow: hidden;
      text-align: center;

      a {
        display: block;
        width: 100%;
        overflow: hidden;
        text-decoration: none;
      }

      img {
        display: block;
        width: 100%;
      }
    }
  }

  .m-banner-dots {
    position: absolute;
    right: 0;
    left: 0;
    bottom: 12px;
    text-align: center;
    font-size: 0;

    .m-banner-dot {
      display: inline-block;
      margin: 0 4px;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: $color-text-l;

      &.active {
        width: 20px;
        border-radius: 5px;
        background: #ec4949;
      }
    }
  }
}
</style>

<script>
import BetterScroll from "better-scroll";
import { addClass } from "../common/js/dom.js";
export default {
  name: "Banner",
  props: {
    loop: {
      type: Boolean,
      default: true
    },
    autoPlay: {
      type: Boolean,
      default: true
    },
    interval: {
      type: Number,
      default: 2000
    }
  },
  data() {
    return {
      dots: [],
      currentPageIndex: 0
    };
  },
  mounted() {
    const _self = this;
    _self.$nextTick(() => {
      _self._setBannerWidth();
      _self._initDots();
      _self._initBanner();
      if (_self.autoPlay) {
        _self._autoPlay();
      }
    });
  },
  methods: {
    _setBannerWidth() {
      const _self = this;
      _self.children = _self.$refs.refBannerGroup.children;
      let width = 0;
      let bannerParentContainerWidth = _self.$refs.refBanner.clientWidth;
      for (let i = 0; i < _self.children.length; i++) {
        let child = _self.children[i];
        addClass(child, "banner-item");
        child.style.width = bannerParentContainerWidth + "px";
        width += bannerParentContainerWidth;
      }
      if (this.loop) {
        width += 2 * bannerParentContainerWidth;
      }
      _self.$refs.refBannerGroup.style.width = width + "px";
    },
    _initBanner() {
      const _self = this;
      _self.banner = new BetterScroll(_self.$refs.refBanner, {
        scrollX: true,
        scrollY: false,
        momentum: false,
        snap: {
          loop: this.loop,
          threshold: 0.1
        },
        click: true
      });
      _self.banner.on("scrollEnd", () => {
        let pageIndex = _self.banner.getCurrentPage().pageX;
        _self.currentPageIndex = pageIndex;
        if (_self.autoPlay) {
          _self._autoPlay();
        }
      });
    },
    _initDots() {
      this.dots = new Array(this.children.length);
    },
    _autoPlay() {
      const _self = this;
      _self.currentPageIndex = _self.currentPageIndex++;
      clearTimeout(_self.timer);
      _self.timer = setTimeout(() => {
        _self.banner.next();
      }, _self.interval);
    }
  }
};
</script>

