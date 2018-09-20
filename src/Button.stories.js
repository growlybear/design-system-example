import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

import { Button } from './Button'

storiesOf('Button', module)
  .addWithJSX('with background', withInfo(
    `
    description of Button component

    ~~~js
    <Button>For clicking</Button>
    ~~~

    `
  )(() => (
    <Button bg="orange">Hello world</Button>
  )))
  .addWithJSX('with a different background', () => (
    <Button bg="palegoldenrod">Hello world</Button>
  ))
