<template>
  <div class="bg-grey-2">
    <div class="flex items-center">
      <router-link to="/">
        <q-icon name="arrow_back" size="22px" class="q-mt-md q-ml-md" />
      </router-link>
      <div class="bg-blue-3 q-mt-md q-pa-sm q-ml-md rounded-borders">
        <q-img src="../../public/hindi.png" alt="english" class="Topicicon" />
      </div>
      <div class="q-mt-sm q-ml-md">
        <div class="text-h5">Hindi</div>
        <div class="text-grey-7">3 chapters &nbsp; <span>216 videos</span></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HindiPage",
};
</script>

<style lang="scss" scoped></style>
