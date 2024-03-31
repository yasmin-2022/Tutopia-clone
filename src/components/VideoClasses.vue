<template>
  <div>
    <div class="flex justify-around items-center">
      <div
        v-for="video in videoClasses"
        :key="video.id"
        class="tution q-my-md flex column items-center justify-center"
      >
        <router-link :to="video.path">
          <div class="icon">
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
        url: "../../public/hindi.png",
        path: "/hindi",
      },
      {
        id: 2,
        name: "English",
        url: "../../public/english.png",
        path: "/eng",
      },
      {
        id: 3,
        name: "Math",
        url: "../../public/math.png",
        path: "/math",
      },
      {
        id: 4,
        name: "Physic",
        url: "../../public/physic.png",
        path: "/phy",
      },
      {
        id: 5,
        name: "History",
        url: "../../public/history.png",
        path: "/his",
      },
      {
        id: 6,
        name: "Geography",
        url: "../../public/geog.png",
        path: "/geog",
      },
    ]);
    return {
      videoClasses,
    };
  },
};
</script>

<style lang="scss" scoped>
.tution {
  width: 200px;
  height: 200px;
  border: 2px solid transparent;
  border-radius: 22px;
}
.icon {
  width: 124px;
  height: 124px;
  border-radius: 50%;
}
.icon:nth-child(1),
.icon:nth-child(3) {
  background: #fba834;
}
.icon:nth-child(2) {
  background: #387adf;
}

.img {
  width: 62px;
  position: relative;
  top: -35px;
  left: 27px;
}
.icon:nth-child(2) {
  background: #000;
}

.tution:nth-child(2),
.tution:nth-child(3),
.tution:nth-child(6) {
  box-shadow: 0 12px 2px #fba834, 0 1px 2px #fba834;
}
.tution:nth-child(1),
.tution:nth-child(4),
.tution:nth-child(5) {
  box-shadow: 0 15px 2px #387adf, 0 1px 2px #387adf;
}
</style>
