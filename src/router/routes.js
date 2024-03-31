const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    // children: [{ path: "", component: () => import("pages/IndexPage.vue") }],
    children: [
      { path: "", component: () => import("../components/Home.vue") },
      { path: "/eng", component: () => import("../videos/English.vue") },
      { path: "/hindi", component: () => import("../videos/Hindi.vue") },
      { path: "/his", component: () => import("../videos/History.vue") },
      { path: "/math", component: () => import("../videos/Math.vue") },
      { path: "/phy", component: () => import("../videos/Physic.vue") },
      { path: "/geog", component: () => import("../videos/Geography.vue") },
      {
        path: "/piano",
        component: () => import("../videos/tutopisplus/Piano.vue"),
      },
      {
        path: "/guitar",
        component: () => import("../videos/tutopisplus/Guitar.vue"),
      },
      {
        path: "/time",
        component: () => import("../videos/tutopisplus/Speedtime.vue"),
      },
      {
        path: "/paint",
        component: () => import("../videos/tutopisplus/Painting.vue"),
      },
    ],
  },
  {
    path: "/videosahayika",
    component: () => import("../videos/VideoSahayika.vue"),
  },
  {
    path: "/login",
    component: () => import("pages/Login.vue"),
  },
  {
    path: "/forgot",
    component: () => import("pages/Forgot.vue"),
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
