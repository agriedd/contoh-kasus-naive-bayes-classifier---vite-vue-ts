<script setup lang="ts">
import { computed } from 'vue'
import { Tahapan3Type} from '../../type/tahapan1'

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
						d.
					</td>
					<td>
						Menentukan kelas
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
			<tbody v-if="data[0].result > data[1].result">
				<tr class="text-sm">
					<td>
					</td>
					<td>
						<div>
							P(X | Klasifikasi = "{{ data[0].class_name }}") >
							P(X | Klasifikasi = "{{ data[1].class_name }}")
						</div>
						<div>
							= {{ data[0].class_name }}
						</div>
						<br>
					</td>
				</tr>
			</tbody>
			<tbody v-else>
				<tr class="text-sm">
					<td>
					</td>
					<td>
						<div>
							P(X | Klasifikasi = "{{ data[0].class_name }}") &lt;
							P(X | Klasifikasi = "{{ data[1].class_name }}")
						</div>
						<div>
							= 
							<strong>
								{{ data[1].class_name }}
							</strong>
						</div>
						<br>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>
