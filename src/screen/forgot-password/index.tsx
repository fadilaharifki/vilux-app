import ReqSuccessSVG from '@assets/svg/req-success';
import CustomButton from '@components/button';
import ControlledInput from '@components/form/control-input';
import ModalComponent from '@components/modal';
import CustomText from '@components/text';
import { yupResolver } from '@hookform/resolvers/yup';
import { RootStackParamList } from '@navigation/main-navigation';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { ColorBlue, ColorsDark, ColorsLight } from '@theme/colors';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Yup from 'yup';

interface FormValues {
  email: string;
}

const ForgotPasswordScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);

  const schema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email address')
      .required('Email cannot be empty!'),
  });

  const {
    control,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm<FormValues>({
    mode: 'all',
    resolver: yupResolver(schema),
    defaultValues: {
      email: '',
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log(data);
    openModal();
  };
  const handleConfirm = (date: Date) => {
    console.log('Selected date:', date);
  };

  return (
    <SafeAreaView style={styles.containerSafeAreaView}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.container}>
          <View style={styles.containerContent}>
            <View style={styles.containerContentText}>
              <CustomText style={styles.title}>
                ENTER YOUR EMAIL ADDRESS
              </CustomText>
              <CustomText style={styles.text}>
                We will send a verification code to this Email
              </CustomText>
            </View>
            <View style={styles.containerForm}>
              <ControlledInput
                name='email'
                control={control}
                placeholder='Email Address'
                rules={{ required: true }}
              />
            </View>
          </View>

          <View style={styles.containerButton}>
            <CustomButton
              disabled={!isDirty}
              onPress={handleSubmit(onSubmit)}
              title='Continue'
            />
          </View>
        </View>
      </ScrollView>
      <ModalComponent
        visible={modalVisible}
        onClose={closeModal}
        title='REQUEST SUCCESS'
      >
        <View style={styles.containerModal}>
          <View>
            <CustomText style={styles.subTitle}>
              Please check your email to reset Password
            </CustomText>
          </View>
          <ReqSuccessSVG />
          <View style={styles.containerButtonModal}>
            <CustomButton
              style={styles.buttonContinue}
              onPress={() => {
                // navigation.navigate('Forgot Password Screen');
              }}
              title='Continue'
            />
          </View>
        </View>
      </ModalComponent>
    </SafeAreaView>
  );
};

export default ForgotPasswordScreen;

const styles = StyleSheet.create({
  containerSafeAreaView: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  container: {
    display: 'flex',
    height: '100%',
    backgroundColor: ColorsDark.black,
    justifyContent: 'flex-start',
    padding: 20,
  },
  containerForm: {
    width: '100%',
  },
  containerContent: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    gap: 40,
    marginTop: 50,
  },
  containerContentText: {
    gap: 15,
  },
  image: {
    width: 150,
    height: 150,
  },
  title: {
    color: ColorsLight.light,
    lineHeight: 25,
    fontSize: 24,
    fontWeight: 600,
  },
  text: {
    color: ColorsDark.gray,
    lineHeight: 25,
    fontSize: 16,
  },
  notHaveAccount: {
    color: ColorsLight.light,
    textAlign: 'center',
  },
  forgotPassword: {
    color: ColorsLight.light,
    textAlign: 'right',
    paddingBottom: 20,
  },
  signUp: {
    color: ColorBlue.sky,
    textAlign: 'center',
  },
  containerButton: {
    flex: 1,
    justifyContent: 'flex-end',
    gap: 20,
  },
  section1: {
    flexDirection: 'row',
    gap: 10,
  },
  containerInput: {
    flex: 1,
  },
  containerButtonModal: {
    display: 'flex',
    gap: 13,
  },
  containerModal: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 30,
  },
  subTitle: {
    textAlign: 'center',
    fontSize: 14,
  },
  buttonContinue: { borderRadius: 100, paddingHorizontal: 30 },
});
