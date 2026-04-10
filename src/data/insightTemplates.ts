/**
 * Insight templates organized by house position from the Moon sign.
 * House 1 = same sign as moon, House 2 = next sign, etc.
 * Each theme has templates for planets transiting through each house.
 *
 * CONTENT RULES:
 * - No predictive language ("will", "shall", "expect to", "is indicated")
 * - No advisory/imperative language ("do this", "avoid", "make sure")
 * - No gem, stone, crystal, or colour recommendations
 * - Use observational, present-tense language describing current energies
 * - Frame insights as tendencies and observations, not forecasts
 */

type HouseTemplates = Record<number, string[]>;

interface ThemeTemplates {
  planetInHouse: Record<string, HouseTemplates>;
  retrograde: Record<string, string[]>;
  general: string[];
}

export const CAREER_TEMPLATES: ThemeTemplates = {
  planetInHouse: {
    sun: {
      1: [
        'Leadership qualities are prominent in your professional sphere. Authority figures are more likely to notice your capabilities and dedication.',
        'A sense of confidence accompanies professional ambitions. There is energy around projects that matter to you.',
        'Professional identity feels clearer under this transit. Goals at work carry a stronger sense of purpose.',
      ],
      2: [
        'Financial aspects of career come into focus under this transit. Negotiations for salary or contracts carry favourable energy.',
        'Skills and resources feel like strong professional assets during this period.',
      ],
      3: [
        'Workplace communication carries extra weight during this transit. Emails, presentations, and meetings have greater significance.',
        'Short professional trips or industry networking carry productive energy.',
      ],
      4: [
        'Work-from-home arrangements and domestic business matters carry supportive energy. Foundational aspects of career are in focus.',
        'The professional base and underlying stability of your work are highlighted.',
      ],
      5: [
        'Creative projects at work carry strong energy. Innovative ideas tend to resonate with others during this transit.',
        'Leadership energy is present. Opportunities to step forward are more visible.',
      ],
      6: [
        'Daily tasks carry renewed vigour. Attention to detail and thoroughness are highlighted in the workplace.',
        'Service-oriented work carries a sense of fulfilment. Collaborative efforts build goodwill.',
      ],
      7: [
        'Business partnerships and professional collaborations are highlighted. Balanced agreements carry strong energy.',
        'Client relationships are in focus. Diplomacy and fairness strengthen professional standing.',
      ],
      8: [
        'Behind-the-scenes efforts at work carry extra weight. Research and investigation are highlighted.',
        'Transformation in career direction is in the air. Change carries less resistance than usual.',
      ],
      9: [
        'Higher learning and professional development are highlighted. Advanced training or certification carries strong energy.',
        'International or cross-cultural professional connections are in focus.',
      ],
      10: [
        'Career visibility is at its peak under this transit. Efforts are more likely to be recognised by those in authority.',
        'Public reputation and professional standing are strongly highlighted.',
      ],
      11: [
        'Professional networks and group projects carry advancement energy. Connections with like-minded colleagues are in focus.',
        'Long-term career goals gain support through collaborative efforts.',
      ],
      12: [
        'Behind-the-scenes strategic planning and reflection on career goals carry strong energy.',
        'A quieter professional period where internal processing and planning are more productive than visible action.',
      ],
    },
    moon: {
      1: ['Emotional intelligence plays a larger role in career decisions. Instincts about workplace dynamics feel sharper.'],
      5: ['Creative inspiration flows more freely in professional life. Artistic and innovative projects carry strong energy.'],
      7: ['Emotional connections with colleagues and clients are deeper. Collaborative work feels especially productive.'],
      10: ['Public image benefits from emotional authenticity. Empathy and understanding carry leadership energy.'],
    },
    mars: {
      1: ['High energy and ambition are present around career matters. Bold action on professional goals feels natural.'],
      6: ['Competitive energy in the workplace is strong. Challenging tasks feel more approachable.'],
      10: ['Executive action and assertive leadership energy are present in career matters.'],
    },
    jupiter: {
      1: ['Expansive energy surrounds the career sector. Optimism and confidence accompany professional growth.'],
      2: ['Financial growth through career endeavours carries strong energy. Investment in skills feels productive.'],
      9: ['Wisdom and higher knowledge play a larger role in career. Teaching or mentoring roles are highlighted.'],
      10: ['Career expansion energy is strong. Professional milestones feel more accessible.'],
      11: ['Professional networks are expanding. Group ventures carry both financial and career-oriented energy.'],
    },
    saturn: {
      1: ['Disciplined effort at work carries significant reward energy. Lasting career structures are being shaped.'],
      6: ['Hard work and perseverance in daily tasks are building professional reputation over time.'],
      10: ['Career responsibilities are increasing alongside authority. Long-term professional foundations are being laid.'],
    },
    venus: {
      2: ['Harmonious energy surrounds financial negotiations at work. Charm and diplomacy serve as professional assets.'],
      7: ['Business partnerships carry cooperative energy. Mutual benefit is the theme in professional agreements.'],
      10: ['Professional grace and social skills are highlighted in career reputation. Public-facing efforts carry positive energy.'],
    },
    mercury: {
      3: ['Communication skills are a key career asset during this transit. Presentations, writing, and negotiations carry extra clarity.'],
      6: ['Analytical skills and attention to detail are highlighted. Documentation and planning carry productive energy.'],
      10: ['Strategic thinking and articulate communication are prominent in career visibility.'],
    },
  },
  retrograde: {
    mercury: [
      'Mercury retrograde highlights the importance of reviewing work communications carefully. Contracts and agreements benefit from a second look.',
      'Past professional proposals or former colleagues re-enter the picture. Old opportunities carry renewed relevance.',
    ],
    venus: [
      'Workplace relationships and professional partnerships are being reevaluated. Past financial decisions come up for review.',
    ],
    mars: [
      'Professional drive feels more inward-directed. This period favours strategy and recalibration over forceful action.',
    ],
    jupiter: [
      'Career growth plans are being reassessed. Internal development feels more meaningful than external advancement.',
    ],
    saturn: [
      'Long-term career structures and commitments are under review. Patience with professional progress is a theme.',
    ],
  },
  general: [
    'Steady progress characterises the professional sphere. Consistent, quality work is the theme.',
    'Ambition and practical considerations are both present. Incremental steps carry significant weight.',
    'Professional adaptability is highlighted. New approaches in work carry openness.',
    'Work ethic and dedication to craft are in focus. A strong professional foundation is being reinforced.',
  ],
};

