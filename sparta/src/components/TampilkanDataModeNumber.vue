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
		<div class="p-0">
			<table class="border border-collapse">
				<thead>
					<tr class="text-xs bg-slate-100">
						<th class="p-2 border text-ellipsis whitespace-nowrap" colspan="2">
							Gender
						</th>
						<th class="p-2 border text-ellipsis whitespace-nowrap" colspan="2">
							School City
						</th>
						<th class="p-2 border text-ellipsis whitespace-nowrap" colspan="3">
							Tipe Sekolah
						</th>
						<th class="p-2 border text-ellipsis whitespace-nowrap" colspan="2">
							Keterangan Lulus
						</th>
					</tr>
					<tr class="text-xs bg-slate-100">
						<th class="p-2 border text-ellipsis whitespace-nowrap">
							Laki-Laki
						</th>
						<th class="p-2 border text-ellipsis whitespace-nowrap">
							Perempuan
						</th>
						<th class="p-2 border text-ellipsis whitespace-nowrap">
							Dalam Kota
						</th>
						<th class="p-2 border text-ellipsis whitespace-nowrap">
							Luar Kota
						</th>
						<th class="p-2 border text-ellipsis whitespace-nowrap">
							SMA
						</th>
						<th class="p-2 border text-ellipsis whitespace-nowrap">
							SMK
						</th>
						<th class="p-2 border text-ellipsis whitespace-nowrap">
							Lainnya
						</th>
						<th class="p-2 border text-ellipsis whitespace-nowrap">
							Lulus
						</th>
						<th class="p-2 border text-ellipsis whitespace-nowrap">
							Tidak Lulus
						</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="(item, i) in data" :key="i" class="border cursor-pointer" 
						@click="selectRow(i)"
						:class="{
							'bg-slate-800 hover:bg-slate-700 text-white': isActiveRow(i),
							'hover:bg-slate-50': !isActiveRow(i),
						}">
						<td class="p-2 text-xs">
							{{ item.gender == 'Laki-Laki' ? 1 : 0 }}
						</td>
						<td class="p-2 text-xs">
							{{ item.gender != 'Laki-Laki' ? 1 : 0 }}
						</td>
						<td class="p-2 text-xs">
							{{ item.gender == 'Dalam Kota' ? 1 : 0 }}
						</td>
						<td class="p-2 text-xs">
							{{ item.gender != 'Dalam Kota' ? 1 : 0 }}
						</td>
						<td class="p-2 text-xs">
							{{ item.type_sekolah == "SMA" ? 1 : 0 }}
						</td>
						<td class="p-2 text-xs">
							{{ item.type_sekolah == "SMK" ? 1 : 0 }}
						</td>
						<td class="p-2 text-xs">
							{{ item.type_sekolah == "Lainnya" ? 1 : 0 }}
						</td>
						<td class="p-2 text-xs">
							{{ item.keterangan_lulus == "Lulus" ? 1 : 0 }}
						</td>
						<td class="p-2 text-xs">
							{{ item.keterangan_lulus != "Lulus" ? 1 : 0 }}
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