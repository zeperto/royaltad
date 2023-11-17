<template>
  <div id="latestNews">
    <div id="innerLatest">
      <div>
        <h3>آخرین خبرها</h3>
      </div>
      <div class="latestCards">
        <div class="card card1">
          <div>
            <img src="@/assets/news/5.jpg" alt="jpg">
          </div>
          <div class="dateString">May 20, 2022</div>
          <h4>
            تیتر خبر اینجا میاد بیشتر باشه
          </h4>
          <p>
            یروی انسانی، سرمایه شرکت‌هاست. مسیر توسعه برای کسب‌و‌کارهایی که نیروی انسانی خبره دارند، هموارتر است. کمتر کارشناس و مدیر منابع انسانی پیدا می‌شود که دغدغه‌ی دسترسی به افراد با استعداد و مهارت بالا را تجربه نکرده باشد و گاهی این فرآیند ماه‌ها از منابع انسانی زمان و انرژی می‌گیرد چرا که در
          </p>
        </div>
        <div class="card card2">
          <div>
            <img src="@/assets/news/7.jpg" alt="jpg">
          </div>
          <div class="dateString">May 20, 2022</div>
          <h4>
            تیتر خبر اینجا میاد بیشتر باشه
          </h4>
          <p>
            یروی انسانی، سرمایه شرکت‌هاست. مسیر توسعه برای کسب‌و‌کارهایی که نیروی انسانی خبره دارند، هموارتر است. کمتر کارشناس و مدیر منابع انسانی پیدا می‌شود که دغدغه‌ی دسترسی به افراد با استعداد و مهارت بالا را تجربه نکرده باشد و گاهی این فرآیند ماه‌ها از منابع انسانی زمان و انرژی می‌گیرد چرا که در نهایت این نیروی متخصص است که محل کار خود را انتخاب می‌کند. در دومین گزارش ایرا
          </p>
        </div>
        <div class="card card3">
          <div>
            <img src="@/assets/news/6.jpg" alt="jpg">
          </div>
          <div class="dateString">May 20, 2022</div>
          <h4>
            تیتر خبر اینجا میاد بیشتر باشه
          </h4>
          <p>
            یروی انسانی، سرمایه شرکت‌هاست. مسیر توسعه برای کسب‌و‌کارهایی که نیروی انسانی خبره دارند، هموارتر است. کمتر کارشناس و مدیر منابع انسانی پیدا مده باشد و گاهی این فرآیند ماه‌ها از منابع انسانی زمان و انرژی می‌گیرد چرا که در نهایت این نیروی متخصص است که محل کار خود را انتخاب می‌کند. در دومین گزارش ایران تلنت، دیجی‌کالا محبوب‌ترین برند کارفرمایی شناخته شده است.
          </p>
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
  #innerLatest{
    margin: auto;
    max-width: 80%;
  }
  #latestNews{
    display: flex;
    flex-direction: column;
    padding: 3rem 0;
    width: 100%;

    h3{
      color: $textDarkColor;
      font-size: 2rem;
      font-family: royal;
      text-align: center;
      padding: 1rem 0;
    }
    .latestCards{
      display: flex;
      // flex-wrap: wrap;
      width: 100%;
    }
    .card{
      margin: 0 1rem;
      color: $textDarkColor;
      direction: rtl;
      img{
        width: 25rem;
      }
      div.dateString{
        font-size: 1.2rem;
        margin: 1rem 0;
        color: $themeColorBack;
      }
      h4{
        margin: 1rem 0;
        font-size: 1.2rem;
      }
      p{
        text-align: justify;
        line-height: 1.4rem;
      }
    }
  }
  @media screen and (max-width: 576px) {
    .cards{
      display: flex;
      flex-flow: column;
    }
  }
  @media screen and (min-width: 577px)  and (max-width: 768px){
    #latestNews{
      .card{
        img{
          width: 17rem;
        }
      }
    }
    .card3{
      display: none;
    }
  }
    @media screen and (min-width: 769px)  and (max-width: 992px){
      #latestNews{
        .card{
          img{
            width: 17rem;
          }
        }
      }
      .latestCards{
        display: grid;
        grid-template-rows: 1;
        grid-template-columns: 2;
      }
      .card1{
        grid-row: 1 / 2;
        grid-column: 1 / 2;
      }
      .card2{
        grid-row: 1 / 2;
        grid-column: 2 / 3;
      }
      .card3{
        display: none;
      }
    }
    @media screen and (min-width: 993px)  and (max-width: 1200px){
      #latestNews{
        .card{
          img{
            width: 18rem;
          }
        }
      }
      .latestCards{
        display: grid;
        grid-template-rows: 1;
        grid-template-columns: 3;
      }
      .card1{
        grid-row: 1 / 2;
        grid-column: 1 / 2;
      }
      .card2{
        grid-row: 1 / 2;
        grid-column: 2 / 3;
      }
      .card3{
        grid-row: 1 / 2;
        grid-column: 3 / 4;
      }
    }
    @media screen and (min-width: 1200px){

    }
</style>
