<template>
  <div class="bg-grey-2">
    <div class="flex items-center">
      <router-link to="/">
        <q-icon name="arrow_back" size="22px" class="q-mt-md q-ml-md" />
      </router-link>
      <div class="bg-blue-3 q-mt-md q-pa-sm q-ml-md rounded-borders">
        <q-img src="../../public/math.png" alt="english" class="Topicicon" />
      </div>
      <div class="q-mt-sm q-ml-md">
        <div class="text-h5">Math</div>
        <div class="text-grey-7">4 chapters &nbsp; <span>216 videos</span></div>
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
      <router-link to="/mathone">
        <q-icon name="chevron_right" size="26px" color="blue-9" />
      </router-link>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "MathPage",
  setup() {
    const topics = ref([
      {
        id: "01",
        ch: "REAL NUMBERS",
      },
      {
        id: "02",
        ch: "POLYNOMIAL",
      },
      {
        id: "03",
        ch: "POF EQUATIONS IN TWO VARIABLES",
      },
      {
        id: "04",
        ch: "QUADRATIC EQUATIONS",
      },
      {
        id: "05",
        ch: "ARITHMETIC PROGRESSIONS",
      },
      {
        id: "06",
        ch: "TRIANGLES",
      },
      {
        id: "07",
        ch: "COORDINATE GEOMETRY",
      },
      {
        id: "08",
        ch: "INTRODUCTION TO TRIGNOMETRY",
      },
      {
        id: "09",
        ch: "SOME APPLICATION OF TRIONOMETRY",
      },
      {
        id: "10",
        ch: "CIRCLE",
      },
      {
        id: "11",
        ch: "AREAS RELATED TO CIRCLES",
      },
      {
        id: "12",
        ch: "SURFACE AREA AND VOLUMES",
      },
      {
        id: "13",
        ch: "STATISTICS",
      },
      {
        id: "14",
        ch: "PROBABILITY",
      },
    ]);
    return {
      topics,
    };
  },
};
</script>

<style lang="scss" scoped></style>
