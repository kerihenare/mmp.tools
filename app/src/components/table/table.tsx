import type { Component, JSX } from 'solid-js';

import styles from './table.module.scss';

interface TableProps {
  children: JSX.Element;
}

/**
 * 
 * @param props
 * @returns 
 */
export const Table: Component<TableProps> = (props) => (
  <table class={styles.table}>
    {props.children}
  </table>
);
