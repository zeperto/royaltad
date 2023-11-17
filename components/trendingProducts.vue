<template>
  <div id="trendingProducts">
    <div>
      <h3>محصولات ویژه</h3>
    </div>
    <div id="featuredPanel">
      <div id="newProductsBtn" @click="newProductsButton">جدیدترین ها</div>
      <div id="bestSellerProductsBtn" @click="bestSellerProducts">پرفروش ترین ها</div>
    </div>
    <div id="items">
      <div id="besetSellerSectionParent">
          <div id="bestSellerSection">
              <nuxt-link to="/products/13">
                <div class="item1 trendItem">
                    <h4>Sample Code Title</h4>
                    <img src="@/assets/products/4.jpg" alt="">
                    <div class="stars">
                        <v-icon small>mdi-star</v-icon>
                        <v-icon small>mdi-star</v-icon>
                        <v-icon small>mdi-star</v-icon>
                        <v-icon small>mdi-star</v-icon>
                        <v-icon small>mdi-star</v-icon>
                    </div>
                    <div class="currencyPrice">
                        <v-icon class="currencySign">mdi-currency-eur</v-icon>
                        <div class="price">122.0</div>
                    </div>
                    <div class="trendToolbar">
                        <v-icon>mdi-eye-outline</v-icon>
                        <v-icon>mdi-cards-heart-outline</v-icon>
                        <v-icon>mdi-chart-bar</v-icon>
                        <v-icon>mdi-cart-minus</v-icon>
                    </div>
                </div>
              </nuxt-link>
              <div class="item2 trendItem">
                  <h4>Sample Code Title</h4>
                  <img src="@/assets/products/4.jpg" alt="">
                  <div class="stars">
                      <v-icon small>mdi-star</v-icon>
                      <v-icon small>mdi-star</v-icon>
                      <v-icon small>mdi-star</v-icon>
                      <v-icon small>mdi-star</v-icon>
                      <v-icon small>mdi-star</v-icon>
                  </div>
                  <div class="currencyPrice">
                      <v-icon class="currencySign">mdi-currency-eur</v-icon>
                      <div class="price">122.0</div>
                  </div>
                  <div class="trendToolbar">
                      <v-icon>mdi-eye-outline</v-icon>
                      <v-icon>mdi-cards-heart-outline</v-icon>
                      <v-icon>mdi-chart-bar</v-icon>
                      <v-icon>mdi-cart-minus</v-icon>
                  </div>
              </div>
              <div class="item3 trendItem hideBy4">
                  <h4>Sample Code Title</h4>
                  <img src="@/assets/products/4.jpg" alt="">
                  <div class="stars">
                      <v-icon small>mdi-star</v-icon>
                      <v-icon small>mdi-star</v-icon>
                      <v-icon small>mdi-star</v-icon>
                      <v-icon small>mdi-star</v-icon>
                      <v-icon small>mdi-star</v-icon>
                  </div>
                  <div class="currencyPrice">
                      <v-icon class="currencySign">mdi-currency-eur</v-icon>
                      <div class="price">122.0</div>
                  </div>
                  <div class="trendToolbar">
                      <v-icon>mdi-eye-outline</v-icon>
                      <v-icon>mdi-cards-heart-outline</v-icon>
                      <v-icon>mdi-chart-bar</v-icon>
                      <v-icon>mdi-cart-minus</v-icon>
                  </div>
              </div>
              <div class="item4 trendItem hideBy5">
                  <h4>Sample Code Title</h4>
                  <img src="@/assets/products/4.jpg" alt="">
                  <div class="stars">
                      <v-icon small>mdi-star</v-icon>
                      <v-icon small>mdi-star</v-icon>
                      <v-icon small>mdi-star</v-icon>
                      <v-icon small>mdi-star</v-icon>
                      <v-icon small>mdi-star</v-icon>
                  </div>
                  <div class="currencyPrice">
                      <v-icon class="currencySign">mdi-currency-eur</v-icon>
                      <div class="price">122.0</div>
                  </div>
                  <div class="trendToolbar">
                      <v-icon>mdi-eye-outline</v-icon>
                      <v-icon>mdi-cards-heart-outline</v-icon>
                      <v-icon>mdi-chart-bar</v-icon>
                      <v-icon>mdi-cart-minus</v-icon>
                  </div>
              </div>
              <div class="item5 trendItem">
                  <h4>Sample Code Title</h4>
                  <img src="@/assets/products/4.jpg" alt="">
                  <div class="stars">
                      <v-icon small>mdi-star</v-icon>
                      <v-icon small>mdi-star</v-icon>
                      <v-icon small>mdi-star</v-icon>
                      <v-icon small>mdi-star</v-icon>
                      <v-icon small>mdi-star</v-icon>
                  </div>
                  <div class="currencyPrice">
                      <v-icon class="currencySign">mdi-currency-eur</v-icon>
                      <div class="price">122.0</div>
                  </div>
                  <div class="trendToolbar">
                      <v-icon>mdi-eye-outline</v-icon>
                      <v-icon>mdi-cards-heart-outline</v-icon>
                      <v-icon>mdi-chart-bar</v-icon>
                      <v-icon>mdi-cart-minus</v-icon>
                  </div>
              </div>
              <div class="item6 trendItem">
                  <h4>Sample Code Title</h4>
                  <img src="@/assets/products/4.jpg" alt="">
                  <div class="stars">
                      <v-icon small>mdi-star</v-icon>
                      <v-icon small>mdi-star</v-icon>
                      <v-icon small>mdi-star</v-icon>
                      <v-icon small>mdi-star</v-icon>
                      <v-icon small>mdi-star</v-icon>
                  </div>
                  <div class="currencyPrice">
                      <v-icon class="currencySign">mdi-currency-eur</v-icon>
                      <div class="price">122.0</div>
                  </div>
                  <div class="trendToolbar">
                      <v-icon>mdi-eye-outline</v-icon>
                      <v-icon>mdi-cards-heart-outline</v-icon>
                      <v-icon>mdi-chart-bar</v-icon>
                      <v-icon>mdi-cart-minus</v-icon>
                  </div>
              </div>
              <div class="item7 trendItem hideBy4">
                  <h4>Sample Code Title</h4>
                  <img src="@/assets/products/4.jpg" alt="">
                  <div class="stars">
                      <v-icon small>mdi-star</v-icon>
                      <v-icon small>mdi-star</v-icon>
                      <v-icon small>mdi-star</v-icon>
                      <v-icon small>mdi-star</v-icon>
                      <v-icon small>mdi-star</v-icon>
                  </div>
                  <div class="currencyPrice">
                      <v-icon class="currencySign">mdi-currency-eur</v-icon>
                      <div class="price">122.0</div>
                  </div>
                  <div class="trendToolbar">
                      <v-icon>mdi-eye-outline</v-icon>
                      <v-icon>mdi-cards-heart-outline</v-icon>
                      <v-icon>mdi-chart-bar</v-icon>
                      <v-icon>mdi-cart-minus</v-icon>
                  </div>
              </div>
              <div class="item8 trendItem hideBy5">
                  <h4>Sample Code Title</h4>
                  <img src="@/assets/products/4.jpg" alt="">
                  <div class="stars">
                      <v-icon small>mdi-star</v-icon>
                      <v-icon small>mdi-star</v-icon>
                      <v-icon small>mdi-star</v-icon>
                      <v-icon small>mdi-star</v-icon>
                      <v-icon small>mdi-star</v-icon>
                  </div>
                  <div class="currencyPrice">
                      <v-icon class="currencySign">mdi-currency-eur</v-icon>
                      <div class="price">122.0</div>
                  </div>
                  <div class="trendToolbar">
                      <v-icon>mdi-eye-outline</v-icon>
                      <v-icon>mdi-cards-heart-outline</v-icon>
                      <v-icon>mdi-chart-bar</v-icon>
                      <v-icon>mdi-cart-minus</v-icon>
                  </div>
              </div>
          </div>
      </div>
      <div id="newProductsSectionParent">
          <div id="newProductsSection">
              <div class="item1 trendItem">
                  <h4>Sample Code Title</h4>
                  <img src="@/assets/products/10.jpg" alt="">
                  <div class="stars">
                      <v-icon small>mdi-star</v-icon>
                      <v-icon small>mdi-star</v-icon>
                      <v-icon small>mdi-star</v-icon>
                      <v-icon small>mdi-star</v-icon>
                      <v-icon small>mdi-star</v-icon>
                  </div>
                  <div class="currencyPrice">
                      <v-icon class="currencySign">mdi-currency-eur</v-icon>
                      <div class="price">122.0</div>
                  </div>
                  <div class="trendToolbar">
                      <v-icon>mdi-eye-outline</v-icon>
                      <v-icon>mdi-cards-heart-outline</v-icon>
                      <v-icon>mdi-chart-bar</v-icon>
                      <v-icon>mdi-cart-minus</v-icon>
                  </div>
              </div>
              <div class="item2 trendItem">
                  <h4>Sample Code Title</h4>
                  <img src="@/assets/products/10.jpg" alt="">
                  <div class="stars">
                      <v-icon small>mdi-star</v-icon>
                      <v-icon small>mdi-star</v-icon>
                      <v-icon small>mdi-star</v-icon>
                      <v-icon small>mdi-star</v-icon>
                      <v-icon small>mdi-star</v-icon>
                  </div>
                  <div class="currencyPrice">
                      <v-icon class="currencySign">mdi-currency-eur</v-icon>
                      <div class="price">122.0</div>
                  </div>
                  <div class="trendToolbar">
                      <v-icon>mdi-eye-outline</v-icon>
                      <v-icon>mdi-cards-heart-outline</v-icon>
                      <v-icon>mdi-chart-bar</v-icon>
                      <v-icon>mdi-cart-minus</v-icon>
                  </div>
              </div>
              <div class="item3 trendItem hideBy4">
                  <h4>Sample Code Title</h4>
                  <img src="@/assets/products/10.jpg" alt="">
                  <div class="stars">
                      <v-icon small>mdi-star</v-icon>
                      <v-icon small>mdi-star</v-icon>
                      <v-icon small>mdi-star</v-icon>
                      <v-icon small>mdi-star</v-icon>
                      <v-icon small>mdi-star</v-icon>
                  </div>
                  <div class="currencyPrice">
                      <v-icon class="currencySign">mdi-currency-eur</v-icon>
                      <div class="price">122.0</div>
                  </div>
                  <div class="trendToolbar">
                      <v-icon>mdi-eye-outline</v-icon>
                      <v-icon>mdi-cards-heart-outline</v-icon>
                      <v-icon>mdi-chart-bar</v-icon>
                      <v-icon>mdi-cart-minus</v-icon>
                  </div>
              </div>
              <div class="item4 trendItem hideBy5">
                  <h4>Sample Code Title</h4>
                  <img src="@/assets/products/10.jpg" alt="">
                  <div class="stars">
                      <v-icon small>mdi-star</v-icon>
                      <v-icon small>mdi-star</v-icon>
                      <v-icon small>mdi-star</v-icon>
                      <v-icon small>mdi-star</v-icon>
                      <v-icon small>mdi-star</v-icon>
                  </div>
                  <div class="currencyPrice">
                      <v-icon class="currencySign">mdi-currency-eur</v-icon>
                      <div class="price">122.0</div>
                  </div>
                  <div class="trendToolbar">
                      <v-icon>mdi-eye-outline</v-icon>
                      <v-icon>mdi-cards-heart-outline</v-icon>
                      <v-icon>mdi-chart-bar</v-icon>
                      <v-icon>mdi-cart-minus</v-icon>
                  </div>
              </div>
              <div class="item5 trendItem">
                  <h4>Sample Code Title</h4>
                  <img src="@/assets/products/10.jpg" alt="">
                  <div class="stars">
                      <v-icon small>mdi-star</v-icon>
                      <v-icon small>mdi-star</v-icon>
                      <v-icon small>mdi-star</v-icon>
                      <v-icon small>mdi-star</v-icon>
                      <v-icon small>mdi-star</v-icon>
                  </div>
                  <div class="currencyPrice">
                      <v-icon class="currencySign">mdi-currency-eur</v-icon>
                      <div class="price">122.0</div>
                  </div>
                  <div class="trendToolbar">
                      <v-icon>mdi-eye-outline</v-icon>
                      <v-icon>mdi-cards-heart-outline</v-icon>
                      <v-icon>mdi-chart-bar</v-icon>
                      <v-icon>mdi-cart-minus</v-icon>
                  </div>
              </div>
              <div class="item6 trendItem">
                  <h4>Sample Code Title</h4>
                  <img src="@/assets/products/10.jpg" alt="">
                  <div class="stars">
                      <v-icon small>mdi-star</v-icon>
                      <v-icon small>mdi-star</v-icon>
                      <v-icon small>mdi-star</v-icon>
                      <v-icon small>mdi-star</v-icon>
                      <v-icon small>mdi-star</v-icon>
                  </div>
                  <div class="currencyPrice">
                      <v-icon class="currencySign">mdi-currency-eur</v-icon>
                      <div class="price">122.0</div>
                  </div>
                  <div class="trendToolbar">
                      <v-icon>mdi-eye-outline</v-icon>
                      <v-icon>mdi-cards-heart-outline</v-icon>
                      <v-icon>mdi-chart-bar</v-icon>
                      <v-icon>mdi-cart-minus</v-icon>
                  </div>
              </div>
              <div class="item7 trendItem hideBy4">
                  <h4>Sample Code Title</h4>
                  <img src="@/assets/products/10.jpg" alt="">
                  <div class="stars">
                      <v-icon small>mdi-star</v-icon>
                      <v-icon small>mdi-star</v-icon>
                      <v-icon small>mdi-star</v-icon>
                      <v-icon small>mdi-star</v-icon>
                      <v-icon small>mdi-star</v-icon>
                  </div>
                  <div class="currencyPrice">
                      <v-icon class="currencySign">mdi-currency-eur</v-icon>
                      <div class="price">122.0</div>
                  </div>
                  <div class="trendToolbar">
                      <v-icon>mdi-eye-outline</v-icon>
                      <v-icon>mdi-cards-heart-outline</v-icon>
                      <v-icon>mdi-chart-bar</v-icon>
                      <v-icon>mdi-cart-minus</v-icon>
                  </div>
              </div>
              <div class="item8 trendItem hideBy5">
                  <h4>Sample Code Title</h4>
                  <img src="@/assets/products/10.jpg" alt="">
                  <div class="stars">
                      <v-icon small>mdi-star</v-icon>
                      <v-icon small>mdi-star</v-icon>
                      <v-icon small>mdi-star</v-icon>
                      <v-icon small>mdi-star</v-icon>
                      <v-icon small>mdi-star</v-icon>
                  </div>
                  <div class="currencyPrice">
                      <v-icon class="currencySign">mdi-currency-eur</v-icon>
                      <div class="price">122.0</div>
                  </div>
                  <div class="trendToolbar">
                      <v-icon>mdi-eye-outline</v-icon>
                      <v-icon>mdi-cards-heart-outline</v-icon>
                      <v-icon>mdi-chart-bar</v-icon>
                      <v-icon>mdi-cart-minus</v-icon>
                  </div>
              </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
      newProductsButton(){
          document.querySelector('#besetSellerSectionParent').style.display = 'none';
          document.querySelector('#newProductsBtn').style.backgroundColor = "#f1efef";
          document.querySelector('#bestSellerProductsBtn').style.backgroundColor = "white";
          document.querySelector('#newProductsSectionParent').style.display = 'block';
      },
      bestSellerProducts(){
          document.querySelector('#besetSellerSectionParent').style.display = 'block';
          document.querySelector('#newProductsSectionParent').style.display = 'none';
          document.querySelector('#newProductsBtn').style.backgroundColor = "white";
          document.querySelector('#bestSellerProductsBtn').style.backgroundColor = "#f1efef";
      }
  }
}
</script>

