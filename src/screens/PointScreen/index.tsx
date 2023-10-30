/**
 *
 * PointScreen
 *
 */

import React, { useEffect } from 'react';
import { View, StyleSheet, Text, FlatList, Dimensions, Animated, RefreshControl, ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer, useInjectSaga } from 'redux-injectors';
import makeSelectPointScreen from './selectors';
import { makeSelectPointsLoading } from './selectors';
import reducer from './reducer';
import { getPointsRequestAction } from './actions';
import saga from './saga';
// import { FormattedMessage } from 'components/FormattedMessage';
import messages from './messages';
import Loader from '../../components/Loader'
import { selectClientDetailsToken } from '../../containers/ClientDetails/selectors'
import { makeSelectTokenUser } from '../../screens/SignIn/selectors'

const { height, width } = Dimensions.get('screen')

const stateSelector = createStructuredSelector({
  pointScreen: makeSelectPointScreen(),
  clientTokenFromLocal: selectClientDetailsToken(),
  clientTokenFromLSignIn: makeSelectTokenUser,
  pointsLoading: makeSelectPointsLoading,
});

const key = 'pointScreen';

export const PointScreen: React.FC<IPointScreenProps> = ({ }) => {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });
  const dispatch = useDispatch();
  const { clientTokenFromLocal, pointScreen, pointsLoading, clientTokenFromLSignIn } = useSelector(stateSelector);

  const token = clientTokenFromLocal || clientTokenFromLSignIn

  /* eslint-enable no-unused-vars */
  useEffect(() => {
    dispatch(getPointsRequestAction(token))
  }, [])

  const { points } = pointScreen
  const onRefresh = () => {
    dispatch(getPointsRequestAction(token))
  }
  //   const DATA = [
  //     {"_id": "60eebd90e4aaf83ab4d660b7", "points": 30, "store": {"name": "store Atlas"}},
  //     {"_id": "60eebd90e4aaf83ab4d660b7", "points": 30, "store": {"name": "store Atlas"}},
  //     {"_id": "60eebd90e4aaf83ab4d660b7", "points": 30, "store": {"name": "store Atlas"}},
  //     {"_id": "60eebd90e4aaf83ab4d660b7", "points": 30, "store": {"name": "store Atlas"}},
  //     {"_id": "60eebd90e4aaf83ab4d660b7", "points": 30, "store": {"name": "store Atlas"}},
  //     {"_id": "60eebd90e4aaf83ab4d660b7", "points": 30, "store": {"name": "store Atlas"}},
  //     {"_id": "60eebd90e4aaf83ab4d660b7", "points": 30, "store": {"name": "store Atlas"}},
  //     {"_id": "60eebd90e4aaf83ab4d660b7", "points": 30, "store": {"name": "store Atlas"}},
  //     {"_id": "60eebd90e4aaf83ab4d660b7", "points": 30, "store": {"name": "store Atlas"}},
  //     {"_id": "60eebd90e4aaf83ab4d660b7", "points": 30, "store": {"name": "store Atlas"}},
  // ]

  const scrollY = React.useRef(new Animated.Value(0)).current;

  return (
    <View style={styles.container}>

      {
        points && points.length > 0 ?
          <Animated.FlatList
            data={points}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { y: scrollY } } }],
              { useNativeDriver: true }
            )}
            contentContainerStyle={{ padding: 20, }}
            keyExtractor={(_, index) => index.toString()}
            renderItem={({ item, index }) => {
              const inputRange: number[] = [
                -1, 0,
                120 * index,
                120 * (index + 2),
              ]
              const scale: any = scrollY.interpolate({
                inputRange,
                outputRange: [1, 1, 1, 0] as number[]
              })
              return <Animated.View style={[styles.section, { transform: [{ scale }] }]} >

                <Text style={styles.text}>{item.store.name}</Text>
                <Text style={styles.text} >{item.points} pts</Text>
              </Animated.View>
            }
            }
            refreshControl={
              <RefreshControl
                refreshing={false}
                onRefresh={onRefresh}
              />
            }
          />
          : points && points.length < 1 ?
            <ScrollView
              contentContainerStyle={styles.emptyContainer}
              refreshControl={
                <RefreshControl
                  refreshing={false}
                  onRefresh={onRefresh}
                />
              }
            >
              <Text>empty</Text>
            </ScrollView>
          : <Loader />
      }

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
  section: {

    height: 90,
    backgroundColor: '#fff',
    paddingTop: 25,
    paddingHorizontal: 15,
    // width: width,
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomColor: '#37B184',
    borderWidth: 5,
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    marginVertical: 15,
    width: width / 1.1,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 20
    },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 20,

  },
  text: {
    color: "black",
  },
  blank: {
    height: 90,
    backgroundColor: 'transparent',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});


export interface IPointScreenProps { }



export default PointScreen;
