import {ROLE, STATUS} from '../../utils/enums';


export class Shopper {
  adress: string;
  age: number;
  bankDetails: {
    cardNumber: string,
    expirationDate: Date,
    owner: string
  };
  createdAt: Date;
  email: string;
  isConfirmed: boolean;
  name: string;
  phoneNumber: number;
  range: number;
  role: ROLE;
  status: STATUS;
  updatedAt: Date;
  username: string;
  _v: number;
  _id: string;
  previousDeliv: number; // number of the deliveries the shopper chose to deliver
  currentDeliv: number;
  nbStores: number;// the number of stores who hired the sopper
  delivered: number; // the percentage of the deleveries actually delivered
  percentageSuccessfuleliveries;
  imagePath: string;
}
