<template>
  <div id="section2">
    <div id="menuListItems" class="third">
      <div>
        <v-icon class="rightPanelIcon" large color="white">mdi-cart-outline</v-icon>
      </div>
      <div>
        <v-icon @click="showAccountMenu" class="rightPanelIcon" large color="white">mdi-account</v-icon>
        <div id="accountMenu">
          <nuxt-link v-on:click.native="accountLinkClicked" to="/register">ثبت نام</nuxt-link>
          <nuxt-link v-on:click.native="accountLinkClicked" to="/login">ورود</nuxt-link>
        </div>
      </div>
    </div>
    <div class="secondTitle">
      <nuxt-link to="/">
        <img src="@/assets/barg.png" alt=""/>
        <h2>ROYALTAD</h2>
      </nuxt-link>
    </div>
    <div class="second">
      <v-icon madium id="magnify">mdi-magnify</v-icon>
      <input type="text" name="mainSearch" placeholder="جستجوی محصولات">
    </div>
    <div class="mobileMenu">
      <v-icon large id="magnify2">mdi-magnify</v-icon>
      <v-icon large id="burger" @click="menuClicked">mdi-menu</v-icon>
    </div>
    <div class="first">
      <nuxt-link to="/">
        <h2>رویال تاد</h2>
        <img src="@/assets/barg.png" alt=""/>
      </nuxt-link>
    </div>
  </div>
</template>

<script>

export default {
  data(){
    return{
      accountMenuFlag: false,
    }
  },
  methods: {
    menuClicked(){
    },
    accountLinkClicked(){
      document.querySelector('#accountMenu').style.display = 'none';
    },
    showAccountMenu(){
      if(this.$store.getters.getAccountMenuFlagState){
        this.$store.commit('setAccountMenuFlag', false);
        document.querySelector('#accountMenu').style.display = 'none';
        document.querySelector('#accountMenu').style.opacity = 0;
      }
      else{
        this.$store.commit('setAccountMenuFlag', true);
        document.querySelector('#accountMenu').style.display = 'block';
        document.querySelector('#accountMenu').style.opacity = 1;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "@/assets/mainStyles.scss";
  @keyframes showMenu {
    from {opacity: 0}
    to {opacity: 1}
  }
  .nuxt-link-active{
    text-decoration: none
  }
  .mobileMenu button, .mobileMenu i{
    cursor: pointer;
    color: #fcfcfc;
    &:hover{
      color: #f7d900;
    }
  }
  #section2{
    display: flex;
    justify-content: space-between;
    padding: 1.4rem 0;
    div#accountMenu{
      display: none;
      opacity: 0;
      position: absolute;
      animation-name: showMenu;
      z-index: 7;
      animation-duration: 0.2s;
      background-color: $textLightColor;
      padding: 0.8rem 1rem 0.8rem 1.8rem;
      direction: rtl;
      text-align: right;
      a{
        display: block;
        text-decoration: none;
        margin-bottom: 0.7rem;
        font-size: 1rem;
        &:hover{
          color: $themeColorFront;
          text-decoration: underline;
        }
      }
    }
    h2{
      font-size: 2.3rem;
      color: $textLightColor;
    }
    .first{
      display: flex;
      justify-content: right;
      img{
        width: 3.3rem;
        height: 3.3rem;
      }
      h2{
        display: inline-block;
        position: relative;
        bottom: 1.1rem;
      }
    }
    .second{
      position: relative;
      width: 40%;
    }
    .secondTitle{
      display: flex;
      img{
        width: 3.3rem;
        height: 3.3rem;
      }
    }
    .third{
      flex-direction: row-reverse;
    }
    .rightPanelIcon{
      color: #fcfcfc;
      margin-right: 0.5rem;
      cursor: pointer;
      &:hover{
        color: #f7d900;
      }
    }
  }
  .secondTitle a{
    display: flex;
  }
  #magnify{
    position: absolute;
    left: 0.2rem;
    top: 0.5rem;
    color: black;
    background-color: $themeColorFront;
    border-radius: 3rem;
    padding: 0.2rem;
    &:hover{
      cursor: pointer;
      background-color: $themeColorBack;
      color: $textLightColor;
      transition: all 0.3s;
    }
  }
  #menuListItems{
    display: flex;
    justify-content: left;
  }
  input{
    background-color: white;
    height: 2.3rem;
    padding: 1rem;
    font-size: 1rem;
    border-radius: 2rem;
    max-width: 180%;
    width: 100%;
    border: 0;
    margin-top: 0.3rem;
    direction: rtl;
    :focus{
      outline: none;
      box-shadow: none;
    }
  }
  @media screen and (max-width: 576px) {
    .second{
      display: none;
    }
    #section2{
      .first{
        img{
          display: none;
        }
        h2{
          display: none;
        }
      }
    }
    #section2{
      .secondTitle{
        h2{
          position: relative;
          top: 0.3rem;
          left: 0.3rem;
          font-size: 1.7rem;
        }
        img{
          width: 2.6rem;
          height: 2.6rem;
        }
      }
    }
  }
  @media screen and (min-width: 577px)  and (max-width: 768px){
    .second{
      display: none;
    }
    #section2{
      .first{
        img{
          display: none;
        }
        h2{
          display: none;
        }
      }
    }
    #section2{
      .secondTitle {
        h2{
          position: relative;
          top: 0.25rem;
          left: 0.25rem;
          font-size: 2rem;
        }
        img{
          width: 3rem;
          height: 3rem;
        }
      }
    }
  }
  @media screen and (min-width: 769px)  and (max-width: 992px){
    .second{
      display: none;
    }
    #section2{
      .first{
        display: none;
        img{
          display: none;
        }
        h2{
          display: none;
        }
      }
    }
    #section2{
      .secondTitle{
        h2{
          position: relative;
          top: 0.3rem;
          left: 0.3rem;
          font-size: 2.3rem;
        }
      }
    }
  }
  @media screen and (min-width: 993px)  and (max-width: 1200px){
    .secondTitle{
      h2, img{
        display: none;
      }
    }
    .mobileMenu{
      display: none;
    }
  }
  @media screen and (min-width: 1200px){

      .secondTitle{
        h2, img{
          display: none;
        }
      }
      .mobileMenu{
        display: none;
      }

  }
</style>

