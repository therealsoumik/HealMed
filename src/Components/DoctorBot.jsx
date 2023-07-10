import React from 'react';
import ChatBot from 'react-simple-chatbot';
import { Segment } from 'semantic-ui-react';

function DoctorBot() {
  const steps = [
    {
      id: 'Greet',
      message: 'Hello! Welcome to our HealMed Platform',
      trigger: 'Ask Name',
    },
    {
      id: 'Ask Name',
      message: 'Please enter your name',
      trigger: 'waiting1',
    },
    {
      id: 'waiting1',
      user: true,
      trigger: 'Name',
    },
    {
      id: 'Name',
      message: 'Hi {previousValue}, please select your Service',
      trigger: 'issues',
    },
    {
      id: 'issues',
      options: [
        { value: 'Book an appointment', label: 'appointment', trigger: 'appointment' },
        { value: 'Cancel an appointment', label: 'Cancel', trigger: 'Cancel' },
        { value: 'Contact a Doctor', label: 'Contact', trigger: 'Contact' },
      ],
    },
    {
      id: 'appointment',
      message: 'You can Book an appointment on the appointment page',
      end: true,
    },
    {
      id: 'Contact',
      message: 'Request Submitted, Doctor Will Contact you Shortly',
      end: true,
    },
    {
      id: 'Cancel',
      message: 'Your appointment for today is cancelled',
      end: true,
    },
  ];

  return (
    <Segment floated="center">
      <ChatBot steps={steps}  hideBotAvatar />
    </Segment>
  );
}

export default DoctorBot;
