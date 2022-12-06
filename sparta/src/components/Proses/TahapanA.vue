<script setup lang="ts">
import { computed } from 'vue'
import {Tahapan1Type} from '../../type/tahapan1'

interface typeProps {
	data: Array<Tahapan1Type>
}

const props = defineProps<typeProps>()
const emits = defineEmits([])

</script>
<template>
	<div>
		<table>
			<tbody>
				<tr>
					<td>
						a.
					</td>
					<td>
						Menghitung nilai P(X<sub>k</sub>|C<sub>i</sub>) 
					</td>
				</tr>
				<tr>
					<td>
					</td>
					<td>
						<br/>
					</td>
				</tr>
			</tbody>
			<tbody v-for="(item, xi) in data" :key="xi">
				<tr class="text-sm">
					<td>
					</td>
					<td>
						<div>
							P(Kriteria {{ item.x.index + 1 }} = "{{ item.x.value }}" | Klasifikasi = "{{ item.p_y.value }}")
						</div>
						<div>
							P(Kriteria {{ item.x.index + 1 }} = {{ item.p_x_y[0] }}/{{ item.p_x_y[1] }} = {{ (item.p_x_y[2]).toFixed(2) }})
						</div>
						<br>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>