<style lang="scss" scoped>
  @import '@/assets/mainStyles.scss';
  #newProductsBtn,#bestSellerProductsBtn{
      cursor: pointer;
  }
  #trendingProducts{
      padding: 2rem 0;
      color: $textDarkColor;
      #bestSellerProductsBtn{
          background-color: #f1efef;
      }
      h3{
          text-align: center;
          font-family: royal;
          font-size: 2rem;
          color: $textDarkColor;
      }
      #featuredPanel{
          display: flex;
          justify-content: center;
          div{
              padding: 0.7rem 1.3rem;
              margin: 2rem 0.5rem;
              border: 1px solid rgb(221, 220, 220);
          }
      }
      #bestSellerSection,#newProductsSection{
          display: grid;
          grid-template-rows: auto auto;
          grid-template-columns: auto auto auto auto;
          grid-gap: 1rem;
          max-width: $mainContainer;
          margin: auto;
          div.trendItem{
              border: 1px solid  rgb(241, 239, 239);
              padding: 1rem;
          }
          div.trendToolbar{
              text-align: center;
              i{
                  font-size: 1.3rem;
                  padding: 0.3rem;
                  background-color: rgb(241, 239, 239);
                  border-radius: 5rem;
              }
          }
          .currencyPrice{
              text-align: center;
              padding: 0.3rem 0;
          }
          .currencySign{
              font-size: 1.4rem;
              position: relative;
              bottom: 0.3rem;
          }
          div.price{
              font-weight: bold;
              display: inline;
              font-family: royal;
              font-size: 1.4rem;
          }
          div.stars{
              text-align: center;
              margin: 0.3rem 0;
          }
          h4{
              text-align: center;
              margin-bottom: 1rem;
          }
          img{
              width: 17rem;
          }
          .item1{
              grid-row: 1 / 2;
              grid-column: 1 / 2;
          }
          .item2{
              grid-row: 1 / 2;
              grid-column: 2 / 3;
          }
          .item3{
              grid-row: 1 / 2;
              grid-column: 3 / 4;
          }
          .item4{
              grid-row: 1 / 2;
              grid-column: 4 / 5;
          }
          .item5{
              grid-row: 2 / 3;
              grid-column: 1 / 2;
          }
          .item6{
              grid-row: 2 / 3;
              grid-columns: 2 / 3;
          }
          .item7{
              grid-row: 2 / 3;
              grid-column: 3 / 4;
          }
          .item8{
              grid-row: 2 / 3;
              grid-column: 4 / 5;
          }
      }
      #newProductsSectionParent{
          display: none;
      }
  }
  @media screen and (max-width: 576px) {
      .hideBy5,.hideBy4{
          display: none;
      }
      #trendingProducts{
          #bestSellerSection, #newProductsSection{
              img{
                  width: 15rem;
              }
          }
      }
  }
  @media screen and (min-width: 577px)  and (max-width: 768px){
      .hideBy5,.hideBy4{
          display: none;
      }
      #trendingProducts{
          #bestSellerSection, #newProductsSection{
              img{
                  width: 15rem;
              }
          }
      }
  }
  @media screen and (min-width: 769px)  and (max-width: 992px){
      .hideBy5,.hideBy4{
          display: none;
      }
      #trendingProducts{
          #bestSellerSection, #newProductsSection{
              img{
                  width: 20rem;
              }
          }
      }
  }
  @media screen and (min-width: 993px)  and (max-width: 1200px){
      .hideBy5{
          display: none;
      }
      #trendingProducts{
          #bestSellerSection, #newProductsSection{
              img{
                  width: 16rem;
              }
          }
      }
  }
  @media screen and (min-width: 1200px){

  }
</style>
