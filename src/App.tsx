import i18n from '@i18n';
import {allUsers} from '@redux/components/selectors';
import {persistor, store} from '@redux/store';
import React, {FC, useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import {Text, View, StyleSheet} from 'react-native';
import {enableScreens} from 'react-native-screens';
import SplashScreen from 'react-native-splash-screen';
import {useSelector} from 'react-redux';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

enableScreens();

const AppComponent = () => {
  const usersList = useSelector(allUsers);

  const {t} = useTranslation();
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      paddingVertical: 15,
      backgroundColor: '#9CD7CB',
    },
    header_text: {
      color: 'crimson',
      fontSize: 16,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    intro_text: {
      color: 'blue',
      fontSize: 16,
      fontWeight: 'bold',
      textAlign: 'center',
    },
  });
  return (
    <View style={styles.container}>
      <Text style={styles.header_text}> {t('Homepage.welcome')}</Text>

      <Text
        style={
          styles.intro_text
        }>{`Mình tên là ${usersList[0].first_name} ${usersList[0].last_name}`}</Text>
    </View>
  );
};

const App: FC = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  useEffect(() => {
    i18n.changeLanguage('vi');
  }, []);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <AppComponent />
      </PersistGate>
    </Provider>
  );
};

export default App;
