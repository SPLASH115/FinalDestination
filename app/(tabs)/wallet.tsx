import { FontAwesome6, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SupportChatButton } from '../../components/SupportChatButton';

export default function WalletScreen() {
  const [showBalance, setShowBalance] = useState(true);
  const [activeTab, setActiveTab] = useState('Stablecoins');

  const assets = [
    { id: 'CNGN', name: 'Compliant Naira', amount: '1,200.00', value: '≈ $1,200', icon: 'N', color: '#7B61FF' },
    { id: 'USDT', name: 'Tether USD', amount: '1,200.00', value: '≈ $1,200', icon: 'T', color: '#00A36C' },
    { id: 'USDC', name: 'USD Coin', amount: '1,200.00', value: '≈ $1,200', icon: '$', color: '#2775CA' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Wallets</Text>
        <SupportChatButton onPress={() => console.log('Support chat pressed')} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        <View style={styles.portfolioCard}>
          <View style={styles.cardHeader}>
             <Text style={styles.cardLabel}>My Asset Portfolio</Text>
             <TouchableOpacity onPress={() => setShowBalance(!showBalance)}>
                <Ionicons name={showBalance ? "eye-outline" : "eye-off-outline"} size={20} color="white" />
             </TouchableOpacity>
          </View>
          <Text style={styles.portfolioAmount}>
            {showBalance ? "$ 12,480.22" : "**********"}
          </Text>
        </View>

        <View style={styles.actionRow}>
           <ActionItem icon="plus" label="Add Fund" />
           <ActionItem icon="arrow-down" label="Withdraw" />
           <ActionItem icon="swap-vertical" label="Swap" isMCI />
           <ActionItem icon="file-text" label="Statement" isIon />
        </View>

        <View style={styles.tabContainer}>
           {['Stablecoins', 'Utility', 'Memes 🔥'].map((tab) => (
             <TouchableOpacity 
               key={tab} 
               style={[styles.tab, activeTab === tab && styles.activeTab]}
               onPress={() => setActiveTab(tab)}
             >
               <Text style={[styles.tabText, activeTab === tab && styles.activeTabText]}>{tab}</Text>
             </TouchableOpacity>
           ))}
        </View>

        <View style={styles.assetList}>
           {assets.map((asset) => (
             <TouchableOpacity key={asset.id} style={styles.assetItem}>
                <View style={[styles.assetIcon, { backgroundColor: asset.color }]}>
                   <Text style={styles.assetIconText}>{asset.icon}</Text>
                </View>
                <View style={styles.assetInfo}>
                   <Text style={styles.assetName}>{asset.id}</Text>
                   <Text style={styles.assetFullName}>{asset.name}</Text>
                </View>
                <View style={styles.assetValues}>
                   <Text style={styles.assetAmount}>{showBalance ? asset.amount : "******"}</Text>
                   <Text style={styles.assetSubValue}>{showBalance ? asset.value : "*****"}</Text>
                </View>
                <Ionicons name="chevron-forward" size={20} color="#666" style={styles.chevron} />
             </TouchableOpacity>
           ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const ActionItem = ({ icon, label, isMCI, isIon }: any) => (
  <View style={styles.actionItem}>
    <TouchableOpacity style={styles.actionIconButton}>
       {isMCI ? (
         <MaterialCommunityIcons name={icon} size={24} color="#1A233E" />
       ) : isIon ? (
         <Ionicons name={icon} size={24} color="#1A233E" />
       ) : (
         <FontAwesome6 name={icon} size={20} color="#1A233E" />
       )}
    </TouchableOpacity>
    <Text style={styles.actionLabel}>{label}</Text>
  </View>
);

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
  portfolioCard: {
    backgroundColor: '#2E5BFF',
    borderRadius: 20,
    padding: 24,
    marginVertical: 10,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  cardLabel: {
    color: 'rgba(255,255,255,0.8)',
    fontSize: 16,
    fontWeight: '600',
  },
  portfolioAmount: {
    color: 'white',
    fontSize: 38,
    fontWeight: 'bold',
  },
  actionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 25,
  },
  actionItem: {
    alignItems: 'center',
    gap: 8,
  },
  actionIconButton: {
    width: 60,
    height: 60,
    backgroundColor: 'white',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionLabel: {
    color: 'white',
    fontSize: 12,
    fontWeight: '500',
  },
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: '#1A1A1A',
    borderRadius: 25,
    padding: 4,
    marginBottom: 25,
  },
  tab: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 20,
  },
  activeTab: {
    backgroundColor: '#2E5BFF',
  },
  tabText: {
    color: '#A0A0A0',
    fontSize: 13,
    fontWeight: '600',
  },
  activeTabText: {
    color: 'white',
  },
  assetList: {
    gap: 15,
  },
  assetItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#1A1A1A',
  },
  assetIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  assetIconText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  assetInfo: {
    flex: 1,
  },
  assetName: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  assetFullName: {
    color: '#666',
    fontSize: 12,
  },
  assetValues: {
    alignItems: 'flex-end',
    marginRight: 10,
  },
  assetAmount: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  assetSubValue: {
    color: '#666',
    fontSize: 12,
  },
  chevron: {
    backgroundColor: '#1A1A1A',
    borderRadius: 15,
    padding: 2,
  }
});