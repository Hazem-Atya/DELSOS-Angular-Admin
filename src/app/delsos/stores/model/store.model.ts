export class Address {
  city: String;
  country: String;
  postalCode: String;
  address: String;
}

export class Store {
  _id: string;
  __v: string;
  name: string;
  username: string;
  email: string;
  website: string;
  file: string;
  role: string;
  address: Address;
  phoneNumber: string;
  status: string;
  description: string;
  source: {
    filename: { type: String, required: false },
    mimetype: { type: String, required: false },
    path: { type: String },
    originalname: { type: String },
  };
  createdAt:Date;
  updatedAt: Date;
}


