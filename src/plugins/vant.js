import Vue from 'vue'
import Vant, { Locale } from 'vant'
import 'vant/lib/index.css'
import '../vant-variables.less'

import { Button } from 'vant';
import { Field } from 'vant';
import { Swipe, SwipeItem } from 'vant';


Vue.use(Swipe).use(SwipeItem);
Vue.use(Field)
Vue.use(Vant)
Vue.use(Button)
