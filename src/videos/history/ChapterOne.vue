<template>
  <div class="bg-grey-2">
    <div class="flex items-center">
      <router-link to="/">
        <q-icon name="arrow_back" size="22px" class="q-mt-md q-ml-md" />
      </router-link>
      <div class="q-mt-sm q-ml-md">
        <div class="text-h5">The Rise Of Nationalism In Europe</div>
        <div class="text-grey-7">17 videos</div>
      </div>
    </div>
    <div
      class="bg-white q-mt-lg q-mx-lg rounded-borders flex justify-between q-px-md items-center"
    >
      <div class="q-mt-md">
        <router-link to="/hisone">
          <q-icon name="play_circle" color="blue" size="28px" />
        </router-link>
        <div class="q-mt-sm">Video</div>
        <q-separator color="orange" vertical inset />
      </div>
      <div class="q-mt-md">
        <router-link to="/hisone/prac">
          <q-icon name="fact_check" color="grey" size="28px"></q-icon>
        </router-link>
        <div class="q-mt-sm">Practice</div>

        <q-separator color="orange" vertical inset />
      </div>
      <div class="q-mt-md">
        <router-link to="/hisone/notes">
          <q-icon name="notes" size="28px" color="grey"></q-icon>
        </router-link>
        <div class="q-mt-sm">Notes</div>
      </div>
    </div>
    <RouterView />
  </div>
</template>
<script>
export default {
  name: "BooksOfNature",
};
</script>

<style lang="scss" scoped></style>
