<script setup lang="ts">
import { computed, ref } from 'vue';
import TampilkanDataMode from './components/TampilkanDataMode.vue';
import TampilkanDataModeNumber from './components/TampilkanDataModeNumber.vue';
import data from './models/data';

const selected_row = ref<number|null>(null)

const limit = ref<number>(300);

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
const data_limit = computed(()=>{
  let items = data
  items = data.filter((e: object,i)=>i < limit.value)
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
    <div class="p-3 pb-0">
      <input type="number" class="p-2 rounded-md max-w-md border" v-model="limit">
    </div>
    <div class="flex flex-nowrap gap-3 p-3">
      <TampilkanDataMode :data="data_limit" @select-row="selectRow" :row-active="selected_row"></TampilkanDataMode>
      <TampilkanDataModeNumber :data="data_limit" @select-row="selectRow" :row-active="selected_row"/>
      <!-- <div class="p-4">
        <div v-if="selected_row != null && data_test != null">
          <TampilanProses :data="data_test" :model="data_model"></TampilanProses>
        </div>
      </div> -->
    </div>
  </div>
</template>

<style scoped>

</style>
