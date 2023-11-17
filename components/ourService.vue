<template>
  <div class="sParts">
    <div class="partsHead">
        <h3>سرویس های ویژه ما</h3>
    </div>
    <div class="parts">
        <div class="itemOrder1">
            <div class="partsIcon">
                <v-icon>mdi-alpha-s-circle-outline</v-icon>
                <h4>برگشت پول</h4>
                <p>
                    یه چیزایی باید اینجا بنویسم که پر بشه قشنگ بشه به چشم بیاد
                </p>
            </div>
            <div class="partsIcon">
                <v-icon>mdi-truck</v-icon>
                <h4>ارسال سریع</h4>
                <p>ارسال سریع تر از آنچهکه فک کنی واست ارسال میکنم مثل بنز همچین بیاد که نفهمی کی اومد</p>
            </div>
        </div>
        <div class="itemOrder2">
            <img src="@/assets/ourService.png" alt="our ervices" />
        </div>
        <div class="itemOrder3">
            <div class="partsIcon">
                <v-icon>mdi-hours-24</v-icon>
                <h4>پشتیبانی آنلاین</h4>
                <p>
                    یه چیزایی باید اینجا بنویسم که پر بشه قشنگ بشه به چشم بیاد
                </p>
            </div>
            <div class="partsIcon">
                <v-icon>mdi-glass-wine</v-icon>
                <h4>هدیه مشتریان دائمی</h4>
                <p>ارسال سریع تر از آنچهکه فک کنی واست ارسال میکنم مثل بنز همچین بیاد که نفهمی کی اومد</p>
            </div>
        </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
    @import "@/assets/mainStyles.scss";
    .sParts{
        padding: 3rem 0;
    }
    .parts{
        display: flex;
    }
    .partsHead{
        text-align: center;
        h3{
            font-family: royal;
            font-size: 2rem;
            margin: 2rem 0;
            color: $textDarkColor;
            font-weight: bold;
        }
    }
    .partsIcon{
        text-align: center;
        padding: 3rem 4rem 1rem 4rem;
        i{
            color: $themeColorBack;
            font-size: 2.6rem;
        }
        h4{
            font-family: royal;
            color: $textDarkColor;
            font-size: 1.3rem;
            margin: 0.5rem 0 0.5rem 0;
        }
        p{
            color: gray;
            font-family: royal;
            font-size: 1.1rem;
            // width: 50%;
            margin: auto;
        }
    }
    @media screen and (max-width: 576px) {
        .parts{
            display: flex;
            flex-flow: column;
        }
        .itemOrder2{
            order: 1;
            justify-content: center;
            text-align: center;
            img{
                width: 60vw;
                margin: auto;
            }
        }
        .itemOrder1{
            order: 2;
        }
        .itemOrder3{
            order: 3;
        }
    }
    @media screen and (min-width: 577px)  and (max-width: 768px){
        .parts{
            display: grid;
            grid-template-columns: auto auto auto;
        }
        .itemOrder2{
            display: grid;
            grid-column: 1 / 5;
            grid-row: 1 / 2;
            justify-content: center;
            align-items: center;
            img{
                width: 70%;
                margin: auto;
            }
        }
        .itemOrder1{
            grid-column: 1 / 3;
            grid-row: 2 / 3;
        }
        .itemOrder3{
            grid-row: 2 / 3;
            grid-column: 3 / 5;
        }
    }
    @media screen and (min-width: 769px)  and (max-width: 992px){
        .parts{
            display: grid;
            grid-template-columns: auto auto auto;
        }
        .itemOrder2{
            display: grid;
            grid-column: 1 / 5;
            grid-row: 1 / 2;
            justify-content: center;
            align-items: center;
            img{
                width: 70%;
                margin: auto;
            }
        }
        .itemOrder1{
            grid-column: 1 / 3;
            grid-row: 2 / 3;
        }
        .itemOrder3{
            grid-row: 2 / 3;
            grid-column: 3 / 5;
        }
    }
    @media screen and (min-width: 993px)  and (max-width: 1200px){
        .itemOrder2{
            display: grid;
            grid-column: 1 / 5;
            grid-row: 1 / 2;
            justify-content: center;
            align-items: center;
            img{
                width: 100%;
                margin: auto;
            }
        }
    }
    @media screen and (min-width: 1200px){
        .partsIcon{
            padding: 0.5rem;
            margin-top: 3.3rem;
        }
    }
</style>
