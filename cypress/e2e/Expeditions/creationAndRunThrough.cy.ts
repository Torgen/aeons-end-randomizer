describe('Expedition creation and run through', () => {
  before(() => {
    // @ts-ignore disable-line
    cy.cleanupIndexedDB()
      .visit('settings')
      .wait(1000)
      .selectSubsetOfExpansions()
      .visit('expeditions')
  })

  after(() => {
    // @ts-ignore disable-line
    cy.visit('settings')
      .wait(1000)
      // We first need to select all expansions, because we did not select all in the first place and otherwise the deselect button would not appear
      // @ts-ignore disable-line
      .selectAllExpansions()
      // @ts-ignore disable-line
      .deselectAllExpansions()
      .cleanupIndexedDB()
  })

  it('an expedition can be created successfully', () => {
    cy.get('[data-test*=btn-start-expedition]').click()
    cy.get('[data-test=input-name]').find('input').type('Test-Expedition 1')
    cy.get('[data-test=input-seed]').find('input').type('TEST-SEED')
    cy.get('[data-test=btn-expedition-create]').click()
  })

  it('can run through the first battle', () => {
    cy.visit('expeditions')
      .get('h2')
      .contains('Test-Expedition 1')
      .click()
      .get('[data-test="btn-battle"]')
      .eq(0)
      .click()
      .get('[data-test="btn-start-battle"]')
      .click()
      .get('[data-test="btn-battle-lost"]')
      .click()
      .get('[data-test="select-loss-reward"]')
      .click()
      .get('[data-test="option-gem"]')
      .click()
      .get('[data-test="btn-confirm-reward"]')
      .click()
      .get('p')
      .contains('Vriswood Amber')
      .click()
      .get('[data-test="btn-continue"]')
      .click()
      .get('[data-test="btn-start-battle"]')
      .click()
      .get('[data-test="btn-battle-won"]')
      .click()
      .get('p')
      .contains('Dread Diamond')
      .click()
      .get('p')
      .contains('Reflective Conduit')
      .click()
      .get('p')
      .contains('Psychic Eruption')
      .click()
      .get('[data-test="btn-continue"]')
      .click()
  })

  it('can run through the second battle', () => {
    cy.visit('expeditions').get('h2').contains('Test-Expedition 1').click()
    cy.get('[data-test="btn-battle"]').eq(1).click()
    cy.get('[data-test="btn-start-battle"]').click()
    cy.get('[data-test="btn-battle-won"]').click()
    cy.get('p').contains('Energized Rubidium').click()
    cy.get('p').contains('Primordial Fetish').click()
    cy.get('p').contains('Char').click()
    cy.get('[data-test="btn-continue"]').click()
  })

  it('can run through the third battle', () => {
    cy.visit('expeditions').get('h2').contains('Test-Expedition 1').click()
    cy.get('[data-test="btn-battle"]').eq(2).click()
    cy.get('[data-test="btn-start-battle"]').click()
    cy.get('[data-test="btn-battle-won"]').click()
    cy.get('p').contains('Searing Ruby').click()
    cy.get('p').contains('Scholars Opus').click()
    cy.get('p').contains('Carbonize').click()
    cy.get('[data-test="btn-continue"]').click()
  })

  it('can run through the last battle', () => {
    cy.visit('expeditions').get('h2').contains('Test-Expedition 1').click()
    cy.get('[data-test="btn-battle"]').eq(3).click()
    cy.get('[data-test="btn-start-battle"]').click()
    cy.get('[data-test="btn-battle-won"]').click()
    cy.get('[data-test="modal__btn-close"]').click()
  })

  it('has correct final barracks', () => {
    cy.visit('expeditions').get('h2').contains('Test-Expedition 1').click()
    cy.get('[data-test="btn-open-barracks"]').click()

    // Mages
    cy.get('[data-test="mage-tile"]')
      .eq(0)
      .find('h2')
      .contains('Adelheim')
      .should('be.visible')
    cy.get('[data-test="mage-tile"]')
      .eq(1)
      .find('h2')
      .contains('Nym')
      .should('be.visible')
    cy.get('[data-test="mage-tile"]')
      .eq(2)
      .find('h2')
      .contains('Soskel')
      .should('be.visible')
    cy.get('[data-test="mage-tile"]')
      .eq(3)
      .find('h2')
      .contains('Xaxos')
      .should('be.visible')

    // Supply
    cy.get('[data-test="supply"]').click({ force: true })
    cy.get('p').contains('Volcanic Glass').should('be.visible')
    cy.get('p').contains('Scoria Slag').should('be.visible')
    cy.get('p').contains('Oblivium Resin').should('be.visible')
    cy.get('p').contains('Transmogrifier').should('be.visible')
    cy.get('p').contains('Breach Extractor').should('be.visible')
    cy.get('p').contains('Feral Lightning').scrollIntoView()
    cy.get('p').contains('Feral Lightning').should('be.visible')
    cy.get('p').contains('Amplify Vision').scrollIntoView()
    cy.get('p').contains('Amplify Vision').should('be.visible')
    cy.get('p').contains('Celestial Spire').should('be.visible')
    cy.get('p').contains('Scrying Bolt').should('be.visible')

    // Treasures
    cy.get('[data-test="treasure"]').click({ force: true })
    cy.get('p').contains("Garu's Torch").should('be.visible')
    cy.get('p').contains("Mist's Amethyst Paragon").should('be.visible')
    cy.get('p').contains("Kadir's Emerald Shard").should('be.visible')
    cy.get('p').contains("Mazahaedron's Worldheart Shard").should('be.visible')
    cy.get('p')
      .contains("Yan Magda's Illuminate")
      .scrollIntoView()
      .should('be.visible')
    cy.get('p').contains('Imbued Shackles').should('be.visible')
    cy.get('p').contains('Edible Fungus Chunks').should('be.visible')
    cy.get('p').contains('Wayward Scraps').should('be.visible')
    cy.get('p')
      .contains('Extra-Dimensional Lens')
      .scrollIntoView()
      .should('be.visible')
    cy.get('p').contains('Band of Retrieval').should('be.visible')
    cy.get('p').contains('Siphoning Blade').should('be.visible')
    cy.get('p').contains('Shroud of Obfucation').should('be.visible')
    cy.get('p').contains('Prism Of Destruction').should('be.visible')

    // Upgraded basic nemesis cards
    cy.get('[data-test="upgraded-basic-nemesis-cards"]').click({ force: true })
    cy.get('p').contains('Wreck').should('be.visible')
    cy.get('p').contains('Engulfing Madness').should('be.visible')
    cy.get('p').contains('Separate').should('be.visible')
    cy.get('p').contains('Sky Tremor').should('be.visible')
    cy.get('p').contains('Burialskulk').should('be.visible')
    cy.get('p').contains('Thunderous Tempest').should('be.visible')
    cy.get('p').contains('Terrify').scrollIntoView().should('be.visible')
    cy.get('p')
      .contains('Furrow Of Destruction')
      .scrollIntoView()
      .should('be.visible')
    cy.get('p').contains('Marked').scrollIntoView().should('be.visible')
    cy.get('p').contains('Flash Of Decay').should('be.visible')
    cy.get('p').contains('Eradicate').should('be.visible')
    cy.get('p').contains('Bane Commander').should('be.visible')
    cy.get('p').contains('Needle Doom').should('be.visible')

    // Banished
    cy.get('[data-test="banished-cards"]').click({ force: true })
    cy.get('p').contains('Vriswood Amber').should('be.visible')
    cy.get('p').contains('Dread Diamond').should('be.visible')
    cy.get('p').contains('Reflective Conduit').should('be.visible')
    cy.get('p')
      .contains('Psychic Eruption')
      .scrollIntoView()
      .should('be.visible')
    cy.get('p').contains('Energized Rubidium').should('be.visible')
    cy.get('p')
      .contains('Primordial Fetish')
      .scrollIntoView()
      .should('be.visible')
    cy.get('p').contains('Char').should('be.visible')
    cy.get('p').contains('Searing Ruby').should('be.visible')
    cy.get('p').contains('Scholars Opus').should('be.visible')
  })

  it('shows the correct data inside the overview', () => {
    cy.visit('expeditions').get('h2').contains('Test-Expedition 1').click()
    cy.get('[data-test="backlink"]').click()

    cy.get('[data-test="info--expedition-finished"]')
      .find('span')
      .contains('Yes')
    cy.get('[data-test="info--score"]').find('span').contains('22')
    cy.get('[data-test="info--big-pocket"]').find('span').contains('No')
    cy.get('[data-test="info--seed"]').find('span').contains('TEST-SEED')
    cy.get('[data-test="info--expansions"]')
      .find('span')
      .contains('Aeons End')
      .contains('Buried Secrets')
      .contains('The Depths')
      .contains('Into The Wild')
      .contains('The New Age')
      .contains('The Nameless')
      .contains('Outer Dark')
      .contains('Shattered Dreams')
      .contains('The Ancients')
      .contains('The Void')
      .contains('War Eternal')
  })
})
