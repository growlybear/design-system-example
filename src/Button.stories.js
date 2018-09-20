import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { color } from '@storybook/addon-knobs/react'

import { Button } from './Button'

storiesOf('Button', module)
  .addWithJSX('with background', withInfo({
    styles: {
      header: {
        h1: {
          color: 'red'
        }
      }
    },
    text: `
      description of Button component

      ~~~js
      <Button>For clicking</Button>
      ~~~

    `
  })(() => (
    <Button bg="orange">Hello world</Button>
  )))
  .addWithJSX('with a different background', () => (
    <Button bg={color('bg', 'green', 'group1')}>Hello world</Button>
  ))
