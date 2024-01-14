import { Context, Hono } from "hono";

const app = new Hono({ strict: false });

app.get("/v1/deals", (c: Context) => {
  const api_token = c.req.query("api_token");

  if (!api_token) {
    c.status(401);
    return c.json({ message: "Authentication not set" });
  }

  return c.json({
    success: true,
    data: [
      {
        id: 1,
        creator_user_id: {
          id: 8877,
          name: "Creator",
          email: "john.doe@pipedrive.com",
          has_pic: false,
          pic_hash: null,
          active_flag: true,
          value: 8877,
        },
        user_id: {
          id: 8877,
          name: "Creator",
          email: "john.doe@pipedrive.com",
          has_pic: false,
          pic_hash: null,
          active_flag: true,
          value: 8877,
        },
        person_id: {
          active_flag: true,
          name: "Person",
          email: [
            {
              label: "work",
              value: "person@pipedrive.com",
              primary: true,
            },
          ],
          phone: [
            {
              label: "work",
              value: "37244499911",
              primary: true,
            },
          ],
          value: 1101,
        },
        org_id: {
          name: "Organization",
          people_count: 2,
          owner_id: 8877,
          address: "Mustamäe tee 3a, 10615 Tallinn",
          active_flag: true,
          cc_email: "org@pipedrivemail.com",
          value: 5,
        },
        stage_id: 2,
        title: "Deal One",
        value: 5000,
        currency: "EUR",
        add_time: "2019-05-29 04:21:51",
        update_time: "2019-11-28 16:19:50",
        stage_change_time: "2019-11-28 15:41:22",
        active: true,
        deleted: false,
        status: "won",
        probability: null,
        next_activity_date: "2019-11-29",
        next_activity_time: "11:30:00",
        next_activity_id: 128,
        last_activity_id: null,
        last_activity_date: null,
        lost_reason: null,
        visible_to: "1",
        close_time: null,
        pipeline_id: 1,
        won_time: "2019-11-27 11:40:36",
        first_won_time: "2019-11-27 11:40:36",
        lost_time: "2019-11-27 11:40:36",
        products_count: 0,
        files_count: 0,
        notes_count: 2,
        followers_count: 0,
        email_messages_count: 4,
        activities_count: 1,
        done_activities_count: 0,
        undone_activities_count: 1,
        participants_count: 1,
        expected_close_date: "2019-06-29",
        last_incoming_mail_time: "2019-05-29 18:21:42",
        last_outgoing_mail_time: "2019-05-30 03:45:35",
        label: "11",
        stage_order_nr: 2,
        person_name: "Person",
        org_name: "Organization",
        next_activity_subject: "Call",
        next_activity_type: "call",
        next_activity_duration: "00:30:00",
        next_activity_note: "Note content",
        formatted_value: "€5,000",
        weighted_value: 5000,
        formatted_weighted_value: "€5,000",
        weighted_value_currency: "EUR",
        rotten_time: null,
        owner_name: "Creator",
        cc_email: "company+deal1@pipedrivemail.com",
        org_hidden: false,
        person_hidden: false,
      },
    ],
    related_objects: {
      user: {
        "8877": {
          id: 8877,
          name: "Creator",
          email: "john.doe@pipedrive.com",
          has_pic: false,
          pic_hash: null,
          active_flag: true,
        },
      },
      organization: {
        "5": {
          id: 5,
          name: "Organization",
          people_count: 2,
          owner_id: 8877,
          address: "Mustamäe tee 3a, 10615 Tallinn",
          active_flag: true,
          cc_email: "org@pipedrivemail.com",
        },
      },
      person: {
        "1101": {
          active_flag: true,
          id: 1101,
          name: "Person",
          email: [
            {
              label: "work",
              value: "person@pipedrive.com",
              primary: true,
            },
          ],
          phone: [
            {
              label: "work",
              value: "3421787767",
              primary: true,
            },
          ],
          owner_id: 8877,
        },
      },
      stage: {
        "2": {
          id: 2,
          company_id: 123,
          order_nr: 1,
          name: "Stage Name",
          active_flag: true,
          deal_probability: 100,
          pipeline_id: 1,
          rotten_flag: false,
          rotten_days: null,
          add_time: "2015-12-08 13:54:06",
          update_time: "2015-12-08 13:54:06",
          pipeline_name: "Pipeline",
          pipeline_deal_probability: true,
        },
      },
      pipeline: {
        "1": {
          id: 1,
          name: "Pipeline",
          url_title: "Pipeline",
          order_nr: 0,
          active: true,
          deal_probability: true,
          add_time: "2015-12-08 10:00:24",
          update_time: "2015-12-08 10:00:24",
        },
      },
    },
    additional_data: {
      pagination: {
        start: 0,
        limit: 100,
        more_items_in_collection: false,
        next_start: 1,
      },
    },
  });
});

