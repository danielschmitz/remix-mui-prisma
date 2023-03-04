import type { LoaderArgs } from "@remix-run/node"
import { useLoaderData } from "@remix-run/react";
import { DataGrid, GridColDef, GridRowsProp, GridValueGetterParams } from '@mui/x-data-grid';
import Dashboard from "~/dashboard/Dashboard";

export async function loader({ request }: LoaderArgs) {
  return [
    {
      "id": 1,
      "name": "John",
      "email": "john@example.com"
    },
    {
      "id": 2,
      "name": "Sarah",
      "email": "sarah@example.com"
    },
    {
      "id": 3,
      "name": "Mike",
      "email": "mike@example.com"
    }
  ]
};

export default function Index() {

  return (
    <div style={{ fontFamily: "roboto" }}>
      <h1>Welcome to Remix</h1>
      <div>
        <Dashboard/>
      </div>
    </div >
  );
}
