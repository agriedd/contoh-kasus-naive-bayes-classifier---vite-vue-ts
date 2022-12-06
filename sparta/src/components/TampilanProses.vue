<script setup lang="ts">
import { computed } from 'vue';
import { ModelType, Model } from '../models/data'
import TahapanA from './Proses/TahapanA.vue';
import { Tahapan1Type, Tahapan2Type, Tahapan3Type } from '../type/tahapan1';
import TahapanB from './Proses/TahapanB.vue';
import TahapanC from './Proses/TahapanC.vue';
import TahapanD from './Proses/TahapanD.vue';

interface typeProps {
	data: ModelType,
	model: ModelType,
}

const props = defineProps<typeProps>()
const emits = defineEmits([])

const data_test = computed(()=>{
	return props.data[0]
})

const label = computed<Array<string>>(()=>{
	return Object.keys(data_test.value)
})

const label_input = computed(()=>{
	return label.value.splice(2, 3)
})

const label_target = computed<string>(()=>{
	return label.value[label.value.length-1]
})
const target_options = computed(()=>{
	let items: Array<string> = [];
	props.model.forEach(e => {
		if(!items.includes(e[label_target.value as keyof Model])){
			items.push(e[label_target.value as keyof Model])
		}
	})
	return items;
})

const countInputByTarget = (label: string, value: any, target: string):number=>{
	return props.model.filter((e: ModelType[0]) => {
		return e[label_target.value as keyof Model] == target 
			&& e[label as keyof Model] == value
	}).length
}

const countInput = (label: string, value: any):number=>{
	return props.model.filter((e: Model) => e[label as keyof Model] == value).length
}

const p_xi_by_yi = computed(()=>{
	let items: Array<Tahapan1Type> = []
	label_input.value.forEach((x, xi) => {
		target_options.value.forEach((y, yi) => {
			let countByTarget = countInputByTarget(x, data_test.value[x as keyof Model], y)
			let count = countInput(x, data_test.value[x as keyof Model])
			let result = countByTarget/count;
			items.push({
				x: {
					label: x,
					value: data_test.value[x as keyof Model],
					index: xi
				},
				p_y: {
					label: label_target.value,
					value: y,
					index: yi,
				},
				p_x_y: [
					countByTarget, count, result
				]
			})
		})
	})
	return items;
})
const p_x_by_y = computed(()=>{
	let items: Array<Tahapan2Type> = []
	target_options.value.forEach((y, yi) => {
		let values : Array<number> = p_xi_by_yi.value.filter((x: Tahapan1Type) => {
			return x.p_y.value == y
		}).map(e => e.p_x_y[2]);
		let result : number = values.reduce((a: number, b: number)=>{
			return a * b
		}, 1)
		let y_str = y as string;
		items.push({
			label: label_target.value,
			class_name: y_str,
			values,
			result
		})
	})
	return items;
})

const p_x_by_yi_times_p_yi = computed(()=>{
	let items: Array<Tahapan3Type> = []
	p_x_by_y.value.forEach((y, yi) => {
		
		let p_y = props.model.filter(e => {
			return e[label_target.value as keyof Model] == y.class_name
		}).length
		let count = props.model.length
		items.push({
			label: label_target.value,
			class_name: y.class_name,
			p_x_y: y.result,
			p_y: [
				p_y,
				count,
				p_y/count
			],
			result: y.result * (p_y/count)
		})
	})
	return items;
})

</script>
<template>
	<div class="grid lg:grid-cols-2 gap-4">
		<TahapanA :data="p_xi_by_yi"/>
		<TahapanB :data="p_x_by_y"/>
		<TahapanC :data="p_x_by_yi_times_p_yi"/>
		<TahapanD :data="p_x_by_yi_times_p_yi"/>
	</div>
</template>
