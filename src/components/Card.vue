<template>
  <div class="card">
      <h1 class="card-title">{{ paper._source.title }}</h1>
      <h2 class="card-subtitle">{{ paper._source.authors }}</h2>
      <div class="content">
          <p>
            {{ paper._source.excerpt }}
          </p>
      </div>
  </div>
</template>

<script>
export default {
    name: 'Card',
    props:{
        paper:{
            type: Object,
            required: true
        }
    }
}
</script>

<style lang="scss">
//Variables
$dark: #282a2c;
$lightdark: lighten($dark, 5);
$white: whitesmoke;
$border-radius: 20px;

.card{
    background-color: $lightdark;
    padding: 2em;
    border-radius: $border-radius;
    margin-bottom: 1em;

    .card-title{
        font-size: 1.5em;
        margin-bottom: 0.25em;
    }
    .card-subtitle{
        font-size: 1em;
        color: #9161cf;
    }
    .content{
        margin-top: 1em;
    }
}
</style>