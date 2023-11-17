<template>
  <div>
    <!-- <engHeader v-if="this.$store.getters.getLocale == 'eng'" /> -->
    <perLeftSide />
  </div>
</template>

<script>
const perLeftSide = () => import("./persianComponents/rightSide.vue");
export default {
  components:{
    'perLeftSide': perLeftSide
  }
}
</script>

<style>

</style>
