<template>
  <div class="bg-grey-2">
    <div class="flex items-center">
      <router-link to="/">
        <q-icon name="arrow_back" size="22px" class="q-mt-md q-ml-md" />
      </router-link>
      <div class="bg-blue-3 q-mt-md q-pa-sm q-ml-md rounded-borders">
        <q-img src="../../public/geog.png" alt="english" class="icon" />
      </div>
      <div class="q-mt-sm q-ml-md">
        <div class="text-h5">Geography</div>
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
      <q-icon name="chevron_right" size="26px" color="blue-9" />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "GeographyPage",
  setup() {
    const topics = ref([
      {
        id: "01",
        ch: "AGRICULTURE",
      },
      {
        id: "02",
        ch: "RESOURSE AND DEVELOPMENT",
      },
      {
        id: "03",
        ch: "MANUFACTURING INDUSTRY",
      },
      {
        id: "04",
        ch: "LIFE LINES OF NATIONAL ECOMONY",
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
