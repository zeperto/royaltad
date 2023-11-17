<template>
  <div id="footer">
    <div class="yeline"></div>
    <div id="contact">
      <h3>ارتباط با ما</h3>
      <ul>
        <li>
          <v-icon class="mapMarker">mdi-map-marker</v-icon>
          <span>همین حوالی روی زمین آدرس ماست</span>
        </li>
        <li>
          <v-icon class="phoneColor">mdi-phone</v-icon>
          <span>09212387201</span>
        </li>
        <li>
          <v-icon class="mailColor">mdi-email</v-icon>
          <span>ali.zi.zeperto@yandex.com</span>
        </li>
        <li class="socialicon">
          <nuxt-link to="https://www.instagram.com/royalTad">
            <v-icon class="socialIcons">mdi-instagram</v-icon>
          </nuxt-link>
          <nuxt-link to="https://www.whatsapp.com/royalTad">
            <v-icon class="socialIcons">mdi-whatsapp</v-icon>
          </nuxt-link>
          <nuxt-link to="https://www.twitter.com/royalTad">
            <v-icon class="socialIcons">mdi-twitter</v-icon>
          </nuxt-link>
          <nuxt-link to="https://www.facebook.com/royalTad">
            <v-icon class="socialIcons">mdi-facebook</v-icon>
          </nuxt-link>
        </li>
      </ul>
    </div>
    <div id="withUs">
      <h3>با رویال تاد</h3>
      <ul>
        <li>
          <v-icon class="arrows">mdi-arrow-left</v-icon>
            <span>درباره ما</span>
        </li>
        <!-- <li>
          <v-icon>mdi-arrow-left</v-icon>
          <span>ارتباط با ما</span>
        </li> -->
        <li>
          <v-icon class="arrows">mdi-arrow-left</v-icon>
          <span>سیاست محرمانگی</span>
        </li>
        <li>
          <v-icon class="arrows">mdi-arrow-left</v-icon>
          <span>شرایط و آیین نامه</span>
        </li>
      </ul>
    </div>
    <div id="logos">
      <div>
        <img src="@/assets/logo/kasbokar.png" alt="kasbokar logo">
      </div>
      <div>
        <img src="@/assets/logo/logo.png" alt="e-namad logo">
      </div>
      <div>
        <img src="@/assets/logo/rezi.png" alt="rezi logo">
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
    #footer{
      display: flex;
      direction: rtl;
      padding: 2rem 5rem;
      justify-content: space-evenly;
      color: $textLightColor;
      font-family: royal;
      margin-top: 3rem;
      background-color: $themeColorBack;
      border-top: 4px solid $themeColorFront;
      ul{
        list-style: none;
        li{
          margin: 1rem 0;
        }
      }
      h3{
        margin: 1rem;
      }
      #logos{
        display: flex;
        img{
          width: 123px;
          height:123px;
        }
      }
      .arrows{
        color: rgb(196, 98, 7)
      }
      .mapMarker{
        color: rgb(255, 0, 34)
      }
      .phoneColor{
        color: greenyellow;
      }
      .mailColor{
        color: rgb(21, 21, 54)
      }
      .socialIcons{
        color: white;
        font-size: 1.8rem;
        display: inline-block;
        margin: 0 0.5rem;
        &:hover{
          cursor: pointer;
          background-color: $themeColorBack;
          color: orange;
          transition: all 0.3s;
        }
      }
    }
  @media screen and (max-width: 576px) {
    #footer{
      flex-flow: column;
    }
  }
  @media screen and (min-width: 577px)  and (max-width: 768px){
    #footer{
      flex-flow: column;
    }
  }
  @media screen and (min-width: 769px)  and (max-width: 992px){
    #footer{
      flex-flow: column;
    }
  }
  @media screen and (min-width: 993px)  and (max-width: 1200px){
    #footer{
      flex-flow: column;
    }
  }
  @media screen and (min-width: 1200px){

  }
</style>
