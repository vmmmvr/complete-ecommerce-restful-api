import Customer from "../../Types/customer";

interface Repo<T> {
  create(input: T): Promise<T>;
}

export default Repo;