export const RELATIONSHIPS_TEMPLATES: ThemeTemplates = {
  planetInHouse: {
    sun: {
      1: ['Personal radiance attracts positive attention in relationships. Authenticity in interactions is highlighted.'],
      5: ['Romance and creative self-expression carry strong energy. Feelings are more easily expressed.'],
      7: ['Partnership dynamics are illuminated. Equality and mutual respect are the themes.'],
      11: ['Friendships and social circles are expanding. Community involvement carries meaningful energy.'],
    },
    moon: {
      1: ['Emotional sensitivity heightens awareness of others\' needs. Nurturing connections deepen naturally.'],
      4: ['Family relationships take centre stage. A warm, secure home environment strengthens bonds.'],
      5: ['Romantic feelings are intensified. The heart\'s desires feel more present and expressive.'],
      7: ['Emotional attunement with partners is strong. Deep conversations carry a sense of closeness.'],
    },
    venus: {
      1: ['Personal charm and attractiveness feel enhanced. Social interactions have a natural, pleasant quality.'],
      3: ['Loving messages and sweet communications strengthen bonds. Appreciation for loved ones is in focus.'],
      5: ['Romantic energy is in the air. Creative activities and shared experiences carry warmth between partners.'],
      7: ['Harmony in partnerships is highlighted. Love, beauty, and cooperation are the themes in close relationships.'],
      11: ['Social gatherings and group activities carry romantic or friendship-oriented energy.'],
    },
    mars: {
      1: ['Passionate energy is present in relationships. Direct communication about desires strengthens bonds.'],
      5: ['Bold expressions of love and fiery romance characterise the day. Initiative in love feels natural.'],
      7: ['Assertive energy is present in partnerships. Addressing relationship dynamics directly feels constructive.'],
      8: ['Deep, transformative connections are in the air. Intimacy and vulnerability carry profound bonding energy.'],
    },
    jupiter: {
      5: ['Joyful, expansive energy accompanies romance. Generosity of spirit and love feel intertwined.'],
      7: ['Growth and wisdom are themes in partnerships. Mutual respect and shared ideals are strengthened.'],
      9: ['Connections with people from different backgrounds enrich social life.'],
      11: ['The social circle is expanding with meaningful, growth-oriented friendships.'],
    },
    saturn: {
      4: ['Family responsibilities are in focus, calling for attention and maturity. Stable foundations in home life are being built.'],
      7: ['Commitment and responsibility are themes in relationships. Serious conversations feel constructive.'],
    },
    mercury: {
      3: ['Lively conversations and intellectual exchanges energise relationships.'],
      5: ['Playful communication and witty exchanges bring lightness to romantic connections.'],
      7: ['Clear, thoughtful communication strengthens partnership understanding and cooperation.'],
    },
  },
  retrograde: {
    venus: [
      'Past relationships resurface in thought or reality. Patterns in love and core values are being reconsidered.',
      'What brings joy in relationships is being reevaluated. Self-love and authenticity are the underlying themes.',
    ],
    mercury: [
      'Miscommunications in relationships are more common during this transit. Extra care in listening and speaking is highlighted.',
    ],
    mars: [
      'Relationship energy feels more subdued. Thoughtful gestures carry more weight than impulsive actions.',
    ],
  },
  general: [
    'Balanced energy in relationships brings a sense of harmony. Giving and receiving love feel natural.',
    'Authentic connections are highlighted. Genuine interactions with loved ones carry deeper meaning.',
    'Patience and understanding strengthen close relationships. Empathetic listening is in focus.',
    'Social connections carry a sense of joy. Openness to meaningful encounters is the theme.',
  ],
};

