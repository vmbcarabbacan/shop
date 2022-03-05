<template>
  <v-dialog
    width="1200px"
    v-model="registration.waiverOpen"
    persistent
  >
    <v-card>
      <v-card-subtitle>
        <h1 class="display-1 text-center">
          ASSUMPTION OF RISK / WAIVER OF LIABILITY / INDEMNIFICATION AGREEMENT
        </h1>
      </v-card-subtitle>
      <v-card-text>
        <template v-for="term in terms">
          <div :key="term.text">
            <p v-html="term.text" />
            <ol>
              <li v-for="(li, index) in term.lis" :key="index" v-html="li"></li>
            </ol>
          </div>
        </template>

        <br />
        <br />

        <span class="font-weight-bold">
          I HAVE READ THIS RELEASE OF LIABILITY AND ASSUMPTION OF RISK,
          AGREEMENT. I FULLY understand ITS’ TERMS AND understand THAT I HAVE
          GIVEN UP SUBSTANCIAL RIGHTS BY SIGNING IT, AND SIGN IT FREELY AND
          VOLUNTARILY WITHOUT INDUCEMENT.
        </span>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn class="text-none success" @click="close">
          Agree and Close
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "covid-19-terms",

  data() {
    return {
      terms: [
        {
          text:
            "In consideration of being allowed to participate on behalf of <strong><i>StepUp Academy</i></strong>, Dubai’s Dance, Fitness & Performing Arts programs, related events and activities, the undersigned acknowledges, appreciates, and agrees that – ",
          lis: [
            "Participation includes possible exposure to and illness from infectious diseases including but not limited to MRSA, influenza, and COVID-19. While rules and personal discipline may reduce this risk, the risk of serious illness does exist",
            "I knowingly and freely assume all such risks, both known and un-known, even if arising from the negligence of the releasees or others, and assume full responsibility for my participation and/or my child’s participation",
            "I willingly agree to comply with the stated and customary terms & conditions for participation (as mentioned below) as protection against infectious diseases. If, however I observe any unusual or significant hazard during my/my child’s presence or participation, I shall remove myself/my child and bring it to the attention of StepUp Academy immediately",
            "I, for myself and on behalf of my immediate family members, assigns, personal representatives and next of kin, hereby release and hold harmless StepUp Academy, their office staff, their teachers, their owners and other participants, with respect to any and all illness or death, whether arising from the negligence of releasees or otherwise, to the fullest extent permitted by law",
          ],
        },
        {
          text: "<br><br>I also agree to the following –",
          lis: [
            "Mine/my child’s temperature shall be taken before each class/entering StepUp Academy and if it shows as 37.5 or higher, we will not be permitted entry ",
            "We must sanitize our hands before entering",
            "All personal belongings must be kept outside the studio, only water bottles and dance shoes are permitted",
            "Masks must always be worn, including before and after class, when arriving and when leaving",
            "Masks may be removed during class by the students and teacher, should the teacher feel it is safer to do so, whilst taking part in the physical activity, and I am aware this may happen",
            "If I/my children/people living in our household show any signs/symptoms of illness, that we will not come to StepUp Academy ",
            "If anyone with-in our household, or anyone we have been in contact with contracts an illness/virus, that we will inform StepUp Academy, and will not come to the school for a period of 14 days",
            "To follow all updated regulations as per the government regarding quarantine periods, testing requirements etc… and understand that StepUp Academy cannot list the requirements specifically, due to them being updated and amended",
            "Should StepUp Academy for whatever reason not be able to continue classes in the studio, that no refunds or credit will be given for the fees paid, and instead online live classes will be conducted as a substitute ",
            "All terms & conditions and safety procedures are all subject to change with immediate effect and no warning",
          ],
        },
      ],
    };
  },

  methods: {
    ...mapMutations(["REGISTRATION_FORM_WAIVER", "REGISTRATION_FORM_WAIVER_OPEN"]),
    close() {
      this.REGISTRATION_FORM_WAIVER(true)
      this.REGISTRATION_FORM_WAIVER_OPEN(false)
    },
  },

  computed: {
    ...mapState(["registration"])
  }
  
};
</script>
