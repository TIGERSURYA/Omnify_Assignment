import { User, columns } from "./columns"
import { DataTable } from "./data-table"

async function getUsers(): Promise<User[]> {
  // Fetch data from your API here.
    const res = await fetch('https://666985dc2e964a6dfed57e60.mockapi.io/user') // Fetching Data from an api
    const data = await res.json()
  return data

}

export default async function Table() {
  const data = await getUsers()

  return (
    <div className="container flex flex-col h-screen justify-center mx-auto my-auto px-3 py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
