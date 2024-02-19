import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

//? explore icons: https://icons.eoverviewxpo.fyi/

interface TabBarIconProps {
  variant: 'dashboard' | 'profile' | 'assets'
  color: string;
}


export const TabBarIcon = ({ variant, color }: TabBarIconProps) => {
  switch (variant) {
    case 'dashboard':
      return <MaterialIcons name="space-dashboard" size={28} color={color} style={{ marginBottom: -3 }} />
    case 'profile':
      return <MaterialCommunityIcons name="account" size={28} color={color} style={{ marginBottom: -3 }} />
    case 'assets':
      return <MaterialCommunityIcons name="safe-square" size={28} color={color} style={{ marginBottom: -3 }} />
  }
}