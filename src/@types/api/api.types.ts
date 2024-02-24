export type userInfo = {
  device_brand: string;
  model: string;
  processor: string;
  sdk_int: number;
  username: string;
  vehicle_brand: string;
  vehicle_cc: string;
  vehicle_type: string;
  zone: string;
};

export type apiResponse = {
  data: userInfo[];
  msg: string;
  status: boolean;
};