export const HEALTH_TEMPLATES: ThemeTemplates = {
  planetInHouse: {
    sun: {
      1: ['Vitality and energy are strong. Overall constitution benefits from positive solar influence.'],
      6: ['Preventive health practices are in focus. Daily routines and wellness habits are highlighted.'],
      8: ['Deeper health matters are in focus. Restorative practices and adequate rest carry extra importance.'],
      12: ['Rest and recuperation are emphasised. The body\'s signals and need for sleep are more prominent.'],
    },
    moon: {
      1: ['Emotional well-being has a direct impact on physical health. Nurturing the inner world supports outer vitality.'],
      4: ['Comfort and emotional security support overall health. Home-cooked meals and familiar routines carry nourishing energy.'],
      6: ['Digestive health is in focus. Mindful eating and stress management are highlighted.'],
      8: ['Emotional healing carries as much weight as physical health. Underlying stress or anxiety is surfacing for attention.'],
    },
    mars: {
      1: ['High physical energy is available. Exercise and active pursuits are well-suited to this transit.'],
      6: ['An active approach to health carries strong energy. Vigorous exercise and sports feel invigorating.'],
      8: ['Overexertion is a theme to be aware of. Balancing intense physical activity with recovery is in focus.'],
      12: ['Restless energy is present. Gentle practices like yoga or swimming are well-matched to this transit.'],
    },
    jupiter: {
      1: ['Optimism and faith support healing and vitality. A positive outlook has a tangible effect on physical well-being.'],
      6: ['Natural remedies and holistic health approaches carry stronger energy during this transit.'],
    },
    saturn: {
      1: ['Bones, joints, and structural health are in focus. Disciplined health routines are highlighted.'],
      6: ['Chronic health matters call for consistent, patient attention. Slow, steady improvement is the theme.'],
    },
    venus: {
      1: ['Beauty and self-care routines enhance well-being. Nurturing experiences carry extra benefit.'],
      6: ['Balance in diet and lifestyle supports health. Moderation is a key theme.'],
    },
    mercury: {
      6: ['Mental health and the nervous system are in focus. Meditation and mindfulness practices carry extra benefit.'],
      12: ['Quiet reflection and mental rest support overall health. Information overload is a theme to be mindful of.'],
    },
  },
  retrograde: {
    mercury: [
      'Health routines are being reviewed and adjusted. Past health approaches carry renewed relevance.',
    ],
    mars: [
      'Physical energy fluctuates during this transit. Adapting exercise routines to match current energy levels is the theme.',
    ],
    saturn: [
      'Long-standing health disciplines are being revisited. Patience with slow healing processes is a central theme.',
    ],
  },
  general: [
    'A balanced approach to health brings steady improvement. The body\'s own wisdom is highlighted.',
    'The mind-body connection is particularly strong. Thoughts and feelings have a tangible effect on physical state.',
    'Preventive health measures are emphasised. Small daily habits carry lasting wellness energy.',
    'The body\'s natural healing abilities are active. Proper nutrition and rest support this process.',
  ],
};

