import { createStore } from "vuex";
import state from '../store/state.js';
import  * as actions from '../store/actions.js';
import * as mutations from '../store/mutations.js';
import * as getters from '../store/getters.js';

const store = createStore({
    actions,
    mutations,
    getters,
    state
})

export default store;