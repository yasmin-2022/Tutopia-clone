<template>
  <div class="q-pa-sm bg-grey-1">
    <CarouselSlide />
    <div class="bg-primary flex items-center rounded-borders q-mx-md">
      <q-icon name="play_circle" color="white" size="23px" class="q-ml-sm" />
      <p class="text-body1 text-weight-medium text-white q-mt-md q-ml-sm">
        Video Sahayika
      </p>
      <q-space />
      <router-link to="/videosahayika">
        <q-icon
          name="arrow_forward_ios"
          color="white"
          size="18px"
          class="q-mr-sm"
        />
      </router-link>
    </div>
    <div class="bg-blue-2 flex items-center rounded-borders q-mx-md q-mt-sm">
      <q-icon name="edit_note" color="grey" size="23px" class="q-ml-sm" />
      <p class="text-body1 text-weight-medium q-mt-md q-ml-sm">Chapter wise</p>
      <q-space />
      <q-icon
        name="arrow_forward_ios"
        color="primary"
        size="18px"
        class="q-mr-sm"
      />
    </div>
    <div class="text-h6 q-ml-md q-mt-md">Video Classes</div>

    <VideoClasses />
    <TutopiaPlus />
  </div>
</template>
<script>
import VideoClasses from "./VideoClasses.vue";
import TutopiaPlus from "./TutopiaPlus.vue";
import CarouselSlide from "./carouselSlide.vue";
export default {
  name: "HomePage",
  components: {
    CarouselSlide,
    VideoClasses,
    TutopiaPlus,
  },
  setup() {},
};
</script>
