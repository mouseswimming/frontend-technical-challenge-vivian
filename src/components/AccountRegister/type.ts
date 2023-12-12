export type SelectImageOption = {
  value: number;
  label: string;
  imgIcon: string;
};

export type Account = {
  firstName: string;
  lastName: string;
  businessName: string;
  businessSize: number;
  businessType: string;
  channel: number;
  pos: number;
};

export type ChannelType = { id: number; name: string; imageUrl: string };
export type PosType = { id: number; name: string; imageUrl: string };
