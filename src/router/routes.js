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
    path: "/chone",
    component: () => import("../videos/english/BooksOfNature.vue"),
    children: [
      {
        path: "",
        component: () => import("../videos/english/video.vue"),
      },
      {
        path: "prac",
        component: () => import("../videos/english/Practice.vue"),
      },
      {
        path: "notes",
        component: () => import("../videos/english/Notes.vue"),
      },
    ],
  },
  {
    path: "/hisone",
    component: () => import("../videos/history/ChapterOne.vue"),
    children: [
      {
        path: "",
        component: () => import("../videos/history/video.vue"),
      },
      {
        path: "prac",
        component: () => import("../videos/history/Practice.vue"),
      },
      {
        path: "notes",
        component: () => import("../videos/history/Notes.vue"),
      },
    ],
  },
  {
    path: "/mathone",
    component: () => import("../videos/math/RealNumber.vue"),
    children: [
      {
        path: "",
        component: () => import("../videos/math/video.vue"),
      },
      {
        path: "prac",
        component: () => import("../videos/math/Practice.vue"),
      },
      {
        path: "notes",
        component: () => import("../videos/math/Notes.vue"),
      },
    ],
  },
  {
    path: "/phyone",
    component: () => import("../videos/physic/ChapterOne.vue"),
    children: [
      {
        path: "",
        component: () => import("../videos/physic/video.vue"),
      },
      {
        path: "prac",
        component: () => import("../videos/physic/Practice.vue"),
      },
      {
        path: "notes",
        component: () => import("../videos/physic/Notes.vue"),
      },
    ],
  },
  {
    path: "/geogone",
    component: () => import("../videos/geography/ChapterOne.vue"),
    children: [
      {
        path: "",
        component: () => import("../videos/geography/video.vue"),
      },
      {
        path: "prac",
        component: () => import("../videos/geography/Practice.vue"),
      },
      {
        path: "notes",
        component: () => import("../videos/geography/Notes.vue"),
      },
    ],
  },
  {
    path: "/riddle",
    component: () => import("../videos/riddle/THERIddle.vue"),
    children: [
      {
        path: "",
        component: () => import("../videos/english/video.vue"),
      },
      {
        path: "prac",
        component: () => import("../videos/english/Practice.vue"),
      },
      {
        path: "notes",
        component: () => import("../videos/english/Notes.vue"),
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
