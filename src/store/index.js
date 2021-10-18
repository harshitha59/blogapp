import Vue from 'vue'
import Vuex from 'vuex'
import VueSimpleAlert from 'vue-simple-alert'
import axios from 'axios'
Vue.use(VueSimpleAlert)

Vue.use(Vuex)
const postData = 'http://localhost:3000/article'
const getData = 'http://localhost:3000/article'
const getBlogData = 'http://localhost:3000/article/'
const check = 'http://localhost:3000/article/26'
export default new Vuex.Store({
  state: {
    details: [],
    blogdata: [],
    checkdata: []
  },
  getters: {
    getBlogDetails (state) {
      return state.details
    },
    getOneBlogDetails (state) {
      return state.blogdata
    },
    getCheckDetails (state) {
      return state.checkdata
    }
  },
  mutations: {
    setBlogDetails (state, item) {
      state.details = item
    },
    setOneBlogDetails (state, item) {
      state.blogdata = item
    },
    setCheckDetails (state, item) {
      state.checkdata = item
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
          // localStorage.setItem('myid', res.data.id)
          success(res.data)
        })
    },

    fetchBlogDetails ({ commit }, data) {
      axios.get(getData)
        .then(res => {
          console.log(res.data)
          const blog = res.data
          console.log(getData + '---->')
          // console.log(localStorage.getItem('id'))
          commit('setBlogDetails', blog)
        })
        .catch(e => console.log('error', e))
    },
    fetchCheckDetails ({ commit }, data) {
      axios.get(check)
        .then(res => {
          console.log(res.data)
          const blog = res.data
          console.log(blog.imageURL)
          console.log(getData + '---->')
          // console.log(localStorage.getItem('id'))
          commit('setCheckDetails', blog)
        })
        .catch(e => console.log('error', e))
    },
    fetchOneBlogDetails ({ commit }, data) {
      axios.get(getBlogData + localStorage.getItem('myid'))
        .then(res => {
          console.log(res.data)
          const blog = res.data
          console.log(getData + '---->')
          // console.log(localStorage.getItem('id'))
          commit('setOneBlogDetails', blog)
        })
        .catch(e => console.log('error', e))
    },
    deleteBlog () {
      axios.delete('http://localhost:3000/article/' + localStorage.getItem('myid'))
    }
  },

  modules: {
  }
})
