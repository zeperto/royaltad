<template>
  <div id="loginSection">
    <div id="loginHeadText">
      <span>اگر پیش از این ثبت نام نکرده اید در این قسمت ثبت نام کنید</span>
      <nuxt-link to="/register">ثبت نام</nuxt-link>
    </div>
    <div>
      <h3>ورود کاربران</h3>
      <div class="spaect">
        <v-text-field
          v-model="email"
          label="ایمیل"
          :rules="[rules.required, rules.min]"
          clearable
        ></v-text-field>
      </div>
      <div class="spaect">
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
    </div>
    <div>
      <div class="spaect spaect2">
        <v-btn id="loginUser" depressed color="#f7d900" @click="login">ورود</v-btn>
      </div>
      <div id="googleSignIn" class="spaect">
        <!-- <v-btn id="loginUser" depressed color="#f7d900">ورود با حساب گوگل</v-btn> -->
        <img src="@/assets/GoogleSignInLight.png" alt="google signin light">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head:{
    title: 'ورود کاربران'
  },
  methods: {
    async login(){
      const config = {
        headers:{
          accept: 'application/json',
        }
      };
      await this.$axios.post(
        "http://localhost:8000/api/login",
        {
          'email': this.email,
          'password': this.password,
        },
        config
      ).then(response => {
        let token = response.data.token;
        this.$store.commit('setAdminToken', token);
      });
    }
  },
  data(){
    return{
      email: '',
      password: '',
      show1: false,
      rules: {
        required: value => !!value || 'این فیلد الزامی می باشد',
        min: v => v.length >= 8 || 'حداقل 8 کاراکتر',
        emailMatch: () => (`ایمیل یا رمز عبور اشتباه است`),
      },
    }
  },
  mounted(){
    this.$vuetify.rtl = true;
  }
}
</script>

<style lang="scss" scoped>
  @import "@/assets/mainStyles.scss";
  #loginSection{
    direction: rtl;
    font-family: royal;
    margin: 2rem 1rem 0 0;
    #googleSignIn img{
      border: 1px solid #f1efef;
      width: 17rem;
      height: 3rem;
      margin-right: 12.4rem;
      border-radius: 0.3rem;
      &:hover{
        cursor: pointer;
        border: 2px solid #f1efef;
      }
    }
    div#loginHeadText{
      text-align: center;
      display: inline-block;
      background-color: #fcf8e3;
      padding: 1rem;
      width: 100%;
    }
    h3{
      margin: 1rem 0.3rem;
    }
    .spaect{
      width: 70%;
      margin-right: 1rem;
    }
    .spaect2{
      text-align: center;
    }
    #loginUser{
      background-color: #f7d900;
      padding: 0.7rem 0.7rem;
      width: 40%;
      margin: 2rem auto;
    }
  }
  @media screen and (max-width: 576px) {
    #loginSection{
      div.spaect{
        margin: auto;
        width: 100%;
      }
    }
  }
  @media screen and (min-width: 577px)  and (max-width: 768px){
    #loginSection{
      div.spaect{
        margin: auto;
        width: 100%;
      }
    }
  }
  @media screen and (min-width: 769px)  and (max-width: 992px){
    #loginSection{
      div.spaect{
        margin: auto;
        width: 100%;
      }
    }
  }
  @media screen and (min-width: 993px)  and (max-width: 1200px){
    #loginSection{
      div.spaect{
        margin: auto;
        width: 100%;
      }
    }
  }
  @media screen and (min-width: 1200px){

  }
</style>
