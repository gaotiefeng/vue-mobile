import Vue from 'vue'
import Vant, { Locale } from 'vant'
import 'vant/lib/index.css'
import '../vant-variables.less'

import { Button } from 'vant';
import { Field } from 'vant';
import { Swipe, SwipeItem } from 'vant';
import { Grid, GridItem } from 'vant';
import { Pagination } from 'vant';
import { List } from 'vant';
import { NoticeBar } from 'vant';
import { AddressEdit } from 'vant';
import { Panel } from 'vant';
import { Image } from 'vant';
import { PasswordInput, NumberKeyboard } from 'vant';
import { Dialog } from 'vant';

Vue.use(Dialog);
Vue.use(PasswordInput).use(NumberKeyboard);
Vue.use(Image);
Vue.use(Panel);
Vue.use(AddressEdit);
Vue.use(NoticeBar);
Vue.use(List);
Vue.use(Pagination);
Vue.use(Vant)
Vue.use(Button)
Vue.use(Grid).use(GridItem);
Vue.use(Swipe).use(SwipeItem);
Vue.use(Field)
