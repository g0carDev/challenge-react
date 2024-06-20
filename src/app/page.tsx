import { obtenmasApi } from "@/api";
import { Header, SearchInput, TableBank } from "@/components";

export default async function Home() {
  const { data } = await obtenmasApi.get("/banks");
  console.log(data);
  return (
    <main>
      <Header />
      <SearchInput />
      <TableBank />
    </main>
  );
}
