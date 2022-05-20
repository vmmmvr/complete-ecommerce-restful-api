import { nanoid } from "nanoid";
import Failure from "../../../core/Failure";
import { CustomerRepo } from "../../../repositories";
import Customer from "../../../Types/customer";

const customerRepo = new CustomerRepo();
export const createCustomer = async (input: Customer) => {
  try {
    const uuid = nanoid();
    const newCustomer = await customerRepo.create({ uuid, ...input });

    return newCustomer;
  } catch (failure: any) {
    throw failure;
  }
};
