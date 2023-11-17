<template>
  <div>
    <div id="bestSeller">
      <h3>پرفروش ترین ها</h3>
      <ul>
        <li>
          <div class="atom">
            <div>
              <img src="@/assets/products/11.jpg" alt="SALE">
            </div>
            <div class="rightOf">
              <h4>
                نام محصول شماره یک
              </h4>
              <div class="price">
                <span>
                  <v-icon>mdi-currency-usd</v-icon>
                </span>
                <span>129.9</span>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="atom">
            <div>
              <img src="@/assets/products/10.jpg" alt="SALE">
            </div>
            <div class="rightOf">
              <h4>
                product name comes here
              </h4>
              <div class="price">
                <span>
                  <v-icon>mdi-currency-usd</v-icon>
                </span>
                <span>129.9</span>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="atom">
            <div>
              <img src="@/assets/products/4.jpg" alt="SALE">
            </div>
            <div class="rightOf">
              <h4>
                product name comes here
              </h4>
              <div class="price">
                <span>
                  <v-icon>mdi-currency-usd</v-icon>
                </span>
                <span>129.9</span>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="atom">
            <div>
              <img src="@/assets/products/15.jpg" alt="SALE">
            </div>
            <div class="rightOf">
              <h4>
                product name comes here
              </h4>
              <div class="price">
                <span>
                  <v-icon>mdi-currency-usd</v-icon>
                </span>
                <span>129.9</span>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div id="leftBannerAd">
      <img src="@/assets/left-banner.jpg" alt="left banner ad">
    </div>
    <div id="latestProducts">
      <h3>جدیدترین محصولات</h3>
      <ul>
        <li>
          <div class="atom">
            <div>
              <img src="@/assets/products/15.jpg" alt="SALE">
            </div>
            <div class="rightOf">
              <h4>
                product name comes here
              </h4>
              <div class="price">
                <span>
                  <v-icon>mdi-currency-usd</v-icon>
                </span>
                <span>129.9</span>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="atom">
            <div>
              <img src="@/assets/products/11.jpg" alt="SALE">
            </div>
            <div class="rightOf">
              <h4>
                product name comes here
              </h4>
              <div class="price">
                <span>
                  <v-icon>mdi-currency-usd</v-icon>
                </span>
                <span>129.9</span>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="atom">
            <div>
              <img src="@/assets/products/10.jpg" alt="SALE">
            </div>
            <div class="rightOf">
              <h4>
                product name comes here
              </h4>
              <div class="price">
                <span>
                  <v-icon>mdi-currency-usd</v-icon>
                </span>
                <span>129.9</span>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="atom">
            <div>
              <img src="@/assets/products/4.jpg" alt="SALE">
            </div>
            <div class="rightOf">
              <h4>
                product name comes here
              </h4>
              <div class="price">
                <span>
                  <v-icon>mdi-currency-usd</v-icon>
                </span>
                <span>129.9</span>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  @import '@/assets/mainStyles.scss';
  #leftBannerAd{
    padding: 2rem 0 0 0;
    img{
      width: 100%;
    }
  }
  #bestSeller, #latestProducts{
    margin-top: 2rem;
    border: 1px solid $grayColor;
    font-family: royal;
    font-size: $fontTiny;
    direction: rtl;
    h3{
      background-color: $grayColor;
      text-align: center;
      padding: 1rem 0;
    }
    ul{
      list-style: none;
      padding: 0 0.9rem;
      li{
        display: flex;
        font-family: royal;
        margin: 0.7rem 0;
        img{
          width: 6rem;
        }
        h4{
          font-size: $fontSmall / 1.1;
          font-family: royal;
        }
        div.atom{
          display: flex;
        }
      }
      div.rightOf{
        padding: 0.3rem 0.5rem;
      }
    }
  }
  @media screen and (max-width: 576px) {
    #leftBannerAd{
      display: none;
    }
  }
  @media screen and (min-width: 577px)  and (max-width: 768px){
    #leftBannerAd{
      display: none;
    }
  }
  @media screen and (min-width: 769px)  and (max-width: 992px){
    #leftBannerAd{
      display: none;
    }
  }
  @media screen and (min-width: 993px)  and (max-width: 1200px){
    #leftBannerAd{
      display: none;
    }
  }
  @media screen and (min-width: 1200px){

  }
</style>
