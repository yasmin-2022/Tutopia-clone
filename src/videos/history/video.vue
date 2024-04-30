<template>
  <div>
    <div v-for="his in history" :key="his" class="q-my-lg">
      <div class="bg-white q-mx-lg video">
        <q-video :ratio="16 / 9" :src="his.link" />
        <div class="text-left q-mt-md q-ml-md text-subtitle1">
          {{ his.title }}
        </div>
        <div class="text-left q-ml-lg text-grey-14">
          {{ his.time }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { toRef } from "vue";
import { RNIE } from "../../content/data";
export default {
  name: "VideoBON",
  setup() {
    const history = toRef(RNIE);
    // const BooksOfNature = ref([
    //   {
    //     id: 1,
    //     title: "INTRODUCTION",
    //     link: "https://www.youtube.com/embed/gVhXGAfCsAY?si=oLaFaUCzdnWfeuvh",
    //     time: "1.34 mins",
    //   },
    //   {
    //     id: 2,
    //     title: "SUMMARY",
    //     link: "https://www.youtube.com/embed/gRNpCcFBUqI?si=wagtx5HW9cilgGYy",
    //     time: "11.40 mins",
    //   },
    //   {
    //     id: 3,
    //     title: "LINE EXPLANATION 1",
    //     link: "https://www.youtube.com/embed/3ROXWRGvdAU?si=4Eq2J0Yuuz-5dcon",
    //     time: "9.50 mins",
    //   },
    //   {
    //     id: 4,
    //     title: "WORD MEANING 1",
    //     link: "https://www.youtube.com/embed/gsAE9hd_OYs?si=1rMlpCwF4IBDb7Tn",
    //     time: "11.49 mins",
    //   },
    //   {
    //     id: 5,
    //     title: "LINE EXPLAINATION 2",
    //     link: "https://www.youtube.com/embed/VIUUhqajxhI?si=Y81CJ8VN4qzpxre7",
    //     time: "1.34 mins",
    //   },
    //   {
    //     id: 6,
    //     title: "WORD MEANING 2",
    //     link: "https://www.youtube.com/embed/Vj1wW718tFA?si=uVFdxqqb29BmYeNH",
    //     time: "9.50 mins",
    //   },
    // ]);
    return {
      // BsooksOfNature,
      history,
    };
  },
};
</script>

<style lang="scss" scoped></style>
