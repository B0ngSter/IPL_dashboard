<template>
<v-app id="app2">
  <v-container>
  <h3 class="text-center">
    IPL dashboard from 2008-2017
  </h3>
  <v-row>
    <v-col cols="12" md="6">
      <teamvteam class="chartCard" ></teamvteam>
    </v-col>
    <v-col cols="12" md="6">
      <toss class="chartCard3" :match="match"></toss>
    </v-col>
    <v-col cols="12" md="6">
      <teamOnvenue  class="chartCard" />
    </v-col>
    <v-col cols="12" md="6">
      <winperseason class="chartCard2"  />
    </v-col>
  </v-row>
  <h2 class="text-center">
    Made by Nitesh Poonia
  </h2>
</v-container>
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
