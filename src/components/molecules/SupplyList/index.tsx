import React from 'react'

import Grid from '@material-ui/core/Grid'

import * as types from '../../../types'

import ListWrapper from './ListWrapper'
import MarketTile from '../MarketTile'

// We don't want to rely on any data here (expcept the type).
// Therefore we define a markettile where pretty much every property is optional.
// To eliminate resulting errors we check for issues inside the respective sub-components
// TODO this needs some cleanup
export type OptionalTile = {
  id?: string
  type: types.CardType
  expansion?: string
  name?: string
  cost?: number
  operation?: types.Operation
  threshold?: number
  values?: Array<number>
}

const renderTiles = (tiles: ReadonlyArray<OptionalTile>) => {
  return tiles.map((marketTile, i) => (
    <MarketTile key={i} marketTile={marketTile} />
  ))
}

export type Props = {
  tiles: ReadonlyArray<OptionalTile>
}

const SupplyList = ({ tiles }: Props) => (
  <ListWrapper>
    <Grid container spacing={16}>
      {renderTiles(tiles)}
    </Grid>
  </ListWrapper>
)

export default React.memo(SupplyList)