import {Meta, StoryObj} from '@storybook/react'
import { Text, TextProps } from './text'

export default{
    title: 'Components/Text',
    component: Text,
    args:{
        children: 'Teste',
        size: 'md',
    },
    argTypes:{
        size:{
            options: ['sm', 'md', 'lg'],
            control:{
                type: 'inline-radio'
            }
        }
    }
} as Meta
export const Default: StoryObj<TextProps> = {}

export const Small: StoryObj<TextProps>  = {
args:{
  size:'sm'
 }
}
export const Large: StoryObj<TextProps>  = {
args:{

    size:'lg'
 }
}

export const CustomCompanent: StoryObj<TextProps>  = {
    args:{
    
        asChild: true,
        children: (
            <p>Testando 2</p>
        )
     },
     argTypes:{
        children:{
            table:{
                disable: true
            }
        }
     }
    }