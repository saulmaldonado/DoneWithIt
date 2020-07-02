import React from 'react';
import { StyleSheet, Text, View, Keyboard, Alert } from 'react-native';
import { AppForm, AppFormField, SubmitButton } from '.';
import colors from '../../config/colors';
import { MessageRequestBody } from '../../api/schemas/message';
import * as yup from 'yup';

const validationSchema = yup.object().shape({
  content: yup.string().required().max(700).label('Message'),
});

type ContactSellerFormProps = {
  listingId: number;
  error: boolean;
  request: (body: MessageRequestBody) => any;
};

const ContactSellerForm = ({ listingId, error, request }: ContactSellerFormProps) => {
  return (
    <AppForm<{ content: string }>
      initialValues={{
        content: '',
      }}
      onSubmit={async ({ content }, { resetForm }) => {
        Keyboard.dismiss();
        await request({ content, dateTime: Date.now(), listingId });
        if (error) {
          return Alert.alert('Error', 'There was an error sending your message.');
        }
        resetForm();
        Alert.alert('Confirmation', 'Message has been set!');
      }}
      validationSchema={validationSchema}
    >
      <AppFormField
        name='content'
        placeholder={'Message...'}
        maxLength={700}
        multiline
        numberOfLines={3}
        scrollEnabled
        style={{ backgroundColor: colors.white, borderRadius: 10, maxHeight: 90 }}
      />
      <SubmitButton title='Contact Seller' />
    </AppForm>
  );
};

export default ContactSellerForm;

const styles = StyleSheet.create({});
