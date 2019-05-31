<template>
  <section class="m-tab">
    <div class="m-tab-list">
      <router-link tag="div"
                   class="m-tab-item"
                   to="/recommend">
        <span class="m-tab-link">推荐</span>
      </router-link>
      <router-link tag="div"
                   class="m-tab-item"
                   to="/singer">
        <span class="m-tab-link">歌手</span>
      </router-link>
      <router-link tag="div"
                   class="m-tab-item"
                   to="/rank">
        <span class="m-tab-link">曲库</span>
      </router-link>
      <router-link tag="div"
                   class="m-tab-item"
                   to="/search">
        <span class="m-tab-link">搜素</span>
      </router-link>
    </div>
  </section>
</template>

<style lang="stylus" scope>
@import '../../common/style/index.styl';

section.m-tab {
  width: 100%;
  height: auto;

  .m-tab-list {
    display: flex;
    flex-direction: row; // 子元素横向排
    justify-content: center; // 相对父元素水平居
    align-items: center; // 子元素相对父元素垂直居
    background-color: pink;

    .m-tab-item {
      flex-grow: 1; // 属性用于设置或检索弹性盒的扩展比率
      border-right: 2px solid #ddd;
      cursor: pointer;

      &.router-link-active {
        .m-tab-link {
          color: $color-sub-theme;
          border-bottom: 2px solid $color-sub-theme;
        }
      }

      &:last-child {
        border-right: none;
      }

      .m-tab-link {
        text-align: center; // 文字居中
        line-height: 32px;
        font-size: 0.8rem;
        color: #fff;
        display: block;
      }
    }
  }
}
</style>