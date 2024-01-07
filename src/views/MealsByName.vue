<template>
    <div class="p-8">
        <input type="text" v-model="keyword" class="rounded border-2 border-gray-200 w-full" placeholder="Search meals" @change="searchMeals">
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
        <div v-for="meal of meals" :key="meal.idMeal" class="bg-white shadow rounded-xl">
            <router-link to="/">
                <img :src="meal.strMealThumb" :alt="strMeal" class="rounded-t-xl h-48 w-full object-cover"/>
            </router-link>
            <div class="px-3">
                <h3 class="font-bold">{{ meal.strMeal }}</h3>
                <p class="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi minus ad corrupti repellat, ratione aliquid, veritatis animi debitis dolore porro eaque perferendis, iusto repudiandae natus quaerat provident nesciunt dolorum vitae.</p>
                <div class="flex items-center justify-between">
                    <a :href="meal.strYoutube" target="_blank" class="px-3 py-2 rounded border-2 border-red-600 bg-red-500 hover:bg-red-600 text-white transition-colors">Youtube</a> 
                </div>
            </div>
            
        </div>
    </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import axiosClient from "../axiosClient";
import store from "../store";
import { useRoute } from "vue-router";

const keyword = ref('');
const meals = computed( () => store.state.searchedMeals);

const route = useRoute();


function searchMeals() {
    store.dispatch('searchMeals', keyword.value);
}

onMounted(() => {
    keyword.value = route.params.name;
    if(keyword.value) {
        searchMeals();
    }
})
</script>