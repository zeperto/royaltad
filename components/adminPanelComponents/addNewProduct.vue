<template>
	<div>
		<div>
			<form method="post">
				<span id="productNamePersian" class="inputs">
			        <v-text-field
			          v-model="productNamePersian"
			          color="purple darken-2"
			          label="نام محصول"
			        ></v-text-field>
		        </span>
		        <br>
		        <span id="amount" class="inputs inputsSmall">
			        <v-text-field
			          id="amount"
			          v-model="amount"
			          color="purple darken-2"
			          label="تعداد"
			        ></v-text-field>
		        </span>
		        <span id="weight" class="inputs inputsSmall">
			        <v-text-field
			          v-model="weight"
			          color="purple darken-2"
			          label="حجم"
			        ></v-text-field>
		        </span>
		        <span id="dimension" class="inputs inputsSmall">
			        <v-text-field
			          v-model="dimension"
			          color="purple darken-2"
			          label="ابعاد"
			        ></v-text-field>
		        </span>
		        <br>
		        <span id="descriptionPersian" class="inputs">
			        <v-textarea
			          color="purple darken-2"
			          v-model="descriptionPersian"
				      label="توضیحات فارسی"
				    ></v-textarea>
		        </span>
		        <br><br>
		        <div class="same">
			        <v-btn
					      depressed
					      color="primary"
					      id="addProduct"
					      @click="addProduct"
					    >
					    ثبت شود
			    	</v-btn>
		    	</div>
	    	</form>
	    </div>
	</div>
</template>

<script>
export default {

  name: 'addNewProduct',

  data () {
    return {
    	productNamePersian: '',
    	productNameEnglish: '',
    	amount: '',
    	descriptionPersian: '',
    	descriptionEnglish: '',
    	weight: '',
    	dimension: '',
    	dialog: false,
    }
  },
  methods:{
  	openDialog(){
  		console.log('OPEN DIALOG');
  		this.dialog = true;
  	},
  	async addProduct(){

  		let obj = {
	  		'productNamePersian': this.productNamePersian,
	  		'productNameEnglish': this.productNameEnglish,
	  		'descriptionPersian': this.descriptionPersian,
	  		'descriptionEnglish': this.descriptionEnglish,
	  		'amount': this.amount,
	  		'weight': this.weight,
	  		'dimension': this.dimension
	  	}

	  	const config = {
	        headers:{
	        	ContentType: 'multipart/form-data',
	          	Accept: 'application/json',
	        }
        };

	    await this.$axios.post(
	        "http://localhost:8000/api/admin/addProduct",
	        {
	          product: obj
	        },
	        config
	    ).then(response => {
	        console.log(response.data);
	        if(response.data.code == 13){
	        	this.dialog = true;
	        }
	    });
  	}
  }
}
</script>

<style lang="scss" scoped>
	 .inputs{
		display: inline-block;
		margin: 0 1rem;
		width: 30%;
	}
	.inputsSmall{
	 	width: 13%;
	}
	#addProduct{
		background-color: #eb4034;
		margin-right: 3%;
	}
	.vCardText{
		color: black;
		font-weight: bold;
		font-size: 1rem;
		margin:1rem 2rem;
		padding: 1rem 3rem;
		display: block;
	}
</style>
