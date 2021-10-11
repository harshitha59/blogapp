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
            <button class="btn" @click="publish">Publish</button>
        </div>
    </div>
</div><br>
<div class="row2">
        <div class="row2column1"></div>
        <div class="row2column2">
           <input type="text" placeholder="Enter Title" class="title" v-model="title"><br>
           <input type="text" placeholder="Enter ImageURL" class="url" v-model="imageURL">
           <h2>Blog Description</h2><hr><br>
           <textarea class="post" placeholder="click here to start writing..." @input="resize($event)" v-model="description"></textarea><br>
        </div>
        <div class="row2column3"></div>

</div>
  </main>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      title: '',
      validTitle: true,
      description: '',
      validDesc: true,
      imageURL: '',
      validURL: true,
      blogdetails: {
        title: '',
        description: '',
        imageURL: ''
      }

    }
  },
  methods: {
    ...mapActions(['postDetails']),
    resize (e) {
      e.target.style.height = 'auto'
      e.target.style.height = `${e.target.scrollHeight}px`
    },
    publish () {
      const words = this.title.trim().split(new RegExp('\\s+'))
      if (this.title !== '') {
        if (words.length < 11) {
          this.blogdetails.title = this.title
          this.validTitle = true
        } else {
          this.$alert('Number of words should be less than 11')
          this.validTitle = false
        }
      } else {
        this.$alert('enter title')
        this.validTitle = false
      }

      if (this.description !== '') {
        this.blogdetails.description = this.description
        this.validDesc = true
      } else {
        this.$alert('enter post description')
        this.validDesc = false
      }
      this.blogdetails.imageURL = this.imageURL

      if (this.validTitle === true && this.validDesc === true && this.validURL === true) {
        this.postDetails({ data: this.blogdetails, success: this.checkData })
      }
    },
    checkData (status) {
      this.$alert('Succesfully posted')
      this.$router.push('/retrieve')
    }
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
    width: 80%;
    display: flex
}
.col3{
    float: left;
    width: 10%;
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
.url{
    width: 93%;
    /* border: 1px solid rgb(212, 211, 211); */
    border: none;
    padding: 3%;
    outline: none;
    font-size: 2.5vh;
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

</style>
