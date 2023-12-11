import { Select } from "antd";
import type { ImageOption } from "./AccountRegister/type";

type SelectWithImageProps = {
  options: ImageOption[];
  value?: string | undefined;
  onChange?: (value: string) => void;
  isLoading: boolean;
  placeholder?: string;
};

export default function SelectWithImage({
  options,
  value = undefined,
  onChange,
  isLoading,
  placeholder = "choose from list",
}: SelectWithImageProps) {
  return (
    <>
      <Select
        placeholder={placeholder}
        loading={isLoading}
        showSearch
        optionFilterProp="children"
        filterOption={(input, option) => {
          return (option?.label.toLowerCase() ?? "").includes(
            input.toLowerCase()
          );
        }}
        options={options}
        optionRender={(option) => (
          <div className="flex items-center gap-x-2 my-1">
            <img
              src={option.data.imgIcon}
              alt={option.data.label}
              className="h-10"
            />
            {option.data.label}
          </div>
        )}
        value={value}
        onChange={(value) => onChange?.(value)}
      />
    </>
  );
}
