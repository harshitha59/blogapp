<template>
  <main>
    <div class="box">
        <div class="row1">
               <div class="col1">
                   <button class="clicked" @click="home"><img src="../assets/bloglogo.png" class="image"></button>
               </div>
               <div class="col2">
                    <h1 class='head'> Your own blog :)</h1>
               </div>
        </div>
        <div class="card">
            <h1 class="title">{{getBlogDetails.title}}</h1>
           <h2>Blog Description</h2><hr><br>
           <h3 class="post" v-html="getBlogDetails.description.replace(/\n/gm, '<br>')" ></h3>
<!-- gm -replacement should be done more than once -->
        </div>
    </div><br>
    <button class="delete" @click="del()">Delete your blog</button>
    <button class="edit" @click="edit(blogdetails, id)">Edit your blog</button>

  </main>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import axios from 'axios'
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
    del () {
      axios.delete('http://localhost:3000/article/' + localStorage.getItem('myid'))
      this.$alert('Deleted Successfully')
      this.$router.push('/blog')
    },
    edit (blogdetails, id) {
      this.$router.push('/updateblog')
    },
    home () {
      this.$router.push('/blog')
    }
  },
  beforeMount () {
    this.fetchBlogDetails()
  }

}
</script>

<style scoped>
.box{

    /* background: url('https://live.staticflickr.com/3416/3182912862_16234535b1_b.jpg'); */
    background-color: black;
    padding-bottom: 13%;
    width: auto;
    position: relative;
}
.card{
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  width: 60%;
  position: absolute;
  background-color: white;
  margin-left: 30%;
  height: auto;
  margin-top:0vh;
  top: 40%;
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
    font-size: 6vh;
}
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
    /* font-size: 1.5vw; */
    width: 94%;
    min-height: 50vh;
    /* font-family: 'Times New Roman', Times, serif; */
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 500;
    padding-left: 3%;
    line-height: 1.6;
}
.delete{
    background-color: #000000;
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
.delete:hover{
  background-color: rgb(247, 75, 75);
  color: black;
  border: 1px solid black;

}
.edit{
    background-color: #000000;
  border: none;
  color: white;
  padding: 16px 35px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  transition-duration: 0.4s;
  cursor: pointer;
}
.edit:hover{
  background-color: rgb(99, 156, 99);
  color: black;
  border: 1px solid black;

}
.clicked{
    width: 2vw;
    height: 2vw;
    background-color: black;
    border: none;
}

</style>
