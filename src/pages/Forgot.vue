<template>
  <div>
    <router-link to="/login">
      <q-icon name="arrow_back" class="icon q-mt-xl q-ml-md" />
    </router-link>
    <div class="absolute absolute-center">
      <div class="text-center">
        <img src="../assets/logo.png" alt="logo" class="img" />
      </div>
      <form action="">
        <div class="q-ml-xl q-px-sm">
          <div class="text-h5 text-weight-bold q-my-lg">Reset password</div>
          <q-input
            type="text"
            outlined
            class="input q-mx-auto q-mb-lg"
            placeholder="Enter mobile no."
          />
          <q-btn color="primary" class="btn q-py-md q-mt-sm">Send OTP</q-btn>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "ForgotPassword",
};
</script>

<style lang="scss" scoped></style>
