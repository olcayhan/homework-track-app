import { Search } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function SearchFilterNavbar() {
  return (
    <div className="sticky bg-neutral-50 z-50 top-0 w-full flex gap-4 p-2 border-b-[1px] border-b-neutral-400">
      <div className="relative w-full">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
        <Input placeholder="Search" type="text" className="flex-auto pl-8" />
      </div>
      <Button className="w-1/4">Filter</Button>
    </div>
  );
}
