import type { Component } from 'solid-js';

import { Form } from '~components/form';
import { Header } from '~components/header';
import { Main } from '~components/main';
import { NumberInput } from '~components/number-input';
import { Select } from '~components/select';
import { Switch } from '~components/switch';

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
        label="Party vote threshold (%)"
        max={50}
        value={5}
      />
      <Switch id="overhang" label="Allow overhang seats" checked={true} />
      <Switch id="coat-tail" label="Electorate coat-tailing" checked={true} />
      <NumberInput
        id="coat-tail-seats"
        label="Seats for coat-tailing"
        max={60}
        value={Math.round(1)}
      />
      <Select
        id="calculation-method"
        label="Calculation method"
        value="sainte-lague"
      >
        <option value="dhondt">D'Hondt</option>
        <option value="sainte-lague">Sainte-Laguë / Webster</option>
      </Select>
    </Form>
  </>
);
