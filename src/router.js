import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home/Index.vue';
import About from './components/Page/About.vue';
import Product from './components/Page/Product.vue';
import News from './components/Page/News.vue';
import Contact from './components/Page/Contact.vue';
import CheckOrder from './components/Page/CheckOrder.vue';
import MyCart from './components/Page/MyCart.vue';
import PayMoney from './components/Page/PayMoney.vue';
import DonePay from './components/Page/DonePay.vue';
import ProductDetail from './components/Page/ProductDetail.vue';
import BestSale from './components/ListProduct/BestSale.vue';
import BestFilter from './components/ListProduct/BestFilter.vue';
import BestSuggest from './components/ListProduct/BestSuggest.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/gioi-thieu',
      name: 'about',
      component: About,
    },
    {
      path: '/san-pham',
      name: 'product',
      component: Product,
    },
    {
      path: '/tin-tuc',
      name: 'news',
      component: News,
    },
    {
      path: '/lien-he',
      name: 'contact',
      component: Contact,
    },
    {
      path: '/kiem-tra-don-hang',
      name: 'check__order',
      component: CheckOrder,
    },
    {
      path: '/gio-hang',
      name: 'my_cart',
      component: MyCart,
    },
    {
      path: '/thanh-toan',
      name: 'pay_money',
      component: PayMoney,
    },
    {
      path: '/hoan-tat',
      name: 'done_pay',
      component: DonePay,
    },
    {
      path: '/chi-tiet-san-pham',
      name: 'product_detail',
      component: ProductDetail,
    },
    {
      path: '/mat-hang-giam-gia',
      name: 'best_sale',
      component: BestSale,
    },
    {
      path: '/tim-kiem-nhieu-nhat',
      name: 'best_filter',
      component: BestFilter,
    },
    {
      path: '/mat-hang-noi-bat',
      name: 'best_suggest',
      component: BestSuggest,
    },
  ],
});
