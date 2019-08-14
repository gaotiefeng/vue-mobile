import Vue from 'vue'
import Vant, { Locale } from 'vant'
import 'vant/lib/index.css'
import '../vant-variables.less'

import { Button } from 'vant';
import { Field } from 'vant';
import { Swipe, SwipeItem } from 'vant';
import { Grid, GridItem } from 'vant';

Vue.use(Vant)
Vue.use(Button)
Vue.use(Grid).use(GridItem);
Vue.use(Swipe).use(SwipeItem);
Vue.use(Field)
