<template>
  <div id="panelAdmin">
    <div id="holder">
      <v-text-field
        v-model="username"
        :rules="rules.username"
        color="purple darken-2"
        label="نام کاربری"
        required
      ></v-text-field>
      <v-text-field
        v-model="password"
        :rules="rules.password"
        :type="showPassword ? 'text' : 'password'"
        color="purple darken-2"
        label="رمز عبور"
        required
      ></v-text-field>
      <v-btn id="login" depressed @click="login">
        ورود
      </v-btn>
      <div id="snak">
        <v-snackbar
          v-model="snackbar"
          :timeout="timeout"
        >
          {{ text }}

          <template v-slot:action="{ attrs }">
            <v-btn
              color="blue"
              text
              v-bind="attrs"
              @click="snackbar = false"
            >
              Close
            </v-btn>
          </template>
        </v-snackbar>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      snackbar: false,
      text: 'USERNAME OR PASSWORD IS WRONG',
      timeout: 3000,
      username:'',
      name: '23',
      age: '12',
      password:'',
      showPassword: false,
      rules: {
        username: [val => (val || '').length > 0 || 'این فیلد ضروری است'],
        password: [val => (val || '').length > 0 || 'این فیلد ضروری است'],
        required: value => !!value || 'این فیلد ضروری است',
      },
    }
  },
  methods: {

    async login(){
      let data = {
        'username': this.username,
        'password': this.password,
      }
      const config = {
        headers:{
          accept: 'application/json',
        }
      };
      await this.$axios.$post("http://localhost:8000/api/adminLogin", data
      ).then(response => {
        let code = response.code;
        let token = response.token;

        if(code == 1){
          this.$store.commit('setAdminToken', token);
          console.log('ADMIN TOKEN: ' + this.$store.getters.getAdminToken);
          this.$router.push('panel/main');
        }
        else{
          this.snackbar = true;
        }
      });
    },


    async llogin(){
      /*const config = {
        Headers:{
          Accept: 'application/json',
        }
      };
      await this.$axios.post(
        process.env.baseUrl + "/api/admin/login",
        // "http://localhost:8000/api/admin/login",
        {
          'email': this.username,
          'password': this.password,
        },
        config
      ).then(response => {
        console.log('HHHH: ' + response.data);
        // let code = response.data.code;
        // let token = response.data.token;

        // if(code == 1){
        //   this.$store.commit('setAdminToken', token);
        //   console.log('ADMIN TOKEN: ' + this.$store.getters.getAdminToken);
        //   this.$router.push('adminPanel/main');
        // }
        // else{
        //   this.snackbar = true;
        // }
      });*/
    },
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/mainStyles.scss';
#panelAdmin{
  min-height: 100vh;
  display: flex;
  justify-content: center;
}
#holder{
  width: 30%;
  height: 30%;
  padding: 2rem;
  margin-top: 10%;
  border: 1px solid $grayColor;
  border-radius: 0.5rem;
}
#login{
  margin-top: 1rem;
}
</style>
