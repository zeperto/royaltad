<template>
  <div class="siteMenu">
    <div class="mainContainer">
      <div id="section3">
        <div class="items">
          <div>Menu item 1</div>
          <div>Menu item 2</div>
          <div>Menu item 3</div>
          <div>Menu item 4</div>
          <div>Menu item 5</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '@/assets/mainStyles.scss';
.siteMenu{
  background-color: $themeColorFront;
}
.mainContainer{
  display: flex;
  justify-content: center;
}
#section3{
  display: flex;
  justify-content: center;
  width: 50%;
  padding: 0.7rem 0
}
.items{
  display: flex;
  list-style: none;
  width: 100%;
  justify-content: space-between;
  color: black;
  cursor: pointer;
  div{
    &:hover{
      color:aquamarine
    }
  }
}
@media screen and (max-width: 576px) {
  .siteMenu{
    display: none;
  }
}
@media screen and (min-width: 577px)  and (max-width: 768px){
  .siteMenu{
    display: none;
  }
}
@media screen and (min-width: 769px)  and (max-width: 992px){
  .siteMenu{
    display: none;
  }
}
@media screen and (min-width: 993px)  and (max-width: 1200px){
    
}
@media screen and (min-width: 1200){
  
}
</style>