import { apiService } from "../../service/apiService";
import { useEffect } from "react";
import { message } from "antd";

import SelectWithImage from "../SelectWithImage";
import type { PosType } from "./type";
import { MESSAGES } from "./const";
import { useDataFetching } from "../../hooks/useDataFetching";

type PosSelectProps = {
  value?: string | undefined;
  onChange?: (value: string) => void;
};

export default function PosSelect({
  value = undefined,
  onChange,
}: PosSelectProps) {
  const { data, isLoading, error } = useDataFetching<PosType[]>({
    apiMethod: apiService.getPOS,
  });

  const posOptions = data
    ? data.map((o) => ({
        value: o.id,
        label: o.name,
        imgIcon: o.imageUrl,
      }))
    : [];

  const [messageApi, contextHolder] = message.useMessage();
  useEffect(() => {
    if (error) {
      messageApi.open({
        type: "error",
        content: MESSAGES.POS_LOADING_FAIL,
      });
    }
  }, [error]);

  return (
    <>
      {contextHolder}
      <SelectWithImage
        options={posOptions}
        value={value}
        onChange={onChange}
        isLoading={isLoading}
      />
    </>
  );
}
