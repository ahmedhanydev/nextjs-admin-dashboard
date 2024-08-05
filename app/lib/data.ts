import { Product, User } from "./models";
import { connectToDB } from "./utils";

export const fetchUsers = async (q: string, page: number) => {
  const regex = new RegExp(q, "i");

  const itemsPerPage = 2;
  try {
    await connectToDB();
    const count = await User.countDocuments({ username: { $regex: regex } });
    const users = await User.find({ username: { $regex: regex } })
      .limit(itemsPerPage)
      .skip(itemsPerPage * (page - 1));
    return { count, users };
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch users");
  }
};
export const fetchUser = async (id: string) => {
  try {
    connectToDB();
    const user = await User.findById(id);
    return user;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch user");
  }
};

export const fetchProducts = async (q: string, page: number) => {
  const regex = new RegExp(q, "i");

  const itemsPerPage = 2;
  try {
    await connectToDB();
    const count = await Product.countDocuments({ title: { $regex: regex } });
    const products = await Product.find({ title: { $regex: regex } })
      .limit(itemsPerPage)
      .skip(itemsPerPage * (page - 1));
    return { count, products };
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch products");
  }
};
export const fetchProduct = async (id: string) => {
  try {
    connectToDB();
    const product = await Product.findById(id);
    return product;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch product");
  }
};
