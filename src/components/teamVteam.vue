<template>
<v-hover
  v-slot:default="{ hover }"
>
<v-card
  id="custom_card"
  class=" mx-auto"
  :elevation="hover ? 24 : 4"
  max-width="1044"
>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <bar-chart :chart-data="barChartData" :options="barChartOptions" :height="270" />
    </v-col>
  </v-row>
  <v-container>
    <v-row>
      <v-col cols="12" md="4" offset-md="1">
      <v-select
          class="my-2"
          :items="data"
          label="Choose a team"
          :rules="one === two ? ' ' : true"
          v-model="one"
          @change="select_team"
          item-value="text"
      ></v-select>
      </v-col>
      <v-col cols="12" md="4" offset-md="1">
        <v-select
            class="my-2"
            :items="data"
            v-model="two"
            :rules="one === two ? ' ' : true"
            label="Choose a team"
            @change="select_team"
            item-value="text"
        ></v-select>
      </v-col>
    </v-row>
  </v-container>
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
      match: match,
      barChartData: null,
      barChartOptions: {
        responsive: true,
        legend: {
          display: true
        },
        title: {
          display: true,
          text: 'Matches between teams',
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
    test: null,
    two: 'Kings XI Punjab',
    one: 'Mumbai Indians',
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
      ]
  }
},
mounted () {
  this.select_team()
},
methods: {
  select_team () {
    if (this.one == this.two) return
    this.barChartData = {
        labels: ['2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017'],
        datasets: [
          {
            label: this.one + ' ' + 'won',
            data: [],
            backgroundColor: '#06e99d'
          },
          {
            label: this.two + ' ' + 'won',
            data: [],
            backgroundColor: '#2f4b7c'
          }
        ]
      }
    const year = ['2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017']
    let wins_team1 = []
    let wins_team2 = []
    let dummy = []
    let count1 = 0
    let count2 = 0
    for(let i=0; i<year.length; i++) {
      // /* eslint-disable no-debugger */
      // debugger
      // /* eslint-enable no-debugger */
      this.match.map((mat) => {
        if (mat.season == year[i]) {
            if (mat.team1 == this.two || mat.team2 == this.two) {
              if (mat.team1 == this.one || mat.team2 == this.one) {
                dummy.push(mat.winner)
                count1 = 0
                count2 = 0
                for(let j=0; j<dummy.length; j++) {
                  if (dummy[j] == this.one) {
                    count1 += 1
                  } else {
                    count2 += 1
                  }
                }
              }
          }
        } 
      })
      wins_team1.push(count1)
      wins_team2.push(count2)
    }
    this.test = wins_team1
    this.barChartData['datasets'][0]['data'] = wins_team1
    this.barChartData['datasets'][1]['data'] = wins_team2
    }
  }
}
</script>
<style scoped>
#custom_card {
  background-color: rgb(228, 228, 228);
}
</style>
