<template>
  <section class="m-title">
    <div class="m-title-list">
        <span>推荐</span>
        <span>歌手</span>
        <span>曲库</span>
        <span>搜素</span>
    </div>
  </section>
</template>

<style lang="stylus" scope>
  section.m-title {
    width 100%
    height auto
    .m-title-list {
      display flex
      flex-direction row // 子元素横向排
      justify-content center // 相对父元素水平居
      align-items center //  子元素相对父元素垂直居
      text-align center // 子元素文字居中
      line-height 32px
      font-size 0.8rem
      color #fff
      background-color pink
      span {
        flex-grow 1 // 属性用于设置或检索弹性盒的扩展比率
        border-right 2px solid #ddd
        &:last-child {
          border-right none
        }
      }
    }
  }
</style>