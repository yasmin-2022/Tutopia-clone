<template>
  <div class="bg-grey-2">
    <div class="flex items-center">
      <router-link to="/">
        <q-icon name="arrow_back" size="22px" class="q-mt-md q-ml-md" />
      </router-link>
      <div class="bg-blue-3 q-mt-md q-pa-sm q-ml-md rounded-borders">
        <q-img src="../../public/english.png" alt="english" class="icon" />
      </div>
      <div class="q-mt-sm q-ml-md">
        <div class="text-h5">English</div>
        <div class="text-grey-7">
          14 chapters &nbsp; <span>216 videos</span>
        </div>
      </div>
    </div>
    <div
      v-for="topic in topics"
      :key="topic"
      class="topic q-mx-md q-my-md bg-white rounded-borders flex justify-between items-center"
    >
      <div class="q-ml-sm">
        <div class="text-subtitle1 text-weight-bold text-grey-10">
          {{ topic.id }}
          <span class="text-subtitle1 text-weight-medium text-grey-10 q-ml-sm">
            {{ topic.ch }}
          </span>
        </div>
      </div>
      <router-link :to="topic.link">
        <q-icon name="chevron_right" size="26px" color="blue-9" />
      </router-link>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "EnglishPage",
  setup() {
    const topics = ref([
      {
        id: "01",
        ch: "BOOK OF NATURE",
        link: "/chone",
      },
      {
        id: "02",
        ch: "THE RIDDLE",
        link: "/riddle",
      },
      {
        id: "03",
        ch: "WE ARE SEVEN",
        // path: "/chone",
        link: "/riddle",
      },
      {
        id: "04",
        ch: "THE BEAUTY AND THE BEAST",
        // path: "/chone",
        link: "/riddle",
      },
      {
        id: "05",
        ch: "UNCLE PODGER HANGS A PICTURE",
        // path: "/chone",
        link: "/riddle",
      },
      {
        id: "06",
        ch: "THE VAGABOND",
        // path: "/chone",
        link: "/riddle",
      },
      {
        id: "07",
        ch: "MOWGLY AMONG THE WOLVES",
        // path: "/chone",
        link: "/riddle",
      },
      {
        id: "08",
        ch: "THE STORY OF PROSERPINE",
        // path: "/chone",
        link: "/riddle",
      },
      {
        id: "09",
        ch: "J.C BOSE",
        // path: "/chone",
        link: "/riddle",
      },
      {
        id: "10",
        ch: "THE ECHOING GREEN",
        // path: "/chone",
        link: "/riddle",
      },
      {
        id: "11",
        ch: "THE AXE",
        // path: "/chone",
        link: "/riddle",
      },
      {
        id: "12",
        ch: "MY DAIRY",
        // path: "/chone",
        link: "/riddle",
      },
      {
        id: "13",
        ch: "GHOST ON THE VERANDAH",
        // path: "/chone",
        link: "/riddle",
      },
      {
        id: "14",
        ch: "LAST MINUTE PREPRATION",
        // path: "/chone",
        link: "/riddle",
      },
    ]);
    return {
      topics,
    };
  },
};
</script>

<style lang="scss" scoped>
.icon {
  width: 36px;
  padding: 12px;
}
.topic {
  height: 70px;
  box-shadow: 1px 1px 2px grey, -1px -1px 2px grey;
}
</style>
