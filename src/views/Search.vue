<template>
  <div>
    <div class="navbar">
      <span class="icon">
        <img src="@/assets/Images/menu-white-18dp.svg" alt="Menu">
      </span>
      <form @submit.prevent="" class="navSearch">
        <input type="text">
      </form>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Search',
    data: () => ({
      searchString: ''
    }),
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

  // border: 2px solid red;
  padding: 1em;

  .icon{
    // border: 2px solid yellow;
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
</style>