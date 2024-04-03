<template>
  <div class="bg-grey-2 app text-center">
    <div class="flex items-center">
      <router-link to="/">
        <q-icon name="arrow_back" size="22px" class="q-mt-md q-ml-md" />
      </router-link>
      <div class="bg-blue-3 q-mt-md q-pa-sm q-ml-md rounded-borders">
        <q-img src="../../../public/piano.png " alt="piano" class="icon" />
      </div>
      <div class="q-mt-sm q-ml-md">
        <div class="text-h6">PIANO</div>
        <div class="text-grey-7">4 chapters &nbsp; <span>216 videos</span></div>
      </div>
    </div>
    <div v-for="piano in pianoClasses" :key="piano" class="q-my-lg">
      <div class="bg-white q-mx-lg video">
        <q-video :ratio="16 / 9" :src="piano.link" />
        <div class="text-left q-mt-md q-ml-md text-subtitle1">
          Youtube video player
        </div>
        <div class="text-left q-mx-lg text-gray-600 q-mb-md">
          {{ piano.time }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "PianoPage",
  setup() {
    const pianoClasses = ref([
      {
        id: 1,
        link: "https://www.youtube.com/embed/p9tW3n6aO9Q?si=w4OG-Uhl7Rz-Qita",
        time: "1.34 mins",
      },
      {
        id: 2,
        link: "https://www.youtube.com/embed/827jmswqnEA?si=aRrEnzDFeunP0W7L",
        time: "11.40 mins",
      },
      {
        id: 3,
        link: "https://www.youtube.com/embed/a6UbP7mWQAc?si=drzSavofMCplDnOU",
        time: "9.50 mins",
      },
      {
        id: 4,
        link: "https://www.youtube.com/embed/p9tW3n6aO9Q?si=w4OG-Uhl7Rz-Qita",
        time: "11.49 mins",
      },
      {
        id: 5,
        link: "https://www.youtube.com/embed/827jmswqnEA?si=aRrEnzDFeunP0W7L",
        time: "1.34 mins",
      },
      {
        id: 6,
        link: "https://www.youtube.com/embed/a6UbP7mWQAc?si=drzSavofMCplDnOU",
        time: "9.50 mins",
      },
    ]);
    return {
      pianoClasses,
    };
  },
};
</script>

<style lang="scss" scoped>
.icon {
  width: 36px;
  padding: 12px;
}
.video {
  border-radius: 22px;
}
</style>
