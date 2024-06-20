import { obtenmasApi } from "@/api";
import { Header, SearchInput, TableBank } from "@/components";

export default async function Home() {
  return (
    <main>
      <Header />
      <SearchInput />
      <TableBank />
    </main>
  );
}
