// import General from "@/components/Cards/General";
import General1 from "@/components/Cards/General1";
import Calendar from "@/components/Cards/Calendar";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TableCaption } from "@/components/ui/table";
import { TableComponent } from "@/components/Cards/Table";
import Lines from "@/components/Cards/Lines";
import { DataTableComponent } from "@/components/Cards/DataTable";

export default function Home() {
  return (
    <div className="grid gap-[32px]">
      <div className="grid xl:grid-cols-2 gap-[32px]">
        <General1 />
        <div className="grid gap-[32px]">
          <Calendar />
          <Calendar />
        </div>
      </div>
      <div className="grid lg:grid-cols-3 gap-[32px] lg:h-[300px] overflow-hidden">
        <Lines />
        <Card className="overflow-y-scroll">
          <CardHeader>
            <CardTitle>Orders</CardTitle>
            <CardDescription>
              These are the orders of this month
            </CardDescription>
          </CardHeader>
          <div className="px-4">
            <TableComponent />
          </div>
        </Card>
        <Card className="overflow-y-scroll">
          <CardHeader>
            <CardTitle>Users</CardTitle>
            <CardDescription>These are the users of this month</CardDescription>
          </CardHeader>
          <div className="px-4">
            <DataTableComponent />
          </div>
        </Card>
      </div>
    </div>
  );
}
