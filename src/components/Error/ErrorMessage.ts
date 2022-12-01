import styled from 'styled-components'

import { Text } from '../Text'

export const ErrorMessage = styled(Text)`
  color: ${props => props.theme.colors.palette.pastel.red};
`
