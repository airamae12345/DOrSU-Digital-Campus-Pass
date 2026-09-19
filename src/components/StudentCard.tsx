import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { StudentProfile } from '../types/student';
import { StatusBadge } from './StatusBadge';

interface StudentCardProps {
  student: StudentProfile;
  isActive: boolean;
}

export const StudentCard: React.FC<StudentCardProps> = ({
  student,
  isActive,
}) => {
  return (
    <View style={styles.card}>
      <View style={styles.topRow}>
        <Image
  source={
    typeof student.avatarUrl === 'string'
      ? { uri: student.avatarUrl }
      : student.avatarUrl
  }
  style={styles.avatar}
/>

        <View style={styles.details}>
          <Text style={styles.name}>{student.name}</Text>
          <Text style={styles.idNumber}>{student.idNumber}</Text>
          <Text style={styles.program}>{student.program}</Text>
          <Text style={styles.yearLevel}>{student.yearLevel}</Text>
        </View>
      </View>

      <StatusBadge isActive={isActive} />

      <Text style={styles.campus}>
        Campus: {student.campus}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 18,
    gap: 12,
    elevation: 3,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  details: {
    flex: 1,
    gap: 3,
  },
  name: {
    fontSize: 18,
    fontWeight: '700',
  },
  idNumber: {
    fontSize: 13,
  },
  program: {
    fontSize: 13,
  },
  yearLevel: {
    fontSize: 13,
  },
  campus: {
    fontSize: 13,
    fontWeight: '600',
  },
});