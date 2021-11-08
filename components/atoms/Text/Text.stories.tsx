import * as React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Text } from './Text'

export default {
    title: 'Atoms/Text',
    component: Text,
    argTypes: {
        color: {
            control: {
                type: 'select',
                options: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'],
            },
        },
        size: {
            control: {
                type: 'select',
                options: ['sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl'],
            },
        },
    }
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />

export const Default = Template.bind({})
Default.args = {
    children: 'Hello World',
}

export const WithColor = Template.bind({})
WithColor.args = {
    children: 'Hello World',
    color: 'primary',
}
