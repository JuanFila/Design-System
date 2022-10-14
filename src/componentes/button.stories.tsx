import {Meta, StoryObj} from '@storybook/react'
import { button, buttonProps } from './button'

export default{
    title: 'Components/button',
    component: button,
    args:{
        children: 'Create Accont',
    },
    argTypes:{}
} as Meta
export const Default: StoryObj<buttonProps> = {}

