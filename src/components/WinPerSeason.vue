<template>
<v-hover
  v-slot:default="{ hover }"
>
<v-card
  :elevation="hover ? 24 : 4"
  class="mx-auto custom_card"
  max-width="1044"
>
  
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <bar-chart :chart-data="barChartData"  :options="barChartOptions" :height="300" />
      <h1>{{ test }}</h1>
        <v-select
          class="my-2"
          :items="data"
          label="Select the season"
          v-model="season"
          @change="changeseason"
          item-value="text"
        ></v-select>
   </v-col>
  </v-row>
</v-card>
</v-hover>
</template>

<script>
import BarChart from './RadarChart.js';

export default {
  components: {
    BarChart
  },
  props: {
    match: {
      type: Object
    }
  },
  data() {
  return {
    csvtoArr: null,
    barChartData: null,
    barChartOptions: {
      responsive: true,
      legend: {
        display: true
      },
      title: {
        display: true,
        text: 'Match Won by teams per Season',
        fontSize: 24,
        fontColor: '#6b7280'
      },
      tooltips: {
        backgroundColor: '#17BF62'
      }
    },
    season: '2008',
    data: ['2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017']
  }
},
mounted () {
  this.changeseason()
},
methods: {
  changeseason () {
    let count = 0
    const teams = ["Mumbai Indians", "Gujarat Lions", "Kolkata Knight Riders", "Kings XI Punjab", "Sunrisers Hyderabad", "Royal Challengers Bangalore", "Delhi Daredevils", "Chennai Super Kings", "Rajasthan Royals", "Deccan Chargers", "Kochi Tuskers Kerala", "Pune Warriors"]
    this.barChartData = {
        labels: teams,
        datasets: [
          {
            label: 'Matches won',
            data: [],
            backgroundColor: '#13db45'
          }
        ]
      }
      for ( let i = 0; i<teams.length; i++) {
        count = 0
        this.match.map((key) => {
          if (key.season == this.season) {
            if (key.winner == teams[i]) {
              count += 1
            }
          }
        })
        this.barChartData['datasets'][0]['data'].push(count)
      }
    }
  }
}
</script>
<style scoped>
.custom_card {
  background-color: rgb(228, 228, 228);
}
</style>