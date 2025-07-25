import QueryBuilder from "../../builder/QueryBuilder"
import { Product } from "./product.model"


const getAllProductsFromDB = async (query: Record<string, unknown>) => {
  const courseQuery = new QueryBuilder(
    Product.find().populate(''),
    query
  )
    .search([])
    .filter()
    .sort()
    .paginate()
    .fields()

  const result = await courseQuery.modelQuery
  const meta = await courseQuery.countTotal()

  return {
    meta,
    result,
  }
}


export const ProductServices = {
  getAllProductsFromDB,

}
