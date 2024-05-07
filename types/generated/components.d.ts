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
      'list.casino-top-list': ListCasinoTopList;
    }
  }
}
