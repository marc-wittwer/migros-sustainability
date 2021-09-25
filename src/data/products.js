export const products = [
  {
    id: '100100300000',
    language: 'de',
    name: 'Milch-Nuss',
    names: {
      short_name: 'Milch-Nuss',
    },
    slug: 'milch-nuss-100100300000',
    boss_number: '010110040605',
    status: {
      id: 'available',
      seasonal: false,
      pim_status: '03',
    },
    tags: [
      'source-pex',
      'migipedia',
      'view-browse-partial',
      'view-browse-all-retailers-partial',
    ],
    is_variant: false,
    gtins: ['7616500010031'],
    brand: {
      id: '062',
      name: 'Frey',
      slug: 'frey',
      links: {
        homepage: {
          url: 'http://www.chocolatfrey.ch/de',
          name: 'Homepage',
          type: 'info',
          purchasable: false,
        },
      },
      image: {
        original:
          'https://image.migros.ch/original/971851c9ca544643763ccdf58c7bbfe72dc057de/frey.jpg',
        stack:
          'https://image.migros.ch/{stack}/971851c9ca544643763ccdf58c7bbfe72dc057de/frey.jpg',
      },
    },
    labels: [
      {
        id: 'L53',
        name: 'Swissness',
        slug: 'swissness',
        image: {
          original:
            'https://image.migros.ch/original/d771bba2f6b08ba42970ea0243c6f8c5a8832f15/swissness.jpg',
          stack:
            'https://image.migros.ch/{stack}/d771bba2f6b08ba42970ea0243c6f8c5a8832f15/swissness.jpg',
        },
      },
      {
        id: 'L34',
        name: 'UTZ',
        slug: 'utz',
        links: {
          homepage: {
            url: 'https://utz.org/',
            name: 'Homepage',
            type: 'info',
            purchasable: false,
          },
        },
        image: {
          original:
            'https://image.migros.ch/original/64192d97b7770d351f5bbe89a57c9f614e529150/utz.jpg',
          stack:
            'https://image.migros.ch/{stack}/64192d97b7770d351f5bbe89a57c9f614e529150/utz.jpg',
        },
      },
    ],
    categories: [
      {
        code: 'BeSS_0101082101',
        name: 'Schokoladentafeln',
        slug: 'supermarkt/lebensmittel/suessigkeiten/schokolade/schokoladentafeln',
        visible: true,
        title: 'Schokoladentafeln in grosser Auswahl bei der Migros',
        parent_code: 'BeSS_01010821',
        level: 5,
      },
      {
        code: 'BeSS_01010821',
        name: 'Schokolade',
        slug: 'supermarkt/lebensmittel/suessigkeiten/schokolade',
        visible: true,
        parent_code: 'BeSS_010108',
        level: 4,
      },
      {
        code: 'BeSS_010108',
        name: 'Süssigkeiten',
        slug: 'supermarkt/lebensmittel/suessigkeiten',
        visible: true,
        title:
          'Süssigkeiten aus Ihrer Migros: für Naschkatzen und Schleckmäuler',
        parent_code: 'BeSS_0101',
        image: {
          original:
            'https://image.migros.ch/original/a9c80f4e896b5ebdd3b7ebbee11f956c8ff157cf/suessigkeiten.jpg',
          stack:
            'https://image.migros.ch/{stack}/a9c80f4e896b5ebdd3b7ebbee11f956c8ff157cf/suessigkeiten.jpg',
        },
        level: 3,
      },
      {
        code: 'BeSS_0101',
        name: 'Lebensmittel',
        slug: 'supermarkt/lebensmittel',
        visible: true,
        title:
          'Lebensmittel aus Ihrer Migros: hochwertige Produkte, ausgewogener Genuss',
        parent_code: 'BeSS_01',
        image: {
          original:
            'https://image.migros.ch/original/c4c714b236338d5b9a042dd7dd2457b7e8604696/lebensmittel.jpg',
          stack:
            'https://image.migros.ch/{stack}/c4c714b236338d5b9a042dd7dd2457b7e8604696/lebensmittel.jpg',
        },
        level: 2,
      },
      {
        code: 'BeSS_01',
        name: 'Supermarkt',
        slug: 'supermarkt',
        visible: true,
        parent_code: 'root',
        level: 1,
      },
    ],
    additional_categories: [
      [
        {
          code: 'AMIG_CAT_Schokoladentafeln_SchokoladenSuessigkeiten',
          name: 'Schokoladentafeln',
          slug: 'amigos/schokoladen-suessigkeiten/schokoladentafeln',
          visible: true,
          parent_code: 'AMIG_CAT_SchokoladenSuessigkeiten',
          level: 3,
        },
        {
          code: 'AMIG_CAT_SchokoladenSuessigkeiten',
          name: 'Schokoladen & Süssigkeiten',
          slug: 'amigos/schokoladen-suessigkeiten',
          visible: true,
          parent_code: 'BeSS_96',
          level: 2,
        },
        {
          code: 'BeSS_96',
          name: 'aMigos!',
          slug: 'amigos',
          visible: true,
          parent_code: 'root',
          level: 1,
        },
      ],
    ],
    nutrition_facts: {
      standard: {
        nutrients: [
          {
            code: 'PIM_NUT_ENERGIE',
            name: 'Energie',
            pictogram_name: 'Energie',
            category: 'BIG9',
            quantity: 2377,
            quantity_value: '2377',
            quantity_numeric_value: 2377,
            rda_percent: 29,
            rda_percent_operator: '=',
            nutrition_operator: '=',
            quantity_unit: 'kJ',
            quantity_alternate: 571,
            quantity_alternate_value: '571',
            quantity_alternate_numeric_value: 571,
            quantity_alternate_unit: 'kcal',
          },
          {
            code: 'PIM_NUT_FETT',
            name: 'Fett',
            pictogram_name: 'Fett',
            category: 'BIG9',
            quantity: 37,
            quantity_value: '37',
            quantity_numeric_value: 37,
            rda_percent: 53,
            rda_percent_operator: '=',
            nutrition_operator: '=',
            quantity_unit: 'g',
            rating: {
              value: 2,
              text: 'hoch',
              icon: {
                original:
                  'https://image.migros.ch/original/9aa833abc7cb7207238c3e98a1253eeb7bceee1f.svg',
                stack:
                  'https://image.migros.ch/{stack}/9aa833abc7cb7207238c3e98a1253eeb7bceee1f.svg',
              },
              hex_color: '#cc0000',
            },
          },
          {
            code: 'PIM_NUT_FETT_GES',
            name: 'davon gesättigte Fettsäuren',
            pictogram_name: 'gesättigte Fettsäuren',
            category: 'BIG9',
            quantity: 15,
            quantity_value: '15',
            quantity_numeric_value: 15,
            rda_percent: 75,
            rda_percent_operator: '=',
            nutrition_operator: '=',
            quantity_unit: 'g',
            rating: {
              value: 2,
              text: 'hoch',
              icon: {
                original:
                  'https://image.migros.ch/original/9aa833abc7cb7207238c3e98a1253eeb7bceee1f.svg',
                stack:
                  'https://image.migros.ch/{stack}/9aa833abc7cb7207238c3e98a1253eeb7bceee1f.svg',
              },
              hex_color: '#cc0000',
            },
          },
          {
            code: 'PIM_NUT_KOHLENHY',
            name: 'Kohlenhydrate',
            category: 'BIG9',
            quantity: 50,
            quantity_value: '50',
            quantity_numeric_value: 50,
            rda_percent: 19,
            rda_percent_operator: '=',
            nutrition_operator: '=',
            quantity_unit: 'g',
          },
          {
            code: 'PIM_NUT_ZUCKER',
            name: 'davon Zucker',
            pictogram_name: 'Zucker',
            category: 'BIG9',
            quantity: 47,
            quantity_value: '47',
            quantity_numeric_value: 47,
            rda_percent: 52,
            rda_percent_operator: '=',
            nutrition_operator: '=',
            quantity_unit: 'g',
            rating: {
              value: 2,
              text: 'hoch',
              icon: {
                original:
                  'https://image.migros.ch/original/9aa833abc7cb7207238c3e98a1253eeb7bceee1f.svg',
                stack:
                  'https://image.migros.ch/{stack}/9aa833abc7cb7207238c3e98a1253eeb7bceee1f.svg',
              },
              hex_color: '#cc0000',
            },
          },
          {
            code: 'PIM_NUT_GES_BALL',
            name: 'Ballaststoffe',
            category: 'BIG9',
            quantity: 3.6,
            quantity_value: '3.6',
            quantity_numeric_value: 3.6,
            nutrition_operator: '=',
            quantity_unit: 'g',
          },
          {
            code: 'PIM_NUT_PROTEINE',
            name: 'Eiweiss',
            category: 'BIG9',
            quantity: 7.6,
            quantity_value: '7.6',
            quantity_numeric_value: 7.6,
            rda_percent: 15,
            rda_percent_operator: '=',
            nutrition_operator: '=',
            quantity_unit: 'g',
          },
          {
            code: 'PIM_NUT_KOCHSALZ',
            name: 'Salz',
            pictogram_name: 'Salz',
            category: 'BIG9',
            quantity: 0.17,
            quantity_value: '0.17',
            quantity_numeric_value: 0.17,
            rda_percent: 3,
            rda_percent_operator: '=',
            nutrition_operator: '=',
            quantity_unit: 'g',
            rating: {
              value: 0,
              text: 'gering',
              icon: {
                original:
                  'https://image.migros.ch/original/a2b5e2562a4fedbbdec99c1932ec57c46c49cde4.svg',
                stack:
                  'https://image.migros.ch/{stack}/a2b5e2562a4fedbbdec99c1932ec57c46c49cde4.svg',
              },
              hex_color: '#069800',
            },
          },
        ],
        base_quantity: 100,
        base_unit: 'g',
      },
      portion: {
        nutrients: [
          {
            code: 'PIM_NUT_ENERGIE',
            name: 'Energie',
            pictogram_name: 'Energie',
            category: 'BIG9',
            quantity: 475,
            quantity_value: '475',
            quantity_numeric_value: 475,
            rda_percent: 6,
            rda_percent_operator: '=',
            nutrition_operator: '=',
            quantity_unit: 'kJ',
            quantity_alternate: 114,
            quantity_alternate_value: '114',
            quantity_alternate_numeric_value: 114,
            quantity_alternate_unit: 'kcal',
          },
          {
            code: 'PIM_NUT_FETT',
            name: 'Fett',
            pictogram_name: 'Fett',
            category: 'BIG9',
            quantity: 7.4,
            quantity_value: '7.4',
            quantity_numeric_value: 7.4,
            rda_percent: 11,
            rda_percent_operator: '=',
            nutrition_operator: '=',
            quantity_unit: 'g',
          },
          {
            code: 'PIM_NUT_FETT_GES',
            name: 'davon gesättigte Fettsäuren',
            pictogram_name: 'gesättigte Fettsäuren',
            category: 'BIG9',
            quantity: 3,
            quantity_value: '3',
            quantity_numeric_value: 3,
            rda_percent: 15,
            rda_percent_operator: '=',
            nutrition_operator: '=',
            quantity_unit: 'g',
          },
          {
            code: 'PIM_NUT_KOHLENHY',
            name: 'Kohlenhydrate',
            category: 'BIG9',
            quantity: 10,
            quantity_value: '10',
            quantity_numeric_value: 10,
            rda_percent: 4,
            rda_percent_operator: '=',
            nutrition_operator: '=',
            quantity_unit: 'g',
          },
          {
            code: 'PIM_NUT_ZUCKER',
            name: 'davon Zucker',
            pictogram_name: 'Zucker',
            category: 'BIG9',
            quantity: 9.4,
            quantity_value: '9.4',
            quantity_numeric_value: 9.4,
            rda_percent: 10,
            rda_percent_operator: '=',
            nutrition_operator: '=',
            quantity_unit: 'g',
          },
          {
            code: 'PIM_NUT_GES_BALL',
            name: 'Ballaststoffe',
            category: 'BIG9',
            quantity: 0.7,
            quantity_value: '0.7',
            quantity_numeric_value: 0.7,
            nutrition_operator: '=',
            quantity_unit: 'g',
          },
          {
            code: 'PIM_NUT_PROTEINE',
            name: 'Eiweiss',
            category: 'BIG9',
            quantity: 1.5,
            quantity_value: '1.5',
            quantity_numeric_value: 1.5,
            rda_percent: 3,
            rda_percent_operator: '=',
            nutrition_operator: '=',
            quantity_unit: 'g',
          },
          {
            code: 'PIM_NUT_KOCHSALZ',
            name: 'Salz',
            pictogram_name: 'Salz',
            category: 'BIG9',
            quantity: 0.03,
            quantity_value: '0.03',
            quantity_numeric_value: 0.03,
            rda_percent: 1,
            rda_percent_operator: '=',
            nutrition_operator: '=',
            quantity_unit: 'g',
          },
        ],
        base_description: '2 Täfelchen',
        base_quantity: 20,
        base_unit: 'g',
        package_type: 'Packung',
        portions_per_package: '20',
        portions_per_package_precision: '=',
      },
    },
    retailer_flags: {
      bikeworld: {
        orderable: false,
        reservable: false,
        stock_request: false,
        visible: false,
        exclude_cross_channel: [],
      },
      doitgarden: {
        orderable: false,
        reservable: false,
        stock_request: false,
        visible: false,
        exclude_cross_channel: [],
      },
      interio: {
        orderable: false,
        reservable: false,
        stock_request: false,
        visible: false,
        exclude_cross_channel: [],
      },
      melectronics: {
        orderable: false,
        reservable: false,
        stock_request: false,
        visible: false,
        exclude_cross_channel: [],
      },
      micasa: {
        orderable: false,
        reservable: false,
        stock_request: false,
        visible: false,
        exclude_cross_channel: [],
      },
      migros_ch: {
        orderable: false,
        reservable: false,
        stock_request: false,
        visible: true,
        exclude_cross_channel: [],
      },
      sportxx: {
        orderable: false,
        reservable: false,
        stock_request: false,
        visible: false,
        exclude_cross_channel: [],
      },
    },
    allergens: [
      {
        code: 'ALLG_HASELNU',
        name: 'Haselnüsse und daraus gewonnene Erzeugnisse',
        contamination_code: 'VORHANDEN',
        contamination: 'vorhanden',
      },
      {
        code: 'ALLG_SOJA',
        name: 'Sojabohnen und daraus gewonnene Erzeugnisse',
        contamination_code: 'VORHANDEN',
        contamination: 'vorhanden',
      },
      {
        code: 'ALLG_MILCH',
        name: 'Milch und daraus gewonnene Erzeugnisse',
        contamination_code: 'VORHANDEN',
        contamination: 'vorhanden',
      },
      {
        code: 'INTOL_KAKAO',
        name: 'Kakao und daraus gewonnene Erzeugnisse',
        contamination_code: 'VORHANDEN',
        contamination: 'vorhanden',
      },
    ],
    image: {
      original:
        'https://image.migros.ch/original/6c4864dfeb201afdf9b285d235f88f91a668e84c/milch-nuss.jpg',
      stack:
        'https://image.migros.ch/{stack}/6c4864dfeb201afdf9b285d235f88f91a668e84c/milch-nuss.jpg',
    },
    image_transparent: {
      original:
        'https://image.migros.ch/original/af5a5fae5a4ecf8834ca7cc28c4ee1f375bfc632/milch-nuss.png',
      stack:
        'https://image.migros.ch/{stack}/af5a5fae5a4ecf8834ca7cc28c4ee1f375bfc632/milch-nuss.png',
    },
    internal_features: [
      {
        label_code: 'common_messwert_oekobilanz',
        label: 'Messwert Ökobilanz',
        values: [
          {
            value_code: 'BOOLEAN_FALSE',
            value: 'Nein',
            boolean_value: false,
          },
        ],
        category_code: 'Common_CLA_Klimadeklaration',
        top_fact: false,
      },
      {
        label_code: 'MAPI_GENERAL_POSITION_GROUP',
        values: [
          {
            value_code: 'NORM',
            value: 'Normalposition',
          },
        ],
        category_code: 'MAPI_GENERAL_POSITION_GROUP',
        top_fact: false,
      },
      {
        label_code: 'MAPI_ARTICLE_VARIETY',
        values: [
          {
            value: 'HAWA',
          },
        ],
        category_code: 'MAPI_ARTICLE_VARIETY',
        top_fact: false,
      },
      {
        label_code: 'MAPI_PRODUCT_KIND',
        values: [
          {
            value_code: 'HAWA',
            value: 'Handelsware',
          },
        ],
        category_code: 'MAPI_PRODUCT_KIND',
        top_fact: false,
      },
      {
        label_code: 'MAPI_ASSORTMENT_LIST_KIND',
        values: [
          {
            value_code: 'M',
            value: 'Kolonial Standard',
          },
        ],
        category_code: 'MAPI_ASSORTMENT_LIST_KIND',
        top_fact: false,
      },
      {
        label_code: 'MAPI_PRODUCT_GROUP',
        values: [
          {
            value_code: '11141',
            value: 'FREY 400G',
          },
        ],
        category_code: 'MAPI_PRODUCT_GROUP',
        top_fact: false,
      },
      {
        label_code: 'MAPI_CUMULUS_POINTS_CODE',
        values: [
          {
            value_code: 'NUMERIC_2',
            value: '2',
            numeric_value: 2,
          },
        ],
        category_code: 'MAPI_CUMULUS_POINTS_CODE',
        top_fact: false,
      },
      {
        label_code: 'MAPI_PROMOTIONS_CODE',
        values: [
          {
            value_code: 'NUMERIC_1',
            value: '1',
            numeric_value: 1,
          },
        ],
        category_code: 'MAPI_PROMOTIONS_CODE',
        top_fact: false,
      },
      {
        label_code: 'MAPI_LIFECYCLE',
        values: [
          {
            value_code: 'D',
            value: 'Detailhandelsartikel',
          },
        ],
        category_code: 'MAPI_LIFECYCLE',
        top_fact: false,
      },
    ],
    vat: {
      id: 2,
      percentage: 2.5,
    },
    regulated_description: 'Milchschokolade mit Haselnüssen',
    links: {
      migros_ch: {
        url: 'https://produkte.migros.ch/products/100100300000',
        name: 'migros.ch',
        canonical: 'https://produkte.migros.ch/milch-nuss-100100300000',
        type: 'info',
        purchasable: false,
      },
      migros_online: {
        url: 'https://shop.migros.ch/de/direct/product/53924',
        app_url: 'migros://ecommerce.app/products/id/53924',
        mo_product_id: '53924',
        name: 'Migros Online',
        canonical: 'https://produkte.migros.ch/milch-nuss-100100300000',
        type: 'shop',
        purchasable: true,
      },
      migipedia: {
        url: 'https://migipedia.migros.ch/de/products/100100300000',
        name: 'Migipedia',
        canonical: 'https://produkte.migros.ch/milch-nuss-100100300000',
        type: 'info',
        purchasable: false,
      },
    },
    regional_availability: {
      gmaa: {
        probability: 21,
      },
      gmbs: {
        probability: 31,
      },
      gmge: {
        probability: 65,
      },
      gmlu: {
        probability: 23,
      },
      gmnf: {
        probability: 24,
      },
      gmos: {
        probability: 17,
      },
      gmti: {
        probability: 78,
      },
      gmvd: {
        probability: 32,
      },
      gmvs: {
        probability: 45,
      },
      gmzh: {
        probability: 34,
      },
    },
    m_check2: {
      carbon_footprint: {
        image: {
          original:
            'https://image.migros.ch/original/22a91c7da0c7e9d31c07dcd9af58cc97079ac68b.svg',
          stack:
            'https://image.migros.ch/{stack}/22a91c7da0c7e9d31c07dcd9af58cc97079ac68b.svg',
        },
        ground_and_sea_cargo: {
          kg_co2: 5.65,
          kg_co2_range: '4.8 - 9.9 kg CO₂eq / kg',
          co2_in_car_km: 31,
          rating: 2,
          production_in_percent: 94.99,
          packaging_in_percent: 3.06,
          transport_in_percent: 1.95,
        },
      },
    },
    updated_at: '2021-08-20T12:47:13+0200',
    sap_created_at: '2001-10-05T00:00:00+0200',
    base_unit: 'CU',
    slugs: {
      de: 'milch-nuss-100100300000',
      fr: 'lait-noisettes-100100300000',
      it: 'latte-nocciole-100100300000',
      en: 'milch-nuss',
    },
    receipt_text: 'Milch-Nuss 400g',
    type: '00',
    main_supplier: {
      name: 'Delica AG',
      id: '0003010000',
      supplier_product_id: '10127988',
    },
    price: {
      valid_from: '2020-11-10T00:00:00+0100',
      valid_to: '9999-12-31T23:59:59+0100',
      currency: 'CHF',
      source: 'PriceRepository',
      item: {
        price: 6.8,
        quantity: 1,
        unit: 'CU',
        varying_quantity: false,
        display_quantity: '400g',
      },
      base: {
        price: 1.7,
        quantity: 100,
        unit: 'g',
      },
    },
    retailer: {
      id: 'supermarkt',
      name: 'Supermarkt',
    },
    ratings: {
      count_all: 16,
      average_all: 4.636363636364,
    },
    data_source: 'SAP-X11',
    package: {
      content: 400,
      content_unit_code: 'g',
      content_unit: 'Gramm',
      net_weight: 0.4,
      net_weight_unit_code: 'kg',
      net_weight_unit: 'Kilogramm',
      portions_per_package: '20',
      precision: 'exact',
      brutto_weight: 0.425,
      brutto_weight_unit_code: 'kg',
      brutto_volume: 0.479,
      brutto_volume_unit_code: 'cdm',
      height: 8.9,
      length: 1.8,
      width: 29.9,
      unit_dimension: 'cm',
      price_comparison_content: 100,
      size: '400g',
    },
    package_information: {
      tu: {
        gtins: ['7616500000025', '23500020'],
        brutto_weight: 4.277,
        brutto_weight_unit_code: 'kg',
        brutto_volume: 5.577,
        brutto_volume_unit_code: 'cdm',
        height: 9.5,
        length: 30.9,
        width: 19,
        dimension_unit_code: 'cm',
        number_of_base_units: 10,
      },
      cu: {
        gtins: ['7616500010031'],
        brutto_weight: 0.425,
        brutto_weight_unit_code: 'kg',
        brutto_volume: 0.479,
        brutto_volume_unit_code: 'cdm',
        height: 8.9,
        length: 1.8,
        width: 29.9,
        dimension_unit_code: 'cm',
        number_of_base_units: 1,
      },
      lu: {
        brutto_weight: 522.25,
        brutto_weight_unit_code: 'kg',
        brutto_volume: 782.4,
        brutto_volume_unit_code: 'cdm',
        height: 85.5,
        length: 120,
        width: 80,
        dimension_unit_code: 'cm',
        number_of_base_units: 1170,
      },
    },
    related_products: {
      purchase_recommendations: {
        product_ids: [
          '100131200000',
          '100131300000',
          '100131100000',
          '100163500000',
          '100131400000',
        ],
      },
    },
    declarations: {
      food: {
        food_declaration_gtins: ['7616500010031'],
        features: [
          {
            label_code: 'GDSN_M281_NetContent',
            label: 'Nettofüllmenge Wert',
            values: [
              {
                value_code: 'NUMERIC_400',
                value: '400',
                numeric_value: 400,
              },
            ],
            category_code: 'GDSN',
            top_fact: false,
            unit_code: 'g',
          },
        ],
      },
    },
    reindex_date: '9999-12-31T00:00:00+0100',
    recipe_ingredient_ids: ['17208'],
    views: ['all', 'browse', 'browseallretailers'],
    ingredients:
      'Zucker, <strong>Haselnüsse</strong> ganz und gemahlen 20 %, Kakaobutter, Mager<strong>milch</strong>pulver, Kakaomasse, <strong>Butter</strong>reinfett, Emulgator: <strong>Soja</strong>lecithin, natürliches Aroma. Kakao: 30 % mindestens in der Schokolade',
    origins: {
      producing_country: 'Hergestellt in der Schweiz:',
    },
    allergen_text:
      'Kann Mandeln und Spuren anderer Schalenfrüchte (Nüsse) enthalten',
  },
  {
    id: '101303500000',
    language: 'de',
    name: 'Almond Coaties Mandeln Zuckerüber.',
    names: {
      short_name: 'Almond Coaties Mandeln Zuckerüber.',
    },
    slug: 'almond-coaties-mandeln-zuckerueber',
    boss_number: '010110012105',
    description: {
      text: 'Mandeln mit Zucker&uuml;berzug. Die feinen «Snackli im S&auml;ckli» Dass N&uuml;sse und Fr&uuml;chte am besten schmecken, wenn sie mit feinster Schokolade umh&uuml;llt sind, steht f&uuml;r viele Schokoladenliebhaber ausser Frage. Genauso wie die Tatsache, dass es zum Snacken und Teilen nichts Besseres gibt als unsere Les Drag&eacute;es. Die mit Schokolade &uuml;berzogenen Mandeln, Haseln&uuml;sse, Weinbeeren etc. garantieren viel s&uuml;sse Abwechslung. Zum Gl&uuml;ck lassen sich die wiederverschliessbaren Beutel so einfach &ouml;ffnen – f&uuml;r die n&auml;chste Handvoll Frey Drag&eacute;es.',
      source: 'PEX',
    },
    status: {
      id: 'available',
      seasonal: false,
      pim_status: '03',
    },
    tags: [
      'source-pex',
      'migipedia',
      'view-browse-partial',
      'view-browse-all-retailers-partial',
    ],
    is_variant: false,
    gtins: ['7616500130357'],
    brand: {
      id: '062',
      name: 'Frey',
      slug: 'frey',
      links: {
        homepage: {
          url: 'http://www.chocolatfrey.ch/de',
          name: 'Homepage',
          type: 'info',
          purchasable: false,
        },
      },
      image: {
        original:
          'https://image.migros.ch/original/971851c9ca544643763ccdf58c7bbfe72dc057de/frey.jpg',
        stack:
          'https://image.migros.ch/{stack}/971851c9ca544643763ccdf58c7bbfe72dc057de/frey.jpg',
      },
    },
    labels: [
      {
        id: 'L53',
        name: 'Swissness',
        slug: 'swissness',
        image: {
          original:
            'https://image.migros.ch/original/d771bba2f6b08ba42970ea0243c6f8c5a8832f15/swissness.jpg',
          stack:
            'https://image.migros.ch/{stack}/d771bba2f6b08ba42970ea0243c6f8c5a8832f15/swissness.jpg',
        },
      },
      {
        id: 'L34',
        name: 'UTZ',
        slug: 'utz',
        links: {
          homepage: {
            url: 'https://utz.org/',
            name: 'Homepage',
            type: 'info',
            purchasable: false,
          },
        },
        image: {
          original:
            'https://image.migros.ch/original/64192d97b7770d351f5bbe89a57c9f614e529150/utz.jpg',
          stack:
            'https://image.migros.ch/{stack}/64192d97b7770d351f5bbe89a57c9f614e529150/utz.jpg',
        },
      },
    ],
    categories: [
      {
        code: 'BeSS_0101082105',
        name: 'Schokoladen-Snacks',
        slug: 'supermarkt/lebensmittel/suessigkeiten/schokolade/schokoladen-snacks',
        visible: true,
        title: 'Schokoladen-Snacks in Ihrer Migros kaufen',
        parent_code: 'BeSS_01010821',
        level: 5,
      },
      {
        code: 'BeSS_01010821',
        name: 'Schokolade',
        slug: 'supermarkt/lebensmittel/suessigkeiten/schokolade',
        visible: true,
        parent_code: 'BeSS_010108',
        level: 4,
      },
      {
        code: 'BeSS_010108',
        name: 'Süssigkeiten',
        slug: 'supermarkt/lebensmittel/suessigkeiten',
        visible: true,
        title:
          'Süssigkeiten aus Ihrer Migros: für Naschkatzen und Schleckmäuler',
        parent_code: 'BeSS_0101',
        image: {
          original:
            'https://image.migros.ch/original/a9c80f4e896b5ebdd3b7ebbee11f956c8ff157cf/suessigkeiten.jpg',
          stack:
            'https://image.migros.ch/{stack}/a9c80f4e896b5ebdd3b7ebbee11f956c8ff157cf/suessigkeiten.jpg',
        },
        level: 3,
      },
      {
        code: 'BeSS_0101',
        name: 'Lebensmittel',
        slug: 'supermarkt/lebensmittel',
        visible: true,
        title:
          'Lebensmittel aus Ihrer Migros: hochwertige Produkte, ausgewogener Genuss',
        parent_code: 'BeSS_01',
        image: {
          original:
            'https://image.migros.ch/original/c4c714b236338d5b9a042dd7dd2457b7e8604696/lebensmittel.jpg',
          stack:
            'https://image.migros.ch/{stack}/c4c714b236338d5b9a042dd7dd2457b7e8604696/lebensmittel.jpg',
        },
        level: 2,
      },
      {
        code: 'BeSS_01',
        name: 'Supermarkt',
        slug: 'supermarkt',
        visible: true,
        parent_code: 'root',
        level: 1,
      },
    ],
    additional_categories: [
      [
        {
          code: 'AMIG_CAT_Snacks_RiegelSchokoladensnacks_SchokoladenSuessigkeiten',
          name: 'Snacks',
          slug: 'amigos/schokoladen-suessigkeiten/riegel-schokoladensnacks/snacks',
          visible: true,
          parent_code:
            'AMIG_CAT_RiegelSchokoladensnacks_SchokoladenSuessigkeiten',
          level: 4,
        },
        {
          code: 'AMIG_CAT_RiegelSchokoladensnacks_SchokoladenSuessigkeiten',
          name: 'Riegel & Schokoladensnacks',
          slug: 'amigos/schokoladen-suessigkeiten/riegel-schokoladensnacks',
          visible: true,
          parent_code: 'AMIG_CAT_SchokoladenSuessigkeiten',
          level: 3,
        },
        {
          code: 'AMIG_CAT_SchokoladenSuessigkeiten',
          name: 'Schokoladen & Süssigkeiten',
          slug: 'amigos/schokoladen-suessigkeiten',
          visible: true,
          parent_code: 'BeSS_96',
          level: 2,
        },
        {
          code: 'BeSS_96',
          name: 'aMigos!',
          slug: 'amigos',
          visible: true,
          parent_code: 'root',
          level: 1,
        },
      ],
    ],
    nutrition_facts: {
      standard: {
        nutrients: [
          {
            code: 'PIM_NUT_ENERGIE',
            name: 'Energie',
            pictogram_name: 'Energie',
            category: 'BIG9',
            quantity: 2120,
            quantity_value: '2120',
            quantity_numeric_value: 2120,
            nutrition_operator: '=',
            quantity_unit: 'kJ',
            quantity_alternate: 507,
            quantity_alternate_value: '507',
            quantity_alternate_numeric_value: 507,
            quantity_alternate_unit: 'kcal',
          },
          {
            code: 'PIM_NUT_GES_FETT',
            name: 'Fett',
            pictogram_name: 'Fett',
            category: 'BIG9',
            quantity: 24,
            quantity_value: '24',
            quantity_numeric_value: 24,
            nutrition_operator: '=',
            quantity_unit: 'g',
            rating: {
              value: 2,
              text: 'hoch',
              icon: {
                original:
                  'https://image.migros.ch/original/9aa833abc7cb7207238c3e98a1253eeb7bceee1f.svg',
                stack:
                  'https://image.migros.ch/{stack}/9aa833abc7cb7207238c3e98a1253eeb7bceee1f.svg',
              },
              hex_color: '#cc0000',
            },
          },
          {
            code: 'PIM_NUT_GESFETTS',
            name: 'davon gesättigte Fettsäuren',
            pictogram_name: 'gesättigte Fettsäuren',
            category: 'BIG9',
            quantity: 1.9,
            quantity_value: '1.9',
            quantity_numeric_value: 1.9,
            nutrition_operator: '=',
            quantity_unit: 'g',
            rating: {
              value: 1,
              text: 'mittel',
              icon: {
                original:
                  'https://image.migros.ch/original/b84b389195e426a9e6b4cd66f2c79b1a049809da.svg',
                stack:
                  'https://image.migros.ch/{stack}/b84b389195e426a9e6b4cd66f2c79b1a049809da.svg',
              },
              hex_color: '#e8a800',
            },
          },
          {
            code: 'PIM_NUT_GES_KOHL',
            name: 'Kohlenhydrate',
            category: 'BIG9',
            quantity: 59,
            quantity_value: '59',
            quantity_numeric_value: 59,
            nutrition_operator: '=',
            quantity_unit: 'g',
          },
          {
            code: 'PIM_NUT_GES_ZUCK',
            name: 'davon Zucker',
            pictogram_name: 'Zucker',
            category: 'BIG9',
            quantity: 53,
            quantity_value: '53',
            quantity_numeric_value: 53,
            nutrition_operator: '=',
            quantity_unit: 'g',
            rating: {
              value: 2,
              text: 'hoch',
              icon: {
                original:
                  'https://image.migros.ch/original/9aa833abc7cb7207238c3e98a1253eeb7bceee1f.svg',
                stack:
                  'https://image.migros.ch/{stack}/9aa833abc7cb7207238c3e98a1253eeb7bceee1f.svg',
              },
              hex_color: '#cc0000',
            },
          },
          {
            code: 'PIM_NUT_GES_BALL',
            name: 'Ballaststoffe',
            category: 'BIG9',
            quantity: 5.3,
            quantity_value: '5.3',
            quantity_numeric_value: 5.3,
            nutrition_operator: '=',
            quantity_unit: 'g',
          },
          {
            code: 'PIM_NUT_GES_EIW',
            name: 'Eiweiss',
            category: 'BIG9',
            quantity: 11,
            quantity_value: '11',
            quantity_numeric_value: 11,
            nutrition_operator: '=',
            quantity_unit: 'g',
          },
          {
            code: 'PIM_NUT_KOCHSALZ',
            name: 'Salz',
            pictogram_name: 'Salz',
            category: 'BIG9',
            quantity: 0.01,
            quantity_value: '0.01',
            quantity_numeric_value: 0.01,
            nutrition_operator: '<',
            quantity_unit: 'g',
            rating: {
              value: 0,
              text: 'gering',
              icon: {
                original:
                  'https://image.migros.ch/original/a2b5e2562a4fedbbdec99c1932ec57c46c49cde4.svg',
                stack:
                  'https://image.migros.ch/{stack}/a2b5e2562a4fedbbdec99c1932ec57c46c49cde4.svg',
              },
              hex_color: '#069800',
            },
          },
        ],
        base_quantity: 100,
        base_unit: 'g',
      },
      portion: {
        nutrients: [
          {
            code: 'PIM_NUT_ENERGIE',
            name: 'Energie',
            pictogram_name: 'Energie',
            category: 'BIG9',
            quantity: 530,
            quantity_value: '530',
            quantity_numeric_value: 530,
            rda_percent: 6,
            rda_percent_operator: '=',
            nutrition_operator: '=',
            quantity_unit: 'kJ',
            quantity_alternate: 127,
            quantity_alternate_value: '127',
            quantity_alternate_numeric_value: 127,
            quantity_alternate_unit: 'kcal',
          },
          {
            code: 'PIM_NUT_GES_FETT',
            name: 'Fett',
            pictogram_name: 'Fett',
            category: 'BIG9',
            quantity: 6,
            quantity_value: '6.0',
            quantity_numeric_value: 6,
            rda_percent: 9,
            rda_percent_operator: '=',
            nutrition_operator: '=',
            quantity_unit: 'g',
          },
          {
            code: 'PIM_NUT_GESFETTS',
            name: 'davon gesättigte Fettsäuren',
            pictogram_name: 'gesättigte Fettsäuren',
            category: 'BIG9',
            quantity: 0.5,
            quantity_value: '0.5',
            quantity_numeric_value: 0.5,
            rda_percent: 3,
            rda_percent_operator: '=',
            nutrition_operator: '=',
            quantity_unit: 'g',
          },
          {
            code: 'PIM_NUT_GES_KOHL',
            name: 'Kohlenhydrate',
            category: 'BIG9',
            quantity: 15,
            quantity_value: '15',
            quantity_numeric_value: 15,
            rda_percent: 6,
            rda_percent_operator: '=',
            nutrition_operator: '=',
            quantity_unit: 'g',
          },
          {
            code: 'PIM_NUT_GES_ZUCK',
            name: 'davon Zucker',
            pictogram_name: 'Zucker',
            category: 'BIG9',
            quantity: 13,
            quantity_value: '13',
            quantity_numeric_value: 13,
            rda_percent: 14,
            rda_percent_operator: '=',
            nutrition_operator: '=',
            quantity_unit: 'g',
          },
          {
            code: 'PIM_NUT_GES_BALL',
            name: 'Ballaststoffe',
            category: 'BIG9',
            quantity: 1.3,
            quantity_value: '1.3',
            quantity_numeric_value: 1.3,
            nutrition_operator: '=',
            quantity_unit: 'g',
          },
          {
            code: 'PIM_NUT_GES_EIW',
            name: 'Eiweiss',
            category: 'BIG9',
            quantity: 2.8,
            quantity_value: '2.8',
            quantity_numeric_value: 2.8,
            rda_percent: 6,
            rda_percent_operator: '=',
            nutrition_operator: '=',
            quantity_unit: 'g',
          },
          {
            code: 'PIM_NUT_KOCHSALZ',
            name: 'Salz',
            pictogram_name: 'Salz',
            category: 'BIG9',
            quantity: 0.01,
            quantity_value: '0.01',
            quantity_numeric_value: 0.01,
            rda_percent: 0.5,
            rda_percent_operator: '<',
            nutrition_operator: '<',
            quantity_unit: 'g',
          },
        ],
        base_description: '1 Portion',
        base_quantity: 25,
        base_unit: 'g',
        package_type: 'Packung',
        portions_per_package: '6',
        portions_per_package_precision: '=',
      },
    },
    features: [
      {
        label_code: 'miso_cu_gebindeart',
        label: 'Verpackungsart',
        values: [
          {
            value_code: 'MISO_cu_gebindeart_beutelsack',
            value: 'Beutel/Sack',
          },
        ],
        category_code: 'MISO_CLA_LebensmittelGetraenke_Alle',
        top_fact: false,
      },
      {
        label_code: 'miso_lebensmittel_schokolade_sortiment',
        label: 'Sortiment',
        values: [
          {
            value_code: 'MISO_ChocoSnacks',
            value: 'Choco Snacks',
          },
        ],
        category_code: 'MISO_CLA_Schokolade_Lebensmittel_Alle',
        top_fact: false,
      },
      {
        label_code: 'miso_lebensmittel_schokolade_themen',
        label: 'Themen',
        values: [
          {
            value_code: 'MISO_MitNuss',
            value: 'Mit Nuss',
          },
        ],
        category_code: 'MISO_CLA_Schokolade_Lebensmittel_Alle',
        top_fact: false,
      },
      {
        label_code: 'miso_wiederverschliessbar',
        label: 'Wiederverschliessbar',
        values: [
          {
            value_code: 'BOOLEAN_TRUE',
            value: 'Ja',
            boolean_value: true,
          },
        ],
        category_code:
          'MISO_CLA_Suesswaren_SuesswarenSuessungsmittel_LebensmittelGetraenke_Alle',
        top_fact: false,
      },
    ],
    retailer_flags: {
      bikeworld: {
        orderable: false,
        reservable: false,
        stock_request: false,
        visible: false,
        exclude_cross_channel: [],
      },
      doitgarden: {
        orderable: false,
        reservable: false,
        stock_request: false,
        visible: false,
        exclude_cross_channel: [],
      },
      interio: {
        orderable: false,
        reservable: false,
        stock_request: false,
        visible: false,
        exclude_cross_channel: [],
      },
      melectronics: {
        orderable: false,
        reservable: false,
        stock_request: false,
        visible: false,
        exclude_cross_channel: [],
      },
      micasa: {
        orderable: false,
        reservable: false,
        stock_request: false,
        visible: false,
        exclude_cross_channel: [],
      },
      migros_ch: {
        orderable: false,
        reservable: false,
        stock_request: false,
        visible: true,
        exclude_cross_channel: [],
      },
      sportxx: {
        orderable: false,
        reservable: false,
        stock_request: false,
        visible: false,
        exclude_cross_channel: [],
      },
    },
    allergens: [
      {
        code: 'ALLG_MILCH',
        name: 'Milch',
        contamination_code: 'KANN_ENTHALTEN',
        contamination: 'kann enthalten',
      },
      {
        code: 'ALLG_HASELNU',
        name: 'Haselnüsse',
        contamination_code: 'KANN_ENTHALTEN',
        contamination: 'kann enthalten',
      },
      {
        code: 'ALLG_MANDELN',
        name: 'Mandeln',
        contamination_code: 'VORHANDEN',
        contamination: 'vorhanden',
      },
      {
        code: 'ALLG_NUSS',
        name: 'Nüsse',
        contamination_code: 'KANN_ENTHALTEN',
        contamination: 'kann enthalten',
      },
      {
        code: 'ALLG_SOJA',
        name: 'Sojabohnen',
        contamination_code: 'KANN_ENTHALTEN',
        contamination: 'kann enthalten',
      },
    ],
    image: {
      original:
        'https://image.migros.ch/original/914b11079193ce6e4cedfce29dc66d80c13c8854/almond-coaties-mandeln-zuckerueber.jpg',
      stack:
        'https://image.migros.ch/{stack}/914b11079193ce6e4cedfce29dc66d80c13c8854/almond-coaties-mandeln-zuckerueber.jpg',
    },
    image_transparent: {
      original:
        'https://image.migros.ch/original/82f53087e6b0e8e6ff5b2ab52d0b1b3d9a37beee/almond-coaties-mandeln-zuckerueber.png',
      stack:
        'https://image.migros.ch/{stack}/82f53087e6b0e8e6ff5b2ab52d0b1b3d9a37beee/almond-coaties-mandeln-zuckerueber.png',
    },
    internal_features: [
      {
        label_code: 'common_messwert_oekobilanz',
        label: 'Messwert Ökobilanz',
        values: [
          {
            value_code: 'BOOLEAN_FALSE',
            value: 'Nein',
            boolean_value: false,
          },
        ],
        category_code: 'Common_CLA_Klimadeklaration',
        top_fact: false,
      },
      {
        label_code: 'MISO_aMigos_anzeige',
        label: 'Anzeige aMigos!',
        values: [
          {
            value_code: 'MISO_aMigos_anzeige_ja',
            value: 'Ja',
          },
        ],
        category_code: 'MISO_CLA_aMigos_Alle',
        top_fact: false,
      },
      {
        label_code: 'MISO_aMigos_sortierung',
        label: 'Sortierung aMigos',
        values: [
          {
            value_code: 'NUMERIC_620',
            value: '620',
            numeric_value: 620,
          },
        ],
        category_code: 'MISO_CLA_aMigos_Alle',
        top_fact: false,
      },
      {
        label_code: 'MAPI_GENERAL_POSITION_GROUP',
        values: [
          {
            value_code: 'NORM',
            value: 'Normalposition',
          },
        ],
        category_code: 'MAPI_GENERAL_POSITION_GROUP',
        top_fact: false,
      },
      {
        label_code: 'MAPI_ARTICLE_VARIETY',
        values: [
          {
            value: 'HAWA',
          },
        ],
        category_code: 'MAPI_ARTICLE_VARIETY',
        top_fact: false,
      },
      {
        label_code: 'MAPI_PRODUCT_KIND',
        values: [
          {
            value_code: 'HAWA',
            value: 'Handelsware',
          },
        ],
        category_code: 'MAPI_PRODUCT_KIND',
        top_fact: false,
      },
      {
        label_code: 'MAPI_ASSORTMENT_LIST_KIND',
        values: [
          {
            value_code: 'M',
            value: 'Kolonial Standard',
          },
        ],
        category_code: 'MAPI_ASSORTMENT_LIST_KIND',
        top_fact: false,
      },
      {
        label_code: 'MAPI_PRODUCT_GROUP',
        values: [
          {
            value_code: '10159',
            value: 'KNABBERN',
          },
        ],
        category_code: 'MAPI_PRODUCT_GROUP',
        top_fact: false,
      },
      {
        label_code: 'MAPI_CUMULUS_POINTS_CODE',
        values: [
          {
            value_code: 'NUMERIC_2',
            value: '2',
            numeric_value: 2,
          },
        ],
        category_code: 'MAPI_CUMULUS_POINTS_CODE',
        top_fact: false,
      },
      {
        label_code: 'MAPI_PROMOTIONS_CODE',
        values: [
          {
            value_code: 'NUMERIC_1',
            value: '1',
            numeric_value: 1,
          },
        ],
        category_code: 'MAPI_PROMOTIONS_CODE',
        top_fact: false,
      },
      {
        label_code: 'MAPI_LIFECYCLE',
        values: [
          {
            value_code: 'D',
            value: 'Detailhandelsartikel',
          },
        ],
        category_code: 'MAPI_LIFECYCLE',
        top_fact: false,
      },
    ],
    vat: {
      id: 2,
      percentage: 2.5,
    },
    regulated_description: 'Mandeln mit Zuckerüberzug',
    links: {
      migros_ch: {
        url: 'https://produkte.migros.ch/products/101303500000',
        name: 'migros.ch',
        canonical:
          'https://produkte.migros.ch/almond-coaties-mandeln-zuckerueber',
        type: 'info',
        purchasable: false,
      },
      migros_online: {
        url: 'https://shop.migros.ch/de/direct/product/4964484',
        app_url: 'migros://ecommerce.app/products/id/4964484',
        mo_product_id: '4964484',
        name: 'Migros Online',
        canonical:
          'https://produkte.migros.ch/almond-coaties-mandeln-zuckerueber',
        type: 'shop',
        purchasable: true,
      },
      migipedia: {
        url: 'https://migipedia.migros.ch/de/products/101303500000',
        name: 'Migipedia',
        canonical:
          'https://produkte.migros.ch/almond-coaties-mandeln-zuckerueber',
        type: 'info',
        purchasable: false,
      },
    },
    regional_availability: {
      gmaa: {
        probability: 42,
      },
      gmbs: {
        probability: 33,
      },
      gmge: {
        probability: 55,
      },
      gmlu: {
        probability: 32,
      },
      gmnf: {
        probability: 43,
      },
      gmos: {
        probability: 34,
      },
      gmti: {
        probability: 37,
      },
      gmvd: {
        probability: 61,
      },
      gmvs: {
        probability: 62,
      },
      gmzh: {
        probability: 52,
      },
    },
    m_check2: {
      carbon_footprint: {
        image: {
          original:
            'https://image.migros.ch/original/22a91c7da0c7e9d31c07dcd9af58cc97079ac68b.svg',
          stack:
            'https://image.migros.ch/{stack}/22a91c7da0c7e9d31c07dcd9af58cc97079ac68b.svg',
        },
        ground_and_sea_cargo: {
          kg_co2: 5.65,
          kg_co2_range: '4.8 - 9.9 kg CO₂eq / kg',
          co2_in_car_km: 31,
          rating: 2,
          production_in_percent: 94.99,
          packaging_in_percent: 3.06,
          transport_in_percent: 1.95,
        },
      },
    },
    updated_at: '2021-08-23T03:55:29+0200',
    sap_created_at: '2001-10-05T00:00:00+0200',
    base_unit: 'CU',
    slugs: {
      de: 'almond-coaties-mandeln-zuckerueber',
      fr: 'almond-coaties-amandes-enrob-sucre',
      it: 'almond-coaties-mandorle-rico-zucc',
      en: 'almond-coaties-mandeln-zuckerueber',
    },
    receipt_text: 'Coaties Zuck. Mandeln',
    type: '00',
    main_supplier: {
      name: 'Delica AG',
      id: '0003010000',
      supplier_product_id: '10131004',
    },
    price: {
      valid_from: '2018-01-15T00:00:00+0100',
      valid_to: '9999-12-31T23:59:59+0100',
      currency: 'CHF',
      source: 'PriceRepository',
      item: {
        price: 4.4,
        quantity: 1,
        unit: 'CU',
        varying_quantity: false,
        display_quantity: '150g',
      },
      base: {
        price: 2.93,
        quantity: 100,
        unit: 'g',
      },
    },
    retailer: {
      id: 'supermarkt',
      name: 'Supermarkt',
    },
    ratings: {
      count_all: 17,
      average_all: 4.785714285714,
    },
    data_source: 'SAP-X11',
    package: {
      content: 150,
      content_unit_code: 'g',
      content_unit: 'Gramm',
      net_weight: 0.15,
      net_weight_unit_code: 'kg',
      net_weight_unit: 'Kilogramm',
      portions_per_package: '6',
      precision: 'exact',
      brutto_weight: 0.159,
      brutto_weight_unit_code: 'kg',
      brutto_volume: 0.7,
      brutto_volume_unit_code: 'cdm',
      height: 17.5,
      length: 4,
      width: 10,
      unit_dimension: 'cm',
      price_comparison_content: 100,
      size: '150g',
    },
    package_information: {
      tu: {
        gtins: ['23502420', '7616500351424', '7616500099944', '7616500002562'],
        brutto_weight: 3.25,
        brutto_weight_unit_code: 'kg',
        brutto_volume: 8.105,
        brutto_volume_unit_code: 'cdm',
        height: 13.6,
        length: 30.1,
        width: 19.8,
        dimension_unit_code: 'cm',
        number_of_base_units: 20,
      },
      cu: {
        gtins: ['7616500130357'],
        brutto_weight: 0.159,
        brutto_weight_unit_code: 'kg',
        brutto_volume: 0.7,
        brutto_volume_unit_code: 'cdm',
        height: 17.5,
        length: 4,
        width: 10,
        dimension_unit_code: 'cm',
        number_of_base_units: 1,
      },
      lu: {
        brutto_weight: 447.4,
        brutto_weight_unit_code: 'kg',
        brutto_volume: 1044.48,
        brutto_volume_unit_code: 'cdm',
        height: 108.8,
        length: 120,
        width: 80,
        dimension_unit_code: 'cm',
        number_of_base_units: 2560,
      },
    },
    related_products: {
      purchase_recommendations: {
        product_ids: [
          '101342200000',
          '101342600000',
          '101345900000',
          '101342300000',
          '101346000000',
        ],
      },
    },
    declarations: {
      food: {
        food_declaration_gtins: ['7616500130357'],
      },
    },
    reindex_date: '9999-12-31T00:00:00+0100',
    recipe_ingredient_ids: ['67200', '74324'],
    views: ['all', 'browse', 'browseallretailers'],
    ingredients:
      'Zucker, <strong>Mandeln</strong> 46 %, Reisstärke, Überzugsmittel: Gummi arabicum, natürliche Aromen, Randensaftkonzentrat, Schwarzkarottensaftkonzentrat, Saflorextrakt, Farbstoffe: E 141, Beta-Carotin und E 100.',
    origins: {
      producing_country: 'Hergestellt in der Schweiz',
    },
    allergen_text:
      'Kann Haselnüsse, Milch, Soja und Spuren anderer Schalenfrüchte (Nüsse) enthalten',
  },
  {
    id: '104240900000',
    language: 'de',
    name: 'Farmer Soft Sport',
    names: {
      short_name: 'Farmer Soft Sport',
    },
    slug: 'farmer-soft-sport-104240900000',
    boss_number: '010318201010',
    status: {
      id: 'available',
      seasonal: false,
      pim_status: '03',
    },
    tags: [
      'source-pex',
      'migipedia',
      'view-browse-partial',
      'view-browse-all-retailers-partial',
    ],
    is_variant: false,
    gtins: ['7613312285794'],
    brand: {
      id: '052',
      name: 'Farmer',
      slug: 'farmer',
      image: {
        original:
          'https://image.migros.ch/original/3c1bd7ea87cddf27b0b1e57b502cca4f6c01f4b1/farmer.jpg',
        stack:
          'https://image.migros.ch/{stack}/3c1bd7ea87cddf27b0b1e57b502cca4f6c01f4b1/farmer.jpg',
      },
    },
    categories: [
      {
        code: 'BeSS_01011203',
        name: 'Getreidestängel',
        slug: 'supermarkt/lebensmittel/mueesli-cerealien/getreidestaengel',
        visible: true,
        parent_code: 'BeSS_010112',
        image: {
          original:
            'https://image.migros.ch/original/3b881f916213a24572e37aa906dc530045e6feae/getreidestaengel.jpg',
          stack:
            'https://image.migros.ch/{stack}/3b881f916213a24572e37aa906dc530045e6feae/getreidestaengel.jpg',
        },
        level: 4,
      },
      {
        code: 'BeSS_010112',
        name: 'Müesli & Cerealien',
        slug: 'supermarkt/lebensmittel/mueesli-cerealien',
        visible: true,
        title:
          'Cerealien von der Migros &ndash; für einen guten Start in den Tag',
        parent_code: 'BeSS_0101',
        image: {
          original:
            'https://image.migros.ch/original/94adab320c7d6778bba96c16ad7b18a493850519/mueesli-cerealien.jpg',
          stack:
            'https://image.migros.ch/{stack}/94adab320c7d6778bba96c16ad7b18a493850519/mueesli-cerealien.jpg',
        },
        level: 3,
      },
      {
        code: 'BeSS_0101',
        name: 'Lebensmittel',
        slug: 'supermarkt/lebensmittel',
        visible: true,
        title:
          'Lebensmittel aus Ihrer Migros: hochwertige Produkte, ausgewogener Genuss',
        parent_code: 'BeSS_01',
        image: {
          original:
            'https://image.migros.ch/original/c4c714b236338d5b9a042dd7dd2457b7e8604696/lebensmittel.jpg',
          stack:
            'https://image.migros.ch/{stack}/c4c714b236338d5b9a042dd7dd2457b7e8604696/lebensmittel.jpg',
        },
        level: 2,
      },
      {
        code: 'BeSS_01',
        name: 'Supermarkt',
        slug: 'supermarkt',
        visible: true,
        parent_code: 'root',
        level: 1,
      },
    ],
    additional_categories: [
      [
        {
          code: 'AMIG_CAT_Getreideriegel_MueesliCerealienBrotaufstriche',
          name: 'Getreideriegel',
          slug: 'amigos/mueesli-cerealien-brotaufstriche/getreideriegel',
          visible: true,
          parent_code: 'AMIG_CAT_MueesliCerealienBrotaufstriche',
          level: 3,
        },
        {
          code: 'AMIG_CAT_MueesliCerealienBrotaufstriche',
          name: 'Müesli, Cerealien & Brotaufstriche',
          slug: 'amigos/mueesli-cerealien-brotaufstriche',
          visible: true,
          parent_code: 'BeSS_96',
          level: 2,
        },
        {
          code: 'BeSS_96',
          name: 'aMigos!',
          slug: 'amigos',
          visible: true,
          parent_code: 'root',
          level: 1,
        },
      ],
    ],
    nutrition_facts: {
      standard: {
        nutrients: [
          {
            code: 'PIM_NUT_ENERGIE',
            name: 'Energie',
            pictogram_name: 'Energie',
            category: 'BIG9',
            quantity: 1661,
            quantity_value: '1661',
            quantity_numeric_value: 1661,
            rda_percent: 20,
            rda_percent_operator: '=',
            nutrition_operator: '=',
            quantity_unit: 'kJ',
            quantity_alternate: 394,
            quantity_alternate_value: '394',
            quantity_alternate_numeric_value: 394,
            quantity_alternate_unit: 'kcal',
          },
          {
            code: 'PIM_NUT_FETT',
            name: 'Fett',
            pictogram_name: 'Fett',
            category: 'BIG9',
            quantity: 8.4,
            quantity_value: '8.4',
            quantity_numeric_value: 8.4,
            rda_percent: 12,
            rda_percent_operator: '=',
            nutrition_operator: '=',
            quantity_unit: 'g',
            rating: {
              value: 1,
              text: 'mittel',
              icon: {
                original:
                  'https://image.migros.ch/original/b84b389195e426a9e6b4cd66f2c79b1a049809da.svg',
                stack:
                  'https://image.migros.ch/{stack}/b84b389195e426a9e6b4cd66f2c79b1a049809da.svg',
              },
              hex_color: '#e8a800',
            },
          },
          {
            code: 'PIM_NUT_FETT_GES',
            name: 'davon gesättigte Fettsäuren',
            pictogram_name: 'gesättigte Fettsäuren',
            category: 'BIG9',
            quantity: 3.5,
            quantity_value: '3.5',
            quantity_numeric_value: 3.5,
            rda_percent: 18,
            rda_percent_operator: '=',
            nutrition_operator: '=',
            quantity_unit: 'g',
            rating: {
              value: 1,
              text: 'mittel',
              icon: {
                original:
                  'https://image.migros.ch/original/b84b389195e426a9e6b4cd66f2c79b1a049809da.svg',
                stack:
                  'https://image.migros.ch/{stack}/b84b389195e426a9e6b4cd66f2c79b1a049809da.svg',
              },
              hex_color: '#e8a800',
            },
          },
          {
            code: 'PIM_NUT_KOHLENHY',
            name: 'Kohlenhydrate',
            category: 'BIG9',
            quantity: 73,
            quantity_value: '73',
            quantity_numeric_value: 73,
            rda_percent: 28,
            rda_percent_operator: '=',
            nutrition_operator: '=',
            quantity_unit: 'g',
          },
          {
            code: 'PIM_NUT_ZUCKER',
            name: 'davon Zucker',
            pictogram_name: 'Zucker',
            category: 'BIG9',
            quantity: 31,
            quantity_value: '31',
            quantity_numeric_value: 31,
            rda_percent: 34,
            rda_percent_operator: '=',
            nutrition_operator: '=',
            quantity_unit: 'g',
            rating: {
              value: 2,
              text: 'hoch',
              icon: {
                original:
                  'https://image.migros.ch/original/9aa833abc7cb7207238c3e98a1253eeb7bceee1f.svg',
                stack:
                  'https://image.migros.ch/{stack}/9aa833abc7cb7207238c3e98a1253eeb7bceee1f.svg',
              },
              hex_color: '#cc0000',
            },
          },
          {
            code: 'PIM_NUT_GES_BALL',
            name: 'Ballaststoffe',
            category: 'BIG9',
            quantity: 3,
            quantity_value: '3',
            quantity_numeric_value: 3,
            nutrition_operator: '=',
            quantity_unit: 'g',
          },
          {
            code: 'PIM_NUT_PROTEINE',
            name: 'Eiweiss',
            category: 'BIG9',
            quantity: 5,
            quantity_value: '5',
            quantity_numeric_value: 5,
            rda_percent: 10,
            rda_percent_operator: '=',
            nutrition_operator: '=',
            quantity_unit: 'g',
          },
          {
            code: 'PIM_NUT_KOCHSALZ',
            name: 'Salz',
            pictogram_name: 'Salz',
            category: 'BIG9',
            quantity: 0.43,
            quantity_value: '0.43',
            quantity_numeric_value: 0.43,
            rda_percent: 7,
            rda_percent_operator: '=',
            nutrition_operator: '=',
            quantity_unit: 'g',
            rating: {
              value: 1,
              text: 'mittel',
              icon: {
                original:
                  'https://image.migros.ch/original/b84b389195e426a9e6b4cd66f2c79b1a049809da.svg',
                stack:
                  'https://image.migros.ch/{stack}/b84b389195e426a9e6b4cd66f2c79b1a049809da.svg',
              },
              hex_color: '#e8a800',
            },
          },
        ],
        base_quantity: 100,
        base_unit: 'g',
      },
      portion: {
        nutrients: [
          {
            code: 'PIM_NUT_ENERGIE',
            name: 'Energie',
            pictogram_name: 'Energie',
            category: 'BIG9',
            quantity: 340,
            quantity_value: '340',
            quantity_numeric_value: 340,
            rda_percent: 4,
            rda_percent_operator: '=',
            nutrition_operator: '=',
            quantity_unit: 'kJ',
            quantity_alternate: 81,
            quantity_alternate_value: '81',
            quantity_alternate_numeric_value: 81,
            quantity_alternate_unit: 'kcal',
          },
          {
            code: 'PIM_NUT_FETT',
            name: 'Fett',
            pictogram_name: 'Fett',
            category: 'BIG9',
            quantity: 1.7,
            quantity_value: '1.7',
            quantity_numeric_value: 1.7,
            rda_percent: 2,
            rda_percent_operator: '=',
            nutrition_operator: '=',
            quantity_unit: 'g',
          },
          {
            code: 'PIM_NUT_FETT_GES',
            name: 'davon gesättigte Fettsäuren',
            pictogram_name: 'gesättigte Fettsäuren',
            category: 'BIG9',
            quantity: 0.7,
            quantity_value: '0.7',
            quantity_numeric_value: 0.7,
            rda_percent: 4,
            rda_percent_operator: '=',
            nutrition_operator: '=',
            quantity_unit: 'g',
          },
          {
            code: 'PIM_NUT_KOHLENHY',
            name: 'Kohlenhydrate',
            category: 'BIG9',
            quantity: 15,
            quantity_value: '15',
            quantity_numeric_value: 15,
            rda_percent: 6,
            rda_percent_operator: '=',
            nutrition_operator: '=',
            quantity_unit: 'g',
          },
          {
            code: 'PIM_NUT_ZUCKER',
            name: 'davon Zucker',
            pictogram_name: 'Zucker',
            category: 'BIG9',
            quantity: 6.2,
            quantity_value: '6.2',
            quantity_numeric_value: 6.2,
            rda_percent: 7,
            rda_percent_operator: '=',
            nutrition_operator: '=',
            quantity_unit: 'g',
          },
          {
            code: 'PIM_NUT_GES_BALL',
            name: 'Ballaststoffe',
            category: 'BIG9',
            quantity: 0.6,
            quantity_value: '0.6',
            quantity_numeric_value: 0.6,
            nutrition_operator: '=',
            quantity_unit: 'g',
          },
          {
            code: 'PIM_NUT_PROTEINE',
            name: 'Eiweiss',
            category: 'BIG9',
            quantity: 1,
            quantity_value: '1',
            quantity_numeric_value: 1,
            rda_percent: 2,
            rda_percent_operator: '=',
            nutrition_operator: '=',
            quantity_unit: 'g',
          },
          {
            code: 'PIM_NUT_KOCHSALZ',
            name: 'Salz',
            pictogram_name: 'Salz',
            category: 'BIG9',
            quantity: 0.09,
            quantity_value: '0.09',
            quantity_numeric_value: 0.09,
            rda_percent: 2,
            rda_percent_operator: '=',
            nutrition_operator: '=',
            quantity_unit: 'g',
          },
        ],
        base_description: '1 Riegel',
        base_quantity: 20,
        base_precision: '≈',
        base_unit: 'g',
        package_type: 'Packung',
        portions_per_package: '9',
        portions_per_package_precision: '=',
      },
    },
    retailer_flags: {
      bikeworld: {
        orderable: false,
        reservable: false,
        stock_request: false,
        visible: false,
        exclude_cross_channel: [],
      },
      doitgarden: {
        orderable: false,
        reservable: false,
        stock_request: false,
        visible: false,
        exclude_cross_channel: [],
      },
      interio: {
        orderable: false,
        reservable: false,
        stock_request: false,
        visible: false,
        exclude_cross_channel: [],
      },
      melectronics: {
        orderable: false,
        reservable: false,
        stock_request: false,
        visible: false,
        exclude_cross_channel: [],
      },
      micasa: {
        orderable: false,
        reservable: false,
        stock_request: false,
        visible: false,
        exclude_cross_channel: [],
      },
      migros_ch: {
        orderable: false,
        reservable: false,
        stock_request: false,
        visible: true,
        exclude_cross_channel: [],
      },
      sportxx: {
        orderable: false,
        reservable: false,
        stock_request: false,
        visible: false,
        exclude_cross_channel: [],
      },
    },
    allergens: [
      {
        code: 'ALLG_GLUTEN',
        name: 'Glutenhaltiges Getreide und daraus gewonnene Erzeugnisse',
        contamination_code: 'VORHANDEN',
        contamination: 'vorhanden',
      },
      {
        code: 'ALLG_KOKOSNU',
        name: 'Kokosnuss und daraus gewonnene Erzeugnisse',
        contamination_code: 'VORHANDEN',
        contamination: 'vorhanden',
      },
      {
        code: 'ALLG_SOJA',
        name: 'Sojabohnen und daraus gewonnene Erzeugnisse',
        contamination_code: 'VORHANDEN',
        contamination: 'vorhanden',
      },
      {
        code: 'ALLG_MAIS',
        name: 'Mais und daraus gewonnene Erzeugnisse',
        contamination_code: 'VORHANDEN',
        contamination: 'vorhanden',
      },
    ],
    general_information: [
      {
        label: 'Weitere Zusatzangaben',
        value: 'ohne Palmöl 9 Riegel',
      },
    ],
    image: {
      original:
        'https://image.migros.ch/original/43d8a933de8e5168e4bbbd8bab36a4b01b8fe890/farmer-soft-sport.jpg',
      stack:
        'https://image.migros.ch/{stack}/43d8a933de8e5168e4bbbd8bab36a4b01b8fe890/farmer-soft-sport.jpg',
    },
    image_transparent: {
      original:
        'https://image.migros.ch/original/ba1aba1359072c28085ef34d524365511bc08cd9/farmer-soft-sport.png',
      stack:
        'https://image.migros.ch/{stack}/ba1aba1359072c28085ef34d524365511bc08cd9/farmer-soft-sport.png',
    },
    internal_features: [
      {
        label_code: 'common_messwert_oekobilanz',
        label: 'Messwert Ökobilanz',
        values: [
          {
            value_code: 'BOOLEAN_FALSE',
            value: 'Nein',
            boolean_value: false,
          },
        ],
        category_code: 'Common_CLA_Klimadeklaration',
        top_fact: false,
      },
      {
        label_code: 'MISO_aMigos_anzeige',
        label: 'Anzeige aMigos!',
        values: [
          {
            value_code: 'MISO_aMigos_anzeige_ja',
            value: 'Ja',
          },
        ],
        category_code: 'MISO_CLA_aMigos_Alle',
        top_fact: false,
      },
      {
        label_code: 'MAPI_RETURNABLE',
        label: 'Rückgabe',
        values: [
          {
            value_code: 'BOOLEAN_TRUE',
            value: 'true',
            boolean_value: true,
          },
        ],
        category_code: 'MAPI_RETURNABLE',
        top_fact: false,
      },
      {
        label_code: 'MAPI_EXCLUDE_FROM_COMPARISON_ENGINES',
        values: [
          {
            value_code: 'BOOLEAN_FALSE',
            value: 'false',
            boolean_value: false,
          },
        ],
        category_code: 'MAPI_EXCLUDE_FROM_COMPARISON_ENGINES',
        top_fact: false,
      },
      {
        label_code: 'MAPI_GENERAL_POSITION_GROUP',
        values: [
          {
            value_code: 'NORM',
            value: 'Normalposition',
          },
        ],
        category_code: 'MAPI_GENERAL_POSITION_GROUP',
        top_fact: false,
      },
      {
        label_code: 'MAPI_ARTICLE_VARIETY',
        values: [
          {
            value: 'HAWA',
          },
        ],
        category_code: 'MAPI_ARTICLE_VARIETY',
        top_fact: false,
      },
      {
        label_code: 'MAPI_PRODUCT_KIND',
        values: [
          {
            value_code: 'HAWA',
            value: 'Handelsware',
          },
        ],
        category_code: 'MAPI_PRODUCT_KIND',
        top_fact: false,
      },
      {
        label_code: 'MAPI_ASSORTMENT_LIST_KIND',
        values: [
          {
            value_code: 'M',
            value: 'Kolonial Standard',
          },
        ],
        category_code: 'MAPI_ASSORTMENT_LIST_KIND',
        top_fact: false,
      },
      {
        label_code: 'MAPI_PRODUCT_GROUP',
        values: [
          {
            value_code: '10027',
            value: 'GETREIDERIEGEL',
          },
        ],
        category_code: 'MAPI_PRODUCT_GROUP',
        top_fact: false,
      },
      {
        label_code: 'MAPI_CUMULUS_POINTS_CODE',
        values: [
          {
            value_code: 'NUMERIC_2',
            value: '2',
            numeric_value: 2,
          },
        ],
        category_code: 'MAPI_CUMULUS_POINTS_CODE',
        top_fact: false,
      },
      {
        label_code: 'MAPI_PROMOTIONS_CODE',
        values: [
          {
            value_code: 'NUMERIC_1',
            value: '1',
            numeric_value: 1,
          },
        ],
        category_code: 'MAPI_PROMOTIONS_CODE',
        top_fact: false,
      },
      {
        label_code: 'MAPI_LIFECYCLE',
        values: [
          {
            value_code: 'D',
            value: 'Detailhandelsartikel',
          },
        ],
        category_code: 'MAPI_LIFECYCLE',
        top_fact: false,
      },
    ],
    vat: {
      id: 2,
      percentage: 2.5,
    },
    regulated_description: 'Getreideriegel mit Cranberries und Kokos',
    links: {
      migros_ch: {
        url: 'https://produkte.migros.ch/products/104240900000',
        name: 'migros.ch',
        canonical: 'https://produkte.migros.ch/farmer-soft-sport-104240900000',
        type: 'info',
        purchasable: false,
      },
      migros_online: {
        url: 'https://shop.migros.ch/de/direct/product/5861305',
        app_url: 'migros://ecommerce.app/products/id/5861305',
        mo_product_id: '5861305',
        name: 'Migros Online',
        canonical: 'https://produkte.migros.ch/farmer-soft-sport-104240900000',
        type: 'shop',
        purchasable: true,
      },
      migipedia: {
        url: 'https://migipedia.migros.ch/de/products/104240900000',
        name: 'Migipedia',
        canonical: 'https://produkte.migros.ch/farmer-soft-sport-104240900000',
        type: 'info',
        purchasable: false,
      },
    },
    regional_availability: {
      gmaa: {
        probability: 97,
      },
      gmbs: {
        probability: 95,
      },
      gmge: {
        probability: 90,
      },
      gmlu: {
        probability: 94,
      },
      gmnf: {
        probability: 96,
      },
      gmos: {
        probability: 95,
      },
      gmti: {
        probability: 100,
      },
      gmvd: {
        probability: 91,
      },
      gmvs: {
        probability: 100,
      },
      gmzh: {
        probability: 92,
      },
    },
    m_check2: {
      carbon_footprint: {
        image: {
          original:
            'https://image.migros.ch/original/a9affad9935cc5bb4e06e54a4b00e059da921291.svg',
          stack:
            'https://image.migros.ch/{stack}/a9affad9935cc5bb4e06e54a4b00e059da921291.svg',
        },
        ground_and_sea_cargo: {
          kg_co2: 0.606,
          kg_co2_range: '0 - 0.9 kg CO₂eq / kg',
          co2_in_car_km: 3,
          rating: 5,
          production_in_percent: 64,
          packaging_in_percent: 28,
          transport_in_percent: 7,
        },
      },
    },
    updated_at: '2021-08-22T03:56:34+0200',
    sap_created_at: '2019-10-22T00:00:00+0200',
    base_unit: 'CU',
    slugs: {
      de: 'farmer-soft-sport-104240900000',
      fr: 'farmer-soft-sport-104240900000',
      it: 'farmer-soft-sport-104240900000',
      en: 'farmer-soft-sport-104240900000',
    },
    receipt_text: 'Farmer Soft Sport 180g',
    type: '00',
    main_supplier: {
      name: 'Delica AG',
      id: '0003010000',
      supplier_product_id: '10153863',
    },
    price: {
      valid_from: '2021-08-24T00:00:00+0200',
      valid_to: '2021-08-30T23:59:59+0200',
      currency: 'CHF',
      source: 'PriceRepository',
      item: {
        price: 2.9,
        original_price: 3.6,
        quantity: 1,
        unit: 'CU',
        varying_quantity: false,
        display_quantity: '180g',
      },
      discount: {
        id: '1573398',
        region: 'national',
        start_date: '2021-08-24T00:00:00+0200',
        end_date: '2021-08-30T23:59:59+0200',
        publication_date: '2021-08-22T00:00:00+0200',
        discount_amount: '20%',
        discount_regions: ['national'],
        reference_product_id: '104240600000',
        discount_type: 'aktion',
        discount_type_id: '001',
        discount_type_label: 'SA Sonderangebot',
        organisation: '02',
        cooperative: 'mgb',
        image: {
          source: 'PriceRepository',
          tags: ['list-image'],
          original:
            'https://image.migros.ch/original/5361cbe70bc37ca47e8ec5c7c4cfd8cbc0c72c04/gesamtes-farmer-getreidestaengel-sortiment.jpg',
          stack:
            'https://image.migros.ch/{stack}/5361cbe70bc37ca47e8ec5c7c4cfd8cbc0c72c04/gesamtes-farmer-getreidestaengel-sortiment.jpg',
        },
        image_transparent: {
          source: 'PriceRepository',
          original:
            'https://image.migros.ch/original/5361cbe70bc37ca47e8ec5c7c4cfd8cbc0c72c04/gesamtes-farmer-getreidestaengel-sortiment.png',
          stack:
            'https://image.migros.ch/{stack}/5361cbe70bc37ca47e8ec5c7c4cfd8cbc0c72c04/gesamtes-farmer-getreidestaengel-sortiment.png',
        },
        badge: {
          original:
            'https://image.migros.ch/original/b5c28cc516a81f2375f1c4c612339e390898a754.png',
          stack:
            'https://image.migros.ch/{stack}/b5c28cc516a81f2375f1c4c612339e390898a754.png',
          description: '20 Prozent',
          hex_color: '#ff6600',
        },
        location_planning_type: '01',
        reduction_type_id: '01',
        special_advertisement: false,
        advertisement_type_id: '2',
        description: 'Gesamtes Farmer Getreidestängel-Sortiment',
        discount_hint:
          'z.B. Soft Choc Apfel, 288 g, <strong>3.60 </strong>statt 4.50, Angebot gilt nur vom 24.8. bis 30.8.2021, solange Vorrat.',
        high_performer: false,
        collective_discount: true,
        instead_of: 'statt',
        price: 2.9,
        original_price: 3.6,
        disclaimer:
          'Gültigkeit siehe Angebots-Detailseite.\r\nBei allen Angeboten sind M-Budget und bereits reduzierte Artikel ausgenommen.\r\nBei Aktionen können bei der Verrechnung auf dem Kassabon Rundungsdifferenzen zu Gunsten des Kunden entstehen.',
        source: 'PriceRepository',
        boss_number: '010318201015',
        discount_role_id: '2000000002',
        discount_role_label: 'M: Wochenangebot Typ I',
        last_imported: '2021-08-16T16:00:06+0200',
      },
      discount_hint:
        'Angebot gilt nur vom 24.8. bis 30.8.2021, solange Vorrat.',
    },
    retailer: {
      id: 'supermarkt',
      name: 'Supermarkt',
    },
    ratings: {
      count_all: 9,
      average_all: 3.777777777778,
    },
    data_source: 'SAP-X11',
    package: {
      content: 180,
      content_unit_code: 'g',
      content_unit: 'Gramm',
      net_weight: 0.18,
      net_weight_unit_code: 'kg',
      net_weight_unit: 'Kilogramm',
      portions_per_package: '9',
      precision: 'exact',
      brutto_weight: 0.212,
      brutto_weight_unit_code: 'kg',
      brutto_volume: 0.799,
      brutto_volume_unit_code: 'cdm',
      height: 12.5,
      length: 4.5,
      width: 14.2,
      unit_dimension: 'cm',
      price_comparison_content: 100,
      size: '180g',
    },
    package_information: {
      tu: {
        gtins: ['7613312285800'],
        brutto_weight: 2.85,
        brutto_weight_unit_code: 'kg',
        brutto_volume: 11.141,
        brutto_volume_unit_code: 'cdm',
        height: 15.4,
        length: 27.3,
        width: 26.5,
        dimension_unit_code: 'cm',
        number_of_base_units: 12,
      },
      cu: {
        gtins: ['7613312285794'],
        brutto_weight: 0.212,
        brutto_weight_unit_code: 'kg',
        brutto_volume: 0.799,
        brutto_volume_unit_code: 'cdm',
        height: 12.5,
        length: 4.5,
        width: 14.2,
        dimension_unit_code: 'cm',
        number_of_base_units: 1,
      },
      lu: {
        brutto_weight: 367,
        brutto_weight_unit_code: 'kg',
        length: 120,
        width: 80,
        dimension_unit_code: 'cm',
        number_of_base_units: 1440,
      },
    },
    declarations: {
      food: {
        food_declaration_gtins: ['7613312285794'],
        features: [
          {
            label_code: 'GDSN_M281_NetContent',
            label: 'Nettofüllmenge Wert',
            values: [
              {
                value_code: 'NUMERIC_180',
                value: '180',
                numeric_value: 180,
              },
            ],
            category_code: 'GDSN',
            top_fact: false,
            unit_code: 'g',
          },
        ],
      },
    },
    reindex_date: '2021-08-24T00:00:00+0200',
    recipe_ingredient_ids: ['10000'],
    views: ['all', 'browse', 'browseallretailers'],
    ingredients:
      'Maltodextrin, Getreide 22% (<strong>Hafer</strong>, Mais, Reis, <strong>Weizen</strong>), Birnensaftkonzentrat 11%, Fructose, Cranberries 5%, <strong>Soja</strong>schrot, Kokosraspel 5%, Zucker, Sonnenblumenöl, Kochsalz, Aromen.',
    origins: {
      producing_country: 'Hergestellt in der Schweiz',
    },
    allergen_text: 'Kann Milch und Nüsse enthalten.',
  },
];
