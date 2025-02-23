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
    bonus_type: Attribute.JSON &
      Attribute.CustomField<
        'plugin::multi-select.multi-select',
        [
          'No Deposit Bonus:no-deposit-bonuses',
          'Welcome Bonus:welcome-bonuses',
          'Cashback Bonus:cashback-bonuses',
          'Best Of The Month:best-of-the-month',
          'Real Money Bonuses:real-money-bonuses',
          'Free Spins Bonuses:free-spins-bonuses',
          '20 Free Spins:20-free-spins-bonuses',
          '50 Free Spins:50-free-spins-bonuses',
          '100 Free Spins:100-free-spins-bonuses',
          'Free Spins Bonus:free-spins-bonuses',
          ''
        ]
      >;
    bonus_status: Attribute.JSON &
      Attribute.CustomField<
        'plugin::multi-select.multi-select',
        ['Active', 'Innactive']
      >;
    availableFor: Attribute.JSON;
  };
}

export interface BonusMainBonusInfo extends Schema.Component {
  collectionName: 'components_bonus_main_bonus_infos';
  info: {
    displayName: 'MainBonusInfo';
    icon: 'bold';
    description: '';
  };
  attributes: {
    bonusLink: Attribute.String;
    info: Attribute.Blocks;
    bonus: Attribute.Relation<
      'bonus.main-bonus-info',
      'oneToOne',
      'api::bonus.bonus'
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
    text: Attribute.Blocks & Attribute.Required;
    image: Attribute.Media;
    position: Attribute.Enumeration<['left', 'rigth']> & Attribute.Required;
    imageBackgroundColor: Attribute.JSON &
      Attribute.CustomField<
        'plugin::multi-select.multi-select',
        ['Pinky Red:#dd3070', 'Orange:#DD7030', 'Blue:#3030DD', '']
      >;
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
      'bonus.main-bonus-info': BonusMainBonusInfo;
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
