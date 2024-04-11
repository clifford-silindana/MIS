import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';

const items = [
  {
    icon: 'trending-up',
    backgroundColor: '#0069fe',
    color: '#fff',
    label: 'Earnings',
    value: 'R23,402',
  },
  {
    icon: 'trending-down',
    backgroundColor: '#0069fe',
    color: '#fff',
    label: 'Withdrawals',
    value: 'R9,482',
  },
  {
    icon: 'pocket',
    backgroundColor: '#0069fe',
    color: '#fff',
    label: 'Savings',
    value: 'R13,920',
  },
];

export default function Wallet() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={styles.container}>
        <Text style={styles.title}>Your Earnings</Text>

        <View style={styles.stats}>
          {items.map(
            ({ icon, backgroundColor, color, label, value }, index) => (
              <TouchableOpacity
                key={label}
                onPress={() => {
                  // handle onPress
                }}>
                <View
                  style={[styles.statsItem, index === 0 && { marginTop: 0 }]}>
                  <View style={[styles.statsItemIcon, { backgroundColor }]}>
                    <FeatherIcon
                      color={color}
                      name={icon}
                      size={22} />
                  </View>

                  <View style={styles.statsItemBody}>
                    <Text style={styles.statsItemText}>{label}</Text>

                    <Text style={styles.statsItemValue}>{value}</Text>
                  </View>

                  <FeatherIcon
                    color="#b9bac3"
                    name="chevron-right"
                    size={24} />
                </View>
              </TouchableOpacity>
            ),
          )}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#000',
    marginBottom: 12,
  },
  /** Stats */
  stats: {
    flexDirection: 'column',
    alignItems: 'stretch',
    borderWidth: 1,
    borderColor: '#3c404a',
    borderRadius: 12,
    padding: 16,
  },
  statsItem: {
    marginTop: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  statsItemIcon: {
    width: 40,
    height: 40,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  statsItemBody: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  statsItemText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#000',
    textTransform: 'uppercase',
    marginBottom: 4,
  },
  statsItemValue: {
    fontSize: 17,
    fontWeight: '600',
    color: '#000',
  },
});