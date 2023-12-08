import { Button, Form, Input, InputNumber, Select } from "antd";
import PosSelect from "./PosSelect";
import ChannelSelect from "./ChannelSelect";
import { useLocalStorage } from "../hooks/useStorage";
import { apiService } from "../service/apiService";

const BUSINESS_TYPES = [
  { value: "SMB", label: "SMB" },
  { value: "Midmarket", label: "Midmarket" },
  { value: "Enterprise", label: "Enterprise" },
];

export default function AccountRegister() {
  const [firstName, setFirstName, removeFirstName] = useLocalStorage<string>(
    "firstName",
    ""
  );
  const [lastName, setLastName, removeLastName] = useLocalStorage<string>(
    "lastName",
    ""
  );
  // const [lastName, setLastName] = useState<string>("testsdfdf");

  const [businessName, setBusinessName, removeBusinessName] = useLocalStorage<
    string | undefined
  >("businessName", "");
  const [businessSize, setBusinessSize, removeBusinessSize] = useLocalStorage<
    number | undefined
  >("businessSize", undefined);
  const [businessType, setBusinessType, removeBusinessType] = useLocalStorage<
    string | undefined
  >("businessType", undefined);
  const [pos, setPos, removePos] = useLocalStorage<string | undefined>(
    "pos",
    undefined
  );
  const [channel, setChannel, removeChannel] = useLocalStorage<
    string | undefined
  >("channel", undefined);

  const [form] = Form.useForm();

  const resetForm = () => {
    removeFirstName();
    removeLastName();
    removeBusinessName();
    removeBusinessSize();
    removeBusinessType();
    removePos();
    removeChannel();
  };

  // const checkCustomSelect = async (_: any, value: string | undefined) => {
  //   if (!pos) {
  //     return Promise.reject(new Error("Please select a Point of Sale."));
  //   }
  //   // Add additional custom validation logic here if needed
  //   return Promise.resolve();
  // };

  const onFinish = async (values: any) => {
    console.log("Received values of form: ", values);
    // console.log({
    //   firstName,
    //   lastName,
    //   businessName,
    //   businessSize,
    //   businessType,
    //   pos,
    //   channel,
    // });

    const result = await apiService.saveAccount({
      firstName,
      lastName,
      businessName,
      businessSize,
      businessType,
      pos,
      channel,
    });

    console.log({ result });
  };

  return (
    <div className="rounded-xl w-2/3 max-w-4xl bg-[#038851] p-4 bg-logo-pattern">
      <Form
        form={form}
        layout="vertical"
        className="w-full px-8 py-12 bg-white rounded-lg shadow-lg grid gap-y-4"
        // name="account registration"
        scrollToFirstError
        onFinish={onFinish}
      >
        <div className="grid grid-cols-1 gap-x-2 2xl:grid-cols-2">
          <Form.Item
            label="First Name"
            // name="firstName"
            className="font-medium"
            required
            rules={[
              {
                required: true,
                message: "First name is required.",
              },
            ]}
          >
            <Input
              placeholder="First name"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
          </Form.Item>
          <Form.Item
            label="Last Name"
            // name="lastName"
            className="font-medium"
            required
            rules={[
              {
                required: true,
                message: "Last name is required.",
              },
            ]}
          >
            {/* {lastName} */}
            <Input
              placeholder="Last name"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
          </Form.Item>
        </div>

        <div className="grid grid-cols-1 gap-x-2 2xl:grid-cols-2">
          <Form.Item
            label="Business Name"
            required
            // name="businessName"
            rules={[
              {
                required: true,
                message: "Business name is required.",
              },
            ]}
            className="font-medium"
          >
            <Input
              placeholder="Business Name"
              value={businessName}
              onChange={(e) => {
                setBusinessName(e.target.value);
              }}
            />
          </Form.Item>
          <div className="grid grid-cols-1 gap-x-2 2xl:grid-cols-2">
            <Form.Item
              label="Business Size"
              required
              className="font-medium"
              // name="businessSize"
              rules={[
                {
                  required: true,
                  message: "Business size is required.",
                },
              ]}
            >
              <InputNumber
                placeholder="Business Size"
                className="w-full"
                value={businessSize}
                onChange={(value) => {
                  setBusinessSize(value as number);
                }}
              />
            </Form.Item>
            <Form.Item
              label="Business Type"
              required
              className="font-medium"
              // name="businessType"
              rules={[
                {
                  required: true,
                  message: "Business type is required",
                },
              ]}
            >
              <Select
                placeholder="choose from list"
                value={businessType}
                onChange={(value) => setBusinessType(value)}
                options={BUSINESS_TYPES}
              />
            </Form.Item>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-x-2 2xl:grid-cols-2">
          <Form.Item
            label="Point of Sale used by business"
            className="font-medium"
            required
            // name="pos"
            // rules={[
            //   {
            //     // required: true,
            //     // message: "Point of Sale is required.",
            //     validator: checkCustomSelect,
            //   },
            // ]}
          >
            <PosSelect pos={pos} setPos={setPos} />
          </Form.Item>
          <Form.Item
            label="Delivery Channel used by business"
            className="font-medium"
            required
            // name="channel"
            // rules={[
            //   {
            //     // required: true,
            //     // message: "Delivery channel is required.",
            //     validator: checkCustomSelect,
            //   },
            // ]}
          >
            <ChannelSelect channel={channel} setChannel={setChannel} />
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
