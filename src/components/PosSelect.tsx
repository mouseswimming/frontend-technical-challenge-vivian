import { Select } from "antd";
import { apiService } from "../service/apiService";
import { useEffect, useState } from "react";

type PosOption = {
  value: number;
  label: string;
  imgIcon: string;
};

type PosSelectProps = {
  pos: string | undefined;
  setPos: (value: string) => void;
};

export default function PosSelect({ pos, setPos }: PosSelectProps) {
  const [posOptions, setPosOptions] = useState<PosOption[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchPosData();
  }, []);

  async function fetchPosData() {
    setIsLoading(true);
    const result = await apiService.getPOS();

    if (result.status === "success") {
      setPosOptions(
        result.data.map(
          (option: { id: number; name: string; imageUrl: string }) => ({
            value: option.id,
            label: option.name,
            imgIcon: option.imageUrl,
          })
        )
      );
    } else {
      console.error("Error:", result.error);
      // Handle the error
    }
    setIsLoading(false);
  }

  return (
    <>
      <Select
        placeholder="choose from list"
        loading={isLoading}
        showSearch
        optionFilterProp="children"
        filterOption={(input, option) => {
          return (option?.label.toLowerCase() ?? "").includes(
            input.toLowerCase()
          );
        }}
        options={posOptions}
        optionRender={(option) => (
          <div className="flex items-center gap-x-2 my-1">
            <img
              src={option.data.imgIcon}
              alt={option.data.label}
              className="w-16"
            />
            {option.data.label}
          </div>
        )}
        value={pos}
        onChange={(value) => setPos(value)}
      />
    </>
  );
}
