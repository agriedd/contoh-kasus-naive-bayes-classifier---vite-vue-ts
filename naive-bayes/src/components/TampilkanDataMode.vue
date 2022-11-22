<script lang="ts" setup>
import { ModelType } from '../models/data'

interface typeProps {
	data: ModelType,
	rowActive: number|null
}

const props = defineProps<typeProps>()
const emits = defineEmits([
	'select-row'
])

const selectRow = (row: number) => {
	emits("select-row", row)
}

const isActiveRow = (row: number) => {
	return props.rowActive == row
}

</script>
<template>
	<div v-if="props.data != null">
		<div class="p-3">
			<table class="border border-collapse">
				<thead>
					<tr class="text-xs bg-slate-100">
						<th class="p-2 border text-ellipsis whitespace-nowrap">
							No
						</th>
						<th class="p-2 border text-ellipsis whitespace-nowrap">
							Kode_kartu
						</th>
						<th class="p-2 border text-ellipsis whitespace-nowrap">
							Kuota
						</th>
						<th class="p-2 border text-ellipsis whitespace-nowrap">
							Masa_Aktif
						</th>
						<th class="p-2 border text-ellipsis whitespace-nowrap">
							Harga
						</th>
						<th class="p-2 border text-ellipsis whitespace-nowrap">
							Klasifikasi
						</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="(item, i) in data" :key="item.Kode_Kartu" class="border select-none cursor-pointer" 
						@click="selectRow(i)"
						:class="{
							'bg-slate-800 hover:bg-slate-700 text-white': isActiveRow(i),
							'hover:bg-slate-50': !isActiveRow(i),
						}">
						<td class="p-2 text-xs">
							{{ i+1 }}
						</td>
						<td class="p-2 text-xs">
							{{ item.Kode_Kartu }}
						</td>
						<td class="p-2 text-xs">
							{{ item.Kuota }}
						</td>
						<td class="p-2 text-xs">
							{{ item['Masa_Aktif'] }}
						</td>
						<td class="p-2 text-xs">
							{{ item.Harga }}
						</td>
						<td class="p-2 text-xs">
							{{ item.Klasifikasi }}
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
	<div v-else>
		data kosong :(
	</div>
</template>