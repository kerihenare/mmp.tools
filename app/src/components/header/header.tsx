import type { Component } from 'solid-js';

import styles from './header.module.scss';

/**
 * 
 * @returns 
 */
export const Header: Component = () => (
  <header class={styles.header}>
    <h1>MMP Tools</h1>
  </header>
);
