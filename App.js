/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react'; 
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,Image,TouchableOpacity
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


 



import { Provider,Button ,Card ,Appbar,Banner  } from 'react-native-paper';

const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const [visible, setVisible] = React.useState(true);
  return ( 
    <Provider style={backgroundStyle}> 
    <SafeAreaView>
     <Appbar.Header>
        {/* <Appbar.BackAction onPress={() => {}} /> */}
        <Appbar.Content title="AUTO REPORT" />
        <Appbar.Action icon="calendar" onPress={() => {}} />
        <Appbar.Action icon="magnify" onPress={() => {}} />
      </Appbar.Header>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView  contentInsetAdjustmentBehavior="automatic"
        style={styles.row}>
          <Banner style={styles.card}
            visible={visible}
            actions={[
              {
                label: '视频演示',
                onPress: () => setVisible(false),
              }, 
              {
                label: '遇到问题',
                onPress: () => setVisible(false),
              }, 
            ]}
            icon={({size}) => (
              <Image
                source={{
                  uri: 'https://avatars3.githubusercontent.com/u/17571969?s=400&v=4',
                }}
                style={{
                  width: size,
                  height: size,
                }}
              />
            )}>
            <View style={styles.col} >
              <Text> 报道步骤</Text> 
              <Text>1.点击下方按钮“扫码报到”,并将二维码置于摄像头下,等待系统提示报到成功. </Text> 
              <Text>1.点击下方按钮“扫码报到”,并将二维码置于摄像头下,等待系统提示报到成功. </Text> 
            </View>  
          </Banner>

          <View style={styles.bottomRow}>  
            <Button style={styles.btn} icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
              扫码报到
            </Button> 
            <Button style={styles.btn}  icon="card-text" mode="contained" onPress={() => console.log('Pressed')}>
              诊卡报到
            </Button> 
          </View>  
          
      </ScrollView>
      </SafeAreaView>
    </Provider>
  
  );
};

const styles = StyleSheet.create({
  btn:{ 
    // paddingHorizontal: 8,
    // paddingVertical: 6,
    borderRadius: 6, 
    alignSelf: "flex-start",
    marginHorizontal: "1%",
     marginTop: 10,
    // minWidth: "48%",
    flexGrow: 1,
    textAlign: "center", 
  },
  bottomRow: { 
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems:"center",
    textAlign: "center", 
    //  alignSelf:'flex-end',
  },
  col:{
    flexDirection:"column",
    flexWrap: "wrap",
  },
  row:{
    // borderColor:"#333",
    // borderWidth:2,
    // flexDirection: "row",
  },
  card:{  
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
