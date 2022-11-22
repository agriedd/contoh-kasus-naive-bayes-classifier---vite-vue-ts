<script setup lang="ts">
import { computed, ref } from 'vue';
import TampilanProses from './components/TampilanProses.vue';
import TampilkanDataMode from './components/TampilkanDataMode.vue';
import data from './models/data';

const selected_row = ref<number|null>(null)

const data_test = computed(()=>{
  let items = null
  if(selected_row.value != null && data.length && data[selected_row.value] != null){
    items = data.filter((e: object, i)=>i==selected_row.value)
  }
  return items
})
const data_model = computed(()=>{
  let items = data
  if(selected_row.value != null && data.length && data[selected_row.value] != null){
    items = data.filter((e: object,i)=>i != selected_row.value)
  }
  return items
})

const selectRow = (row: number) => {
  if(selected_row.value == row)
  selected_row.value = null
  else selected_row.value = row
}

</script>
<template>
  <div>
    <div class="flex md:flex-nowrap flex-wrap">
      <TampilkanDataMode :data="data" @select-row="selectRow" :row-active="selected_row"></TampilkanDataMode>
      <div class="p-4">
        <div v-if="selected_row != null && data_test != null">
          <TampilanProses :data="data_test" :model="data_model"></TampilanProses>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
