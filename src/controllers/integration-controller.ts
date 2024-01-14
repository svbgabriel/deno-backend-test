import { Context } from "hono";
import { format, parseISO } from "date-fns";
import config from "../config.ts";
import Opportunity from "../models/opportunity.ts";
import { makeXML } from "../lib/helpers.ts";
import { IDeal } from "../interfaces.ts";

export const store = async (c: Context) => {
  // Recupera as oportunidades com status igual a ganho (won) no Pipedrive
  const dealsResponse = await fetch(
    `${config.pipedriveBaseUrl}/v1/deals?api_token=${config.pipedriveToken}&status=won`
  );
  const deals = await dealsResponse.json();

  // Insere as oportunidades ganhas como pedido no Bling
  const orders = await Promise.all(
    deals.data.flatMap(async (deal: IDeal) => {
      const xml = makeXML(deal);
      const formData = new URLSearchParams();
      formData.append("apikey", config.blingToken);
      formData.append("xml", xml);
      const orderResponse = await fetch(
        `${config.blingBaseUrl}/Api/v2/pedido/json/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: formData,
        }
      );

      const order = await orderResponse.json();

      return order.retorno.pedidos;
    })
  );

  const ordersFlat = orders.flat();

  // Grava os dados consolidados no banco
  ordersFlat.forEach(async (order) => {
    const number = order.pedido.numero;
    const retrivedOrderResponse = await fetch(
      `${config.blingBaseUrl}/Api/v2/pedido/${number}/json?apikey=${config.blingToken}`
    );
    const retrivedOrder = await retrivedOrderResponse.json();

    const retrivedOrderPedido = retrivedOrder.retorno.pedidos[0].pedido;
    const formatedDate = format(
      parseISO(retrivedOrderPedido.data),
      "yyyy-MM-dd"
    );

    await Opportunity.create({
      date: formatedDate,
      value: retrivedOrderPedido.totalvenda,
    });
  });

  return c.json({ total: orders.length });
};

export const list = async (c: Context) => {
  const opportunities = await Opportunity.aggregate([
    {
      $group: {
        _id: { date: "$date" },
        total: {
          $sum: "$value",
        },
      },
    },
  ]);
  return c.json({
    data: opportunities[0]._id.date,
    valorTotal: opportunities[0].total,
  });
};
