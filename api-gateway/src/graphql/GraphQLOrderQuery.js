import {GraphQLInt, GraphQLList, GraphQLObjectType} from "graphql";
import { OrderType } from "./GraphQLOrderType";

const OrderType = new GraphQLOrderType();

export class GraphQLBooksQuery {

    query= new GraphQLObjectType({
        name: 'Query',
        description: 'Root Query',
        fields: () => ({
            book: {
                type: OrderType.type,
                description: 'query of a single order',
                args: {
                    id: { type: GraphQLInt }
                },
                resolve: async (parent, args) => {
                    let data = await serviceData.fetch(ServiceType.ORDER_SERVICE);
                    return data.orders.find(order => order.id === args.id);
                }

            },
            books: {
                type: new GraphQLList(OrderType.type),
                description: 'query of  a list of orders',
                resolve: async () => {
                    let data = await this.serviceData.fetch(ServiceType.ORDER_SERVICE);
                    return data.orders;
                }
            }
        })
    });

}