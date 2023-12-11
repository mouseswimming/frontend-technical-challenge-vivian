import { apiService } from "../../service/apiService";
import { useEffect } from "react";
import { message } from "antd";

import SelectWithImage from "../SelectWithImage";
import type { ChannelType } from "./type";
import { MESSAGES } from "./const";
import { useDataFetching } from "../../hooks/useDataFetching";

type ChannelProps = {
  value?: string | undefined;
  onChange?: (value: string) => void;
};

export default function ChannelSelect({
  value = undefined,
  onChange,
}: ChannelProps) {
  const { data, isLoading, error } = useDataFetching<ChannelType[]>({
    apiMethod: apiService.getChannel,
  });

  const channelOptions = data
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
        content: MESSAGES.DELIVER_CHANNELS_LOADING_FAIL,
      });
    }
  }, [error]);

  return (
    <>
      {contextHolder}
      <SelectWithImage
        options={channelOptions}
        value={value}
        onChange={onChange}
        isLoading={isLoading}
      />
    </>
  );
}
