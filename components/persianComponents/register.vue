<template>
  <div id="registerContent">
    <div class="registerHeadText">
      <span>اگر پیش از این ثبت نام کرده اید از این قسمت وارد شوید</span>
      <nuxt-link to="/login">ورود</nuxt-link>
    </div>
    <div>
      <h3 class="sect">
        اطلاعات شخصی
      </h3>
      <div class="spaect">
        <span class="starBef">*</span>
        <v-text-field
          v-model="username"
          label="نام کاربری"
          clearable
        ></v-text-field>
      </div>
      <!-- <div class="spaect">
        <span class="starBef">*</span>
        <v-text-field
          v-model="phoneNumber"
          label="شماره موبایل"
          clearable
        ></v-text-field>
      </div> -->
      <div class="spaect">
        <span class="starBef">*</span>
        <v-text-field
          v-model="email"
          label="ایمیل"
          clearable
        ></v-text-field>
      </div>
    </div>
    <div>
      <h3 class="sect">
        رمز عبور
      </h3>
      <div class="spaect">
        <span class="starBef">*</span>
        <v-text-field
          v-model="password"
          :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
          :rules="[rules.required, rules.min]"
          :type="show1 ? 'text' : 'password'"
          name="password"
          label="رمز عبور"
          hint="حداقل 8 کاراکتر"
          @click:append="show1 = !show1"
        ></v-text-field>
      </div>
      <div class="spaect">
        <span class="starBef">*</span>
        <v-text-field
          v-model="repassword"
          :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
          :rules="[rules.required, rules.min]"
          :type="show2 ? 'text' : 'password'"
          name="re-password"
          label="تکرار رمز عبور"
          dir="rtl"
          hint="حداقل 8 کاراکتر"
          @click:append="show2 = !show2"
        ></v-text-field>
      </div>
    </div>
    <div class="spaect spaect2">
      <div class="dad">
        <v-checkbox
          v-model="checkbox"
          name="acceptRules"
        ></v-checkbox>
        <nuxt-link to="/privacy"  target="_blank">قوانین</nuxt-link>
        <span> سایت را خوانده و می پذیرم</span>
      </div>
    </div>
    <div class="spaect spaect3">
      <v-btn id="registerBtn" depressed color="#f7d900" @click="register">ثبت نام</v-btn>
    </div>
  </div>
</template>

<script>
export default {
  head:{
    title: 'ثبت نام',
    htmlAttrs: {
      lang: 'fa',
      // dir: 'rtl'
    },
  },
  data(){
    return{
      username: '',
      phoneNumber: '',
      checkbox: true,
      email: '',
      show1: false,
      show2: false,
      password: 'Password',
      repassword: 'repassword',
      rules: {
        required: value => !!value || 'Required.',
        min: v => v.length >= 8 || 'Min 8 characters',
        emailMatch: () => (`The email and password you entered don't match`),
      },
    }
  },
  methods: {
    async register(){
      const config = {
        headers:{
          accept: 'application/json',
        }
      };
      await this.$axios.post(
        "http://localhost:8000/api/register",
        {
          'name': this.username,
          'email': this.email,
          'password': this.password,
          'password_confirmation': this.repassword
        },
        config
      ).then(response => {
        console.log("TOKEN: " ,response.data.token);
      });
    }
  },
}
</script>

<style lang="scss" scoped>
  @import "@/assets/mainStyles.scss";
  #registerContent{
    direction: rtl;
    margin: 2rem 1rem 0 0;
    font-family: royal;
    .dad{
      display: flex;
      margin-top: 1rem;
    }
    .v-input--selection-controls{
      margin-top: 0;
      position: relative;
      bottom: 0.3rem;
    }
    div.registerHeadText{
      text-align: center;
      display: inline-block;
      background-color: #fcf8e3;
      padding: 1rem;
      width: 100%;
    }
    h3.sect{
      margin: 1rem 0.3rem;
      font-size: $fontSmall / 1.1;
    }
    span.starBef{
      color: red;
      width: 14px;
      height: 14px;
      margin-left: 0.5rem;
      position: relative;
      top: 1.5rem;
      font-size: 2rem;
    }
    span.regT{
      display: inline-block;
      width: 8rem;
      font-size: $fontSmall;
    }
    div.spaect{
      margin-bottom: 1rem;
      margin-right: 0.9rem;
      width: 70%;
      display: flex;
    }
    div.spaect2{
      flex-flow: column;
    }
    div.spaect3{
      text-align: center;
    }
    #registerBtn{
      background-color: #f7d900;
      padding: 0.7rem 0.7rem;
      width: 40%;
      margin: 0 auto;
    }
  }
  @media screen and (max-width: 576px) {
    #registerContent{
      div.spaect{
        margin: auto;
        width: 100%;
      }
    }
  }
  @media screen and (min-width: 577px)  and (max-width: 768px){
    #registerContent{
      div.spaect{
        margin: auto;
        width: 100%;
      }
    }
  }
  @media screen and (min-width: 769px)  and (max-width: 992px){
    #registerContent{
      div.spaect{
        margin: auto;
        width: 100%;
      }
    }
  }
  @media screen and (min-width: 993px)  and (max-width: 1200px){
    #registerContent{
      div.spaect{
        margin: auto;
        width: 100%;
      }
    }
  }
  @media screen and (min-width: 1200px){

  }
</style>
