/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { TReactNavigationStackParamList } from '@routes/routes';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends TReactNavigationStackParamList {
      _: undefined;
    }
  }
}

export type ScreenProps = {
  name: string;
  component: React.FC<any>;
  options?: any;
};

export type IReactNavigationNavigate = {
  <RouteName extends string>(
    ...args: [RouteName] | [RouteName, object | undefined]
  ): void;
  <RouteName extends string>(
    route:
      | {
          key: string;
          params?: object | undefined;
        }
      | {
          name: RouteName;
          key?: string | undefined;
          params: object | undefined;
        }
  ): void;
};
