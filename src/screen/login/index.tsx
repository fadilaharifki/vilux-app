import CustomText from '@components/text';
import {ScrollView, StyleSheet, View} from 'react-native';
import {ColorBlue, ColorsDark, ColorsLight} from '@theme/colors';
import CustomButton from '@components/button';
import {SafeAreaView} from 'react-native-safe-area-context';
import PeoplePlusSVG from '@assets/svg/people-plus';
import ControlledInput from '@components/form/control-input';
import {useForm} from 'react-hook-form';
import * as Yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';

type FormValues = {
  username: string;
  password: string;
};

const LoginScreen = () => {
  const schema = Yup.object().shape({
    username: Yup.string().required('Username is not Available!'),
    password: Yup.string()
      .required('Wrong Password!')
      .min(8, 'Password must be at least 8 characters'),
  });

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<FormValues>({
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
                name="username"
                control={control}
                placeholder="Phone Number or Username"
                rules={{required: true}}
              />
              <ControlledInput
                name="password"
                control={control}
                placeholder="Enter your password"
                secureTextEntry
                rules={{required: true}}
              />
              <CustomText style={styles.forgotPassword}>
                Forgot Password?
              </CustomText>
            </View>
          </View>

          <View style={styles.containerButton}>
            <CustomButton onPress={handleSubmit(onSubmit)} title="Continue" />
            <CustomText style={styles.notHaveAccount}>
              Don’t have an account yet?
              <CustomText style={styles.signUp}> Sign Up</CustomText>
            </CustomText>
          </View>
        </View>
      </ScrollView>
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
});
