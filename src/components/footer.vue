<template>
  <div>
    <div class="footer bg-white flex justify-between">
      <div class="flex column items-center q-ml-md">
        <q-icon
          name="home"
          class="icon q-my-sm q-mx-auto"
          color="grey"
          size="25px"
        />
        <span class="text-grey-14">Home</span>
      </div>
      <div class="flex column">
        <q-icon
          name="import_contacts"
          class="q-my-sm q-mx-auto"
          color="grey"
          size="25px"
        />
        <span class="text-grey-14">Live Classes</span>
      </div>
      <div class="flex column text-center">
        <q-icon
          name="currency_exchange"
          class="q-my-sm q-mx-auto"
          color="grey"
          size="25px"
        />
        <span class="text-grey-14">Subscription</span>
      </div>
      <div class="flex column text-center">
        <q-icon
          name="warning"
          class="q-my-sm q-mx-auto"
          color="grey"
          size="25px"
        />
        <span class="text-grey-14">Report</span>
      </div>
      <div class="flex column text-center q-ml-md">
        <q-icon
          name="apps"
          class="q-my-sm q-mx-auto"
          color="grey"
          size="25px"
        />
        <span class="text-grey-14">More</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "footerPage",
};
</script>

<style lang="scss" scoped>
.footer {
  height: 60px;
}
</style>
