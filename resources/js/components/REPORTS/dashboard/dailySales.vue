<template>
    <v-card
        tile
    >
        <apexchart type="bar" height="350" :options="chartOptions" :series="series"></apexchart>
    </v-card>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
    name: "dailySales",

    created() {
        this.REPORT_FILTER_DAY_OF_MONTH();
    },

    methods: {
        ...mapActions(["REPORT_FILTER_DAY_OF_MONTH"]),
    },

    computed: {
        ...mapState(["registration", "reports"]),

        series() {
            return  [{
                name: 'Sales',
                data: this.reports.saleDayofMonth.sum
            }]
        },

        currentMonth() {
            const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
            const d = new Date();
            return month[d.getMonth()];
        },

        currentDay(){
            const d = new Date();
            return d.getDate();
        },

        chartOptions() {
            return  {
            chart: {
              height: 350,
              type: 'bar',
            },
            plotOptions: {
              bar: {
                horizontal: false,
                columnWidth: '100%',
                endingShape: 'rounded',
                dataLabels: {
                  position: 'bottom', // top, center, bottom
                },
              },
            },
            dataLabels: {
              enabled: true
            },
            stroke: {
              show: true,
              width: 2,
              colors: ['transparent']
            },
            title: {
              text: `Daily Sales for ${this.currentMonth} (1${this.currentDay > 1 ? ' - ' + this.currentDay : ''})`,
              align: 'center'
            },
            fill: {
              opacity: 1
            },
            tooltip: {
              y: {
                formatter: function (val) {
                  return val + " aed"
                }
              }
            },
            
            xaxis: {
              categories: this.reports.saleDayofMonth.day,
            },
          }
        }
    }
}
</script>