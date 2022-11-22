<script setup lang="ts">
import { computed } from 'vue'
import {Tahapan3Type} from '../../type/tahapan1'

interface typeProps {
	data: Array<Tahapan3Type>
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
						c.
					</td>
					<td>
						Hitung Nilai P(X|C<sub>i</sub>) &times; P(C<sub>i</sub>)
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
							P(X | Klasifikasi = "{{ item.class_name }}") &times; 
							P(X | Klasifikasi = "{{ item.class_name }}")
						</div>
						<div>
							= {{ item.p_x_y.toFixed(3) }} &times;  {{ item.p_y[0] }} / {{ item.p_y[1] }} 
						</div>
						<div>
							= {{ item.p_y[2].toFixed(5) }}
						</div>
						<br>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>
