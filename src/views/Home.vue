<template>
  <div>
    <section>
      <div class="box">
        <h1 class="logo">CoronaXiv</h1>
        <div class="searchBox">
          <span class="material-icon">
            <img src="@/assets/Images/search-white-18dp.svg" alt="Search">
          </span>
          <form @submit.prevent="">
            <input type="text">
          </form>
        </div>
      </div>

      <footer>
        CoronaXiv is an ElasticSearch-powered AI Search Engine that indexes the thousands of research papers that have piled up in response to the Corona Virus pandemic and illustrates various visualizations.
      </footer>
    </section>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import '@/assets/style.scss'
</style>