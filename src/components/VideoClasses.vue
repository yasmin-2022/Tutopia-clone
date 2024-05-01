<template>
  <div>
    <div class="flex justify-around items-center">
      <div
        v-for="video in videoClasses"
        :key="video.id"
        class="tution q-my-md flex column items-center justify-center"
      >
        <router-link :to="video.path">
          <div class="icon1">
            <q-img :src="video.url" class="img" alt="video" />
          </div>
          <div class="q-mt-md text-black text-center">
            {{ video.name }}
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "VideoClasses",
  setup() {
    const video = ref(true);
    const videoClasses = ref([
      {
        id: 1,
        name: "Hindi",
        // url: "../../public/hindi.png",
        url: "/hindi.png",
        path: "/hindi",
      },
      {
        id: 2,
        name: "English",
        url: "/english.png",
        path: "/eng",
      },
      {
        id: 3,
        name: "Math",
        url: "/math.png",
        path: "/math",
      },
      {
        id: 4,
        name: "Physic",
        url: "/physic.png",
        path: "/phy",
      },
      {
        id: 5,
        name: "History",
        url: "/history.png",
        path: "/his",
      },
      {
        id: 6,
        name: "Geography",
        url: "/geog.png",
        path: "/geog",
      },
    ]);
    return {
      videoClasses,
    };
  },
};
</script>

<style lang="scss" scoped></style>
