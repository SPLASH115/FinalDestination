import { PrimaryButton } from '@/components/PrimaryButton';
import { SupportChatButton } from '@/components/SupportChatButton';
import { XendLogo } from '@/components/XendLogo';
import { XendColors } from '@/constants/xend-theme';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function LoginScreen() {
  const router = useRouter();
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <View style={styles.header}>
          <XendLogo compact />
          <SupportChatButton onPress={() => console.log('Support chat pressed')} />
        </View>

        <View style={styles.content}>
          <View style={styles.userProfileRow}>
             <View style={styles.avatarCircle}>
                <Ionicons name="person" size={32} color={XendColors.textSecondary} />
             </View>
             <Text style={styles.welcomeUser}>Welcome, Emmanuel_Nneji</Text>
          </View>

          <Text style={styles.title}>Enter your password</Text>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Your Password</Text>
            <View style={styles.inputWrapper}>
              <Ionicons name="lock-closed-outline" size={20} color="#666" style={styles.inputIcon} />
              <TextInput
                style={styles.input}
                placeholder="........"
                placeholderTextColor="#666"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!showPassword}
              />
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                <Ionicons name={showPassword ? "eye-off-outline" : "eye-outline"} size={20} color="#666" />
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.forgotPassword}>
               <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.faceIdContainer}>
             <View style={styles.faceIdCircle}>
                <MaterialCommunityIcons name="face-recognition" size={40} color={XendColors.orange} />
             </View>
          </View>

          <PrimaryButton 
            label="Login"
            variant="navy"
            onPress={() => router.push('/(tabs)/home')}
            style={!password ? styles.disabledButton : undefined}
          />

          <TouchableOpacity style={styles.switchAccount}>
             <Text style={styles.notYouText}>Not you? <Text style={styles.switchText}>Switch account</Text></Text>
          </TouchableOpacity>
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
  content: {
    flex: 1,
    paddingHorizontal: 25,
    paddingTop: 30,
  },
  userProfileRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
    marginBottom: 40,
  },
  avatarCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: XendColors.backgroundElevated,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: XendColors.cardBorder,
  },
  welcomeUser: {
    color: XendColors.text,
    fontSize: 16,
    fontWeight: '600',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
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
  forgotPassword: {
    alignItems: 'flex-end',
    marginTop: 15,
  },
  forgotPasswordText: {
    color: XendColors.text,
    fontSize: 14,
    fontWeight: '600',
  },
  faceIdContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  faceIdCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: XendColors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  disabledButton: {
    opacity: 0.5,
  },
  switchAccount: {
    alignItems: 'center',
    marginTop: 30,
  },
  notYouText: {
    color: XendColors.text,
    fontSize: 14,
  },
  switchText: {
    color: XendColors.orange,
    fontWeight: 'bold',
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