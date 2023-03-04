import * as React from 'react';
import DatagridTest from '../dashboard/DatagridTests'

import type { LoaderArgs } from "@remix-run/node"
import { useLoaderData } from '@remix-run/react';

export async function loader({request}: LoaderArgs) {
  const rows = [
    { id: 1, col1: 'Hello', col2: 'World' },
    { id: 2, col1: 'DataGridPro', col2: 'is Awesome' },
    { id: 3, col1: 'MUI', col2: 'is Amazing' },
];
  return rows
};

export default function Index() {

  const rows = useLoaderData();
  

  return (
    <div style={{ fontFamily: "roboto" }}>
      <h1>Welcome to Remix</h1>
      <div>
       <DatagridTest  rows={rows}/>
      </div>
    </div >
  );
}
