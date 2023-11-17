<template>
	<div>
    <div class="topBar">
      <v-chip
        id="addNewProduct"
        @click="addNewProduct"
        class="ma-2"
        color="primary"
        label
      >
        <v-icon left>
          mdi-plus-circle-outline
        </v-icon>
        محصول جدید
      </v-chip>
    </div>
    <div>
      <addNewProductsPanel id="addNewProductPanel"/>
    </div>
  </div>
</template>

<script>

import addNewProducts from "@/components/adminPanelComponents/addNewProduct.vue";

export default {

  name: 'products',

  components:{
    'addNewProductsPanel': addNewProducts
  },

  data () {
    return {
      
    }
  },
  methods:{
    addNewProduct(){
      document.getElementById('addNewProductPanel').style.display = 'block';
    }
  }
}
</script>

<style lang="css" scoped>
.topBar{
  display: flex;
  justify-content: flex-end;
}
#addNewProduct{
  background-color: #03fc66;
  margin: 1rem;
  color: #202020;
  font-size: 0.8rem;
  padding: 1.1rem;
}
#addNewProductPanel{
  display: none;
}
</style>