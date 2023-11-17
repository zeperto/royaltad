<template>
  <div id="section2">
    <div class="mobileMenu">
      <v-icon large id="burger">mdi-menu</v-icon>
      <v-icon large id="magnify2">mdi-magnify</v-icon>
    </div>
    <div class="first">
      <nuxt-link to="/">
        <img src="@/assets/barg.png" alt="">
        <h2>ROYALTAD</h2>
      </nuxt-link>
    </div>
    <div class="secondTitle">
      <nuxt-link to="/">
        <img src="@/assets/barg.png" alt=""></img>
        <h2>ROYALTAD</h2>
    </nuxt-link>
    </div>
    <div class="second">
      <input type="text" name="mainSearch" placeholder="Search Our Catalog">
      <v-icon madium id="magnify">mdi-magnify</v-icon>
    </div>
    <div id="menuListItems" class="third">
      <div>
        <v-icon class="rightPanelIcon" large color="white">mdi-cart-outline</v-icon>
      </div>
      <div>
        <v-icon class="rightPanelIcon" large color="white">mdi-account</v-icon>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  
}
</script>

<style lang="scss" scoped>
  @import "@/assets/mainStyles.scss";
  .nuxt-link-active{
    text-decoration: none
  }
  .mobileMenu i{
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
    h2{
      font-size: 2.3rem;
      color: $textLightColor;
    }
    .first{
      flex-grow: 1;
      display: flex;
      img{
        width: 3.3rem;
        height: 3.3rem;
      }
      h2{
        display: inline-block;
        position: relative;
        bottom: 0.8rem;
      }
    }
    .second{
      flex-grow: 3;
    }
    .secondTitle{
      display: flex;
      img{
        width: 3.3rem;
        height: 3.3rem;
      }
    }
    .third{
      flex-grow: 1;
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
    padding: relative;
    left: -2.4rem;
    bottom: 0.1rem;
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
  }
  input{
    background-color: white;
    height: 2.3rem;
    padding: 1rem;
    font-size: 1rem;
    border-radius: 2rem;
    max-width: 180%;
    width: 60%;
    border: 0;
    margin-left: 7%;
    margin-top: 0.3rem;
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

