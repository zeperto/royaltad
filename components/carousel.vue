<template>
  <div id="carouselP" @mouseover="imageHover" @mouseout="imageMouseOut" >
      <div id="panel">
          <div id="leftArrow">
              <v-icon @click="leftArrowClicked" medium>mdi-arrow-left</v-icon>
          </div>
          <div id="rightArrow">
              <v-icon  @click="rightArrowClicked" medium>mdi-arrow-right</v-icon>
          </div>
      </div>
      <img id="car1" src="@/assets/carousel.png" alt="عرقیات گیاهی ابی">
      <img id="car2" src="@/assets/carousel2.png" alt="خوشمزه های طبیعی">
  </div>
</template>

<script>
export default {
  data(){
      return{
          panelFlag: false
      }
  },
  methods:{
      rightArrowClicked(){

      },
      leftArrowClicked(){
          console.log(' left clicked ');
      },
      imageHover(){
          if(!this.panelFlag){
              document.querySelector('#panel').style.visibility = "visible";
              this.panelFlag = true;
          }
      },
      imageMouseOut(){
          if(this.panelFlag){
              document.querySelector('#panel').style.visibility = "hidden";
              this.panelFlag = false;
          }
      }
  }
}
</script>

<style lang="scss" scoped>
  @import '@/assets/mainStyles.scss';
  img{
    width: 100vw;
    min-width: 80vw;
  }
  #car2{
      display: none;
  }
  #panel{
      position: absolute;
      margin-top: 20rem;
      padding: 0 3rem;
      display: flex;
      justify-content: space-between;
      width: 100vw;
      visibility: hidden;
      button{
          z-index: 7;
          padding: 0.5rem;
          border-radius: 5rem;
          color: white;
          cursor: pointer;
          background-color: $themeColorBack;
      }
  }
</style>
