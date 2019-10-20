import React from 'react'
import styled from 'styled-components/macro'
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel'

const ExpansionPanel = styled(MuiExpansionPanel)`
  border-radius: 4px;
  margin-bottom: 15px;

  transition: none;

  &:before {
    display: none;
  }
`

ExpansionPanel.displayName = 'ExpansionPanel'

const StyledExpansionPanel = React.memo(
  ({
    children,
    ...rest
  }: {
    expanded: boolean | undefined
    onChange: (...args: any) => void
    children: React.ReactNode
  }) => <ExpansionPanel {...rest}>{children}</ExpansionPanel>
)

StyledExpansionPanel.displayName = 'StyledExpansionPanel'

export default StyledExpansionPanel
