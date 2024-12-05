import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Search } from "lucide-react";

interface SearchBarProps {
    searchText: string;
    isSearchVisible: boolean;
    setSearchText: (text: string) => void;
    setIsSearchVisible: (visible: boolean) => void;
  }
  
  export const SearchBar = ({ searchText, isSearchVisible, setSearchText, setIsSearchVisible }: SearchBarProps) => (
    <div className="flex w-full">
      <Button variant="ghost" size="icon" onClick={() => setIsSearchVisible(!isSearchVisible)}>
        <Search className="h-5 w-5" />
      </Button>
      <div className={`flex flex-col transition-all duration-200 w-full ${isSearchVisible ? "h-auto opacity-100" : "h-0 opacity-0 overflow-hidden"}`}>
        <Input
          className="p-2"
          variant="default"
          type="text"
          placeholder="Search todos..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>
    </div>
  );