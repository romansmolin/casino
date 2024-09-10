import type { Schema, Attribute } from '@strapi/strapi';

export interface BonusBonusInfo extends Schema.Component {
  collectionName: 'components_bonus_bonus_infos';
  info: {
    displayName: 'BonusInfo';
    icon: 'feather';
    description: '';
  };
  attributes: {
    release_date: Attribute.Date;
    available_for: Attribute.JSON &
      Attribute.CustomField<
        'plugin::multi-select.multi-select',
        ['Latvia', 'USA', 'Russia']
      >;
    bonus_type: Attribute.JSON &
      Attribute.CustomField<
        'plugin::multi-select.multi-select',
        [
          'No Deposit Bonus:noDepositBonus',
          'Welcome Bonus:welcomeBonus',
          'Cashback Bonus:cashbackBonus',
          'Best Of The Month:bestOfTheMonth'
        ]
      >;
    bonus_status: Attribute.JSON &
      Attribute.CustomField<
        'plugin::multi-select.multi-select',
        ['Active', 'Innactive']
      >;
  };
}

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

export interface ContentContentSection extends Schema.Component {
  collectionName: 'components_content_content_sections';
  info: {
    displayName: 'ContentSection';
    description: '';
  };
  attributes: {
    text: Attribute.Blocks;
    image: Attribute.Media;
  };
}

export interface FaqFaqItem extends Schema.Component {
  collectionName: 'components_faq_faq_items';
  info: {
    displayName: 'FaqItem';
  };
  attributes: {
    text: Attribute.Text;
    label: Attribute.String;
  };
}

export interface FaqFaq extends Schema.Component {
  collectionName: 'components_faq_faqs';
  info: {
    displayName: 'FAQ';
    description: '';
  };
  attributes: {
    fact1: Attribute.Component<'faq.faq-item', true>;
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
      'bonus.bonus-info': BonusBonusInfo;
      'card.casino-card': CardCasinoCard;
      'card.promo-card': CardPromoCard;
      'content.content-section': ContentContentSection;
      'faq.faq-item': FaqFaqItem;
      'faq.faq': FaqFaq;
      'list.available-promos-list': ListAvailablePromosList;
      'list.casino-top-list': ListCasinoTopList;
    }
  }
}
