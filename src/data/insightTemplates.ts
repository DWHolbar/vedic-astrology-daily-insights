/**
 * Insight templates organized by house position from the Moon sign.
 * House 1 = same sign as moon, House 2 = next sign, etc.
 * Each theme has templates for planets transiting through each house.
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
        'Your leadership qualities shine brightly today. Authority figures take notice of your capabilities and dedication.',
        'A surge of confidence propels your professional ambitions. Take the initiative on projects that matter to you.',
        'Your professional identity gains clarity. This is an excellent time to assert your goals at work.',
      ],
      2: [
        'Financial aspects of your career come into focus. Negotiations for salary or contracts are well-starred.',
        'Your skills and resources are your greatest professional assets today. Leverage them wisely.',
      ],
      3: [
        'Communication in the workplace proves crucial. Important emails, presentations, or meetings can advance your position.',
        'Short professional trips or networking within your industry yield valuable connections.',
      ],
      4: [
        'Work-from-home arrangements are favored. Matters related to real estate or domestic businesses gain momentum.',
        'Your foundation at work needs attention. Focus on building a stable base for future growth.',
      ],
      5: [
        'Creative projects at work gain momentum. Your innovative ideas find a receptive audience.',
        'A leadership opportunity presents itself. Step into it with confidence and enthusiasm.',
      ],
      6: [
        'Tackle daily tasks with renewed vigor. Your attention to detail impresses colleagues and supervisors.',
        'Service-oriented work brings satisfaction. Help others at work and build goodwill.',
      ],
      7: [
        'Business partnerships and professional collaborations are highlighted. Seek balanced agreements.',
        'Client relationships demand attention. Diplomacy and fairness strengthen your professional reputation.',
      ],
      8: [
        'Behind-the-scenes efforts at work bear fruit. Research and investigation prove valuable.',
        'Transformation in your career path is possible. Embrace change rather than resisting it.',
      ],
      9: [
        'Higher learning and professional development are favored. Consider advanced training or certification.',
        'International or cross-cultural professional opportunities emerge. Expand your horizons.',
      ],
      10: [
        'Maximum career visibility today. Your efforts are recognized by those in authority.',
        'Public reputation and professional standing reach a peak. Make important career moves now.',
      ],
      11: [
        'Professional networks and group projects bring advancement. Connect with like-minded colleagues.',
        'Long-term career goals gain traction through collaborative efforts.',
      ],
      12: [
        'Work behind the scenes. Strategic planning and reflection on career goals serve you well.',
        'Release attachment to outcomes at work. Trust that your efforts will manifest when the time is right.',
      ],
    },
    moon: {
      1: ['Emotional intelligence guides your career decisions today. Trust your instincts about workplace dynamics.'],
      5: ['Creative inspiration flows freely in your professional life. Artistic and innovative projects thrive.'],
      7: ['Emotional connections with colleagues and clients deepen. Collaborative work is especially productive.'],
      10: ['Your public image benefits from emotional authenticity. Lead with empathy and understanding.'],
    },
    mars: {
      1: ['High energy and ambition drive career progress. Take bold action on professional goals.'],
      6: ['Competitive energy in the workplace works in your favor. Tackle challenging tasks head-on.'],
      10: ['Executive action and assertive leadership bring career advancement. Push forward decisively.'],
    },
    jupiter: {
      1: ['Expansive opportunities in your career sector. Optimism and confidence attract professional growth.'],
      2: ['Financial prosperity through career endeavors is indicated. Investments in your skills pay off.'],
      9: ['Wisdom and higher knowledge advance your career. Teaching or mentoring roles are beneficial.'],
      10: ['Peak career expansion. Major professional milestones are within reach. Aim high.'],
      11: ['Professional networks expand significantly. Group ventures bring financial and career rewards.'],
    },
    saturn: {
      1: ['Disciplined effort at work is required but rewarding. Build lasting structures in your career.'],
      6: ['Hard work and perseverance in daily tasks build your professional reputation over time.'],
      10: ['Career responsibilities increase but so does your authority. Long-term professional success is building.'],
    },
    venus: {
      2: ['Harmonious financial negotiations at work succeed. Your charm and diplomacy are professional assets.'],
      7: ['Business partnerships flourish under cooperative energy. Seek win-win agreements.'],
      10: ['Professional grace and social skills enhance your career reputation. Public relations efforts shine.'],
    },
    mercury: {
      3: ['Communication skills are your career superpower today. Presentations, writing, and negotiations excel.'],
      6: ['Analytical skills and attention to detail advance your work. Documentation and planning are favored.'],
      10: ['Strategic thinking and articulate communication bring career recognition.'],
    },
  },
  retrograde: {
    mercury: [
      'Mercury retrograde suggests reviewing work communications before sending. Double-check contracts and agreements.',
      'Revisit past professional proposals or reconnect with former colleagues. Old opportunities may resurface.',
    ],
    venus: [
      'Reevaluate workplace relationships and professional partnerships. Past financial decisions need review.',
    ],
    mars: [
      'Professional drive may feel stalled. Use this period to strategize rather than push forward aggressively.',
    ],
    jupiter: [
      'Reassess career growth plans. Internal development matters more than external advancement right now.',
    ],
    saturn: [
      'Review long-term career structures and commitments. Patience with professional progress is essential.',
    ],
  },
  general: [
    'Steady progress marks your professional life today. Focus on consistent, quality work.',
    'Balance ambition with practical considerations. Small steps lead to significant career achievements.',
    'Professional adaptability serves you well. Be open to new approaches in your work.',
    'Your work ethic speaks volumes today. Dedication to your craft builds a strong professional foundation.',
  ],
};

export const RELATIONSHIPS_TEMPLATES: ThemeTemplates = {
  planetInHouse: {
    sun: {
      1: ['Your personal radiance attracts positive attention in relationships. Be authentic in your interactions.'],
      5: ['Romance and creative self-expression flourish. Express your feelings openly and joyfully.'],
      7: ['Partnership dynamics are illuminated. Focus on equality and mutual respect in relationships.'],
      11: ['Friendships and social circles expand. Community involvement brings meaningful connections.'],
    },
    moon: {
      1: ['Emotional sensitivity heightens your awareness of others\' needs. Nurturing connections deepen.'],
      4: ['Family relationships take center stage. Creating a warm, secure home environment strengthens bonds.'],
      5: ['Romantic feelings intensify. Express your heart\'s desires with confidence and vulnerability.'],
      7: ['Emotional attunement with your partner reaches a peak. Deep conversations bring closeness.'],
    },
    venus: {
      1: ['Personal charm and attractiveness are enhanced. Social interactions flow naturally and pleasantly.'],
      3: ['Sweet communications and loving messages strengthen bonds. Express appreciation to loved ones.'],
      5: ['Romance is in the air. Creative dates and artistic activities bring couples closer together.'],
      7: ['Harmony in partnerships is highlighted. Love, beauty, and cooperation enhance your closest relationships.'],
      11: ['Social gatherings and group activities bring romantic or friendship opportunities.'],
    },
    mars: {
      1: ['Passionate energy in relationships. Direct communication about desires strengthens bonds.'],
      5: ['Fiery romance and bold expressions of love characterize your day. Take the initiative in love.'],
      7: ['Assertiveness in partnerships is needed. Address relationship dynamics directly but respectfully.'],
      8: ['Deep, transformative connections are possible. Intimacy and vulnerability lead to profound bonding.'],
    },
    jupiter: {
      5: ['Joyful, expansive energy in romance. Generosity of spirit attracts love and happiness.'],
      7: ['Growth and wisdom in partnerships. Mutual respect and shared ideals strengthen your bond.'],
      9: ['Connections with people from different backgrounds enrich your social life.'],
      11: ['Your social circle expands with meaningful, growth-oriented friendships.'],
    },
    saturn: {
      4: ['Family responsibilities require attention and maturity. Building stable foundations in home life.'],
      7: ['Commitment and responsibility in relationships. Serious conversations about the future are constructive.'],
    },
    mercury: {
      3: ['Lively conversations and intellectual exchanges energize your relationships.'],
      5: ['Playful communication and witty exchanges bring fun to romantic connections.'],
      7: ['Clear, thoughtful communication strengthens partnership understanding and cooperation.'],
    },
  },
  retrograde: {
    venus: [
      'Past relationships may resurface in your thoughts. Reflect on patterns in love and what you truly value.',
      'Revisit and reevaluate what brings you joy in relationships. Self-love is the foundation.',
    ],
    mercury: [
      'Miscommunications in relationships are possible. Listen carefully and speak clearly to avoid misunderstandings.',
    ],
    mars: [
      'Relationship energy may feel subdued. Channel passion into thoughtful gestures rather than impulsive actions.',
    ],
  },
  general: [
    'Balanced energy in relationships brings harmony. Give and receive love with an open heart.',
    'Authentic connections are favored today. Be genuine in your interactions with loved ones.',
    'Patience and understanding strengthen your closest relationships. Listen with empathy.',
    'Social connections bring unexpected joy. Stay open to meaningful encounters throughout the day.',
  ],
};

export const HEALTH_TEMPLATES: ThemeTemplates = {
  planetInHouse: {
    sun: {
      1: ['Vitality and energy are strong. Your overall constitution benefits from positive solar influence.'],
      6: ['Focus on preventive health practices. Daily routines and wellness habits need attention.'],
      8: ['Pay attention to deeper health matters. Restorative practices and adequate rest are essential.'],
      12: ['Rest and recuperation are needed. Honor your body\'s signals and prioritize sleep.'],
    },
    moon: {
      1: ['Emotional well-being directly impacts physical health. Nurture your inner world for outer vitality.'],
      4: ['Comfort and emotional security support your health. Home-cooked meals and familiar routines help.'],
      6: ['Digestive health needs attention. Mindful eating and stress management improve well-being.'],
      8: ['Emotional healing is as important as physical health. Address underlying stress or anxiety.'],
    },
    mars: {
      1: ['High physical energy is available. Channel it through exercise and active pursuits.'],
      6: ['Active approach to health brings benefits. Vigorous exercise and competitive sports are favored.'],
      8: ['Be mindful of overexertion. Balance intense physical activity with adequate recovery time.'],
      12: ['Channel restless energy into gentle practices like yoga or swimming. Avoid pushing too hard.'],
    },
    jupiter: {
      1: ['Optimism and faith support healing and vitality. A positive outlook enhances physical well-being.'],
      6: ['Natural remedies and holistic health approaches are especially effective now.'],
    },
    saturn: {
      1: ['Pay attention to bones, joints, and structural health. Disciplined health routines are essential.'],
      6: ['Chronic health matters need consistent, patient attention. Slow, steady improvement is the path.'],
    },
    venus: {
      1: ['Beauty and self-care routines enhance your well-being. Treat yourself to nurturing experiences.'],
      6: ['Balance in diet and lifestyle brings health improvements. Moderation is your best medicine.'],
    },
    mercury: {
      6: ['Mental health and nervous system need attention. Meditation and mindfulness practices help greatly.'],
      12: ['Quiet reflection and mental rest support overall health. Reduce information overload.'],
    },
  },
  retrograde: {
    mercury: [
      'Review your health routines and adjust as needed. Past health approaches may provide new insights.',
    ],
    mars: [
      'Physical energy may fluctuate. Adapt your exercise routine to match your current energy levels.',
    ],
    saturn: [
      'Revisit long-standing health disciplines. Patience with slow healing processes is essential.',
    ],
  },
  general: [
    'Balanced approach to health brings steady improvement. Listen to your body\'s wisdom.',
    'Mind-body connection is particularly strong today. What you think affects how you feel physically.',
    'Preventive health measures serve you well. Small daily habits create lasting wellness.',
    'Your body\'s natural healing abilities are active. Support them with proper nutrition and rest.',
  ],
};

export const FINANCES_TEMPLATES: ThemeTemplates = {
  planetInHouse: {
    sun: {
      2: ['Financial confidence grows. Your ability to generate income through personal effort is highlighted.'],
      5: ['Speculative gains are possible but require wisdom. Creative income sources shine.'],
      11: ['Income through professional networks and group activities increases. Long-term financial goals advance.'],
    },
    moon: {
      2: ['Emotional attachment to financial security is heightened. Make decisions with both heart and head.'],
      11: ['Intuitive financial decisions regarding savings and investments are favored.'],
    },
    venus: {
      2: ['Financial abundance flows more easily. Luxury purchases, if made wisely, bring lasting satisfaction.'],
      11: ['Social connections bring financial opportunities. Shared resources and cooperative ventures prosper.'],
    },
    mars: {
      2: ['Aggressive financial action can be profitable if well-considered. Bold investments may pay off.'],
      11: ['Competitive drive fuels income growth. Pursue financial goals with determination.'],
    },
    jupiter: {
      2: ['Excellent period for financial expansion. Income growth and resource accumulation are well-favored.'],
      5: ['Good fortune in investments and speculative ventures. Generosity brings unexpected returns.'],
      9: ['Financial benefits through education, travel, or international connections emerge.'],
      11: ['Significant financial gains through networks, community, and long-term planning are indicated.'],
    },
    saturn: {
      2: ['Financial discipline and austerity lead to long-term security. Save and budget carefully.'],
      11: ['Patient, structured approach to financial goals pays off. Avoid get-rich-quick schemes.'],
    },
    mercury: {
      2: ['Smart financial planning and communication about money matters bring positive results.'],
      11: ['Financial networking and information gathering lead to profitable insights.'],
    },
  },
  retrograde: {
    mercury: [
      'Review financial documents and past transactions. Errors in billing or accounts may surface for correction.',
    ],
    venus: [
      'Reevaluate your relationship with money and material possessions. What truly brings you value?',
    ],
    jupiter: [
      'Reassess investment strategies and financial growth plans. Internal wealth matters as much as external.',
    ],
    saturn: [
      'Review long-term financial structures, debts, and commitments. Restructuring brings eventual stability.',
    ],
  },
  general: [
    'Steady financial management brings peace of mind. Focus on building sustainable income streams.',
    'Financial awareness is heightened today. Pay attention to where your resources flow.',
    'Balance between saving and spending serves your long-term financial health.',
    'Practical financial decisions made today create security for tomorrow. Trust your judgment.',
  ],
};

export const SPIRITUALITY_TEMPLATES: ThemeTemplates = {
  planetInHouse: {
    sun: {
      9: ['Spiritual illumination and higher understanding are accessible. Seek wisdom through study and reflection.'],
      12: ['Deep inner work and spiritual surrender bring profound insights. Meditation is especially powerful.'],
    },
    moon: {
      4: ['Connect with your inner sanctuary. Emotional depth opens doorways to spiritual understanding.'],
      9: ['Intuitive wisdom guides your spiritual path. Trust the guidance that comes through feeling.'],
      12: ['Dreamtime and subconscious insights carry spiritual messages. Pay attention to inner visions.'],
    },
    jupiter: {
      1: ['Spiritual optimism and philosophical outlook elevate your consciousness.'],
      5: ['Creative spiritual practices bring joy and insight. Express your devotion through art and celebration.'],
      9: ['Peak spiritual growth period. Sacred knowledge and higher wisdom flow abundantly.'],
      12: ['Liberation and spiritual transcendence are highlighted. Deep meditation brings divine connection.'],
    },
    saturn: {
      9: ['Disciplined spiritual practice and structured study deepen your understanding of universal truths.'],
      12: ['Karmic completion and spiritual maturity through patient inner work and self-discipline.'],
    },
    venus: {
      9: ['Devotional practices and the beauty of spiritual traditions inspire your soul.'],
      12: ['Compassion and unconditional love are pathways to spiritual growth today.'],
    },
    mars: {
      9: ['Passionate pursuit of truth and spiritual understanding. Channel fire into focused practice.'],
    },
    mercury: {
      9: ['Spiritual study and sacred texts offer profound insights. The intellect serves the spirit.'],
    },
  },
  retrograde: {
    jupiter: [
      'Inner spiritual growth takes precedence over external religious practice. Go within for answers.',
    ],
    saturn: [
      'Revisit past spiritual lessons and karmic patterns. Integration of old wisdom brings new understanding.',
    ],
    mercury: [
      'Reflect on spiritual beliefs and philosophical frameworks. Past teachers or teachings may become relevant again.',
    ],
  },
  general: [
    'A day for quiet contemplation and inner peace. Even brief moments of stillness bring spiritual nourishment.',
    'Your spiritual awareness naturally deepens through everyday activities. Mindfulness transforms the ordinary.',
    'Connection to something greater than yourself brings perspective and peace. Honor your spiritual practice.',
    'Inner growth happens naturally when you allow space for reflection. Trust your spiritual journey.',
  ],
};

export const GENERAL_TEMPLATES: ThemeTemplates = {
  planetInHouse: {
    sun: {
      1: ['Personal power and self-expression are heightened. Your presence commands attention and respect.'],
      4: ['Home and family matters take priority. Create comfort and security in your personal space.'],
      7: ['Partnerships and collaborations are in the spotlight. Balance personal needs with others\'.'],
      10: ['Achievement and public recognition mark this period. Your efforts gain well-deserved visibility.'],
    },
    moon: {
      1: ['Emotions run high but productively. Trust your feelings as a guide to authentic decision-making.'],
      4: ['Domestic comfort and emotional security are your anchors today. Nurture your roots.'],
      7: ['Emotional connections with others deepen. Empathy and understanding create harmonious interactions.'],
      10: ['Your emotional intelligence shines in public settings. Lead with heart and wisdom.'],
    },
    jupiter: {
      1: ['Optimism, growth, and good fortune color your day. Expand your horizons with confidence.'],
      9: ['Wisdom, adventure, and higher purpose inspire your actions. Think big and aim high.'],
    },
    saturn: {
      1: ['Discipline and responsibility shape your day. Maturity in handling challenges builds character.'],
      10: ['Authority and long-term goals demand focused attention. Structure creates freedom.'],
    },
    mars: {
      1: ['Dynamic energy and courage drive your actions. Channel passion into constructive pursuits.'],
      10: ['Ambitious drive pushes you toward achievement. Direct your energy with purpose.'],
    },
    venus: {
      1: ['Grace, beauty, and harmony enhance your personal expression. Social interactions flow naturally.'],
      7: ['Love, beauty, and cooperation infuse your partnerships. Seek balance in all relationships.'],
    },
    mercury: {
      1: ['Quick thinking and clear communication are your strengths today. Express yourself articulately.'],
      3: ['Short journeys, messages, and intellectual pursuits bring stimulation and opportunity.'],
    },
  },
  retrograde: {
    mercury: [
      'Review, reflect, and revise rather than initiating new ventures. Past matters may need closure.',
    ],
    venus: [
      'Reevaluate what truly matters to you in life. Inner beauty and authentic values surface.',
    ],
    mars: [
      'Direct action may feel frustrated. Strategic planning and internal motivation-building serve you better.',
    ],
    jupiter: [
      'Growth turns inward. Philosophical reflection and inner expansion are more fruitful than external pursuits.',
    ],
    saturn: [
      'Review commitments and responsibilities. Restructuring brings long-term stability.',
    ],
  },
  general: [
    'A balanced day with opportunities for both productivity and enjoyment. Stay present and engaged.',
    'Cosmic energies support steady progress in all areas of life. Trust the unfolding of your path.',
    'Navigate the day with awareness and intention. Small mindful choices create positive momentum.',
    'The planetary alignments favor practical action combined with inspired thinking. Make the most of this energy.',
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
