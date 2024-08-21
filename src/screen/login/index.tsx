import PeoplePlusSVG from '@assets/svg/people-plus';
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

type FormValues = {
  username: string;
  password: string;
};

const LoginScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);

  const schema = Yup.object().shape({
    username: Yup.string().required('Username is not Available!'),
    password: Yup.string()
      .required('Wrong Password!')
      .min(8, 'Password must be at least 8 characters'),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    mode: 'all',
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <SafeAreaView style={styles.containerSafeAreaView}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.container}>
          <View style={styles.containerContent}>
            <PeoplePlusSVG />
            <View style={styles.containerContentText}>
              <CustomText style={styles.title}>
                LOG IN FOR FULL ACCESS
              </CustomText>
              <CustomText style={styles.text}>
                Register or Log in with your Phone Number
              </CustomText>
            </View>
            <View style={styles.containerForm}>
              <ControlledInput
                name='username'
                control={control}
                placeholder='Phone Number or Username'
                rules={{ required: true }}
              />
              <ControlledInput
                name='password'
                control={control}
                placeholder='Enter your password'
                secureTextEntry
                rules={{ required: true }}
              />
              <CustomText onPress={openModal} style={styles.forgotPassword}>
                Forgot Password?
              </CustomText>
            </View>
          </View>

          <View style={styles.containerButton}>
            <CustomButton onPress={handleSubmit(onSubmit)} title='Continue' />
            <CustomText style={styles.notHaveAccount}>
              Don’t have an account yet?
              <CustomText
                onPress={() => {
                  navigation.navigate('Sign Up Screen');
                }}
                style={styles.signUp}
              >
                {' '}
                Sign Up
              </CustomText>
            </CustomText>
          </View>
        </View>
      </ScrollView>
      <ModalComponent
        visible={modalVisible}
        onClose={closeModal}
        title='FORGET PASSWORD'
      >
        <View style={styles.containerModal}>
          <View>
            <CustomText style={styles.subTitle}>
              Head over to reset your Password now
            </CustomText>
          </View>
          <View style={styles.containerButtonModal}>
            <CustomButton
              onPress={() => {
                navigation.navigate('Forgot Password Screen');
              }}
              title='Reset Password'
            />
            <CustomButton
              onPress={() => setModalVisible(false)}
              outline
              title='Cancel'
            />
          </View>
        </View>
      </ModalComponent>
    </SafeAreaView>
  );
};

export default LoginScreen;

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
    justifyContent: 'center',
    padding: 20,
  },
  containerForm: {
    width: '100%',
  },
  containerContent: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: 40,
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
    textAlign: 'center',
    lineHeight: 25,
    fontSize: 24,
    fontWeight: 600,
  },
  text: {
    color: ColorsDark.gray,
    textAlign: 'center',
    lineHeight: 25,
    fontSize: 14,
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
  containerButtonModal: {
    display: 'flex',
    gap: 13,
  },
  containerModal: {
    display: 'flex',
    gap: 30,
  },
  subTitle: {
    textAlign: 'center',
  },
});
