import { ERouteName } from '@routes/routes';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { UserScreen } from '@screens/users/UserScreen';
import { UsersScreen } from '@screens/users/UsersScreen';

import React from 'react';

const { Navigator, Screen } = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen
        name={ERouteName.UsersScreen}
        component={UsersScreen}
      />

      <Screen
        name={ERouteName.UserScreen}
        component={UserScreen}
      />
    </Navigator>
  );
}
