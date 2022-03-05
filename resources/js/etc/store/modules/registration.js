import axios from "axios";
import router from "../../../router";
export default {
    state: {
        teachers: [],
        form: {
            id: 0,
            location: "motor city",
            children: [
                {
                    id: 0,
                    firstName: null,
                    familyName: null,
                    gender: "Female",
                    nationality: null,
                    dateOfBirth: null,
                    dob_open: false,
                    isSelected: true
                }
            ],
            mom: {
                firstName: null,
                familyName: null,
                nationality: null,
                mobileNumber: '',
                homeNumber: '',
                workNumber: '',
                company: null,
                emailAddress: null
            },
            dad: {
                firstName: null,
                familyName: null,
                nationality: null,
                mobileNumber: '',
                homeNumber: '',
                workNumber: '',
                company: null,
                emailAddress: null
            },
            address: {
                id: 0,
                address_1: null,
                area: null,
                building: null,
                city: 'Dubai',
                country: 'AE',
                street: null,
                zip: '00000',

            },
            role: "User",
            password: null,
            confirm_password: null
        },
        emailError: null,
        isNew: false,
        classTermsAndConditions: false,
        waiver: false,
        classTermsAndConditionsOpen: false,
        waiverOpen: false,
        submitOpen: false,
        loading: false
    },

    mutations: {
        REGISTRATION_ERROR(state, payload) {
            state.emailError = payload
        },

        REGISTRATION_FORM(state, payload) {
            state.form = payload
        },

        REGISTRATION_LOADING(state, payload) {
            state.loading = payload
        },

        REGISTRATION_FORM_TEACHERS(state, payload) {
            state.teachers = payload
        },

        REGISTRATION_NEW_EMAIL(state, payload) {
            state.isNew = payload
        },

        REGISTRATION_FORM_TERMS_AND_CONDITIONS(state, payload) {
            state.classTermsAndConditions = payload
        },

        REGISTRATION_FORM_WAIVER(state, payload) {
            state.waiver = payload
        },

        REGISTRATION_FORM_TERMS_AND_CONDITIONS_OPEN(state, payload) {
            state.classTermsAndConditionsOpen = payload
        },

        REGISTRATION_FORM_WAIVER_OPEN(state, payload) {
            state.waiverOpen = payload
        },

        REGISTRATION_FORM_SUBMIT(state, payload) {
            state.submitOpen = payload
        },
    },

    actions: {
        REGISTRATION_VERIFY_EMAIL({commit}, {email}) {

            return new Promise((res, rej) => {
                axios.post("/api/CHECK-EMAIL", {
                    email
                })
                .then((result) => {
                    commit("REGISTRATION_FORM", result.data)
                    commit("REGISTRATION_ERROR", null);
                    commit("REGISTRATION_NEW_EMAIL", false);
                    res(result)
                })
                .catch((err) => {
                    rej(err)
                    commit("REGISTRATION_ERROR", err.response.data.errors.email[0]);
                    commit("REGISTRATION_NEW_EMAIL", err.response.status === 421 ? true : false);
                })
            })
        },

        REGISTRATION_FORM({commit}, {form, email, password}) {
            commit("REGISTRATION_LOADING", true)
            return new Promise((res, rej) => {
                axios.post("/api/REGISTER-FORM", {
                    form, email, password
                })
                .then((result) => {
                    commit("REGISTRATION_FORM_SUBMIT", true)
                    commit("REGISTRATION_LOADING", false)
                    res(result)
                    // setTimeout(() => {
                    //     router.push({name: "Home"})
                    // }, 5000);
                })
                .catch((err) => {
                    commit("REGISTRATION_LOADING", false)
                    rej(err)
                })
            })
            
        },

        async REGISTRATION_TRIAL_FORM({}, {form, email, password}) {
            await axios.post("/api/REGISTER-TRIAL-FORM", {
                form, email, password
            }).then((result) => {
                console.log(result)
            })
            .catch((err) => {
                console.log(err.response.data)
            })
        }
    }
}