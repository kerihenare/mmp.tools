import type { Component } from 'solid-js';

import { Form } from '~components/form';
import { Header } from '~components/header';
import { Main } from '~components/main';
import { NumberInput } from '~components/number-input';

import './styles/normalise.scss';
import './styles/global.scss';

/**
 *
 * @returns
 */
export const App: Component = () => (
  <>
    <Header />
    <Main>Main</Main>
    <Form>
      <NumberInput
        id="threshold"
        label="Party vote threshold"
        max={100}
        value={5}
      />
      <NumberInput
        id="coat-tail-seats"
        label="Seats for coat-tailing"
        max={120}
        value={1}
      />
    </Form>
  </>
);
