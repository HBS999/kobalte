import { ParentComponent } from "solid-js";

import { SelectBase, SelectBaseComposite, SelectBaseProps } from "./select-base";

export interface MultiSelectSelectProps extends Omit<SelectBaseProps, "selectionMode"> {}

export const MultiSelect: ParentComponent<MultiSelectSelectProps> & SelectBaseComposite = props => {
  return <SelectBase selectionMode="multiple" disallowEmptySelection={false} {...props} />;
};

MultiSelect.Label = SelectBase.Label;
MultiSelect.Description = SelectBase.Description;
MultiSelect.ErrorMessage = SelectBase.ErrorMessage;
MultiSelect.Trigger = SelectBase.Trigger;
MultiSelect.Value = SelectBase.Value;
MultiSelect.Icon = SelectBase.Icon;
MultiSelect.Portal = SelectBase.Portal;
MultiSelect.Positioner = SelectBase.Positioner;
MultiSelect.Arrow = SelectBase.Arrow;
MultiSelect.Panel = SelectBase.Panel;
MultiSelect.Listbox = SelectBase.Listbox;
MultiSelect.Separator = SelectBase.Separator;
MultiSelect.Group = SelectBase.Group;
MultiSelect.GroupLabel = SelectBase.GroupLabel;
MultiSelect.Option = SelectBase.Option;
MultiSelect.OptionLabel = SelectBase.OptionLabel;
MultiSelect.OptionDescription = SelectBase.OptionDescription;
MultiSelect.OptionIndicator = SelectBase.OptionIndicator;
