<template>
  <div>
    <div class="navbar">
      <span class="icon">
        <img src="@/assets/Images/menu-white-18dp.svg" alt="Menu">
      </span>
      <form @submit.prevent="search()" class="navSearch">
        <input type="text" v-model="searchString">
      </form>
    </div>

    <div class="container">
      <h1>{{ searchString }}</h1>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Search',
    data: () => ({
      searchString: ''
    }),
    beforeRouteUpdate(to, from, next){
      this.searchString = to.query.q
      next()
    },
    methods:{
      search(){
        this.$router.push({
          path: '/search',
          query:{
            q: this.searchString
          }
        })
      }
    },
    mounted(){
      this.searchString = this.$route.query.q
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
</style>