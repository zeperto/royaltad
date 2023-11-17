export default function({store, redirect}){
	console.log('middleware token: ' + store.getters.getAdminToken);
	if(store.getters.getAdminToken == ''){
		redirect(process.env.siteUrl);
	}
}