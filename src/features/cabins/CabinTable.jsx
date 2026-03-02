import Spinner from "../../ui/Spinner";
import CabinRow from "./CabinRow";
import { useCabins } from "./useCabins";
import Table from "../../ui/Table";

export default function CabinTable() {
  const { isPending, cabins } = useCabins();
  if (isPending) return <Spinner />;
  return (
    <Table role="table" columns="0.6fr 1.8fr 2.2fr 1fr 1fr 1fr">
      <Table.Header>
        <div>Cabin</div>
        <div>Name</div>
        <div>Capacity</div>
        <div>Price</div>
        <div>Discount</div>
      </Table.Header>
      {cabins.map((cabin) => (
        <CabinRow cabin={cabin} key={cabin.id} />
      ))}
    </Table>
  );
}