export const FINANCES_TEMPLATES: ThemeTemplates = {
  planetInHouse: {
    sun: {
      2: ['Financial confidence is growing. The ability to generate income through personal effort is highlighted.'],
      5: ['Speculative energy is present but calls for measured judgement. Creative income sources are in focus.'],
      11: ['Income through professional networks and group activities is highlighted. Long-term financial goals carry momentum.'],
    },
    moon: {
      2: ['Emotional attachment to financial security is heightened. Both intuition and logic play a role in financial decisions.'],
      11: ['Intuitive awareness around savings and investments is stronger during this transit.'],
    },
    venus: {
      2: ['Financial abundance flows more easily. Considered purchases carry lasting satisfaction.'],
      11: ['Social connections and financial opportunity are intertwined. Shared resources and cooperative ventures carry strong energy.'],
    },
    mars: {
      2: ['Assertive financial energy is present. Bold financial decisions carry more weight when well-considered.'],
      11: ['Competitive drive fuels income-related motivation. Financial goals feel more energised.'],
    },
    jupiter: {
      2: ['Strong period for financial expansion. Income growth and resource accumulation carry favourable energy.'],
      5: ['Positive energy around investments and speculative ventures. Generosity and returns feel interconnected.'],
      9: ['Financial benefits through education, travel, or international connections are in focus.'],
      11: ['Financial growth through networks, community, and long-term planning carries strong energy.'],
    },
    saturn: {
      2: ['Financial discipline and careful budgeting are the themes. Long-term security is being built through restraint.'],
      11: ['A patient, structured approach to financial goals is emphasised. Steady progress over quick gains.'],
    },
    mercury: {
      2: ['Smart financial planning and communication about money matters carry positive energy.'],
      11: ['Financial networking and information-gathering carry profitable energy.'],
    },
  },
  retrograde: {
    mercury: [
      'Financial documents and past transactions are being reviewed. Errors in billing or accounts are surfacing for correction.',
    ],
    venus: [
      'The relationship with money and material possessions is being reevaluated. Core values around worth are in focus.',
    ],
    jupiter: [
      'Investment strategies and financial growth plans are being reassessed. Internal wealth and external wealth are both in focus.',
    ],
    saturn: [
      'Long-term financial structures, debts, and commitments are under review. Restructuring carries stabilising energy.',
    ],
  },
  general: [
    'Steady financial management brings peace of mind. Sustainable income streams are in focus.',
    'Financial awareness is heightened. Attention to where resources flow is the theme.',
    'Balance between saving and spending supports long-term financial health.',
    'Practical financial decisions carry a sense of security. Trusting sound judgement is highlighted.',
  ],
};

export const SPIRITUALITY_TEMPLATES: ThemeTemplates = {
  planetInHouse: {
    sun: {
      9: ['Spiritual illumination and higher understanding are accessible. Wisdom through study and reflection is highlighted.'],
      12: ['Deep inner work and spiritual surrender carry profound energy. Meditation is especially potent during this transit.'],
    },
    moon: {
      4: ['Connection with the inner sanctuary is strong. Emotional depth opens doorways to spiritual understanding.'],
      9: ['Intuitive wisdom is guiding the spiritual path. Feeling-based guidance carries extra clarity.'],
      12: ['Dreamtime and subconscious insights carry spiritual significance. Inner visions are more vivid.'],
    },
    jupiter: {
      1: ['Spiritual optimism and philosophical outlook are elevating consciousness.'],
      5: ['Creative spiritual practices carry joy and insight. Devotion through art and celebration is highlighted.'],
      9: ['A peak period for spiritual growth. Sacred knowledge and higher wisdom feel abundantly accessible.'],
      12: ['Liberation and spiritual transcendence are highlighted. Deep meditation carries a sense of divine connection.'],
    },
    saturn: {
      9: ['Disciplined spiritual practice and structured study are deepening understanding of universal truths.'],
      12: ['Karmic completion and spiritual maturity through patient inner work and self-discipline are in focus.'],
    },
    venus: {
      9: ['Devotional practices and the beauty of spiritual traditions are inspiring the soul.'],
      12: ['Compassion and unconditional love serve as pathways to spiritual growth.'],
    },
    mars: {
      9: ['Passionate pursuit of truth and spiritual understanding is present. Focused practice carries fiery energy.'],
    },
    mercury: {
      9: ['Spiritual study and sacred texts carry profound energy. The intellect serves the spirit under this transit.'],
    },
  },
  retrograde: {
    jupiter: [
      'Inner spiritual growth takes precedence over external religious practice. Answers are being found within.',
    ],
    saturn: [
      'Past spiritual lessons and karmic patterns are being revisited. Integration of old wisdom carries new understanding.',
    ],
    mercury: [
      'Spiritual beliefs and philosophical frameworks are being reflected upon. Past teachers or teachings carry renewed relevance.',
    ],
  },
  general: [
    'A day for quiet contemplation and inner peace. Even brief moments of stillness carry spiritual nourishment.',
    'Spiritual awareness naturally deepens through everyday activities. Mindfulness transforms the ordinary.',
    'Connection to something greater brings perspective and peace. Honouring the spiritual practice is in focus.',
    'Inner growth unfolds naturally when space is allowed for reflection. The spiritual journey is unfolding.',
  ],
};

