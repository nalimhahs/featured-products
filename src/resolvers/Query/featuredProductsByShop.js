import { getPaginatedResponse } from "@reactioncommerce/reaction-graphql-utils";
import { decodeShopOpaqueId } from "@reactioncommerce/reaction-graphql-xforms/shop";

export default async function featuredProductsByShop(_, args, context) {
  const { shopId: opaqueShopId, ...connectionArgs } = args;

  const shopId = decodeShopOpaqueId(opaqueShopId);

  const results = await context.queries.featuredProductsByShop(context, { shopId });
  return getPaginatedResponse(results, connectionArgs);
}
