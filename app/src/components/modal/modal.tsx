import type { Component, JSX } from 'solid-js';

import styles from './modal.module.scss';

interface ModalProps {
  children: JSX.Element;
}

/**
 * 
 * @param props
 * @returns 
 */
export const Modal: Component<ModalProps> = (props) => (
  <div class={styles.backdrop}>
    <dialog class={styles.modal} open={true}>
      {props.children}
    </dialog>
  </div>
);
