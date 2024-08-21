import CustomButton from '@components/button';
import ControlledInput from '@components/form/control-input';
import CustomDateTimePicker from '@components/form/date-time-picker';
import CustomText from '@components/text';
import { yupResolver } from '@hookform/resolvers/yup';
import { RootStackParamList } from '@navigation/main-navigation';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { ColorBlue, ColorsDark, ColorsLight } from '@theme/colors';
import { useForm } from 'react-hook-form';
import { ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Yup from 'yup';

interface FormValues {
  fullname: string;
  username: string;
  email: string;
  birthDate: string;
  password: string;
  checkPassword: string;
}

const SignUpScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const schema = Yup.object().shape({
    fullname: Yup.string().required('Full Name cannot be empty!'),
    username: Yup.string().required('Username cannot be empty!'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email cannot be empty!'),
    birthDate: Yup.string().required('Date cannot be empty!'),
    password: Yup.string()
      .required('Wrong Password!')
      .min(8, 'Password must be at least 8 characters'),
    checkPassword: Yup.string()
      .required('Password confirmation is required!')
      .oneOf([Yup.ref('password')], 'Passwords must match')
      .min(8, 'Password confirmation must be at least 8 characters'),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormValues) => {
    console.log(data);
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
              <CustomText style={styles.title}>CREATE NEW ACCOUNT?</CustomText>
              <CustomText style={styles.text}>
                Please fill in the form to Continue
              </CustomText>
            </View>
            <View style={styles.containerForm}>
              <View style={styles.section1}>
                <View style={styles.containerInput}>
                  <ControlledInput
                    name='fullname'
                    control={control}
                    placeholder='Full Name'
                    rules={{ required: true }}
                  />
                </View>
                <View style={styles.containerInput}>
                  <ControlledInput
                    name='username'
                    control={control}
                    placeholder='Usename'
                    rules={{ required: true }}
                  />
                </View>
              </View>
              <CustomDateTimePicker
                mode='date'
                name='birthDate'
                control={control}
              />
              <ControlledInput
                name='email'
                control={control}
                placeholder='Email Address'
                rules={{ required: true }}
              />
              <ControlledInput
                name='password'
                control={control}
                placeholder='Enter your password'
                secureTextEntry
                rules={{ required: true }}
              />
              <ControlledInput
                name='checkPassword'
                control={control}
                placeholder='Re-Input Password'
                secureTextEntry
                rules={{ required: true }}
              />
              <CustomText style={styles.forgotPassword}>
                Forgot Password?
              </CustomText>
            </View>
          </View>

          <View style={styles.containerButton}>
            <CustomButton onPress={handleSubmit(onSubmit)} title='Continue' />
            <CustomText style={styles.notHaveAccount}>
              Have an account yet?
              <CustomText
                onPress={() => {
                  navigation.goBack();
                }}
                style={styles.signUp}
              >
                {' '}
                Sign In
              </CustomText>
            </CustomText>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUpScreen;

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
  section1: {
    flexDirection: 'row',
    gap: 10,
  },
  containerInput: {
    flex: 1,
  },
});
