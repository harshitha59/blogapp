import Vue from 'vue'
import Vuex from 'vuex'
import VueSimpleAlert from 'vue-simple-alert'
import axios from 'axios'
Vue.use(VueSimpleAlert)

Vue.use(Vuex)
const postData = 'http://localhost:3000/article'
const getData = 'http://localhost:3000/article/'
export default new Vuex.Store({
  state: {
    details: []
  },
  getters: {
    getBlogDetails (state) {
      return state.details
    }
  },
  mutations: {
    setBlogDetails (state, item) {
      state.details = item
    }
  },
  actions: {
    postDetails ({ commit }, { data, success }) {
      const details = {
        title: data.title,
        description: data.description,
        imageURL: data.imageURL
      }
      axios.post(postData, details)
        .then(res => {
          console.log(res.data)
          localStorage.setItem('myid', res.data.id)
          success(res.data)
        })
    },

    fetchBlogDetails ({ commit }, data) {
      axios.get(getData + localStorage.getItem('myid'))
        .then(res => {
          console.log(res.data)
          const blog = res.data
          console.log(getData + '---->')
          // console.log(localStorage.getItem('id'))
          commit('setBlogDetails', blog)
        })
        .catch(e => console.log('error', e))
    }
  },

  modules: {
  }
})
