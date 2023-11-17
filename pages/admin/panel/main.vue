<template>
  <div id="panelAdminMain">
    <div id="rightSide">
      <v-navigation-drawer permanent>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="text-h6">
              <h3>رویال تاد</h3>
            </v-list-item-title>
            <v-list-item-subtitle>
              پنل ادمین
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-list
          dense
          nav
        >
          <v-list-item
            v-for="item in items"
            :key="item.title"
            link
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title class="listItem" @click="itemClicked(item.id)">{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </div>
    <div id="leftSide">
      <div>
        <menus class="adminPanelItems" id="menusPanel"/>
        <discounts class="adminPanelItems" id="discountsPanel"/>
        <news class="adminPanelItems" id="newsPanel"/>
        <products class="adminPanelItems" id="productsPanel"/>
        <reports class="adminPanelItems" id="reportsPanel"/>
        <orders class="adminPanelItems" id="ordersPanel"/>
        <users class="adminPanelItems" id="usersPanel"/>
      </div>
    </div>
  </div>
</template>

<script>

import discountComponent from "@/components/adminPanelComponents/discounts";
import menuComponent from "@/components/adminPanelComponents/menus";
import newsComponent from "@/components/adminPanelComponents/news";
import productsComponent from "@/components/adminPanelComponents/products";
import reportComponent from "@/components/adminPanelComponents/reports";
import ordersComponent from "@/components/adminPanelComponents/orders";
import usersComponent from "@/components/adminPanelComponents/users";

export default {
  components:{
    'menus': menuComponent,
    'discounts': discountComponent,
    'news': newsComponent,
    'products': productsComponent,
    'reports': reportComponent,
    'orders': ordersComponent,
    'users': usersComponent
  },
  data(){
    return{
      activePanel: 'ordersPanel',
      items: [
          { id: 1, title: 'محصولات', icon: 'mdi-folder-star-multiple' },
          { id: 2, title: 'منوها', icon: 'mdi-microsoft-xbox-controller-menu' },
          { id: 3, title: 'تخفیف ها', icon: 'mdi-percent-box' },
          { id: 4, title: 'سفارش ها', icon: 'mdi-cart-check' },
          { id: 5, title: 'خبرها', icon: 'mdi-newspaper-variant-outline'},
          { id: 6, title: 'گزارش ها', icon: 'mdi-application-brackets-outline'},
          { id: 7, title: 'مدیریت کاربران', icon: 'mdi-account-multiple-outline'},
        ],
        right: true,
    }
  },
  methods: {
    itemClicked(menuId){
      switch(menuId){
        case 1:
          document.getElementById(this.activePanel).style.display = 'none';
          document.getElementById('productsPanel').style.display = 'block';
          this.activePanel = 'productsPanel';
          break;
        case 2:
          document.getElementById(this.activePanel).style.display = 'none';
          document.getElementById('menusPanel').style.display = 'block';
          this.activePanel = 'menusPanel';
          break;
        case 3:
          document.getElementById(this.activePanel).style.display = 'none';
          document.getElementById('discountsPanel').style.display = 'block';
          this.activePanel = 'discountsPanel';
          break;
        case 4:
          document.getElementById(this.activePanel).style.display = 'none';
          document.getElementById('ordersPanel').style.display = 'block';
          this.activePanel = 'ordersPanel';
          break;
        case 5:
          document.getElementById(this.activePanel).style.display = 'none';
          document.getElementById('newsPanel').style.display = 'block';
          this.activePanel = 'newsPanel';
          break;
        case 6:
          document.getElementById(this.activePanel).style.display = 'none';
          document.getElementById('reportsPanel').style.display = 'block';
          this.activePanel = 'reportsPanel';
          break;
        case 7:
          document.getElementById(this.activePanel).style.display = 'none';
          document.getElementById('usersPanel').style.display = 'block';
          this.activePanel = 'usersPanel';
          break;
      }
    },
  },
  mounted(){
    this.$vuetify.rtl = true;
  },

  middleware: 'adminLogin'

}
</script>

<style lang="scss" scoped>
@import '@/assets/mainStyles.scss';
#panelAdminMain{
  height: 100vh;
  font-family: royal;
  direction: rtl;
  display: flex;
}
.listItem{
  margin-right: 1rem;
}
#rightSide{
  width: 13%;
  border-left: 1px solid black;
}
#leftSide{
  width: 87%;
}
.adminPanelItems{
  display: none;
}
#ordersPanel{
  display: block;
}
</style>
