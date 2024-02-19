import React from 'react';
import { TextProps, TextStyle } from 'react-native';
import { Text } from '../../../config/Themed'
import { LinearGradient } from 'expo-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';

interface GradientTextProps extends TextProps {
  children: React.ReactNode;
  colors?: string[];
  fontFace?: 'SpaceMono' | 'Mocaroni';
  style?: TextStyle;
}

export const GradientText = ({ colors, fontFace, children, style, ...rest }: GradientTextProps) => {
  const gradientColors = colors ?? ['#13FDCE', '#3179FF', '#3179FF'];
  return (
    <MaskedView
      maskElement={
        <Text style={[style, { fontFamily: fontFace ?? undefined }]} {...rest}>
          {children}
        </Text>
      }>
      <LinearGradient
        colors={gradientColors}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}>
        <Text style={[style, { opacity: 0 }]} {...rest}>
          {children}
        </Text>
      </LinearGradient>
    </MaskedView>
  );
};

