<script setup lang="ts">
import { computed } from 'vue'
import { Tahapan2Type} from '../../type/tahapan1'

interface typeProps {
	data: Array<Tahapan2Type>
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
						b.
					</td>
					<td>
						Hitung Nilai P(X|C<sub>i</sub>)  untuk setiap kelas (label)
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
							P(X | Klasifikasi = "{{ item.class_name }}")
						</div>
						<div>
							= <span v-for="(value, i) in item.values" :key="i">
								{{ value.toFixed(2) }}
								<span v-if="i <= item.values.length - 2">
									&times;
								</span>
							</span>
						</div>
						<div>
							= {{ item.result.toFixed(5) }}
						</div>
						<br>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>
