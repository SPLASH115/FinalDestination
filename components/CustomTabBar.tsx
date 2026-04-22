import { FontAwesome6, Ionicons } from '@expo/vector-icons';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const { width } = Dimensions.get('window');

export default function CustomTabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  return (
    <View style={styles.container}>
      <View style={styles.tabBar}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          // Special rendering for the central Referral tab
          if (route.name === 'referral') {
            return (
              <TouchableOpacity
                key={route.key}
                onPress={onPress}
                onLongPress={onLongPress}
                style={styles.centerTabWrapper}
              >
                <View style={styles.centerTab}>
                  <Ionicons name="people" size={30} color="white" />
                </View>
                <Text style={[styles.tabLabel, { color: isFocused ? 'white' : '#A0A0A0', marginTop: 4 }]}>
                  Referral
                </Text>
              </TouchableOpacity>
            );
          }

          const getIcon = () => {
            switch (route.name) {
              case 'home':
                return <Ionicons name={isFocused ? "home" : "home-outline"} size={24} color={isFocused ? "white" : "#A0A0A0"} />;
              case 'wallet':
                return <Ionicons name={isFocused ? "card" : "card-outline"} size={24} color={isFocused ? "white" : "#A0A0A0"} />;
              case 'plans':
                return <FontAwesome6 name="piggy-bank" size={20} color={isFocused ? "white" : "#A0A0A0"} />;
              case 'more':
                return <Ionicons name={isFocused ? "person" : "person-outline"} size={24} color={isFocused ? "white" : "#A0A0A0"} />;
              default:
                return <Ionicons name="help-outline" size={24} color={isFocused ? "white" : "#A0A0A0"} />;
            }
          };

          return (
            <TouchableOpacity
              key={route.key}
              onPress={onPress}
              onLongPress={onLongPress}
              style={styles.tabItem}
            >
              {getIcon()}
              <Text style={[styles.tabLabel, { color: isFocused ? 'white' : '#A0A0A0' }]}>
                {route.name.charAt(0).toUpperCase() + route.name.slice(1)}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: 'transparent',
  },
  tabBar: {
    flexDirection: 'row',
    height: 70,
    backgroundColor: '#1A1A1A',
    borderTopWidth: 1,
    borderTopColor: '#333',
    paddingBottom: 10,
    paddingHorizontal: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
  },
  tabLabel: {
    fontSize: 11,
    fontWeight: '500',
  },
  centerTabWrapper: {
    marginTop: -30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  centerTab: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#2E5BFF',
    borderWidth: 4,
    borderColor: '#FF8A00', // Orange border as seen in screenshot highlight
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8,
  },
});