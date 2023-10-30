import React from 'react';
import {View, Text} from 'react-native';

export interface IClientDetails {
  client: {
    cardID: string;
    sexe: string;
    corporateName: string;
    customerOfficerCode: string;
    customerOfficerName: string;
    cardIDExpirationDate: string;
    cardIDEmissionDate: string;
    birthDate: string;
    address1: string;
    address2: string;
    address3: string;
    phone: string;
    city: string;
    country: string;
    email: string;
    lastName: string;
    firstName: string;
  };
}

const ClientDetailsComponent = ({client}: IClientDetails) => {
  const {sexe, firstName, lastName} = client;
  return (
    <View style={{}}>
      <View
        style={{
          backgroundColor: '#0000ff10',
          padding: 20,
          borderRadius: 10,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text>Profil</Text>
        <Text>
          {sexe}. {firstName} {lastName}
        </Text>
      </View>
    </View>
  );
};

export {ClientDetailsComponent};