app.post("/Api/v2/pedido/json", async (c: Context) => {
  const formData = await c.req.formData();
  const apikey = formData.get("apikey")?.valueOf();

  if (!apikey) {
    c.status(401);
    return c.json({
      retorno: { erros: { erro: { cod: 3, msg: "API Key invalida" } } },
    });
  }

  return c.json({
    retorno: {
      pedidos: [
        {
          pedido: {
            numero: "82",
            idPedido: 52389274,
            codigos_rastreamento: {
              codigo_rastreamento: "SX052413665BR",
            },
            volumes: [
              {
                volume: {
                  servico: "SEDEX - CONTRATO",
                  codigoRastreamento: "SG016634880BR",
                },
              },
              {
                volume: {
                  servico: "PAC CONTRATO AGENCIA",
                  codigoRastreamento: "EC314697823BR",
                },
              },
            ],
          },
        },
      ],
    },
  });
});

app.get("/Api/v2/pedido/:id/json", (c: Context) => {
  const apikey = c.req.query("apikey");

  if (!apikey) {
    c.status(401);
    return c.json({
      retorno: { erros: { erro: { cod: 3, msg: "API Key invalida" } } },
    });
  }

  return c.json({
    retorno: {
      pedidos: [
        {
          pedido: {
            desconto: "15,00",
            observacoes: "Testando o campo observações do pedido",
            observacaointerna:
              "Testando o campo observações internas do pedido",
            data: "2017-07-28",
            numero: "1",
            numeroPedidoLoja: "100000001",
            vendedor: "João da Silva",
            valorfrete: "22.50",
            totalprodutos: "139.98",
            totalvenda: "147.48",
            situacao: "Em Aberto",
            loja: "123456789",
            dataPrevista: "2017-07-28",
            tipoIntegracao: "Magento",
            cliente: {
              nome: "Organisys Software",
              cnpj: "00.000.000/0000-1",
              ie: "0000000000",
              rg: "162788484",
              endereco: "Rua Visconde de São Gabriel",
              numero: "000",
              complemento: "Sala 000",
              cidade: "Bento Gonçalves",
              bairro: "Cidade Alta",
              cep: "95.700-000",
              uf: "RS",
              email: "teste@organisys.com.br",
              celular: "",
              fone: "(54) 2222-22222",
            },
            itens: [
              {
                item: {
                  codigo: 1234,
                  descricao: "Mochila",
                  quantidade: "2.0000",
                  valorunidade: "69.99",
                  precocusto: null,
                  descontoItem: "0.00",
                  un: "Pç",
                  pesoBruto: "0.520",
                  largura: "20",
                  altura: "18",
                  profundidade: "15",
                  unidadeMedida: "cm",
                  descricaoDetalhada: "Ecobag esportiva",
                },
              },
            ],
            parcelas: [
              {
                parcela: {
                  idLancamento: "123456",
                  valor: "73.74",
                  dataVencimento: "2017-07-28 00:00:00",
                  obs: "Teste obs 1",
                  destino: "3",
                  forma_pagamento: {
                    id: "1",
                    descricao: "Dinheiro",
                    codigoFiscal: "1",
                  },
                },
              },
              {
                parcela: {
                  idLancamento: "123457",
                  valor: "73.74",
                  dataVencimento: "2017-08-28 00:00:00",
                  obs: "Teste obs 2",
                  destino: "3",
                  forma_pagamento: {
                    id: "1",
                    descricao: "Dinheiro",
                    codigoFiscal: "1",
                  },
                },
              },
            ],
            nota: {
              serie: "1",
              numero: "012346",
              dataEmissao: "2017-08-28 00:00:00",
              situacao: "1",
              chaveAcesso: "43140401056417000139550010000123461496923524",
              valorNota: "147.48",
            },
            transporte: {
              transportadora: "Transportadora",
              cnpj: "00.000.000/0000-1",
              tipo_frete: "R",
              qtde_volumes: "2",
              volumes: [
                {
                  volume: {
                    id: "6423805580",
                    idServico: "1231293",
                    servico: "SEDEX 10",
                    codigoServico: "03158",
                    codigoRastreamento: "SX052413651BR",
                    dataSaida: "2017-07-28",
                    prazoEntregaPrevisto: "1",
                    valorFretePrevisto: "11.25",
                    valorDeclarado: "0.00",
                    remessa: {
                      numero: "12345AAA",
                      dataCriacao: "2017-10-17",
                    },
                    dimensoes: {
                      peso: "1.553",
                      altura: "20",
                      largura: "15",
                      comprimento: "20",
                      diametro: "0",
                    },
                    urlRastreamento:
                      "https://www.exemplo.com.br/rastreio?q=EC272330554BR",
                  },
                },
                {
                  volume: {
                    id: "6423805635",
                    idServico: "1231293",
                    servico: "SEDEX 10",
                    codigoServico: "03158",
                    codigoRastreamento: "SX052413651BR",
                    dataSaida: "2017-07-28",
                    prazoEntregaPrevisto: "1",
                    valorFretePrevisto: "11.25",
                    remessa: null,
                    dimensoes: {
                      peso: "1.553",
                      altura: "20",
                      largura: "15",
                      comprimento: "20",
                      diametro: "0",
                    },
                  },
                },
              ],
              enderecoEntrega: {
                nome: "Organisys Software Entrega",
                endereco: "Rua Assis Brasil",
                numero: "222",
                complemento: "",
                cidade: "Bento Gonçalves",
                bairro: "Centro",
                cep: "95.700-000",
                uf: "RS",
              },
            },
          },
        },
      ],
    },
  });
});

Deno.serve({ port: 8081 }, app.fetch);
