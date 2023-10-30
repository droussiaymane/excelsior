/**
 *
 * ProfileScreen
 *
 */

import React,{useEffect} from 'react';
import { View, StyleSheet ,Text,TouchableOpacity,NativeModules } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer, useInjectSaga } from 'redux-injectors';
import makeSelectProfileScreen,{makeSelectUserScreen} from './selectors';
import { selectClientDetailsToken } from '../../containers/ClientDetails/selectors'
import { makeSelectTokenUser } from '../../screens/SignIn/selectors'
import reducer from './reducer';
import saga from './saga';
// import { FormattedMessage } from 'components/FormattedMessage';
import messages from './messages';
import Icon from 'react-native-vector-icons/AntDesign'
import {getUserRequestAction} from './actions';
// import {navigate} from '../../utils/routNavigation';
import {SCREENS} from '../../navigators/constants';
import {removeItem} from '../../utils/localstorage';

const stateSelector = createStructuredSelector({
  profileScreen: makeSelectProfileScreen(),
  clientTokenFromLocal: selectClientDetailsToken(),
  clientTokenFromLSignIn: makeSelectTokenUser,
  user:makeSelectUserScreen,
});

const key = 'profileScreen';

export const ProfileScreen: React.FC<IProfileScreenProps> = ({ navigation}) => {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  /* eslint-disable no-unused-vars */
  const { profileScreen,clientTokenFromLocal,clientTokenFromLSignIn,user } = useSelector(stateSelector);
  const token = clientTokenFromLocal || clientTokenFromLSignIn
  console.log(user);
  
  const dispatch = useDispatch();
  /* eslint-enable no-unused-vars */
  useEffect(() => {
    dispatch(getUserRequestAction(token))
  },[])
  return (
    <View style={styles.container}>
      {/* <FormattedMessage {...messages.header} /> */}
      <Text style={styles.profileText}>Profile</Text>
      <View style={styles.profileBody}>

      <Icon name="user" size={25} color='#000' style={styles.profileImage}/>
      </View>
      {user &&
        <>
        <View style={styles.infoContainer}>
        <Text style={styles.label}>user name</Text>
        <Text style={styles.info}>{user?.name}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>email</Text>
        <Text style={styles.info}>{user?.email}</Text>
      </View>
      <View style={styles.logoutContainer}>
      <TouchableOpacity 
      style={styles.logoutBtn}
      onPress={()=>{
        removeItem('token')
        navigation.navigate(SCREENS.SIGNIN)
      }}>
        <Icon name="logout" size={17} color='#37B184' 
        style={styles.logoutIcon}
        />
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
      </View>
        </>
      }
      
      {/* </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // justifyContent: 'center',
    // alignItems: 'center',
    flex: 1,
    padding:40,
    backgroundColor: '#fff'
    // marginTop:StatusBar
  },
  profileText:{
    fontSize:21,
    fontWeight: 'bold',
  },
  profileBody:{
    alignItems: 'center',
  },
  profileImage:{
    fontSize:50,
    marginVertical:'10%',
    borderColor:'#37B184',
    borderWidth:2,
    borderRadius:50,
    padding:'3%',
    textAlign: 'center',
  },
  infoContainer:{
    borderWidth:1,
    borderColor:'#37B184',
    borderRadius:24,
    marginVertical:'5%',
    padding:'4%',
  },
  label:{
    color:'#37B184',
    position:'absolute',
    top:"-45%",
    left:"10%",
    zIndex:4,
    backgroundColor:'#fff',
    paddingBottom:"2%",
    paddingHorizontal:"3%"
  },
  info:{
    fontSize:16,
    color:'#000',
    paddingBottom:'2%',
    zIndex:3
  },
  logoutContainer:{
    alignItems: 'center',
    marginTop:"10%"
  },
  logoutBtn:{
    shadowColor:'#000',
    elevation:10,
    shadowOffset: {
      width: 0,
      height: 20
    },
    shadowOpacity: 0.3,
    backgroundColor:'#fff',
    paddingVertical:10,
    paddingHorizontal:20,
    borderRadius: 10,
    flexDirection:'row',
    alignItems: 'center',
  },
  logoutIcon:{
    paddingRight:'5%'
  },
  logoutText:{
    fontSize:16,
    fontWeight: '600'
  }
});


export interface IProfileScreenProps {navigation}



export default ProfileScreen;
