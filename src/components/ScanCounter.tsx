import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Pressable,
} from 'react-native';

interface ScanCounterProps {
  count: number;
  onScan: () => void;
  onReset: () => void;
}

export const ScanCounter: React.FC<ScanCounterProps> = ({
  count,
  onScan,
  onReset,
}) => (
  <View style={styles.container}>
    <Text style={styles.title}>
      Campus Gate Verification Log
    </Text>

    <View style={styles.counterDisplay}>
      <Text style={styles.label}>
        Today's Gate Entries:
      </Text>

      <Text style={styles.value}>
        {count}
      </Text>
    </View>

    <View style={styles.btnRow}>
      <Pressable
        style={styles.btnPrimary}
        onPress={onScan}
      >
        <Text style={styles.btnText}>
          +1 Scan at Gate
        </Text>
      </Pressable>

      <Pressable
        style={styles.btnSecondary}
        onPress={onReset}
      >
        <Text style={styles.btnSecText}>
          Reset Scans
        </Text>
      </Pressable>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    gap: 14,
    alignItems: 'center',
  },
 title: {
  fontSize: 18,
  fontWeight: '700',
  textAlign: 'center',
  },
   counterDisplay: {
    alignItems: 'center',
    gap: 6,
  },
  label: {
    fontSize: 14,
  },
  value: {
    fontSize: 40,
    fontWeight: '800',
  },
  btnRow: {
    flexDirection: 'row',
    gap: 10,
    width: '100%',
  },
  btnPrimary: {
    flex: 1,
    padding: 14,
    borderRadius: 12,
    backgroundColor: '#00758F',
    alignItems: 'center',
  },
  btnSecondary: {
    flex: 1,
    padding: 14,
    borderRadius: 12,
    backgroundColor: '#E0E0E0',
    alignItems: 'center',
  },
  btnText: {
    color: '#FFFFFF',
    fontWeight: '700',
  },
  btnSecText: {
    color: '#222222',
    fontWeight: '700',
  },
});