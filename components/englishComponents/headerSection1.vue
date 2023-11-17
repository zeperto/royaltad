<template>
  <div id="section1">
    <div class="shipMess">Shipped Today - Support:(012)800 456 789</div>
    <div class="langCurrency">
        <div @click="changeLanguage" class="lang">
            <span>Language</span>
            <v-icon medium>mdi-chevron-down</v-icon>
            <div id="langMenu">
                <ul>
                    <li @click="languageSelected('eng')">ENGLISH</li>
                    <li @click="languageSelected('per')">PERSIAN</li>
                </ul>
            </div>
        </div>
        <div @click="changeCurrency">
            <span>Currency</span>
            <v-icon medium>mdi-chevron-down</v-icon>
            <div id="currencyMenu">
                <ul>
                    <li @click="currencySelected('euro')"><v-icon small>mdi-currency-eur</v-icon>EURO</li>
                    <li @click="currencySelected('toman')"><v-icon small>mdi-currency-usd</v-icon>TOMAN</li>
                    <li @click="currencySelected('dollar')"><v-icon small>mdi-currency-usd</v-icon>US DOLLAR</li>
                </ul>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            currentLang: 'eng',
            langMenuFlag: false,
            currencyMenuFlag: false
        }
    },
    methods:{
        currencySelected(selectedCurrency){
            console.log(selectedCurrency);
        },
        languageSelected(selectedLanguage){
              this.$store.commit('setLanguage', selectedLanguage);
              console.log(this.$store.getters.getLanguage)
              if(selectedLanguage == 'eng')
                this.$vuetify.rtl = true;
              else
                this.$vuetify.rtl = false;
          },
        changeLanguage(){
            if(this.currencyMenuFlag){
                document.querySelector('#currencyMenu').style.display = 'none';
                this.currencyMenuFlag = false;
            }
            if(this.langMenuFlag){
                document.querySelector('#langMenu').style.display = 'none';
                this.langMenuFlag = false;
            }
            else{
                document.querySelector('#langMenu').style.display = 'block';
                this.langMenuFlag = true;
            }
        },
        changeCurrency(){
            if(this.langMenuFlag){
                document.querySelector('#langMenu').style.display = 'none';
                this.langMenuFlag = false;
            }
            if(this.currencyMenuFlag){
                document.querySelector('#currencyMenu').style.display = 'none';
                this.currencyMenuFlag = false;
            }
            else{
                document.querySelector('#currencyMenu').style.display = 'block';
                this.currencyMenuFlag = true;
            }
        }
    }
}
</script>

<style scoped lang="scss">
    @import '@/assets/mainStyles.scss';
    #currencyMenu{
        border: 1px solid white;
        background-color: $textLightColor;
        width: 7%;
        position: absolute;
        padding: 0.5rem;
        z-index: 3;
        display: none;
        ul{
            list-style: none;
            li{
                margin-bottom: 0.3rem;
                font-size: 0.8rem;
                color: $textDarkColor;
                &:hover{
                    color: $themeColorBack;
                }
            }
        }
    }
    #langMenu{
        border: 1px solid white;
        text-align: center;
        padding: 0.5rem;
        background-color: $textLightColor;
        position: absolute;
        width: 6%;
        display: none;
        color: $textDarkColor;
        transition:all 0.3s;
        ul{
            list-style: none;

        }
        li{
            margin-bottom: 0.3rem;
            font-size: 0.8rem;
            &:hover{
                color: $themeColorBack;
            }
        }
    }
    .shipMess{
        margin-top: 0.3rem;
    }
    .langCurrency{
        display: flex;
    }
    .lang{
        border-right: 1px solid $textLightColor;
        margin-right: 0.4rem;
        padding-right: 0.1rem;
    }
    #section1{
        padding: 0.4rem 0;
        display: flex;
        justify-content: space-between;
        color: $textLightColor;
        font-size: $fontTiny;
        border-bottom: 1px solid rgba(255, 255, 255, 0.12);
        div:last-child{
            cursor: pointer;
        }
        i{
            color: #fcfcfc;
        }
    }
    @media screen and (max-width: 576px) {
        #section1>div:first-child{
            display: none;
        }
        #section1>div:last-child{
            margin: auto;
        }
    }
    @media screen and (min-width: 577px)  and (max-width: 768px){
        #section1>div:first-child{
            display: none;
        }
        #section1>div:last-child{
            margin: auto
        }
    }
    @media screen and (min-width: 769px)  and (max-width: 992px){

    }
    @media screen and (min-width: 993px)  and (max-width: 1200px){

    }
    @media screen and (min-width: 1200){

    }
</style>
