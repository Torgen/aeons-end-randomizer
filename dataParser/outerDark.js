const outerDarkData = {
  id: 'OD',
  name: 'Outer Dark',
  type: 'mini',
  nemeses: [
    {
      expansion: 'OD',
      name: 'Thrice Dead Prophet',
      id: 'ThriceDeadProphet',
      health: 40,
      difficulty: 5,
      expeditionRating: 2,
      additionalInfo: '',
    },
    {
      expansion: 'OD',
      name: 'Wraithmonger',
      id: 'Wraithmonger',
      health: 70,
      difficulty: 6,
      expeditionRating: 4,
      additionalInfo: '',
    },
  ],
  mages: [
    {
      expansion: 'OD',
      name: 'Indira',
      id: 'Indira',
      mageTitle: 'Breach Apprentice',
      abilityName: `Pyromancer's Guile`,
      abilityActivation: `Activate during your main phase:`,
      abilityEffect: `
        <p>Cast any number of spells in hand. Those spells each 
        deal 1 additional damage.</p>
        <p>You may destroy a card in your discard pile.</p>
      `,
      numberOfCharges: 4,
      uniqueStarters: [
        {
          type: 'Gem',
          name: 'Twin Opal',
          expansion: 'OD',
          id: 'TwinOpal',
          cost: 0,
          effect: `
            <p>
              Gain 1 <span class="aether">&AElig;</span>.<br/>
              You may cast a spell in hand.
            </p>
          `,
          keywords: [],
        },
      ],
    },
    {
      expansion: 'OD',
      name: 'Remnant',
      id: 'Remnant',
      mageTitle: 'Aethereal Entity',
      abilityName: `Ephemera Masque`,
      abilityActivation: `Activate during your main phase:`,
      abilityEffect: `
        <p>Any ally returns two cards in their discard pile to their hand.
        <span class="or">OR</span>
        Gravehold gains 5 life.</p>
      `,
      numberOfCharges: 5,
      uniqueStarters: [
        {
          type: 'Gem',
          name: 'Void Shard',
          expansion: 'OD',
          id: 'VoidShard',
          cost: 0,
          effect: `
            <p>
              Gain 1 <span class="aether">&AElig;</span>.<br/>
              Gain an additional 1 <span class="aether">&AElig;</span> that can only 
              be used to focus or open a breach.
            </p>
          `,
          keywords: [],
        },
      ],
    },
  ],
  cards: [
    {
      type: 'Spell',
      expansion: 'OD',
      name: 'Char',
      id: 'Char',
      cost: 8,
      effect: `
        <p>
          <b>Cast:</b> Deal 6 damage.<br/>
          If this damage causes a minion to be discarded, any player gains 2 life.
        </p>
      `,
      keywords: [],
    },
    {
      type: 'Gem',
      expansion: 'OD',
      name: 'Alien Element',
      id: 'AlienElement',
      cost: 4,
      effect: `
        <p>
          Gain 1 <span class="aether">&AElig;</span>.<br/>
          For each of your breaches with a spell prepped to it, gain an 
          additional 1 <span class="aether">&AElig;</span>.
        </p>
      `,
      keywords: [],
    },
    {
      type: 'Spell',
      expansion: 'OD',
      name: 'Scorch',
      id: 'Scorch',
      cost: 5,
      effect: `
        <p>
          <b>Cast:</b> Deal 4 damage.<br/>
          If this damage causes a minion from the nemesis deck to be discarded, 
          any ally gains 2 charges.
        </p>
      `,
      keywords: [],
    },
    {
      type: 'Spell',
      expansion: 'OD',
      name: 'Pyromancy',
      id: 'Pyromancy',
      cost: 7,
      effect: `
        <b>Cast:</b> Deal 1 damage.<br/>
        Allies may collectively discard up to two cards in hand. For each card 
        discarded this way, deal 3 additional damage.
      `,
      keywords: [],
    },
    {
      type: 'Spell',
      expansion: 'OD',
      name: 'Feedback Aura',
      id: 'FeedbackAura',
      cost: 5,
      effect: `
        <p>
          <b>Cast:</b> Deal 3 damage.<br/>
          If you have 4 or more charges, deal 3 additional damage.
        </p>
          `,
      keywords: [],
    },
    {
      type: 'Spell',
      expansion: 'OD',
      name: 'Catalyst',
      id: 'Catalyst',
      cost: 6,
      effect: `
        <p>
          <b>Cast:</b> Deal 2 damage.<br/>
          If you have 2 life or less, deal 5 additional damage.
        </p>
      `,
      keywords: [],
    },
    {
      type: 'Gem',
      expansion: 'OD',
      name: 'Pain Stone',
      id: 'PainStone',
      cost: 6,
      effect: `
        <p>
          Gain 3 <span class="aether">&AElig;</span>.
          <span class="or">OR</span>
          Gain 2 <span class="aether">&AElig;</span> and deal 1 damage.
        </p>
      `,
      keywords: [],
    },
    {
      type: 'Relic',
      expansion: 'OD',
      name: 'Astral Cube',
      id: 'AstralCube',
      cost: 5,
      effect: `
        <p>
          Return a gem you played this turn to your hand.<br/>
          Reveal the top card of the turn order deck. If you revealed a 
          player's turn order card, that player gains 1 life.
        </p>
      `,
      keywords: [],
    },
    {
      type: 'Relic',
      expansion: 'OD',
      name: 'Riddle Sphere',
      id: 'RiddleSphere',
      cost: 3,
      effect: `
        <p>
          Gain 1 charge.
          <span class="or">OR</span>
          You may lose 2 charges. If you do, gain 5 <span class="aether">&AElig;</span>.
        </p>
      `,
      keywords: [],
    },
    {
      type: 'Spell',
      expansion: 'OD',
      name: 'Nether Conduit',
      id: 'NetherConduit',
      cost: 7,
      effect: `
        <b>Cast:</b> Reveal a card in hand that costs 2 <span class="aether">&AElig;</span> 
        or more.<br/>
        If you do, deal damage equal to the number of cards missing in 
        that card's supply pile. Then, any ally may gain a card from that supply
        pile.<br/>
        <span class="hint">(Gem supply piles start with 7 cards. Relic and 
        spell supply piles start with 5 cards)</span>
      `,
      keywords: [],
    },
    {
      type: 'Gem',
      expansion: 'OD',
      name: 'Haunted Berylite',
      id: 'HauntedBerylite',
      cost: 3,
      effect: `
        <p>
          Gain 2 <span class="aether">&AElig;</span>.
          <span class="or">OR</span>
          Discard a card in hand. If you do, gain 2 charges.
        </p>
      `,
      keywords: [],
    },
  ],
}

module.exports = outerDarkData
