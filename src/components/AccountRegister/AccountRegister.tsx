import { Button, Form, Input, InputNumber, Select, message } from "antd";
import PosSelect from "./PosSelect";
import ChannelSelect from "./ChannelSelect";
import { useLocalStorage } from "../../hooks/useStorage";
import { useEffect } from "react";
import { apiService } from "../../service/apiService";
import { MESSAGES, BUSINESS_TYPES } from "./const";

const validateMessages = {
  required: MESSAGES.REQUIRED_ERROR,
};

export default function AccountRegister() {
  const [formValue, setFormValue, removeFormValue] = useLocalStorage<
    string | undefined
  >("accountForm", undefined);

  const [messageApi, contextHolder] = message.useMessage();
  const [form] = Form.useForm();

  const updateStorage = (_changedValues: any, allValues: any) => {
    setFormValue(JSON.stringify(allValues));
  };

  const customSelectValidate = async (_: any, value: string | undefined) => {
    if (!value) {
      return Promise.reject(new Error(MESSAGES.REQUIRED_ERROR));
    }
    return Promise.resolve();
  };

  const businessSizeValidate = (_: any, value: number | undefined) => {
    if (value && value > 0) {
      return Promise.resolve();
    }
    return Promise.reject(new Error(MESSAGES.BUSINESS_SIZE_ERROR));
  };

  const resetForm = () => {
    removeFormValue();
  };

  const onFinish = async (values: any) => {
    const result = await apiService.saveAccount(values);

    if (result.status === "success") {
      messageApi.open({
        type: "success",
        content: MESSAGES.SUBMIT_SUCCESS,
      });
      removeFormValue();
    } else {
      messageApi.open({
        type: "error",
        content: MESSAGES.SUBMIT_ERROR,
      });
    }
  };

  useEffect(() => {
    formValue ? form.setFieldsValue(JSON.parse(formValue)) : form.resetFields();
  }, [formValue]);

  return (
    <>
      {contextHolder}
      <div className="rounded-xl w-full max-w-4xl bg-[#038851] m-4 p-4 bg-logo-pattern">
        <Form
          form={form}
          layout="vertical"
          className="w-full px-8 pb-12 bg-white rounded-lg shadow-lg grid gap-y-4"
          name="account registration"
          scrollToFirstError
          validateMessages={validateMessages}
          onValuesChange={updateStorage}
          onFinish={onFinish}
        >
          <h2 className="text-3xl font-bold text-brand-green my-12 text-center">
            Account Registration
          </h2>
          <div className="grid grid-cols-1 gap-x-2 lg:grid-cols-2">
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
              <Input placeholder="First name" autoFocus />
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

          <div className="grid grid-cols-1 gap-x-2 lg:grid-cols-2">
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
            <div className="grid grid-cols-1 gap-x-2 lg:grid-cols-2">
              <Form.Item
                label="Business Size"
                required
                className="font-medium"
                name="businessSize"
                rules={[
                  {
                    validator: businessSizeValidate,
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
                <Select
                  placeholder="choose from list"
                  options={BUSINESS_TYPES}
                />
              </Form.Item>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-x-2 lg:grid-cols-2">
            <Form.Item
              label="Point of Sale used by business"
              className="font-medium"
              required
              name="pos"
              rules={[
                {
                  validator: customSelectValidate,
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
                  validator: customSelectValidate,
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
    </>
  );
}
