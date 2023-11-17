<template>
  <div id="productSection">
    <div class="topTitle">
      <nuxt-link to="/">
        <v-icon>mdi-home</v-icon>
      </nuxt-link>
      <span>|</span>
      <nuxt-link to="/products">PRODUCTS</nuxt-link>
      <span>|</span>
      <nuxt-link to="/products/13">{{this.$route.params.id}}</nuxt-link>
    </div>
    <div id="part1">
      <h3>نام محصول اینجا میاد</h3>
      <div>
        <div class="stars">
          <v-icon small>mdi-star</v-icon>
          <v-icon small>mdi-star</v-icon>
          <v-icon small>mdi-star</v-icon>
          <v-icon small>mdi-star</v-icon>
          <v-icon small>mdi-star</v-icon>
        </div>
        <div id="review">
          <div>
            <span>1</span>
            <span>دیدگاه</span>
          </div>
          <div>
            <span>\</span>
            <span>ثبت دیدگاه</span>
          </div>
        </div>
        <div class="satisfaction">
          <span>80%</span>
          <span>رضایت از کالا</span>
        </div>
        <div>
          <span>قیمت</span>
          <span>$</span>
          <span>129.9</span>
        </div>
        <div class="status">
          <span>موجود در انبار</span>
        </div>
        <div id="btns">
          <div>
            <v-icon class="btnH">mdi-share-variant</v-icon>
          </div>
          <div>
            <v-icon class="btnH">mdi-compare</v-icon>
          </div>
          <div>
            <v-icon class="btnH">mdi-cards-heart</v-icon>
          </div>
          <div>
            <v-icon class="btnH">mdi-chart-line</v-icon>
          </div>
        </div>
        <div class="btns">
          <div id="addToCart" @click="addToCart">اضافه به سبد خرید</div>
        </div>
      </div>
      <div id="images">
        <img class="smallP" src="@/assets/products/4.jpg" alt="product images">
        <img class="smallP" src="@/assets/products/4.jpg" alt="product images">
        <img class="smallP" src="@/assets/products/4.jpg" alt="product images">
        <img class="smallP" src="@/assets/products/4.jpg" alt="product images">
      </div>
    </div>
    <div id="part2">
      <img src="@/assets/products/4.jpg" alt="SOMETHING">
    </div>
    <div id="part3">
      <div class="partEl">
        <div class="partDesc">
          <div class="partDescHeader">
            توضیحات
          </div>
          <div class="partContent">
            <div class="acoText">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </div>
          </div>
        </div>
        <div class="partDesc">
          <div class="partDescHeader">
            ویژگی ها
          </div>
          <div class="partContent">
            <div class="acoText">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. At reiciendis nihil repellat animi mollitia fuga quia optio expedita sit illum error ex necessitatibus minus voluptate consequatur, qui officiis vero ipsa.
            </div>
          </div>
        </div>
        <div class="partDesc">
          <div class="partDescHeader">
            دیدگاه ها
          </div>
          <div class="partContent">
            <div class="acoText">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head:{
    title: 'این صفحه خراب است!'
  },
  methods:{
    addToCart(){
      return true;
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '@/assets/mainStyles.scss';
  #productSection{
    display: grid;
    grid-gap: 1rem;
    grid-template-rows: auto auto auto;
    grid-template-columns: auto auto;
    margin: 2rem 1rem 0 0;
    direction: rtl;
    font-family: royal;
    .topTitle{
      grid-row: 1 / 2;
      grid-column: 1 / 3;
      background-color: #f1efef;
      text-align: center;
      padding: 0.8rem 0;
      direction: ltr;
      font-size: 1rem;
      span{
        display: inline-block;
        font-size: 1.3rem;
        position: relative;
        top: 0.2rem;
        margin: 0.2rem;
      }
    }
    #part1{
      grid-row: 2 / 3;
      grid-column: 2 / 3;
      // padding: 2rem;
      img{
        width: 100%;
      }
      h3{
        margin: 0.5rem 0;
      }
      div#review{
        display: flex;
        margin: 1rem 0;
      }
      div.stars{
        margin: 1rem 0;
      }
      div.status{
        margin: 1rem 0;
      }
      div.satisfaction{
        margin: 1rem 0;
      }
      div#addToCart{
        background-color: red;
        border-radius: 0.3rem;
        padding: 1rem 0;
        text-align: center;
        color: $textLightColor;
        margin-top: 1rem;
        width:66%;
        &:hover{
          cursor: pointer;
        }
      }
      div#btns{
        display: flex;
        margin: 1rem 0 0 0;
      }
      div#images{
        display: flex;
        margin-top: 1rem;
        img{
          width: 7rem;
          height: 7rem;
          padding: 0.3rem;
          &:hover{
            cursor: pointer;
            border: 1px solid rgb(238, 236, 236);
          }
        }
      }
      .btnH{
        margin: 0 0.3rem;
        &:hover{
          color: orangered;
          cursor: pointer;
        }
      }
    }
    #part2{
      grid-row: 2 / 3;
      grid-column: 1 / 2;
      img{
        // width: 23rem;
        // height: 23rem;
        min-width: 100%;
      }
    }
    #part3{
      grid-row: 3 / 4;
      grid-column: 1 / 3;
      img{
        width: 100%;
      }
      div.acoText{
        padding: 1rem 0.5rem;
      }
      div.partDescHeader{
        font-size: 1.2rem;
        font-weight: bold;
      }
    }
  }
  @media screen and (max-width: 576px) {
      #productSection{
        display: flex;
        flex-flow: column;
      }
      #part2{
        order: 1;
      }
      #part1{
        order: 2;
      }
      #part3{
        order: 3;
      }
      #productSection{
        display: flex;
        flex-flow: column;
        #part1{
          div#addToCart{
            margin: 1rem auto;
          }
        }
      }
    }
    @media screen and (min-width: 577px)  and (max-width: 768px){
      #productSection{
        display: flex;
        flex-flow: column;
      }
      #part2{
        order: 1;
      }
      #part1{
        order: 2;
      }
      #part3{
        order: 3;
      }
      #productSection{
        #part1{
          div#addToCart{
            margin: 1rem auto;
          }
        }
      }
      #productSection{
        #part1{
          div#images{
            justify-content: center;
          }
        }
      }
    }
    @media screen and (min-width: 769px)  and (max-width: 992px){
      #productSection{
        display: flex;
        flex-flow: column;
      }
      #part2{
        order: 1;
      }
      #part1{
        order: 2;
      }
      #part3{
        order: 3;
      }
      #productSection{
        #part1{
          div#addToCart{
            margin: 1rem auto;
          }
        }
      }
    }
    @media screen and (min-width: 993px)  and (max-width: 1200px){

    }
    @media screen and (min-width: 1200px){

    }

</style>
