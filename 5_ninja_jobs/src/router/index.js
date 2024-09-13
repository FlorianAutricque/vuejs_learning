import { createRouter, createWebHistory } from "vue-router";
import About from "../views/AboutView.vue";
import HomeView from "../views/HomeView.vue";
import Jobs from "../views/jobs/Jobs.vue";
import JobsDetails from "@/views/jobs/JobsDetails.vue";

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
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
