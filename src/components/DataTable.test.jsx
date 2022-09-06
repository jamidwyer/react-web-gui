import React from 'react';
import { createRenderer } from 'react-test-renderer/shallow';
import DataTable from './DataTable';

const cols = [
  { header: 'ID', name: 'id' },
  { header: 'Name', name: 'name' },
  { header: 'Email', name: 'email' },
];
const rows = [
  { id: '5', name: 'John', email: 'john@example.com' },
  { id: '6', name: 'Liam', email: 'liam@example.com' },
  {
    id: '7',
    name: 'Maya',
    email: 'maya@example.com',
    someTest: 10,
  },
  {
    id: '8',
    name: 'Oliver',
    email: 'oliver@example.com',
    hello: 'hello world',
  },
  { id: '25', name: 'Amelia', email: 'amelia@example.com' },
];

const setup = (propOverrides) => {
  const props = { ...propOverrides};

  const renderer = createRenderer();

  renderer.render(<DataTable rows={rows} cols={cols} />);
  const output = renderer.getRenderOutput();

  return {
    props,
    output,
    renderer,
  };
};

it('renders table rows based on provided columns', () => {
  const { output } = setup();
  // There should be ONLY 1 table element
  const table = output;
  expect(table.type).toBe('table');

  // The table should have ONLY 1 thead element
  const head = table.props.children[0];
  expect(head.type).toBe('thead');
});
