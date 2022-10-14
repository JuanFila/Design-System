import {Meta, StoryObj} from '@storybook/react'
import { Button, buttonProps } from './button'

export default{
    title: 'Components/button',
    component: Button,
    args:{
        children: 'Create Accont',
    },
    argTypes:{}
} as Meta
export const Default: StoryObj<buttonProps> = {}

