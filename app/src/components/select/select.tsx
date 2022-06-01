import type { Component, JSX } from 'solid-js';

import styles from './select.module.scss';

interface SelectProps {
  children: JSX.Element;
  id: string;
  label: string;
  value: string;
}

/**
 *
 * @param props
 * @returns
 */
export const Select: Component<SelectProps> = (props) => (
  <label class={styles.field} for={props.id}>
    <strong class={styles.label}>{props.label}</strong>
    <span class={styles.container}>
      <select name={props.id} id={props.id} value={props.value}>
        {props.children}
      </select>
      <svg viewBox="0 0 64 64">
        <path d="M15 26h34c3 0 4-3 2-6L34 3a3 3 0 0 0-4 0L13 20c-2 3-1 6 2 6Zm36 18L34 61a3 3 0 0 1-4 0L13 44c-2-3-1-6 2-6h34c3 0 4 3 2 6Z"/>
      </svg>
    </span>
  </label>
);
