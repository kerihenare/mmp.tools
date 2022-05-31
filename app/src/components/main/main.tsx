import type { Component, JSX } from 'solid-js';

import styles from './main.module.scss';

interface MainProps {
  children: JSX.Element;
}

/**
 * 
 * @param props
 * @returns 
 */
export const Main: Component<MainProps> = (props) => (
  <main class={styles.main}>
    {props.children}
  </main>
);
