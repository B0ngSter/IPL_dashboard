<template>
  <div id="app">
  <v-hover
    v-slot:default="{ hover }"
  >
  <v-card
    class="mx-auto custom_card"
    :elevation="hover ? 24 : 4"
    max-width="1044"
  >
    <p class="text-center">
      Toss won against different teams
    </p>
    <pie-chart :chart-data="chartData" :height="140"></pie-chart>
    <v-row justify="center" align="center">
      <v-col cols="12" md="6">
        <v-select
        :items="data"
        v-model="select_team"
        label="Choose a team"
        @change="initiateChart"
        item-value="text"
      ></v-select>
    </v-col>
  </v-row>
  </v-card>
</v-hover>
</div>
</template>

<script>
import PieChart from "./PieChart.js";
export default {
  name: "App",
  components: {
    PieChart
  },
  props: {
    match: {
      type: Object
    }
  },
  data() {
    return {
      select_team: 'Mumbai Indians',
      data: [
        { text: 'Mumbai Indians' },
        { text: 'Gujarat Lions' },
        { text: 'Kolkata Knight Riders' },
        { text: 'Kings XI Punjab' },
        { text: 'Sunrisers Hyderabad' },
        { text: 'Royal Challengers Bangalore' },
        { text: 'Delhi Daredevils' },
        { text: 'Chennai Super Kings' },
        { text: 'Rajasthan Royals' },
        { text: 'Deccan Chargers' },
        { text: 'Kochi Tuskers Kerala' },
        { text: 'Pune Warriors' },
      ],
      chartData: {
            hoverBackgroundColor: "red",
            hoverBorderWidth: 10,
            labels: ["Mumbai Indians", "Gujarat Lions", "Kolkata Knight Riders", "Kings XI Punjab", "Sunrisers Hyderabad", "Royal Challengers Bangalore", "Delhi Daredevils", "Chennai Super Kings", "Rajasthan Royals", "Deccan Chargers", "Kochi Tuskers Kerala", "Pune Warriors"],
            datasets: [
                {
                    label: "Data One",
                    backgroundColor: ["#41B883", "#E46651", "#00D8FF", "#41B883", "#E46651", "#00D8FF", "#41B883", "#E46651", "#00D8FF"],
                    data: [1, 10, 5]
                }
            ]
          }
    }
  },
  mounted () {
      this.initiateChart()
  },
  methods: {
      initiateChart () {
          this.chartData = {
            hoverBackgroundColor: "red",
            hoverBorderWidth: 10,
            labels: ["Mumbai Indians", "Gujarat Lions", "Kolkata Knight Riders", "Kings XI Punjab", "Sunrisers Hyderabad", "Royal Challengers Bangalore", "Delhi Daredevils", "Chennai Super Kings", "Rajasthan Royals", "Deccan Chargers", "Kochi Tuskers Kerala", "Pune Warriors"],
            datasets: [
                {
                    label: "Data One",
                    backgroundColor: ["#41B883", "#E46651", "#00D8FF", "#41B883", "#E46651", "#00D8FF", "#41B883", "#E46651", "#00D8FF", "#41B883", "#E46651", "#00D8FF"],
                    data: [1, 10, 5]
                }
            ]
          }
        this.chartData['labels'].splice(this.chartData['labels'].indexOf(this.select_team), 1)
        let dataset = []
        let count = 0
        const teams = ["Mumbai Indians", "Gujarat Lions", "Kolkata Knight Riders", "Kings XI Punjab", "Sunrisers Hyderabad", "Royal Challengers Bangalore", "Delhi Daredevils", "Chennai Super Kings", "Rajasthan Royals", "Deccan Chargers", "Kochi Tuskers Kerala", "Pune Warriors"]
        for ( let i = 0; i<teams.length; i++) {
            if (this.select_team == teams[i]) {
                continue
            } else {
                count = 0
                this.match.map((value) => {
                    if (value.team1 == this.select_team || value.team2 == this.select_team) {
                        if (value.team1 == teams[i] || value.team2 == teams[i]) {
                            if (value.toss_winner == this.select_team) {
                                count += 1
                            }
                        }
                    }
                })
                dataset.push(count)
            }
        }
        this.chartData['datasets'][0]['data'] = dataset
      }
  }
}
</script>

<style scoped>
.custom_card {
  background-color: rgb(228, 228, 228);
}
/* @media only screen and (max-width: 600px) {
  .donut {
    height: 100vh;
  }
} */
</style>
