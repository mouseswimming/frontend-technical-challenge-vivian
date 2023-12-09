import { Button, Form, Input, InputNumber, Select } from "antd";
import PosSelect from "./PosSelect";
import ChannelSelect from "./ChannelSelect";
import { useLocalStorage } from "../hooks/useStorage";
import { useEffect } from "react";
import { apiService } from "../service/apiService";

const BUSINESS_TYPES = [
  { value: "SMB", label: "SMB" },
  { value: "Midmarket", label: "Midmarket" },
  { value: "Enterprise", label: "Enterprise" },
];

const ERROR_MESSAGE = "This field is required.";
const validateMessages = {
  required: ERROR_MESSAGE,
};

export default function AccountRegister() {
  const [formValue, setFormValue, removeFormValue] = useLocalStorage<
    string | undefined
  >("accountForm", undefined);

  const [form] = Form.useForm();

  const updateStorage = (_changedValues: any, allValues: any) => {
    setFormValue(JSON.stringify(allValues));
  };

  const checkCustomSelect = async (_: any, value: string | undefined) => {
    if (!value) {
      return Promise.reject(new Error(ERROR_MESSAGE));
    }
    return Promise.resolve();
  };

  const resetForm = () => {
    removeFormValue();
  };

  const onFinish = async (values: any) => {
    console.log("Received values of form: ", values);
    const result = await apiService.saveAccount(values);

    if (result.status === "success") {
      removeFormValue();
    }
  };

  useEffect(() => {
    formValue ? form.setFieldsValue(JSON.parse(formValue)) : form.resetFields();
  }, [formValue]);

  return (
    <div className="rounded-xl w-2/3 max-w-4xl bg-[#038851] p-4 bg-logo-pattern">
      <Form
        form={form}
        layout="vertical"
        className="w-full px-8 py-12 bg-white rounded-lg shadow-lg grid gap-y-4"
        name="account registration"
        scrollToFirstError
        validateMessages={validateMessages}
        onValuesChange={updateStorage}
        onFinish={onFinish}
      >
        <div className="grid grid-cols-1 gap-x-2 2xl:grid-cols-2">
          <Form.Item
            label="First Name"
            name="firstName"
            className="font-medium"
            required
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input placeholder="First name" />
          </Form.Item>
          <Form.Item
            label="Last Name"
            name="lastName"
            className="font-medium"
            required
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input placeholder="Last name" />
          </Form.Item>
        </div>

        <div className="grid grid-cols-1 gap-x-2 2xl:grid-cols-2">
          <Form.Item
            label="Business Name"
            required
            name="businessName"
            rules={[
              {
                required: true,
              },
            ]}
            className="font-medium"
          >
            <Input placeholder="Business Name" />
          </Form.Item>
          <div className="grid grid-cols-1 gap-x-2 2xl:grid-cols-2">
            <Form.Item
              label="Business Size"
              required
              className="font-medium"
              name="businessSize"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <InputNumber placeholder="Business Size" className="w-full" />
            </Form.Item>
            <Form.Item
              label="Business Type"
              required
              className="font-medium"
              name="businessType"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Select placeholder="choose from list" options={BUSINESS_TYPES} />
            </Form.Item>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-x-2 2xl:grid-cols-2">
          <Form.Item
            label="Point of Sale used by business"
            className="font-medium"
            required
            name="pos"
            rules={[
              {
                validator: checkCustomSelect,
              },
            ]}
          >
            <PosSelect />
          </Form.Item>
          <Form.Item
            label="Delivery Channel used by business"
            className="font-medium"
            required
            name="channel"
            rules={[
              {
                validator: checkCustomSelect,
              },
            ]}
          >
            <ChannelSelect />
          </Form.Item>
        </div>

        <div className="flex gap-x-4 justify-center mt-8">
          <Button
            htmlType="submit"
            type="primary"
            shape="round"
            size="large"
            className="w-1/3"
          >
            Create account
          </Button>
          <Button
            shape="round"
            size="large"
            className="w-1/3"
            onClick={() => resetForm()}
          >
            Reset
          </Button>
        </div>
      </Form>
    </div>
  );
}
