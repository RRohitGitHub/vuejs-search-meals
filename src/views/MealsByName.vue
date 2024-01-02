<template>
    <div class="p-8">
        <input type="text" v-model="keyword" class="rounded border-2 border-gray-200 w-full" placeholder="Search meals">
    </div>
</template>

<script setup>
import { ref } from "vue";
import axiosClient from "../axiosClient";

const keyword = ref('');
function searchMeals() {
    axiosClient.get(`search.php?s=${keyword.value}`);
}

</script>