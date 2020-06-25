<template>
  <div>
    <div class="navbar">
      <span class="icon">
        <img src="@/assets/Images/menu-white-18dp.svg" alt="Menu">
      </span>
      <form @submit.prevent="search()" class="navSearch">
        <input type="text" :style="(error) ? 'color:crimson' : 'color:white'" name="searchString" id="searchString" v-model="searchString" required>
      </form>
    </div>

    <div class="container">
      <h2>{{ (loading) ? "Loading" : "" }}</h2>
      <div class="cards" v-if="!loading">
          <Card v-for="paper in papers" :paper="paper" :key="paper._source.title + Math.random()" />
      </div>
    </div>
  </div>
</template>

<script>
import Card from '@/components/Card'
import axios from 'axios'

export default {
    name: 'Search',
    components:{
      Card
    },
    data: () => ({
      searchString: '',
      papers: [],
      error: false,
      loading: false
    }),
    // beforeRouteUpdate(to, from, next){
    //   this.searchString = to.query.q
    //   next()
    // },
    watch:{
      '$route': 'callAPI'
    },
    methods:{
      search(){
        if(this.searchString == this.$route.query.q){
          this.error = true
          setTimeout(() => {
            this.error = false
          }, 1000)
        }
        else{
          this.$router.push({
            path: '/search',
            query:{
              q: this.searchString
            }
          })
        }
      },
      callAPI(){
        this.searchString = this.$route.query.q
        let url = this.$store.state.getURL + this.searchString

        this.loading = true

        axios.get(url)
        .then((response) => {
          this.papers = response.data.data.hits.hits
          this.loading = false
        })
      }
    },
    mounted(){
      console.log("MOUNTED")
      //Initial value of searchString when user enters from Home Page's Search
      this.callAPI()
    }
}
</script>

<style lang="scss">

//Variables
$dark: #282a2c;
$lightdark: lighten($dark, 5);
$white: whitesmoke;
$border-radius: 20px;

// *{
//   border: 2px solid red;
// }

.navbar{
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  padding: 1em;

  .icon{
    width: 20%;
    display: flex;
    justify-content: center;
    align-items: center;

    img{
      width: 2em;
    }
  }

  .navSearch{
    width: 70%;
    margin-right: 2em;
    height: 2.8em;

    input{
      background-color: $lightdark;
      color: $white;
      border: none;
      height: 100%;
      width: 100%;
      padding: 0 1em;
      font-weight: bold;

      &:focus{
        outline: none !important;
      }
    }
  }
}

.container{
  color: $white;
  margin: 1em 2em;
}

@media only screen and (max-width: 768px){
  body{
    font-size: 12px;
  }
  .cards{
    // overflow-x: scroll;
    // overflow-y: hidden;
    // white-space: nowrap;

    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;

    //For iOS
    -webkit-overflow-scrolling: touch;
  }
}
</style>