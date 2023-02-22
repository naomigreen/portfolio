import { ComponentStory, ComponentMeta } from '@storybook/react';
import { logo } from '../../assets/images';
import Card from './Card';

export default {
  title: 'Components/Card',
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />

const text = `
<u>Technology</u> 
* Technology list

<u>Role</u>
* Roll list

Card description
`
export const Default = Template.bind({});
Default.args = {
  imageSrc: logo,
  width: '400px',
  maxWidth: '100%',
  text: text,
  link: 'https://www.naomipgreen.com/',
};
