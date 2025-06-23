import type { RouteRecordRaw } from 'vue-router';

import { RouteName } from '@/shared/constants';
import Homepage from '@/modules/homepage/index.vue';
import NotFound from '@/modules/notFound/index.vue';
import Login from '@/modules/login/index.vue';
import Product from '@/modules/product/index.vue';
import ProductDetail from '@/modules/product/ProductDetail.vue';
import News from '@/modules/news/index.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/:pathMatch(.*)*',
    name: RouteName.NotFound,
    component: NotFound,
  },
  {
    path: '',
    name: RouteName.HOMEPAGE,
    component: Homepage,
    meta: { layout: 'defaultNoHeader' },
  },
  {
    path: '/login',
    name: RouteName.LOGIN,
    component: Login,
  },
  {
    path: '/product',
    name: RouteName.PRODUCT,
    component: Product,
  },
  {
    path: '/product/:id',
    name: RouteName.PRODUCT_DETAIL,
    component: ProductDetail,
  },
  {
    path: '/news',
    name: RouteName.NEWS,
    component: News,
  },
];

export default routes;
