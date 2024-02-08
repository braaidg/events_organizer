"use server";

import { handleError } from "../utils";
import { connectToDb } from "../mongodb/database";
import Category from "../mongodb/database/models/category.model";
import { CreateCategoryParams } from "@/types";

export const createCategory = async ({
  categoryName,
}: CreateCategoryParams) => {
  try {
    const newCategory = await Category.create({ name: categoryName });

    return JSON.parse(JSON.stringify(newCategory));
  } catch (error) {
    handleError(error);
  }
};

export const getAllCategories = async () => {
  try {
    await connectToDb();

    const categories = await Category.find();

    return JSON.parse(JSON.stringify(categories));
  } catch (error) {
    handleError(error);
  }
};
