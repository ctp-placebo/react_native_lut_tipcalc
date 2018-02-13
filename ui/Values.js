import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

// functional stateless component (no state here)
const Values = ({ tipAmount, bill }) => {
  let tip = 0.00;
  let total = 0.00;
  if (bill) {
    tip = parseFloat(bill) * tipAmount;
    total = parseFloat(bill) + tip;
    tip = (Math.round(tip * 100) / 100).toFixed(2);
    total = (Math.round(total * 100) / 100).toFixed(2);
  }

  return (
    <View style={styles.values}>
      <Text style={styles.label}>
        Tip:
      </Text>
      <Text style={[styles.amounts, styles.tipAmount]}>
         kr {tip}
      </Text>
      <Text style={styles.label}>
       Total:
      </Text>
      <Text style={styles.amounts}>
          kr {total}
      </Text>
    </View>
  );
};


const styles = StyleSheet.create({
  values: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#484848',
    width: '100%',
  },
  label: {
    color: 'goldenrod',
    fontSize: 20,
  },
  amounts: {
    color: '#bada55',
    fontSize: 30,
    textAlign: 'right',
    fontWeight: 'bold',
  },
  tipAmount: {
    fontSize: 45,
  },
});

export default Values;
