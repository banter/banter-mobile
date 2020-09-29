import React, {Component, useRef, useState, useEffect} from 'react';
import {
  View,
  FlatList,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

import MOCKDISCUSSIONS from '../../constants/mock-discussions';

import Swipeable from 'react-native-gesture-handler/Swipeable';
import { ScrollView } from 'react-native-gesture-handler';
import { DiscussionCard } from '../components/molecules';
import Swiper from 'react-native-swiper';
import { Button, Text } from 'native-base';

export default function ForYouScreen({}) {

  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    // Update the document title using the browser API
    // bb = activeIndex
    if (swiperRef) {
      console.log(swiperRef.current.state.index);
      console.log(swiperRef.current.state.index);
      setActiveIndex(swiperRef.current.state.index);
      console.log(activeIndex);
    }
    console.log('useEffect');
    // setbb(activeIndex)
  },[]);

  const _foo = useRef(0);
  const next = () => {
    if (swiperRef) {
      console.log(swiperRef.current.state.index);
      swiperRef.current.scrollBy(1);
      console.log(swiperRef.current.state.index);
    }
  };
  const back = () => {
    if (swiperRef) {
      console.log(swiperRef.current.state.index);
      swiperRef.current.scrollBy(-1);
      console.log(swiperRef.current.state.index);
    }
  };

  // const updateIndex = (index) => {
  //   setActiveIndex(index);
  // };

  return (
<View style={styles.container}>
<Button bordered dark
          onPressOut={() =>
            back()
          }>
            <Text>{activeIndex}</Text>
          </Button>
          <Button bordered dark
          onPressOut={() =>
            setActiveIndex(2)
          }
          >
            <Text>Dark</Text>
          </Button>
<Swiper ref={swiperRef} style={styles.wrapper}
      loop={false}
      showsButtons={true}
      showsPagination={false}
      onIndexChanged={(index) =>
        // useEffect()
        // console.log(index)
        setActiveIndex(index)
      }
      >
      <View style={styles.slide1}>
        <Text>AA</Text>
        <Text style={styles.text}>AAA</Text>
      </View>
      <View style={styles.slide2}>
      <Text style={styles.text}>AAAA</Text>
      </View>
    </Swiper>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
  },
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
});
