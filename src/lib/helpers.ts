interface Deal {
  org_name: string;
  won_time: string;
  title: string;
  value: number;
}

export const makeXML = (deal: Deal) => {
  return `<?xml version="1.0" encoding="UTF-8"?>
    <pedido>
        <cliente>
            <nome>${deal.org_name}</nome>
            <data>${deal.won_time}</data>
        </cliente>
        <itens>
          <item>
              <codigo>001</codigo>
              <descricao>${deal.title}</descricao>
              <un>un</un>
              <qtde>1</qtde>
              <vlr_unit>${deal.value}</vlr_unit>
          </item>
        </itens>
    </pedido>
    `;
};
