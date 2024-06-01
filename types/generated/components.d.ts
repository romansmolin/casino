import type { Schema, Attribute } from '@strapi/strapi';

export interface CardCasinoCard extends Schema.Component {
  collectionName: 'components_card_casino_cards';
  info: {
    displayName: 'CasinoCard';
    icon: 'code';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    main_bonus_title: Attribute.String;
    logo: Attribute.Media;
    rating: Attribute.Integer &
      Attribute.SetMinMax<
        {
          max: 100;
        },
        number
      >;
    hasRegularOffers: Attribute.Boolean;
    hasLiveCasino: Attribute.Boolean;
    hasVIPProgram: Attribute.Boolean;
    hasLiveChat: Attribute.Boolean;
    casino: Attribute.Relation<
      'card.casino-card',
      'oneToOne',
      'api::casino.casino'
    >;
  };
}

export interface CardPromoCard extends Schema.Component {
  collectionName: 'components_card_promo_cards';
  info: {
    displayName: 'PromoCard';
    icon: 'cube';
    description: '';
  };
  attributes: {
    bonus_title: Attribute.String;
    bonus_subtitle: Attribute.String;
    bonus_img: Attribute.Media;
    link: Attribute.String;
  };
}

export interface ListAvailablePromosList extends Schema.Component {
  collectionName: 'components_list_available_promos_lists';
  info: {
    displayName: 'AvailablePromosList';
    icon: 'apps';
  };
  attributes: {
    Promo: Attribute.Component<'card.promo-card'>;
  };
}

export interface ListCasinoTopList extends Schema.Component {
  collectionName: 'components_list_casino_top_lists';
  info: {
    displayName: 'CasinoTopList';
    icon: 'apps';
  };
  attributes: {
    CasinoCard: Attribute.Component<'card.casino-card', true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'card.casino-card': CardCasinoCard;
      'card.promo-card': CardPromoCard;
      'list.available-promos-list': ListAvailablePromosList;
      'list.casino-top-list': ListCasinoTopList;
    }
  }
}
