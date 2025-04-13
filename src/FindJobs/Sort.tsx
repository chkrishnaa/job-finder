import { useState } from "react";
import { Button, Combobox, useCombobox, Text, Box } from "@mantine/core";
import { IconAdjustments } from "@tabler/icons-react";

const opt = [
  "Relevance", "Most Recent", "Salary (High to Low)", "Salary (Low to High)"
];

export function Sort() {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const options = opt.map((item) => (
    <Combobox.Option value={item} key={item}>
      {item}
    </Combobox.Option>
  ));

  return (
    <Combobox
      store={combobox}
      width={250}
      position="bottom-start"
      withArrow
      onOptionSubmit={(val) => {
        setSelectedItem(val);
        combobox.closeDropdown();
      }}
    >
      <Combobox.Target>
        <Button
          variant="subtle"
          color="bright-sun"
          className="flex items-center gap-2 border border-bright-sun-400"
          onClick={() => combobox.toggleDropdown()}
        >
          <IconAdjustments size={16} />
          {selectedItem || "Sort By"}
        </Button>
      </Combobox.Target>

      <Combobox.Dropdown>
        <Combobox.Options>{options}</Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
}
