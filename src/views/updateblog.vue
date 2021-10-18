<template>
  <main>
      <div class="container">
    <div class="row1">
    <div class="col1">
        <img src="../assets/bloglogo.png" class="image">
    </div>
    <div class="col2">
        <h1> Create your own blog!!</h1>
        </div>
        <div class="col3">
            <br>
            <button class="btn" @click="save" >Save Changes</button>
        </div>
    </div>
</div><br>
<div class="row2">
        <div class="row2column1"></div>
        <div class="row2column2">
           <input type="text" placeholder="Enter Title" class="title" v-model="blogdetails.title"><br>
           <h2>Blog Description</h2><hr><br>
           <textarea class="post" placeholder="click here to start writing..." @input="size($event)" v-model="blogdetails.description"></textarea><br>
        </div>
        <div class="row2column3"></div>

</div>
  </main>
</template>

<script>

import axios from 'axios'
export default {
  data () {
    return {
      blogdetails: {
        title: '',
        description: ''
      }

    }
  },
  computed: {

  },
  methods: {
    size (e) {
      e.target.style.height = 'auto'
      e.target.style.height = `${e.target.scrollHeight}px`
    },
    save () {
      axios.put('http://localhost:3000/article/' + localStorage.getItem('myid'), this.blogdetails)
        .then(res => {
          console.log('put fun', res.data)
          this.$alert('updated successfully')
        })
      this.$router.push('/allblog')
    }
  },
  beforeMount () {
    this.fetchBlogDetails()
  },
  mounted () {
    axios.get('http://localhost:3000/article/' + localStorage.getItem('myid'))
      .then(res => {
        console.log(res.data)
        this.blogdetails = res.data
      })
  }
}

</script>

<style scoped>
.container{
    background-color: black;
    padding: 4%;
    width: auto;
}
h1{
    color: white;
    font-size: 5vh;
}
.col1{
    float: left;
    width: 10%;
}
.col2{
    float: left;
    width: 70%;
    display: flex
}
.col3{
    float: left;
    width: 20%;
}
.row1:after{
    content: "";
    display: table;
    clear: both;
}
.row2column1{
    float: left;
    width: 25%;
    height: 100%;
}
.row2column2{
    float: left;
    width: 50%;
    height: 100%;
    /* border: 1px solid rgb(240, 238, 238); */
}
.row2column3{
    float: left;
    width: 25%;
    height: 100%;
}
.row2{
    display: flex;
    height: 100%;
}
.row2:after{
    content: "";
    display: table;
    clear: both;
    height: auto;

}
.title{
    width: 93%;
    border: 1px solid rgb(212, 211, 211);
    padding: 3%;
    outline: none;
    font-size: 2.5vh;
    font-weight: bold;
}
h2{
    opacity: 0.6;
}
.post{
    border: none;
    outline: none;
    font-size: 1.5vw;
    width: 94%;
    min-height: 50vh;
    font-family: 'Times New Roman', Times, serif;
}
.btn{
    background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 16px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  transition-duration: 0.4s;
  cursor: pointer;
}
.btn:hover{
  background-color: #f7f8f7;
  color: black;
}

@media screen and (max-width: 500px) {
.container{
    padding: 10%;
}
.image{
    width: 50px;
    padding: 0px 0px 0px 0px;
}
h1{
    padding: 0px 0px 0px 30px;
    font-size: 1.3em;
}
.col2{
    width: 90%;
}
.btn{
 padding: 10px 16px;
 font-size: 0.8em;
 margin-left: 200px;
}
.post{
    font-size: 1em;
    height: 50vh;
    font-family: 'Times New Roman', Times, serif;
}
.row2column1{
    width: 10%;
}
.row2column3{
    width: 10%;
}
.row2column2{
    width: 80%;
}
}
</style>
