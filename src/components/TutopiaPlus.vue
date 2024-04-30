<template>
  <div>
    <div class="text-h6 q-ml-md q-my-md">Tutopia Plus</div>
    <div
      v-for="teach in teacherList"
      :key="teach.id"
      class="q-mb-md q-mx-md text-weight-medium"
    >
      <router-link :to="teach.path">
        <div class="List flex items-center text-black">
          <div class="teacher">
            <q-img :src="teach.img" alt="" class="imgTut" />
          </div>
          <div class="text-subtitle1 text-weight-medium q-ml-lg">
            {{ teach.name }}
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "TutopiaPlus",
  setup() {
    const teacherList = ref([
      // {
      //   id: 1,
      //   img: "../../public/teacher1.png",
      //   name: "Teacher1",
      // },
      // {
      //   id: 2,
      //   img: "../../public/teacher2.png",
      //   name: "Teacher2",
      // },
      // {
      //   id: 3,
      //   img: "../../public/teacher3.png",
      //   name: "Teacher3",
      // },
      // {
      //   id: 4,
      //   img: "../../public/teacher4.png",
      //   name: "Teacher4",
      // },
      // {
      //   id: 5,
      //   img: "../../public/teacher5.png",
      //   name: "Teacher5",
      // },
      // {
      //   id: 6,
      //   img: "../../public/teacher6.png",
      //   name: "Teacher6",
      // },
      {
        id: 1,
        img: "../../public/piano.png",
        name: "Piano Classes",
        path: "/piano",
      },
      {
        id: 2,
        img: "../../public/clock.png",
        name: "SpeedTime",
        path: "/time",
      },
      {
        id: 3,
        img: "../../public/guitar.png",
        name: "Guitar Classes",
        path: "/guitar",
      },
      {
        id: 4,
        img: "../../public/painting.png",
        name: "Painting Classes",
        path: "/paint",
      },
    ]);
    return {
      teacherList,
    };
  },
};
</script>

<style lang="scss" scoped></style>
