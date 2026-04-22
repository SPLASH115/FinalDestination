import { FontAwesome6, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SupportChatButton } from '../../components/SupportChatButton';

export default function PlansScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Plans</Text>
        <SupportChatButton onPress={() => console.log('Support chat pressed')} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        <View style={styles.summaryCard}>
          <Text style={styles.summaryLabel}>SAVINGS PLAN</Text>
          <Text style={styles.summaryAmount}>USD 0.00</Text>
        </View>

        <View style={styles.mainActions}>
          <TouchableOpacity style={[styles.actionCard, { borderColor: '#FF8A00' }]}>
            <View style={[styles.iconBox, { backgroundColor: '#FFF5EB' }]}>
               <FontAwesome6 name="piggy-bank" size={20} color="#FF8A00" />
            </View>
            <Text style={[styles.actionTitle, { color: '#FF8A00' }]}>Create Plan</Text>
            <Text style={styles.actionDesc}>Create a new fixed savings plan</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.actionCard, { borderColor: '#2E5BFF' }]}>
            <View style={[styles.iconBox, { backgroundColor: '#F0F4FF' }]}>
               <MaterialCommunityIcons name="calculator-variant" size={24} color="#2E5BFF" />
            </View>
            <Text style={[styles.actionTitle, { color: 'white' }]}>Interest Calculator</Text>
            <Text style={styles.actionDesc}>Calculate the interest on your savings</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.sectionTitle}>ALL SAVINGS PLANS</Text>
        <View style={styles.plansRow}>
           <View style={styles.planCard}>
              <Text style={styles.planLabel}>FLEXIBLE SAVINGS</Text>
              <Text style={styles.planAmount}>$0.00</Text>
              <TouchableOpacity style={styles.planButton}>
                 <Ionicons name="add-circle-outline" size={20} color="white" />
                 <Text style={styles.planButtonText}>ADD FUNDS</Text>
              </TouchableOpacity>
           </View>

           <View style={styles.planCard}>
              <Text style={styles.planLabel}>FIXED SAVINGS</Text>
              <Text style={styles.planAmount}>$0.00</Text>
              <TouchableOpacity style={styles.planButton}>
                 <Ionicons name="list" size={20} color="white" />
                 <Text style={styles.planButtonText}>VIEW ALL PLANS</Text>
              </TouchableOpacity>
           </View>
        </View>

        <View style={styles.rateSection}>
           <Text style={styles.sectionTitle}>TODAY'S RATE</Text>
           <Text style={styles.rateInfo}>This rate is updated daily (Apr 13, 2026 02:43 AM)</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F0F0F',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
  },
  title: {
    color: 'white',
    fontSize: 34,
    fontWeight: 'bold',
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 100,
  },
  summaryCard: {
    backgroundColor: '#2E5BFF',
    borderRadius: 20,
    padding: 24,
    marginVertical: 10,
  },
  summaryLabel: {
    color: 'rgba(255,255,255,0.8)',
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1,
    marginBottom: 8,
  },
  summaryAmount: {
    color: 'white',
    fontSize: 34,
    fontWeight: 'bold',
  },
  mainActions: {
    flexDirection: 'row',
    gap: 15,
    marginVertical: 20,
  },
  actionCard: {
    flex: 1,
    backgroundColor: '#1A1A1A',
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
  },
  iconBox: {
    width: 40,
    height: 40,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  actionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  actionDesc: {
    color: '#666',
    fontSize: 12,
    lineHeight: 16,
  },
  sectionTitle: {
    color: '#A0A0A0',
    fontSize: 12,
    fontWeight: 'bold',
    letterSpacing: 1,
    marginTop: 20,
    marginBottom: 15,
  },
  plansRow: {
    flexDirection: 'row',
    gap: 15,
  },
  planCard: {
    flex: 1,
    backgroundColor: '#1A1A1A',
    borderRadius: 16,
    padding: 20,
    gap: 15,
  },
  planLabel: {
    color: '#666',
    fontSize: 10,
    fontWeight: 'bold',
  },
  planAmount: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  planButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  planButtonText: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
  },
  rateSection: {
    marginTop: 30,
    paddingBottom: 20,
  },
  rateInfo: {
    color: '#666',
    fontSize: 12,
  }
});