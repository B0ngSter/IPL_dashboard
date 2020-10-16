<template>
<v-hover
  v-slot:default="{ hover }"
>
 <v-card
    class="mx-auto custom_card"
    :elevation="hover ? 24 : 4"
    max-width="1044"
  >
    <v-row justify="center" align="center">
      <v-col cols="12" sm="8" md="6">
          <div>
            <bar-chart :chart-data="barChartData" :options="barChartOptions" :height="300" />
          </div>
          <div>
            <v-select
              class="my-2"
              :items="data"
              label="Select a venue"
              v-model="venue"
              @change="changevenue"
              item-value="text"
            ></v-select>
          </div>
      </v-col>
    </v-row>
  </v-card>
</v-hover>
</template>

<script>
import BarChart from './BarChart.js';
import match from './matches.json';

export default {
  components: {
    BarChart
  },
  data() {
  return {
      csvtoArr: null,
      match: match,
      barChartData: null,
      venue: 'Maharashtra Cricket Association Stadium',
      barChartOptions: {
        responsive: true,
        legend: {
          display: true
        },
        title: {
          display: true,
          text: 'Match Won by teams on different venues',
          fontSize: 24,
          fontColor: '#6b7280'
        },
        tooltips: {
          backgroundColor: '#17BF62'
        },
        scales: {
          xAxes: [
            {
              gridLines: {
                display: false
              }
            }
          ],
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              },
              gridLines: {
                display: false
              }
            }
          ]
        }
      },
    data: []
  }
},
mounted () {
  this.changevenue()
},
methods: {
  changevenue () {
    const venues = []
    let count = 0
    this.match.map((key) => {
      if (!venues.includes(key.venue)) {
        venues.push(key.venue)
      }
    })
    this.data = venues
    const teams = ["Mumbai Indians", "Gujarat Lions", "Kolkata Knight Riders", "Kings XI Punjab", "Sunrisers Hyderabad", "Royal Challengers Bangalore", "Delhi Daredevils", "Chennai Super Kings", "Rajasthan Royals", "Deccan Chargers", "Kochi Tuskers Kerala", "Pune Warriors"]
    this.barChartData = {
        labels: teams,
        datasets: [
          {
            label: 'Matches won',
            data: [],
            backgroundColor: '#f025e6'
          }
        ]
      }
      for ( let i = 0; i<teams.length; i++) {
        count = 0
        this.match.map((key) => {
          if (key.venue == this.venue) {
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