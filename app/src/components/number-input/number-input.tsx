import type { Component } from 'solid-js';

import styles from './number-input.module.scss';

interface NumberInputProps {
  id: string;
  label: string;
  max: number;
  min?: number;
  step?: number;
  value: number;
}

/**
 * 
 * @param props
 * @returns 
 */
export const NumberInput: Component<NumberInputProps> = (props) => (
  <label class={styles.field} for={props.id}>
    <strong class={styles.label}>{props.label}</strong>
    <span class={styles.container}>
      <input
        type="number"
        name={props.id}
        id={props.id}
        max={props.max}
        min={props.min || 0}
        step={props.step || 1}
        value={props.value}
      />
    </span>
  </label>
);
