<template>
    <div> 
      <v-container >
          <v-row align="start" justify="center">
          <v-col cols="12" md="5" class="elevation-1 ma-2">
              <v-list two-line>
              <v-subheader>
                  From Term
                  <v-spacer></v-spacer>
                  <v-combobox
                    :items="dateRange.termAll"
                    item-text="name"
                    item-value="id"
                    @change="getScheduleFromTerm"
                    label="Select Term"
                  ></v-combobox>
              </v-subheader>
              <v-divider></v-divider>
              <v-subheader class="mt-6">
                <v-text-field 
                    label="Filter From Schedule"
                    solo
                    v-model="searchFrom"
                    @keypress.enter="filterFrom"
                    clearable
                >
                    <template v-slot:append>
                        <v-btn
                            icon
                            @click="filterFrom"
                        >
                            <v-icon left>
                            mdi-magnify
                            </v-icon>
                        </v-btn>
                    </template>
                </v-text-field>
              </v-subheader>
              <draggable v-model="schedule.fromSchedule" :options="{group:'people'}" style="min-height: 10px">
                  <template v-for="(item, i) in schedule.fromSchedule">
                    <v-list-item :key="i">
                        
                        <v-list-item-content>
                          <v-list-item-title> {{ item.product | toUpper }} </v-list-item-title>
                          <v-list-item-subtitle> {{ item.location | toUpper }} ({{ item.time_start }} - {{ item.time_end }}) - {{ item.weekday }} {{ item.teacher | toUpper }} </v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                  </template>
              </draggable>
              </v-list>
          </v-col>
          <v-col cols="12" md="5" class="elevation-1 ma-2">
              <v-list two-line>
              <v-subheader>
                  To Term
                  <v-spacer></v-spacer>
                  <v-combobox
                    :items="dateRange.termAll"
                    item-text="name"
                    item-value="id"
                    @change="getScheduleToTerm"
                    label="Select Term"
                  ></v-combobox>
                  <!-- <v-btn
                    class="text-none success"
                    block
                  >
                    Save
                  </v-btn> -->
              </v-subheader>
              <v-divider></v-divider>
              <v-subheader class="mt-6">
                <v-text-field 
                    label="Filter To Schedule"
                    solo
                    v-model="searchTo"
                    @keypress.enter="filterTo"
                    clearable
                >
                    <template v-slot:append>
                        <v-btn
                            icon
                            @click="saveCopySchedule"
                            :loading="schedule.copyStart"
                        >
                            <v-icon left>
                            mdi-content-save-all
                            </v-icon>
                        </v-btn>
                    </template>
                </v-text-field>
              </v-subheader>
              <draggable v-model="schedule.toSchedule" :options="{group:'people'}" style="min-height: 10px">
                  <template v-for="(item, i) in schedule.toSchedule">
              <v-list-item :key="i">
                  
                  <v-list-item-content>
                    <v-list-item-title> {{ item.product | toUpper }} </v-list-item-title>
                          <v-list-item-subtitle> {{ item.location | toUpper }} ({{ item.time_start }} - {{ item.time_end }}) - {{ item.weekday }} {{ item.teacher | toUpper }} </v-list-item-subtitle>
                  </v-list-item-content>
              </v-list-item>
              </template>
              </draggable>
              </v-list>
          </v-col>
          </v-row>
      </v-container>
      <v-snackbar
      v-model="schedule.copyFinish"
      color="deep-purple accent-4"
      absolute
      right
      rounded="pill"
      top
    >
      Schedule successfully copied
    </v-snackbar>
    </div>
</template>
<script>
import draggable from 'vuedraggable';
import { mapActions, mapState } from "vuex";
export default {
    name: "copyView",
    
    created() {
      this.DATERANGES_GET_ALL();
    },

    components: {
            draggable,
        },

    data() {
    return {
      locations: ["motor city", "repton"],
      searchFrom: null,
      searchTo: null,
      termFrom: null,
      termTo: null
    };
  },

  methods: {
    ...mapActions(["DATERANGES_GET_ALL", "SCHEDULE_GET_BY_DATERANGE", "SCHEDULE_COPY_SAVE"]),

    filterFrom() {
      this.SCHEDULE_GET_BY_DATERANGE({
        dateRangeId: this.termFrom,
        search: this.searchFrom,
        isFrom: true
      });
    },

    filterTo() {
      this.SCHEDULE_GET_BY_DATERANGE({
        dateRangeId: this.termTo,
        search: this.searchTo,
        isFrom: false
      });
    },

    getScheduleFromTerm(e) {
      this.termFrom = e.id;
      this.filterFrom();
    },
    getScheduleToTerm(e) {
      this.termTo = e.id;
      this.filterTo();
    },

    saveCopySchedule() {
      this.SCHEDULE_COPY_SAVE({schedules: this.schedule.toSchedule, toTermId: this.termTo})
    }

  },

  computed: {
    ...mapState(["dateRange", "schedule"])
  }
}
</script>