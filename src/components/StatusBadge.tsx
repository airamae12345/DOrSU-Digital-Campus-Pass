import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBadgeProps } from '../types/student';

export const StatusBadge: React.FC<StatusBadgeProps> = ({ isActive }) => {
  return (
    <View style={[styles.badge, isActive ? styles.active : styles.suspended]}>
      <Text style={styles.text}>
        {isActive ? 'ACTIVE' : 'SUSPENDED'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  badge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 14,
    paddingVertical: 7,
    borderRadius: 20,
    marginTop: 12,
  },
  active: {
    backgroundColor: '#2E7D32',
  },
  suspended: {
    backgroundColor: '#C62828',
  },
  text: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 12,
  },
});