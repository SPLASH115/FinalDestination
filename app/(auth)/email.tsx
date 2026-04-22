import { PrimaryButton } from '@/components/PrimaryButton';
import { SupportChatButton } from '@/components/SupportChatButton';
import { XendColors } from '@/constants/xend-theme';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function EmailScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
            <Ionicons name="arrow-back" size={24} color={XendColors.text} />
          </TouchableOpacity>
          <SupportChatButton onPress={() => console.log('Support chat pressed')} />
        </View>

        <View style={styles.content}>
          <Text style={styles.welcomeTitle}>Welcome</Text>
          <Text style={styles.title}>Enter your email address</Text>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Email</Text>
            <View style={styles.inputWrapper}>
              <Ionicons name="mail-outline" size={20} color="#666" style={styles.inputIcon} />
              <TextInput
                style={styles.input}
                placeholder="Enter your Email"
                placeholderTextColor="#666"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>
          </View>

          <PrimaryButton 
            label="Continue"
            variant="navy"
            onPress={() => router.push('/(auth)/login')}
            style={!email ? styles.disabledButton : undefined}
          />
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
      </KeyboardAvoidingView>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  backButton: {
    padding: 5,
  },
  content: {
    flex: 1,
    paddingHorizontal: 25,
    paddingTop: 40,
  },
  welcomeTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: XendColors.text,
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: XendColors.text,
    marginBottom: 40,
  },
  inputContainer: {
    marginBottom: 30,
  },
  label: {
    color: XendColors.textSecondary,
    fontSize: 14,
    marginBottom: 10,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: XendColors.backgroundElevated,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: XendColors.cardBorder,
    paddingHorizontal: 15,
    height: 60,
  },
  inputIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    color: XendColors.text,
    fontSize: 16,
  },
  disabledButton: {
    opacity: 0.5,
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