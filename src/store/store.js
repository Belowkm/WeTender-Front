import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import {
    getToken,
    setToken,
    removeToken
} from '@/utils/auth'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        token: getToken(),
        user: {}
    },
    mutations: {
        SET_TOKEN: (state, token) => {
            state.token = token
            setToken(token)
        },
        SET_USER: (state, user) => {
            state.user = user
        },
        REMOVE_TOKEN: (state) => {
            state.token = ''
            removeToken()
        }

    },
    actions: {
        login({
            commit
        }, userInfo) {
            return new Promise((resolve, reject) => {
                axios.post('/api/login', userInfo).then(response => {
                    const data = response.data
                    commit('SET_TOKEN', data.token)
                    resolve()
                }).catch(error => {
                    reject(error)
                })
                axios.get('/api/user').then(response => {
                    const data = response.data
                    commit('SET_USER', data)
                    resolve()
                }).catch(error => {
                    reject(error)
                })
            })
        },

        logout({
            commit
        }) {
            return new Promise((resolve, reject) => {
                axios.post('/api/logout').then(response => {
                    const data = response.data
                    commit('REMOVE_TOKEN')
                    resolve()
                }).catch(error => {
                    reject(error)
                })
            })
        }
    }
})
