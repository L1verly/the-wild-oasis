import Spinner from "../../ui/Spinner";
import CabinRow from "./CabinRow";
import { useCabins } from "./useCabins";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import { useSearchParams } from "react-router";

export default function CabinTable() {
  const { isPending, cabins } = useCabins();
  const [searchParams] = useSearchParams();

  if (isPending) return <Spinner />;

  const filterValue = searchParams.get("discount") || "all";
  console.log(filterValue);

  let filteredCabins;
  if (filterValue === "all") filteredCabins = cabins;
  else if (filterValue === "with-discount")
    filteredCabins = cabins.filter((cabin) => cabin.discount);
  else if (filterValue === "no-discount")
    filteredCabins = cabins.filter((cabin) => !cabin.discount);

  return (
    <Menus>
      <Table role="table" columns="0.6fr 1.8fr 2.2fr 1fr 1fr 1fr">
        <Table.Header>
          <div>Cabin</div>
          <div>Name</div>
          <div>Capacity</div>
          <div>Price</div>
          <div>Discount</div>
        </Table.Header>
        <Table.Body
          data={filteredCabins}
          render={(cabin) => <CabinRow cabin={cabin} key={cabin.id} />}
        />
      </Table>
    </Menus>
  );
}
