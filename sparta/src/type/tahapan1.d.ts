
export type PXY = [
	number, number, number
]
export type PY = [
	number, number, number
]

export interface Tahapan1Type {
	x: {
		label: string,
		value: any,
		index: number
	},
	p_y: {
		label: string,
		value: any,
		index: number
	},
	p_x_y: PXY,
}
export interface Tahapan2Type {
	label: string,
	class_name: string,
	values: Array<number>,
	result: number
}
export interface Tahapan3Type {
	label: string,
	class_name: string,
	p_x_y: number,
	p_y: PY,
	result: number
}
