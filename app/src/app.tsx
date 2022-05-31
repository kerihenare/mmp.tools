import type { Component } from 'solid-js';

import './styles/normalise.scss';
import './styles/global.scss';
import { Form } from './components/form/form';
import { Header } from './components/header/header';
import { Main } from './components/main/main';

/**
 *
 * @returns
 */
export const App: Component = () => (
  <>
    <Header />
    <Form>Form</Form>
    <Main>Main</Main>
  </>
);
