import React from 'react';

import Modal from '../components/Modal/Modal';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Modal',
  component: Modal,
};

const Template = () => <Modal></Modal>

export const Default = Template.bind({})
Default.args= {}