import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
} from 'react-native';

import {
  SafeAreaView,
  SafeAreaProvider,
} from 'react-native-safe-area-context';

import { StudentCard } from './src/components/StudentCard';
import { ScanCounter } from './src/components/ScanCounter';
import { StudentProfile } from './src/types/student';

const student: StudentProfile = {
  name: 'AIRA MAE B. TABUDLONG',
  idNumber: '2023-0239',
  program: 'BSIT',
  yearLevel: '3rd Year — Section F',
  avatarUrl: require('./assets/my-photo.png'),
  campus: 'Main Campus (Guang-guang, Mati City)',
};

const peerStudent: StudentProfile = {
  name: 'DIANNE SALAZAR',
  idNumber: '2023-0236',
  program: 'BSIT',
  yearLevel: '3rd Year — Section F',
  avatarUrl: require('./assets/peer-photo.jpg'),
  campus: 'Main Campus (Guang-guang, Mati City)',
};

export default function App() {
  const [gateScans, setGateScans] = useState(0);
  const [isActive, setIsActive] = useState(true);
  const [showPeerDemo, setShowPeerDemo] = useState(false);

  const handleScan = () => {
    setGateScans((prev) => prev + 1);
  };

  const handleReset = () => {
    setGateScans(0);
  };

  const handleToggle = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.content}>

          {/* DOrSU Institutional Banner */}
          <View style={styles.banner}>
            <Text style={styles.title}>
              DOrSU Digital Campus Pass
            </Text>

            <Text style={styles.subtitle}>
              Official Student Digital Pass
            </Text>
          </View>

          {/* Main Student Card */}
          <StudentCard
            student={student}
            isActive={isActive}
          />

          {/* Access Toggle */}
          <Pressable
            style={styles.toggleButton}
            onPress={handleToggle}
          >
            <Text style={styles.toggleText}>
              {isActive
                ? 'Simulate Pass Suspension'
                : 'Reactivate Student Pass'}
            </Text>
          </Pressable>

          {/* Scan Counter */}
          <ScanCounter
            count={gateScans}
            onScan={handleScan}
            onReset={handleReset}
          />

          {/* Peer Props Demo */}
          <Pressable
            style={styles.peerButton}
            onPress={() => setShowPeerDemo((prev) => !prev)}
          >
            <Text style={styles.peerButtonText}>
              {showPeerDemo
                ? 'Hide Peer Props Demo'
                : 'Show Peer Props Demo'}
            </Text>
          </Pressable>

          {showPeerDemo && (
            <View style={styles.peerSection}>
              <Text style={styles.peerTitle}>
                PEER PROPS DEMO
              </Text>

              <StudentCard
                student={peerStudent}
                isActive={true}
              />
            </View>
          )}

        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F9FC',
  },

  content: {
    padding: 20,
    gap: 16,
  },

  banner: {
    alignItems: 'center',
    gap: 8,
    paddingVertical: 10,
  },

  title: {
    fontSize: 28,
    fontWeight: '700',
    textAlign: 'center',
  },

  subtitle: {
    fontSize: 18,
    textAlign: 'center',
  },

  toggleButton: {
    backgroundColor: '#E0E0E0',
    paddingVertical: 18,
    borderRadius: 16,
    alignItems: 'center',
  },

  toggleText: {
    fontSize: 16,
    fontWeight: '700',
  },

  peerButton: {
    backgroundColor: '#E0E0E0',
    paddingVertical: 16,
    borderRadius: 16,
    alignItems: 'center',
  },

  peerButtonText: {
    fontSize: 16,
    fontWeight: '700',
  },

  peerSection: {
    gap: 12,
  },

  peerTitle: {
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 8,
  },
});