import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);

import Recommend from "../components/m-recommend/music-recommend.vue";
import Singer from "../components/m-singer/music-singer.vue";
import Rank from "../components/m-rank/music-rank.vue";
import Search from "../components/m-search/music-search.vue";

// eslint-disable-next-line
export default new Router({
  mode: "history",
  // li
  routes: [
    {
      path: "/",
      redirect: "/recommend"
    },
    {
      path: "/recommend",
      component: Recommend
    },
    {
      path: "/singer",
      component: Singer
    },
    {
      path: "/rank",
      component: Rank
    },
    {
      path: "/search",
      component: Search
    }
  ]
});
