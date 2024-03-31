<!-- <template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title> Quasar App </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> Essential Links </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template> -->
<!-- <script>
import { defineComponent, ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";

const linksList = [
  {
    title: "Docs",
    caption: "quasar.dev",
    icon: "school",
    link: "https://quasar.dev",
  },
  {
    title: "Github",
    caption: "github.com/quasarframework",
    icon: "code",
    link: "https://github.com/quasarframework",
  },
  {
    title: "Discord Chat Channel",
    caption: "chat.quasar.dev",
    icon: "chat",
    link: "https://chat.quasar.dev",
  },
  {
    title: "Forum",
    caption: "forum.quasar.dev",
    icon: "record_voice_over",
    link: "https://forum.quasar.dev",
  },
  {
    title: "Twitter",
    caption: "@quasarframework",
    icon: "rss_feed",
    link: "https://twitter.quasar.dev",
  },
  {
    title: "Facebook",
    caption: "@QuasarFramework",
    icon: "public",
    link: "https://facebook.quasar.dev",
  },
  {
    title: "Quasar Awesome",
    caption: "Community Quasar projects",
    icon: "favorite",
    link: "https://awesome.quasar.dev",
  },
];

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script> -->
<template>
  <div>
    <q-layout view="hHh Lpr fFf">
      <q-header class="header">
        <q-toolbar class="flex justify-between items-center">
          <div class="flex items-center justify-start">
            <div class="logo text-body2 q-ml-sm q-mt-md">
              <div class="q-mt-lg q-ml-sm">tutopia</div>
            </div>
            <div>
              <div class="q-mb-md">{{ loginStore.name }}</div>
              <q-chip class="bg-blue-1">West Bengal</q-chip>
            </div>
          </div>
          <q-space />
          <div class="flex items-center q-mt-sm">
            <q-icon name="notifications" class="icon" color="grey" />
            <q-icon name="search" class="search icon q-ml-sm" color="grey" />
          </div>
        </q-toolbar>
      </q-header>
      <q-footer elevated>
        <footerPage />
        <!-- <q-toolbar class="glossy">
          <q-toolbar-title>Footer</q-toolbar-title>
        </q-toolbar> -->
      </q-footer>
      <q-page-container>
        <router-view></router-view>
      </q-page-container>
    </q-layout>
  </div>
</template>

<script>
import { ref } from "vue";
import footerPage from "../components/footer.vue";
import { useLoginStore } from "../stores/login";
export default {
  name: "MainLayout",
  components: {
    footerPage,
  },
  setup() {
    const loginStore = useLoginStore();
    const options = ref([
      "FirstClass",
      "MeddleClass",
      "LowerClass",
      "OBC",
      "ST/SC",
    ]);
    const select = ref(null);
    return {
      loginStore,
      options,
      select,
    };
  },
};
</script>

<style lang="scss" scoped>
.logo {
  width: 60px;
  height: 60px;
  background: #000;
  color: white;
  border-radius: 50%;
  padding: 2px solid black;
}
.inputclass {
  width: 150px;
  height: 10px;
}
.header {
  height: 90px;
  border-bottom: 2px solid transparent;
  box-shadow: 1px 1px 1px rgb(179, 179, 179);
  background: rgb(251, 247, 239);
}
.search {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: white;
}
.icon {
  font-size: 22px;
}
</style>
