import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faUserSecret,
  faSearch,
  faTimesCircle,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faUserSecret);
library.add(faSearch);
library.add(faTimesCircle);

Vue.component('font-awesome-icon', FontAwesomeIcon);
