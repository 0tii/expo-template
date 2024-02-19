import React from 'react';
import { Tabs } from 'expo-router';

import Colors from '@/src/frontend/constants/Colors';
import { useColorScheme } from '@/src/config/useColorScheme';
import { useClientOnlyValue } from '@/src/config/useClientOnlyValue';
import { TabBarIcon } from '@/src/frontend/components/atoms/TabBarIcon';
import { ScreenHeader } from '@/src/frontend/components/molecules/ScreenHeader';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, true),
      }}>
      <Tabs.Screen
        name='index'
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => <TabBarIcon variant='dashboard' color={color} />,
          header: () => <ScreenHeader title='Welve.' />,
        }}
      />
      <Tabs.Screen
        name='assets'
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => <TabBarIcon variant='assets' color={color} />,
          header: () => <ScreenHeader title='Welve.' />,
        }}
      />
      <Tabs.Screen
        name='two'
        options={{
          tabBarShowLabel: false,
          header: () => <ScreenHeader title='Welve.' />,
          tabBarIcon: ({ color }) => <TabBarIcon variant='profile' color={color} />,
        }}
      />
    </Tabs>
  );
}
