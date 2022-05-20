import Failure from "../core/Failure";
import { prisma } from "../db/prisma/prisma";
import Customer from "../Types/customer";
import log from "../utils/logger";
import Repo from "./Interface/Repo";

class CustomerRepo implements Repo<Customer> {
  async create(input: Customer): Promise<Customer> {
    try {
      const customer = await prisma.customer.create({
        data: {
          ...input,
        },
      });

      return customer;
    } catch (e) {
      log.error(e);
      throw new Failure({
        ErrorMessage:
          "cant create user, please make sure you entered the right email",
      });
    }
  }
}

export default CustomerRepo;
