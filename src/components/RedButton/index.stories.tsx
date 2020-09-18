import { Meta } from '@storybook/react/types-6-0';
import React from 'react'
import RedButton from '.';

export default  {
    title: 'MyComponents/RedButton',
    component: RedButton,
  } as Meta;

export function base () {
    return <RedButton />
}