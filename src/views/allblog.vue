<template>
<main>
<div class="box">
        <div class="row1">
               <div class="col1">
                   <button class="clicked" @click="home"><img src="../assets/bloglogo.png" class="image"></button>
               </div>
               <div class="col2">
                    <h1 class='head'> All blogs :)</h1>
               </div>
        </div>
</div>
<div class="container"><br>
    <div class="row2" v-for="index in getBlogDetails" :key="index.id" :value="index">
        <!-- localStorage.setItem('myid', index.id) -->
        <div class="row2column1">
            <div class="card1">
                 <h1 class="title">{{index.title}}</h1>
                 <h2>Blog Description</h2><hr><br>
                 <div class="post">{{index.description}}</div><br>
                 <div class="bar1">
                 <button class="view" @click="view(index.id)">View</button>
            <button class="cancel" @click="cancel()">Cancel</button></div><br>
            </div>
        </div>
        <div class="row2column2">
            <!-- <button class="view" @click="view(index.id)">View</button>
            <button class="cancel">Cancel</button> -->
            </div>
        </div>

    <!-- <div class="row2">
            <div class="card2">
                 <h1 class="title">title</h1>
                 <h2>Blog Description</h2><hr><br>
                 <h3 class="post">description....</h3>
            </div></div>
    <div class="row2">
            <div class="card3">
                 <h1 class="title">title</h1>
                 <h2>Blog Description</h2><hr><br>
                 <h3 class="post">description....</h3>
            </div></div> -->
</div>
</main>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
// import axios from 'axios'
export default {
  data () {
    return {
      title: '',
      description: '',
      blogdetails: {
        title: '',
        description: ''
      }
    }
  },
  computed: {
    ...mapGetters(['getBlogDetails'])
  },
  methods: {
    ...mapActions(['fetchBlogDetails']),
    // del () {
    //   axios.delete('http://localhost:3000/article/' + localStorage.getItem('myid'))
    //   this.$alert('Deleted Successfully')
    //   this.$router.push('/blog')
    // },
    // edit (blogdetails, id) {
    //   this.$router.push('/updateblog')
    // },
    home () {
      this.$router.push('/blog')
    },
    cancel () {
      this.$router.push('/blog')
    },
    view (e) {
      localStorage.setItem('myid', e)
      this.$router.push('/retrieve')
    }

  },
  beforeMount () {
    this.fetchBlogDetails()
  }

}
</script>

<style scoped>

.box{
    background-color: black;
    padding-bottom: 5%;
    width: auto;
    position: relative;
}
.col1{
    float: left;
    width: 8%;
    margin-top: 3%
}
.col2{
    float: left;
    width: 80%;
    display: flex;
    margin-top: 2%
}
.row1:after{
    content: "";
    display: table;
    clear: both;
}
.head{
    color: white;
    font-size: 3.5vw;
}
.clicked{
    max-width: 2vw;
    height: 2vw;
    background-color: black;
    border: none;
}
.container{
    /* background-color:rgb(253, 253, 253); */
    background-image: url('https://mobilesolutions.pt/wp-content/uploads/2016/02/Silver-Blur-Background-Wallpaper.jpg');
    /* filter: blur(5px); */
    /* -webkit-filter: blur(5px); */
    padding-bottom: auto;
    width: 100%;
    position: relative;
}
.card1{
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  width: 100%;
  background-color: white;
  height: auto;

}
/* .card2{
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  width: 80%;
  position: absolute;
  background-color: white;
  margin-left: 0px;
  right: 0%;
  margin-right: 0px;
  height: auto;
  margin-top:0vh;
  top: 40%;
}
.card3{
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  width: 80%;
  position: absolute;
  background-color: white;
  margin-left: 20%;
  right: 0%;
  margin-right: 0px;
  height: auto;
  margin-top:0vh;
  top: 40%;
} */
.title{
    width: 90%;
    /* border: 1px solid rgb(212, 211, 211); */
    border: none;
    padding: 3%;
    outline: none;
    /* font-size: 2.5vh; */
    font-weight: bold;
    text-align: center;
}
h2{
    opacity: 0.6;
   margin-left: 4%;
}
.post{
    border: none;
    outline: none;
    font-size: 1.5vw;
    width: 94%;
    height: auto;
    /* min-height: auto; */
    /* font-family: 'Times New Roman', Times, serif; */
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 500;
    padding-left: 3%;
    line-height: 1.6;
}
.row2column2{
    float: left;
    width: 20%;
    height: 100%;
    padding-top: 100px;
    padding-left: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    justify-content: space-evenly;
    flex-direction: column;
}
.row2column1{
    float: left;
    width: 80%;
    height: auto;
    margin-left: 250px;
    /* border: 1px solid rgb(240, 238, 238); */
}
.row2{
    display: flex;
    height: auto;
}
.row2:after{
    content: "";
    display: table;
    clear: both;
    height: auto;

}
.bar1{
    display: flex;
    justify-content: space-evenly;
}
.cancel{
    background-color: #000000;
  border: none;
  color: white;
  /* padding: 16px 32px; */
   padding: 1vw;
  width: 14vw;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 1.5vw;
  margin: 4px 2px;
  transition-duration: 0.4s;
  cursor: pointer;
}
/* .delete:hover{
  background-color: rgb(247, 75, 75);
  color: black;
  border: 1px solid black;

} */
.view{
    background-color: #000000;
  border: none;
  color: white;
  /* padding: 16px 35px; */
   padding: 1vw;
  width: 14vw;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 1.5vw;
  margin: 4px 2px;
  transition-duration: 0.4s;
  cursor: pointer;
}
.view:hover{
  background-color: rgb(99, 156, 99);
  color: black;
  border: 1px solid black;

}

@media screen and (max-width: 500px) {
    .box{
        padding-bottom: 20%;
    }
    .col1{
    float: left;
    width: 25%;
    margin-top: 3%
}
.col2{
    float: left;
    width: 65%;
    display: flex;
    margin-top: 2%;
    padding: 6px
}
.head{
    color: white;
    font-size: 2em;
}
.row2column1{
    width: 100%;
    margin-left: 0px;
}
.row2column2{
    width: 100%;
    display: flex;
    justify-content: space-evenly
}
.row2{
    display: flex;
    flex-wrap: wrap;
}
.row2column2{
    float: left;
    width: 20%;
    /* height: 100%; */
    padding-top: 20px;
    /* padding-left: 20px; */
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
.post{
    font-size: 1.2em;
    height: auto;
    font-family: 'Times New Roman', Times, serif;
}
.card1{
  width: 100%;
}
.cancel{
 padding: 15px 50px;
 font-size: 1em;
 /* text-align: center; */
 display: flex;
 justify-content: center;
 margin-left: 20px;
}
.view{
 padding: 15px 50px;
 font-size: 1em;
 text-align: center;
 margin-left: 20px;
  display: flex;
    justify-content: center;
 /* justify-content: space-evenly; */
}
}
</style>
