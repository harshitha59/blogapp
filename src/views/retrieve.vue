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
    </div><br>
    <div class= container>
        <div class="column1">
     <button class="delete" @click="del()">Delete</button><br><br>
    <button class="edit" @click="edit(blogdetails, id)">Edit</button>
    </div>
    <div class="column2">
    <div class="card">
            <h1 class="title">{{getOneBlogDetails.title}}</h1>
           <h2>Blog Description</h2><hr><br>
           <h3 class="post"  v-html="getOneBlogDetails.description.replace(/\n/gm, '<br>')" ></h3>
  <!-- gm -replacement should be done more than once -->
        </div> </div>
</div>
  </main>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
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
    ...mapGetters(['getOneBlogDetails'])
  },
  methods: {
    ...mapActions(['fetchOneBlogDetails']),
    ...mapActions(['deleteBlog']),
    del () {
      this.deleteBlog()
      this.$confirm('Are you sure to delete?').then(() => {
        this.$router.push('/blog')
      })
    },
    edit (blogdetails, id) {
      this.$router.push('/updateblog')
    },
    home () {
      this.$router.push('/blog')
    }
  },
  beforeMount () {
    this.fetchOneBlogDetails()
  }

}
</script>

<style scoped>
.box{

    /* background: url('https://live.staticflickr.com/3416/3182912862_16234535b1_b.jpg'); */
    background-color: black;
    padding-bottom: 7%;
    width: auto;
    position: relative;
}
.card{
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  width: 100%;
  /* position: absolute; */
  background-color: white;
  /* margin-left: 20%; */
  height: auto;
  margin-top:0vh;
  /* top: 40%; */
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
.column1{
    float: left;
    width: 25%;
    margin-top: 3%;
    display: flex;
    justify-content: space-evenly;
}
.column2{
    float: left;
    width: 70%;
    display: flex;
    padding-left: 10px;
    /* margin-top: 2% */
}
.container:after{
    content: "";
    display: table;
    clear: both;
}
.head{
    color: white;
    font-size: 3.5vw;
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
    font-size: 1.5vw;
    width: 94%;
    min-height: 50vh;
    /* font-family: 'Times New Roman', Times, serif; */
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 500;
    padding-left: 3%;
    line-height: 1.6;
}
/* .bar1{
    display: flex;
    justify-content: space-evenly;
} */
.delete{
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
.delete:hover{
  background-color: rgb(247, 75, 75);
  color: black;
  border: 1px solid black;

}
.edit{
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
.edit:hover{
  background-color: rgb(99, 156, 99);
  color: black;
  border: 1px solid black;

}
.clicked{
    max-width: 2vw;
    height: 2vw;
    background-color: black;
    border: none;
}

@media screen and (max-width: 500px){
  .image{
    width: 70px;
    padding: 0px 0px 0px 0px;
}
.box{
  padding-bottom: 12%;
}
.head{
    padding: 0px 0px 0px 50px;
    font-size: 2em;
}
 .conatiner{
    display: flex;
    flex-wrap: wrap;
  }
  .column1{
    width:100%;
    display: flex;
    justify-content: space-between;
  }
  .column2{
    width: 100%;
     margin-left: 0px;
  }
  .card{
    width: 100%;
}
.delete{
 padding: 18px 50px;
 font-size: 0.8em;
 margin-left: 20px;
 display: flex;
 justify-content: center;
}
.edit{
 padding: 18px 50px;
 font-size: 0.8em;
 margin-right: 20px;
 display: flex;
 justify-content: center;
}
.post{
    font-size: 1.2em;
    height: auto;
    font-family: 'Times New Roman', Times, serif;
}
}

</style>
