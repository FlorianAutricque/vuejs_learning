import { createRouter, createWebHistory } from "vue-router";
import About from "../views/AboutView.vue";
import HomeView from "../views/HomeView.vue";
import Jobs from "../views/jobs/Jobs.vue";
import JobsDetails from "@/views/jobs/JobsDetails.vue";
import NotFound from "@/views/NotFound.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/jobs",
    name: "Jobs",
    component: Jobs,
  },
  {
    path: "/jobs/:id",
    name: "JobsDetails",
    component: JobsDetails,
    props: true,
  },
  //redirect
  {
    path: "/all-jobs",
    redirect: "/jobs",
  },
  //404
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
