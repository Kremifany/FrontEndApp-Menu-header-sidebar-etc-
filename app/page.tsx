// import General from "@/components/Cards/General";
import General1 from "@/components/Cards/General1";
import Calendar from "@/components/Cards/Calendar";
import { Card } from "@/components/ui/card";
import { TableCaption } from "@/components/ui/table";
import { TableComponent } from "@/components/Cards/Table";
import Lines from "@/components/Cards/Lines";

export default function Home() {
  return (
    <div className="grid gap-[32px]">
      <div className="grid grid-cols-2 gap-[32px]">
        <General1 />
        <div className="grid gap-[32px]">
          <Calendar />
          <Calendar />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-[32px] h-[300px] overflow-hidden">
        <Lines />
        <TableComponent />
        <Card>Hello world</Card>
      </div>
    </div>
  );
}
