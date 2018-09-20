import React from 'react'
import { storiesOf } from '@storybook/react'

import { Button } from './Button'

storiesOf('Button', module).add('with background', () => (
  <Button bg="orange">Hello world</Button>
))
