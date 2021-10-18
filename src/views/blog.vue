<template>
<!-- starting page -->
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
            <div class="btn-container">
            <button class="btn" @click="publish">Publish</button>
            </div>
        </div>
    </div>
</div><br>
<div class="row2">
        <div class="row2column1"></div>
        <div class="row2column2">
           <input type="text" placeholder="Enter Title" class="title" v-model="title"><br>
           <!-- <input type="text" placeholder="Enter ImageURL" class="url" v-model="imageURL"> -->
           <input type="file" @change="onFileChanged">
           <!-- <button @click="upload()" class="upload">Upload</button> -->
           <h2>Blog Description</h2><hr><br>
           <textarea class="post" placeholder="click here to start writing..." @input="resize($event)" v-model="description"></textarea><br>
        </div>
        <div class="row2column3"></div>

</div>
  </main>
</template>

<script>
import { mapActions } from 'vuex'
// import FileReader from 'vue-filereader'
export default {
  data () {
    return {
      title: '',
      validTitle: true,
      description: '',
      validDesc: true,
      imageURL: null,
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
    onFileChanged (event) {
      const files = event.target.files
      const reader = new FileReader()
      const self = this
      reader.onload = img => {
        const base64 = img.target.result
        self.imageURL = base64
      }
      reader.readAsDataURL(files[0])
    //   console.log(event.target.files)
    //   this.imageURL = '../assets/' + event.target.files[0].name
    //   const reader = new FileReader()
    //   reader.readAsDataURL(this.imageURL)
    //   reader.onload = event => {
    //     this.imageURL = event.target.result
    //   }
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
      if (this.imageURL !== null) {
        this.blogdetails.imageURL = this.imageURL
        console.log(this.blogdetails.imageURL)
        this.validURL = true
      }

      if (this.validTitle === true && this.validDesc === true && this.validURL === true) {
        this.postDetails({ data: this.blogdetails, success: this.checkData })
      }
    },
    checkData (status) {
      this.$alert('Succesfully posted')
      this.$router.push('/allblog')
    }
  }

}

</script>

<style scoped>
.container{
    background-color: black;
    padding: 4%;
    max-width: 100%;
}
h1{
    color: white;
    font-size: 3vw;
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
    height: 50vh;
    font-family: 'Times New Roman', Times, serif;
}
.btn{
background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 16px 32px;
  /* padding: 1vw; */
  /* width: 10vw; */
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 1.2em;
  margin: 4px 2px;
  transition-duration: 0.4s;
  cursor: pointer;
}
.btn:hover{
  background-color: #f7f8f7;
  color: black;
}
.image{
    width: 100%;
    height: auto;
}
.btn-conatiner{
    display: flex;
    justify-content: center;
}
input[type=file]::file-selector-button {
     background-color: #000000;
  border: none;
  color: white;
  padding: 15px 35px;
   /* padding: 1vw;
  width: 9vw; */
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 1vw;
  margin: 4px 2px;
  transition-duration: 0.4s;
  cursor: pointer;
}

input[type=file]::file-selector-button:hover {
  background-color: #fafafa;
  color:black;
  border: 2px solid #030303;
}
.upload{
    background-color: #000000;
  border: none;
  color: white;
  padding: 15px 35px;
   /* padding: 1vw;
  width: 9vw; */
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 1vw;
  margin: 4px 2px;
  transition-duration: 0.4s;
  cursor: pointer;
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
input[type=file]::file-selector-button {

  font-size: 1em;
}
}
</style>
