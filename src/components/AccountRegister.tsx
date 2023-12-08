import { Form, Input, InputNumber, Select } from "antd";
import PosSelect from "./PosSelect";
import ChannelSelect from "./ChannelSelect";

const BUSINESS_TYPES = [
  { value: "SMB", label: "SMB" },
  { value: "Midmarket", label: "Midmarket" },
  { value: "Enterprise", label: "Enterprise" },
];

export default function AccountRegister() {
  return (
    <div className="bg-white p-8 rounded-xl w-1/2 max-w-4xl ">
      <Form layout="vertical" className="w-full">
        <div className="grid grid-cols-1 gap-x-2 2xl:grid-cols-2">
          <Form.Item label="First Name" className="font-medium">
            <Input placeholder="First name" />
          </Form.Item>
          <Form.Item label="Last Name" className="font-medium">
            <Input placeholder="Last name" />
          </Form.Item>
        </div>

        <div className="grid grid-cols-1 gap-x-2 2xl:grid-cols-[2fr_1fr_1fr]">
          <Form.Item label="Business Name" className="font-medium">
            <Input placeholder="Business Name" />
          </Form.Item>
          <Form.Item label="Business Size" className="font-medium">
            <InputNumber
              placeholder="Business Size, eg. 100"
              min={1}
              className="w-full"
            />
          </Form.Item>
          <Form.Item label="Business Type" className="font-medium">
            <Select
              placeholder="choose from list"
              // onChange={handleChange}
              options={BUSINESS_TYPES}
            />
          </Form.Item>
        </div>

        <div className="grid grid-cols-1 gap-x-2 2xl:grid-cols-2">
          <Form.Item
            label="Point of Sale used by business"
            className="font-medium"
          >
            <PosSelect />
          </Form.Item>
          <Form.Item
            label="Delivery Channel used by business"
            className="font-medium"
          >
            {/* <Select
              placeholder="choose from list"
              // onChange={handleChange}
              options={BUSINESS_TYPES}
            /> */}
            <ChannelSelect />
          </Form.Item>
        </div>
      </Form>
    </div>
  );
}
