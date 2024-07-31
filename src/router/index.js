import { createRouter, createWebHistory } from "vue-router";
import PostListView from "@/views/PostListView.vue";
import PostDetailView from "@/views/PostDetailView.vue";

const routes = [
  {
    path: "/",
    redirect: "/posts",
  },
  {
    path: "/posts",
    name: "PostList",
    component: PostListView,
  },
  {
    path: "/post/:id",
    name: "PostDetail",
    component: PostDetailView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
