import type { Component, JSX } from 'solid-js';

import styles from './form.module.scss';

interface FormProps {
  children: JSX.Element;
}

/**
 * 
 * @param props
 * @returns 
 */
export const Form: Component<FormProps> = (props) => (
  <form class={styles.form}>
    {props.children}
  </form>
);
