import { PrimaryButton } from '@/components/PrimaryButton';
import { SupportChatButton } from '@/components/SupportChatButton';
import { XendColors } from '@/constants/xend-theme';
import { AntDesign, FontAwesome, Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function WelcomeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <SupportChatButton onPress={() => console.log('Support chat pressed')} />
      </View>

      <View style={styles.content}>
        <View style={styles.logoContainer}>
          <View style={styles.logoCircle}>
             <View style={{ flexDirection: 'row', alignItems: 'flex-end', gap: 4 }}>
                <View style={{ width: 8, height: 15, backgroundColor: XendColors.orange, borderRadius: 2 }} />
                <View style={{ width: 8, height: 25, backgroundColor: '#8B5CF6', borderRadius: 2 }} />
                <View style={{ width: 8, height: 20, backgroundColor: XendColors.primaryBlue, borderRadius: 2 }} />
             </View>
          </View>
        </View>

        <Text style={styles.title}>Welcome to the{"\n"}Future of finance</Text>
        <Text style={styles.subtitle}>
          To get started create an account, if you already have an account we will log you in
        </Text>

        <View style={styles.buttonContainer}>
          <PrimaryButton 
            variant="blue"
            label="Continue with Email"
            onPress={() => router.push('/(auth)/email')}
            left={<Ionicons name="mail-outline" size={20} color="white" />}
          />

          <PrimaryButton 
            variant="navy"
            label="Continue with Google"
            onPress={() => {}}
            left={<AntDesign name="google" size={20} color="#4B5CFF" />}
          />

          <PrimaryButton 
            variant="navy"
            label="Continue with Apple"
            onPress={() => {}}
            left={<FontAwesome name="apple" size={20} color="white" />}
          />
        </View>
      </View>

      <View style={styles.footer}>
        <View style={styles.insuranceBadge}>
          <Ionicons name="checkmark-circle" size={16} color={XendColors.greenShield} />
          <Text style={styles.insuranceText}>Deposits insured by | </Text>
          <View style={styles.tidalBadge}>
             <Text style={styles.tidalText}>~~~ tidal</Text>
          </View>
        </View>
        
        <Text style={styles.backedByText}>Backed By:</Text>
        <View style={styles.partnerLogos}>
           <Text style={styles.partnerText}>Google FOR STARTUPS</Text>
           <Text style={styles.partnerText}>BINANCE</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: XendColors.background,
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 20,
    alignItems: 'flex-end',
  },
  content: {
    flex: 1,
    paddingHorizontal: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    marginBottom: 40,
  },
  logoCircle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#EAEAEA',
    borderWidth: 8,
    borderColor: '#D4C4B4',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: XendColors.text,
    textAlign: 'center',
    marginBottom: 15,
    lineHeight: 36,
  },
  subtitle: {
    fontSize: 14,
    color: XendColors.textSecondary,
    textAlign: 'center',
    marginBottom: 40,
    lineHeight: 20,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    width: '100%',
    gap: 15,
  },
  footer: {
    paddingBottom: 30,
    alignItems: 'center',
  },
  insuranceBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  insuranceText: {
    color: XendColors.textSecondary,
    fontSize: 12,
    marginLeft: 5,
  },
  tidalBadge: {
    backgroundColor: '#1A2A4A',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  tidalText: {
    color: '#4B5CFF',
    fontSize: 10,
    fontWeight: 'bold',
  },
  backedByText: {
    color: '#666',
    fontSize: 10,
    marginBottom: 10,
  },
  partnerLogos: {
    flexDirection: 'row',
    gap: 20,
  },
  partnerText: {
    color: '#444',
    fontSize: 10,
    fontWeight: 'bold',
  }
});