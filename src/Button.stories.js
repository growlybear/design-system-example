import React from 'react'
import { storiesOf } from '@storybook/react'

import { Button } from './Button'

storiesOf('Button', module)
  .add('with background', () => (
    <Button bg="orange">Hello world</Button>
  ))
  .add('with a different background', () => (
    <Button bg="palegoldenrod">Hello world</Button>
  ))