export const GENERAL_TEMPLATES: ThemeTemplates = {
  planetInHouse: {
    sun: {
      1: ['Personal power and self-expression are heightened. Presence commands attention and respect.'],
      4: ['Home and family matters take priority. Comfort and security in personal space are in focus.'],
      7: ['Partnerships and collaborations are in the spotlight. Personal needs and others\' needs are both in play.'],
      10: ['Achievement and public recognition mark this period. Efforts carry well-deserved visibility.'],
    },
    moon: {
      1: ['Emotions run high but productively. Feelings serve as a guide to authentic decision-making.'],
      4: ['Domestic comfort and emotional security are anchoring the day. Nurturing roots is the theme.'],
      7: ['Emotional connections with others are deepening. Empathy and understanding create harmonious interactions.'],
      10: ['Emotional intelligence is prominent in public settings. Heart and wisdom carry leadership energy.'],
    },
    jupiter: {
      1: ['Optimism, growth, and good fortune are present. Expanding horizons feels natural and supported.'],
      9: ['Wisdom, adventure, and higher purpose are inspiring action. Thinking broadly is the theme.'],
    },
    saturn: {
      1: ['Discipline and responsibility are shaping the day. Maturity in handling challenges is building character.'],
      10: ['Authority and long-term goals are in focus. Structure and discipline carry a sense of freedom.'],
    },
    mars: {
      1: ['Dynamic energy and courage are driving action. Passion is being channelled into constructive pursuits.'],
      10: ['Ambitious drive is present around achievement. Energy is being directed with clear purpose.'],
    },
    venus: {
      1: ['Grace, beauty, and harmony enhance personal expression. Social interactions have a natural flow.'],
      7: ['Love, beauty, and cooperation are infusing partnerships. Balance in all relationships is the theme.'],
    },
    mercury: {
      1: ['Quick thinking and clear communication are strengths. Articulate self-expression is highlighted.'],
      3: ['Short journeys, messages, and intellectual pursuits carry stimulation and opportunity.'],
    },
  },
  retrograde: {
    mercury: [
      'A period for review, reflection, and revision rather than initiation. Past matters surface for closure.',
    ],
    venus: [
      'What truly matters in life is being reevaluated. Inner beauty and authentic values are surfacing.',
    ],
    mars: [
      'Direct action feels more frustrated than usual. Strategic planning and internal motivation-building are more productive.',
    ],
    jupiter: [
      'Growth turns inward. Philosophical reflection and inner expansion feel more fruitful than external pursuits.',
    ],
    saturn: [
      'Commitments and responsibilities are under review. Restructuring carries long-term stabilising energy.',
    ],
  },
  general: [
    'A balanced day with energy for both productivity and enjoyment. Presence and engagement are the themes.',
    'Cosmic energies support steady progress in all areas of life. The path is unfolding naturally.',
    'Awareness and intention are shaping the day. Small mindful choices create positive momentum.',
    'The planetary alignments favour practical action combined with inspired thinking. The energy is available to be used well.',
  ],
};

export const ALL_TEMPLATES: Record<string, ThemeTemplates> = {
  career: CAREER_TEMPLATES,
  relationships: RELATIONSHIPS_TEMPLATES,
  health: HEALTH_TEMPLATES,
  finances: FINANCES_TEMPLATES,
  spirituality: SPIRITUALITY_TEMPLATES,
  general: GENERAL_TEMPLATES,
};
