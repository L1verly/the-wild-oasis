import { formatCurrency } from "../../utils/helpers";
import Stat from "./Stat";
import {
  BanknotesIcon,
  BriefcaseIcon,
  CalendarDaysIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";

export default function Stats({
  bookings,
  confirmedStays,
  cabinCount,
  numDays,
}) {
  const numBookings = bookings.length;
  const sales = bookings.reduce((acc, cur) => acc + cur.totalPrice, 0);
  const checkIns = confirmedStays.length;
  const occupation =
    confirmedStays.reduce((acc, cur) => acc + cur.numNights, 0) /
    (numDays * cabinCount);

  return (
    <>
      <Stat
        title="Bookings"
        color="blue"
        icon={<BriefcaseIcon />}
        value={numBookings}
      />
      <Stat
        title="Sales"
        color="green"
        icon={<BanknotesIcon />}
        value={formatCurrency(sales)}
      />
      <Stat
        title="Check ins"
        color="indigo"
        icon={<CalendarDaysIcon />}
        value={checkIns}
      />
      <Stat
        title="Occupancy rate"
        color="yellow"
        icon={<ChartBarIcon />}
        value={Math.round(occupation * 100) + "%"}
      />
    </>
  );
}
