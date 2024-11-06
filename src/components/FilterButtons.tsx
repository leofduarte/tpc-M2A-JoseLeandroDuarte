import { Button } from "./ui/button";
import { FilterType } from "../types/items";


interface FilterButtonsProps {
    activeFilter: FilterType;
    setActiveFilter: (filter: FilterType) => void;
}
  
  export const FilterButtons = ({ activeFilter, setActiveFilter }: FilterButtonsProps) => (
    <div className="space-x-2 mx-auto text-center flex-auto flex">
      {Object.values(FilterType).map((filter) => (
        <Button
          key={filter}
          variant={activeFilter === filter ? "default" : "outline"}
          className={`border flex-1 ${activeFilter === filter ? "" : "text-neutral-500"}`}
          onClick={() => setActiveFilter(filter)}
        >
          {filter}
        </Button>
      ))}
    </div>
  );