<template>
  <div class="bg-grey-2">
    <div class="flex row items-center">
      <router-link to="/">
        <q-icon name="arrow_back" size="22px" class="q-mt-md q-ml-md" />
      </router-link>
      <div class="text-h5 text-weight-regular q-ml-sm q-mt-md">
        Video sahayika
      </div>
    </div>
    <div class="q-mx-lg text-h6 text-weight-regular q-mt-md">Subjects</div>
    <videoClasses />
  </div>
</template>

<script>
import { ref } from "vue";
import videoClasses from "../components/VideoClasses.vue";
export default {
  name: "VideoSahayika",
  components: {
    videoClasses,
  },
  setup() {
    const video = ref(false);
    return {
      video,
    };
  },
};
</script>

<style lang="scss" scoped></style>
