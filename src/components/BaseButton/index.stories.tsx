import { Meta } from '@storybook/react/types-6-0'
import React from 'react'
import Button from '.'

export default {
    title: 'MyComponents/Button',
    component: Button,
  } as Meta;


export function MyButton () {
    return (<>
      <Button color='red' />
      <div>wassyoi</div>
      </>)
}