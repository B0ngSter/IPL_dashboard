<template>
<v-app id="app2">
  <h3 class="text-center mt-5">
    IPL dashboard from 2008-2017
  </h3>
  <v-row class="mt-5">
    <v-col cols="12" md="6">
      <teamvteam :match="match" class="chartCard" ></teamvteam>
    </v-col>
    <v-col cols="12" md="6">
      <toss :match="match" class="chartCard3"></toss>
    </v-col>
    <v-col cols="12" md="6">
      <teamOnvenue :match="match" class="chartCard" />
    </v-col>
    <v-col cols="12" md="6">
      <winperseason  :match="match" class="chartCard2"  />
    </v-col>
  </v-row>
  <h2 class="text-center mb-5">
    Made by Nitesh Poonia
  </h2>
</v-app>
</template>

<script>
import match from './matches.json';
import teamvteam from './components/teamVteam.vue';
import teamOnvenue from './components/teamOnvenue.vue';
import winperseason from './components/WinPerSeason.vue';
import toss from './components/toss.vue';

export default {
  components: {
    teamvteam,
    toss,
    teamOnvenue,
    winperseason
  },
  data() {
  return {
    match: match
  }
}
}
</script>
<style scoped>
#app2 {
  background-color: rgb(245, 244, 244);
}
</style>
