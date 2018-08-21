import { INCREASE_COUNT, DECREASE_COUNT } from '../constants/index'

export const increase = () => ({ type: INCREASE_COUNT })
export const decrease = () => ({ type: DECREASE_COUNT })
