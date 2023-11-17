<template>
  <div class="siteMenu">
    <div class="mainContainer">
      <div id="section3">
        <div class="items">
            <div>شیرینی محلی</div>
            <div>سبزی خشک</div>
            <div>میوه خشک</div>
            <div>شیره جات</div>
            <div>عرقیات</div>
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
  position: relative;
  // top: 0;
  z-index: 999;
}
.mainContainer{
  display: flex;
  flex-flow: row-reverse;
  justify-content: center;
}
#section3{
  display: flex;
  justify-content: center;
  width: 50%;
  padding: 0.7rem 0;
  flex-flow: row-reverse;
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
      color:$themeColorBack
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
@media screen and (min-width: 1200px){

}
</style>
