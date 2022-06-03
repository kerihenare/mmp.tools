import type { Component } from 'solid-js';

import { Form } from '~components/form';
import { Header } from '~components/header';
import { Main } from '~components/main';
import { NumberInput } from '~components/number-input';
import { Select } from '~components/select';
import { Switch } from '~components/switch';
import { Table } from '~components/table';

import './styles/normalise.scss';
import './styles/global.scss';

/**
 *
 * @returns
 */
export const App: Component = () => (
  <>
    <Header />
    <Main>
      <Table>
        <colgroup>
          <col width="60%" />
          <col width="20%" />
          <col width="20%" />
        </colgroup>
        <thead>
          <tr>
            <th scope="col">Election</th>
            <th scope="col">Seats</th>
            <th scope="col">Gallagher index</th>
          </tr>
        </thead>
        <tfoot>
          <tr>
            <th>Average</th>
            <td>120</td>
            <td>1.337</td>
          </tr>
        </tfoot>
        <tbody>
          <tr data-href="/2020">
            <th scope="row">2020 General Election</th>
            <td>120</td>
            <td>1.337</td>
          </tr>
          <tr data-href="/2017">
            <th scope="row">2017 General Election</th>
            <td>120</td>
            <td>1.337</td>
          </tr>
          <tr data-href="/2014">
            <th scope="row">2014 General Election</th>
            <td>120</td>
            <td>1.337</td>
          </tr>
          <tr data-href="/2011">
            <th scope="row">2011 General Election</th>
            <td>120</td>
            <td>1.337</td>
          </tr>
          <tr data-href="/2008">
            <th scope="row">2008 General Election</th>
            <td>120</td>
            <td>1.337</td>
          </tr>
          <tr data-href="/2005">
            <th scope="row">2005 General Election</th>
            <td>120</td>
            <td>1.337</td>
          </tr>
          <tr data-href="/2002">
            <th scope="row">2002 General Election</th>
            <td>120</td>
            <td>1.337</td>
          </tr>
          <tr data-href="/1999">
            <th scope="row">1999 General Election</th>
            <td>120</td>
            <td>1.337</td>
          </tr>
          <tr data-href="/1996">
            <th scope="row">1996 General Election</th>
            <td>120</td>
            <td>1.337</td>
          </tr>
        </tbody>
      </Table>
    </Main>
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
