import { useState } from "react";
import { Combobox, useCombobox } from "@mantine/core";
import { IconAdjustments } from "@tabler/icons-react";

const opt = [
  "Relevance", "Most Recent", "Salary (High to Low)", "Salary (Low to High)"
];

export function Sort() {
  const [selectedItem, setSelectedItem] = useState<string | null>('Relevance');
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const options = opt.map((item) => (
    <Combobox.Option className="!text-xs" value={item} key={item}>
      {item}
    </Combobox.Option>
  ));

  return (
    <Combobox
      store={combobox}
      width={150}
      position="bottom-start"
      onOptionSubmit={(val) => {
        setSelectedItem(val);
        combobox.closeDropdown();
      }}
    >
      <Combobox.Target>
        <div onClick={()=>combobox.toggleDropdown()} className="cursor-pointer border border-bright-sun-400 flex items-center gap-2 px-2 py-1 text-sm rounded-xl">
          {selectedItem} <IconAdjustments className="h-5 w-5 text-bright-sun-400"/>
        </div>
      </Combobox.Target>

      <Combobox.Dropdown>
        <Combobox.Options>{options}</Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
}
