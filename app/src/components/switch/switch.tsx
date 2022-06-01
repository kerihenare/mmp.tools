import type { Component } from 'solid-js';

import styles from './switch.module.scss';

interface SwitchProps {
  checked: boolean;
  id: string;
  label: string;
}

/**
 *
 * @param props
 * @returns
 */
export const Switch: Component<SwitchProps> = (props) => (
  <label class={styles.field} for={props.id}>
    <span class={styles.container}>
      <input type="checkbox" id={props.id} checked={props.checked} />
      <span class={styles.indicator}></span>
    </span>
    <strong class={styles.label}>{props.label}</strong>
  </label>
);
