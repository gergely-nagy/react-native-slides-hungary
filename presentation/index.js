// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Image,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Fill,
  Layout,
  CodePane,
  TableBody, TableHeader, TableHeaderItem, TableItem, TableRow, Table
} from "spectacle";

// Import utils
import ReactExample from "./utils/react-example";
import ReactStateLifeCycleExample from "./utils/react-state-and-lifecycle-example";
// import NativeExample from "./utils/native-example";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("./index.css");

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quarternary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

const images = {
  androidNativeBase: require("../assets/Android.gif"),
  iosNativeBase: require("../assets/iOS.gif"),
  maps: require("../assets/maps.gif"),
  nativeElements: require("../assets/nativeElements.png"),
  jest: require("../assets/jest.png"),
  expo: require("../assets/expo.png"),
  sadmeme: require("../assets/sadmeme.png"),
  rnn: require("../assets/rnn-example-demo.gif"),
  rnnWix: require("../assets/demo.gif"),
  reactNavAndroid: require("../assets/android-stack.gif"),
  reactNavIOS: require("../assets/iphone-stack.gif"),
  hotReload: require("../assets/hot-reload.gif"),
  inspector: require("../assets/Inspector.gif"),
  developerMenu: require("../assets/developer-menu.png"),
  rnError: require("../assets/rn-error.png"),
  rnWarning: require("../assets/rn-warning.png"),
  perfUtil: require("../assets/PerfUtil.png"),
  devTool: require("../assets/ReactDevTools.png"),
  detox: require("../assets/detox.gif"),
  iknow: require("../assets/iknow.jpg"),
  nativeFeels: require("../assets/nativefeels.jpg"),
  packages: require("../assets/packages.png")
};

const logos = {
  adsmanager: require("../assets/apps/adsmanager.png"),
  airbnb: require("../assets/apps/airbnb.png"),
  facebook: require("../assets/apps/facebook.png"),
  f8: require("../assets/apps/f8.png"),
  instagram: require("../assets/apps/instagram.png"),
  skype: require("../assets/apps/skype.png"),
  tesla: require("../assets/apps/tesla.png"),
  walmart: require("../assets/apps/wmt_spark.jpg")
};

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading fit caps lineHeight={1} textColor="secondary">
            react native
          </Heading>
          <List style={{ "list-style-type": "none" }}>
            <ListItem>
              <i className="fa fa-globe" aria-hidden="true" />{" "}<a href="https://facebook.github.io/react-native/">https://facebook.github.io/react-native/</a>
            </ListItem>
            <ListItem>
              <i className="fa fa-github" aria-hidden="true"/>{" "}<a href="https://github.com/facebook/react-native">https://github.com/facebook/react-native/</a>
            </ListItem>
          </List>
          {/* <Text margin="10px 0 0" textColor="tertiary" size={21} fit bold>
            asd sad asdasdsad asd as
          </Text> */}
        </Slide>
        <Slide transition={["slide"]} bgColor="primary" textColor="tertiary">
          <Heading size={4} textColor="tertiary" caps>Mi az a react native?</Heading>
          <List textColor="secondary">
            <ListItem>Mobil alkalmazások fejlesztése</ListItem>
            <ListItem>Cross-platform: Android, iOS</ListItem>
            <ListItem>Javascript + React</ListItem>
            <ListItem>Components, props, states, lifecycles</ListItem>
            <ListItem>Tényleges natív kód (<span style={{ 'text-decoration': 'line-through' }}>WebView, Hybrid app</span> )</ListItem>
            <ListItem>Nyilt forráskód (3-Clause BSD License)</ListItem>
          </List>
        </Slide>
        <Slide transition={["slide"]}>
          {/* <Heading size={4} textColor="black">
            Navigáció a képernyők között
          </Heading> */}
          <Layout>
            <Fill>
              <Image height="400px" src={images.nativeFeels}/>
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={["slide"]} bgColor="primary" textColor="tertiary">
          <Heading size={4} textColor="tertiary" caps>React native előnyei...</Heading>
          <List textColor="secondary">
            <ListItem>Cross-platform</ListItem>
            <ListItem>SOKKAL olcsóbb</ListItem>
            <ListItem>Egyszerűbb kód</ListItem>
            <ListItem>Sok idő megspórolása</ListItem>
          </List>
        </Slide>
        <Slide transition={["slide"]}>
          <Heading textColor="tertiary" size="3" className="show-case__title" >
            Kik használják?
          </Heading>

          <div className="show-case__separator" />

          <Layout>
            <Fill>
              <Image
                className="show-case__logo"
                src={logos.facebook}
              />
              <Text textColor="grey">Facebook</Text>
            </Fill>

            <Fill>
              <Image
                className="show-case__logo"
                src={logos.adsmanager}
              />
              <Text textColor="grey">Facebook Ads Manager</Text>
            </Fill>

            <Fill>
              <Image
                className="show-case__logo"
                src={logos.instagram}
              />
              <Text textColor="grey">Instagram</Text>
            </Fill>

          </Layout>

          <div className="show-case__separator" />

          <Layout>
            <Fill>
              <Image
                className="show-case__logo"
                src={logos.tesla}
              />
              <Text textColor="grey">Tesla</Text>
            </Fill>

            <Fill>
              <Image
                className="show-case__logo"
                src={logos.airbnb}
              />
              <Text textColor="grey">Airbnb</Text>
            </Fill>

            <Fill>
              <Image
                className="show-case__logo"
                src={logos.skype}
              />
              <Text textColor="grey">Skype</Text>
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={["slide"]}>
          <Heading size={4} textColor="tertiary" caps>React</Heading>
          <List textColor="secondary">
            <ListItem>Virtual dom</ListItem>
            <ListItem>Declarative (JSX)</ListItem>
            <ListItem>Component-Based</ListItem>
            <ListItem>Learn Once, Write Anywhere</ListItem>
            <ListItem>5,580,072 npm downloads in the last month</ListItem>
          </List>
        </Slide>
        <Slide transition={["slide"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>components and props</Heading>
          <ReactExample />
        </Slide>
        <Slide transition={["slide"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>State and Lifecycle</Heading>
          <ReactStateLifeCycleExample />
        </Slide>
        <Slide transition={["slide"]}>
          {/* <Heading size={4} textColor="black">
            Navigáció a képernyők között
          </Heading> */}
          <Layout>
            <Fill>
              <Image height="400px" src={images.iknow}/>
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={["slide"]}>
          <Heading size={4} textColor="tertiary" caps>React Native</Heading>
          <List textColor="secondary">
            <ListItem>Community-driven</ListItem>
            <ListItem>Maximum code reuse & cost saving "90%"</ListItem>
            <ListItem>Live reload</ListItem>
            <ListItem>Strong performance for mobile environments</ListItem>
            <ListItem>Use native code when you need to</ListItem>
            <ListItem>Modular and intuitive architecture similar to React</ListItem>
          </List>
        </Slide>
        <Slide transition={["slide"]} bgColor="tertiary" >
          <Heading size={6} textColor="primary" caps>Base components</Heading>
          <iframe width="880" height="425" frameborder="0" src="https://dabbott.github.io/react-native-web-player/#code=import%20React%2C%20%7B%20Component%20%7D%20from%20'react'%0Aimport%20%7B%20AppRegistry%2C%20StyleSheet%2C%20Text%2C%20View%20%7D%20from%20'react-native'%0A%0Aclass%20App%20extends%20Component%20%7B%0A%20%20render()%20%7B%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CView%3E%0A%20%20%20%20%20%20%20%20%3CText%3E%0A%20%20%20%20%20%20%20%20%20%20Hello%20World%0A%20%20%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20)%0A%20%20%7D%0A%7D%0A%0AAppRegistry.registerComponent('App'%2C%20()%20%3D%3E%20App)%0A"></iframe>
        </Slide>
        <Slide transition={["slide"]} bgColor="tertiary" >
          <Heading size={6} textColor="primary" caps>Style</Heading>
          <iframe width="880" height="425" frameborder="0" src="https://dabbott.github.io/react-native-web-player/#code=import%20React%2C%20%7B%20Component%20%7D%20from%20'react'%3B%0Aimport%20%7B%20AppRegistry%2C%20StyleSheet%2C%20Text%2C%20View%20%7D%20from%20'react-native'%3B%0A%0Aexport%20default%20class%20LotsOfStyles%20extends%20Component%20%7B%0A%20%20render()%20%7B%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CView%3E%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.red%7D%3Ejust%20red%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.bigblue%7D%3Ejust%20bigblue%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7B%5Bstyles.bigblue%2C%20styles.red%5D%7D%3Ebigblue%2C%20then%20red%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7B%5Bstyles.red%2C%20styles.bigblue%5D%7D%3Ered%2C%20then%20bigblue%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20)%3B%0A%20%20%7D%0A%7D%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20bigblue%3A%20%7B%0A%20%20%20%20color%3A%20'blue'%2C%0A%20%20%20%20fontWeight%3A%20'bold'%2C%0A%20%20%20%20fontSize%3A%2030%2C%0A%20%20%7D%2C%0A%20%20red%3A%20%7B%0A%20%20%20%20color%3A%20'red'%2C%0A%20%20%7D%2C%0A%7D)%3B%0A%0A%2F%2F%20skip%20this%20line%20if%20using%20Create%20React%20Native%20App%0AAppRegistry.registerComponent('AwesomeProject'%2C%20()%20%3D%3E%20LotsOfStyles)%3B%0A"></iframe>
        </Slide>
        <Slide transition={["slide"]} bgColor="tertiary" >
          <Heading size={6} textColor="primary" caps>Flex Box</Heading>
          <iframe width="880" height="425" frameborder="0" src="https://dabbott.github.io/react-native-web-player/#code=import%20React%2C%20%7B%20Component%20%7D%20from%20'react'%3B%0Aimport%20%7B%20AppRegistry%2C%20View%20%7D%20from%20'react-native'%3B%0A%0Aexport%20default%20class%20AlignItemsBasics%20extends%20Component%20%7B%0A%20%20render()%20%7B%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%2F%2F%20Try%20setting%20%60alignItems%60%20to%20'flex-start'%0A%20%20%20%20%20%20%2F%2F%20Try%20setting%20%60justifyContent%60%20to%20%60flex-end%60.%0A%20%20%20%20%20%20%2F%2F%20Try%20setting%20%60flexDirection%60%20to%20%60row%60.%0A%20%20%20%20%20%20%3CView%20style%3D%7B%7B%0A%20%20%20%20%20%20%20%20flex%3A%201%2C%0A%20%20%20%20%20%20%20%20flexDirection%3A%20'column'%2C%0A%20%20%20%20%20%20%20%20justifyContent%3A%20'center'%2C%0A%20%20%20%20%20%20%20%20alignItems%3A%20'center'%2C%0A%20%20%20%20%20%20%7D%7D%3E%0A%20%20%20%20%20%20%20%20%3CView%20style%3D%7B%7Bwidth%3A%2050%2C%20height%3A%2050%2C%20backgroundColor%3A%20'powderblue'%7D%7D%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CView%20style%3D%7B%7Bwidth%3A%2050%2C%20height%3A%2050%2C%20backgroundColor%3A%20'skyblue'%7D%7D%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CView%20style%3D%7B%7Bwidth%3A%2050%2C%20height%3A%2050%2C%20backgroundColor%3A%20'steelblue'%7D%7D%20%2F%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20)%3B%0A%20%20%7D%0A%7D%3B%0A%0A%2F%2F%20skip%20this%20line%20if%20using%20Create%20React%20Native%20App%0AAppRegistry.registerComponent('AwesomeProject'%2C%20()%20%3D%3E%20AlignItemsBasics)%3B"></iframe>
        </Slide>
        <Slide transition={["slide"]} bgColor="tertiary" >
          <Heading size={6} textColor="primary" caps>Networking</Heading>
          <iframe width="880" height="425" frameborder="0" src="https://dabbott.github.io/react-native-web-player/#code=import%20React%2C%20%7B%20Component%20%7D%20from%20'react'%3B%0Aimport%20%7B%20AppRegistry%2C%20View%2C%20StyleSheet%2C%20Text%20%7D%20from%20'react-native'%3B%0A%0Aexport%20default%20class%20FetchBasics%20extends%20Component%20%7B%0A%20%20constructor(props)%7B%0A%20%20%20%20super(props)%3B%0A%20%20%20%20this.state%20%3D%20%7B%0A%20%20%20%20%20%20movieData%3A%20%5B%5D%0A%20%20%20%20%7D%0A%20%20%7D%0A%20%20%0A%20%20componentDidMount()%20%7B%0A%20%20%20%20return%20fetch('https%3A%2F%2Ffacebook.github.io%2Freact-native%2Fmovies.json')%0A%20%20%20%20%20%20.then((response)%20%3D%3E%20response.json())%0A%20%20%20%20%20%20.then((responseJson)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20let%20movieData%20%3D%20%5B%5D%3B%0A%20%20%20%20%20%20%20%20responseJson.movies.forEach((item%2C%20idx)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20movieData.push(%3CText%3E%20%7Bidx%7D%20%7Bitem.title%7D%20%3C%2FText%3E)%3B%0A%20%20%20%20%20%20%20%20%7D)%3B%0A%20%20%20%20%20%20%20%20this.setState(%7B%0A%20%20%20%20%20%20%20%20%20%20movieData%3A%20movieData%0A%20%20%20%20%20%20%20%20%7D)%3B%0A%20%20%20%20%20%20%7D)%0A%20%20%20%20%20%20.catch((error)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20console.error(error)%3B%0A%20%20%20%20%20%20%7D)%3B%0A%20%20%7D%0A%20%20%0A%20%20render()%20%7B%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%20%20%3CView%3E%0A%20%20%20%20%20%20%20%20%20%20%7Bthis.state.movieData%7D%0A%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20)%3B%0A%20%20%7D%0A%7D%3B%0A%0A%2F%2F%20skip%20this%20line%20if%20using%20Create%20React%20Native%20App%0AAppRegistry.registerComponent('AwesomeProject'%2C%20()%20%3D%3E%20FetchBasics)%3B"></iframe>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading fit caps lineHeight={1} textColor="secondary">
            Lehet ez még egyszerűbb?
          </Heading>
          <Heading fit caps lineHeight={1} textColor="secondary">
            Külső komponens csomagok...
          </Heading>
        </Slide>
        <Slide transition={["slide"]}>
          {/* <Heading size={4} textColor="black">
            Navigáció a képernyők között
          </Heading> */}
          <Layout>
            <Fill>
              <Image height="400px" src={images.packages}/>
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={["slide"]}>
          <Heading size={3} textColor="black">
            NativeBase
          </Heading>

          <CodePane
            lang="jsx"
            source={`
$ npm install native-base --save
`.trim()}
            margin="20px auto"
          />

          <Layout>
            <Fill>
              <Image height="400px" src={images.androidNativeBase}/>
            </Fill>
            <Fill>
              <Image height="400px" src={images.iosNativeBase}/>
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={["slide"]}>
          <Heading size={4} textColor="black">
            React Native Elements
          </Heading>

          <CodePane
            lang="jsx"
            source={`
$ npm install react-native-elements --save
`.trim()}
            margin="20px auto"
          />

          <Layout>
            <Fill>
              <Image height="400px" src={images.nativeElements}/>
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={["slide"]}>
          <Heading size={4} textColor="black">
            Navigáció a képernyők között
          </Heading>
          <Layout>
            <Fill>
              <Image height="400px" src={images.sadmeme}/>
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={["slide"]}>
          <Heading size={4} textColor="black">
            React Navigation
          </Heading>

          <CodePane
            lang="jsx"
            source={`
$ npm install --save react-navigation
`.trim()}
            margin="20px auto"
          />

          <Layout>
            <Fill>
              <p>BasicApp.js</p>
              <CodePane
                lang="jsx"
                source={`
import { StackNavigator } from 'react-navigation';

const BasicApp = StackNavigator({
  Main: {screen: MainScreen},
  Profile: {screen: ProfileScreen},
});
    `.trim()}
                margin="20px auto"
              />

              <p>MainScreen.js</p>
              <CodePane
                lang="jsx"
                source={`
class MainScreen extends React.Component {
  static navigationOptions = { title: 'Welcome' };
  render() {
    const { navigate } = this.props.navigation;
    return ( <Button onPress={() => navigate('Profile', { name: 'Jane' })} />);
  }}
    `.trim()}
                margin="20px auto"
              />
            </Fill>
            <Fill>
              <Image height="500px" src={images.reactNavIOS}/>
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={["slide"]}>
          <Heading size={4} textColor="black">
            React Native Navigation
          </Heading>

          <CodePane
            lang="jsx"
            source={`
$  npm install react-native-navigation@latest
`.trim()}
            margin="20px auto"
          />

          <Layout>
            <Fill>
              <Image height="400px" src={images.rnnWix}/>
            </Fill>
            <Fill>
              <Image height="400px" src={images.rnn}/>
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={["slide"]}>
          <Heading size={4} textColor="black">
            react-native-maps
          </Heading>

          <CodePane
            lang="jsx"
            source={`
$ npm install react-native-maps --save
`.trim()}
            margin="20px auto"
          />

          <Layout>
            <Fill>
          <CodePane
            height="400px"
            lang="jsx"
            source={`
<MapView
  initialRegion={{
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  }}
/>
`.trim()}
            margin="20px auto"
          />
            </Fill>

            <Fill>
              <Image height="400px" src={images.maps}/>
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={["slide"]} bgColor="primary">
          <Heading fit caps lineHeight={1} textColor="secondary">
            Hogyan álljunk neki ?
          </Heading>
        </Slide>
        <Slide transition={["slide"]} bgColor="primary">
          <Heading fit caps lineHeight={1} textColor="secondary">
            Create-react-native-app
          </Heading>
          <Text textColor="secondary">
            Create a React Native app on any OS with no build config.
          </Text>
          <CodePane
            lang="jsx"
            source={`
$ npm install -g create-react-native-app
$ create-react-native-app my-app
$ cd my-app/
$ npm start
`.trim()}
            margin="20px auto"
          />
        </Slide>
        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={4} textColor="black">
            Expo
          </Heading>
          <Text textColor="secondary">
            The Expo client app for Android and iOS.
          </Text>
          <Layout>
            <Fill>
              <Image height="400px" src={images.expo}/>
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={["slide"]}>
          <Heading size={4} textColor="tertiary" caps>Debugging</Heading>
          <List textColor="secondary">
            <ListItem>Live Reload</ListItem>
            <ListItem>Hot Reload</ListItem>
            <ListItem>In-app Errors and Warnings</ListItem>
            <ListItem>React Native Inspector</ListItem>
            <ListItem>Performance Monitor</ListItem>
            <ListItem>Debug Remotely - Chrome Developer Tools</ListItem>
          </List>
        </Slide>
        <Slide transition={["slide"]} bgColor="primary">
          <Heading fit caps lineHeight={1} textColor="secondary">
            Fejlesztői menü
          </Heading>
          <Layout>
            <Fill>
              <Image height="400px" src={images.developerMenu}/>
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={["slide"]} bgColor="primary">
          <Heading fit caps lineHeight={1} textColor="secondary">
            Live Reload, Hot Reload
          </Heading>
          <Layout>
            <Fill>
              <Image height="500px" src={images.hotReload}/>
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={["slide"]} bgColor="primary">
          <Heading fit caps lineHeight={1} textColor="secondary">
            In-app Errors and Warnings
          </Heading>
          <Layout>
            <Fill>
              <Image height="500px" src={images.rnError}/>
            </Fill>
            <Fill>
              <Image height="500px" src={images.rnWarning}/>
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={["slide"]} bgColor="primary">
          <Heading fit caps lineHeight={1} textColor="secondary">
            React Native Inspector
          </Heading>
          <Layout>
            <Fill>
              <Image height="500px" src={images.inspector}/>
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={["slide"]} bgColor="primary">
          <Heading fit caps lineHeight={1} textColor="secondary">
            Performance Monitor
          </Heading>
          <Layout>
            <Fill>
              <Image src={images.perfUtil}/>
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={["slide"]} bgColor="primary">
          <Heading fit caps lineHeight={1} textColor="secondary">
            Debug Remotely - Chrome Developer Tools
          </Heading>
          <Layout>
            <Fill>
              <Image height="700px" src={images.devTool}/>
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={["slide"]} bgColor="primary">
          <Heading fit caps lineHeight={1} textColor="secondary">
            Native modules
          </Heading>
          <List textColor="secondary">
            <ListItem>Hardware</ListItem>
            <ListItem>Performance</ListItem>
            <ListItem>Wrap an existing Java/iOS API</ListItem>
            <ListItem>Hybrid Native/React-Native Apps</ListItem>
          </List>
        </Slide>
        <Slide transition={["slide"]} bgColor="primary">
          <Heading fit caps lineHeight={1} textColor="secondary">
            Example: The Toast Module
          </Heading>
          <CodePane
            lang="java"
            source={`
// Extend: com.facebook.react.bridge.ReactContextBaseJavaModule
public class ToastModule extends ReactContextBaseJavaModule {

  private static final String DURATION_SHORT_KEY = "SHORT";
  private static final String DURATION_LONG_KEY = "LONG";

  public ToastModule(ReactApplicationContext reactContext) {
    super(reactContext);
  }

  // implement getName method so that we can access it through React.NativeModules.ToastExample in JavaScript.
  @Override
  public String getName() {
    return "ToastExample";
  }

  // Optional
  // very useful to key pre-defined values that need to be communicated from JavaScript to Java in sync.
  @Override
  public Map<String, Object> getConstants() {
    final Map<String, Object> constants = new HashMap<>();
    constants.put(DURATION_SHORT_KEY, Toast.LENGTH_SHORT);
    constants.put(DURATION_LONG_KEY, Toast.LENGTH_LONG);
    return constants;
  }

  @ReactMethod
  public void show(String message, int duration) {
    Toast.makeText(getReactApplicationContext(), message, duration).show();
  }
}
`.trim()}
            margin="20px auto"
          />
        </Slide>
        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={5} textColor="secondary">
            Argument Types (@ReactMethod)
          </Heading>
          <Layout>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHeaderItem>JavaScript</TableHeaderItem>
                  <TableHeaderItem>Native</TableHeaderItem>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow><TableItem>Bool</TableItem><TableItem>Boolean</TableItem></TableRow>
                <TableRow><TableItem>Number</TableItem><TableItem>Integer</TableItem></TableRow>
                <TableRow><TableItem>Number</TableItem><TableItem>Double</TableItem></TableRow>
                <TableRow><TableItem>Number</TableItem><TableItem>Float</TableItem></TableRow>
                <TableRow><TableItem>String</TableItem><TableItem>String</TableItem></TableRow>
                <TableRow><TableItem>function</TableItem><TableItem>Callback</TableItem></TableRow>
                <TableRow><TableItem>Object</TableItem><TableItem>ReadableMap</TableItem></TableRow>
                <TableRow><TableItem>Array</TableItem><TableItem>ReadableArray</TableItem></TableRow>
              </TableBody>
            </Table>
          </Layout>
        </Slide>
        <Slide transition={["slide"]} bgColor="primary">
          <Heading fit caps lineHeight={1} textColor="secondary">
            Example: Register the Module
          </Heading>
          <CodePane
            lang="java"
            source={`
public class AnExampleReactPackage implements ReactPackage {

  @Override
  public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {
    return Collections.emptyList();
  }

  @Override
  public List<NativeModule> createNativeModules( ReactApplicationContext reactContext) {
    List<NativeModule> modules = new ArrayList<>();

    modules.add(new ToastModule(reactContext));

    return modules;
  }

}
`.trim()}
            margin="20px auto"
          />
        </Slide>
        <Slide transition={["slide"]} bgColor="primary">
          <Heading fit caps lineHeight={1} textColor="secondary">
            Example: Using from JS
          </Heading>
          <CodePane
            lang="java"
            source={`
/**
 * This exposes the native ToastExample module as a JS module. This has a
 * function 'show' which takes the following parameters:
 *
 * 1. String message: A string with the text to toast
 * 2. int duration: The duration of the toast. May be ToastExample.SHORT or
 *    ToastExample.LONG
 */
import {NativeModules} from 'react-native';
module.exports = NativeModules.ToastExample;
`.trim()}
            margin="20px auto"
          />
          <CodePane
            lang="java"
            source={`
import ToastExample from './ToastExample';

ToastExample.show('Awesome', ToastExample.SHORT);
`.trim()}
            margin="20px auto"
          />
        </Slide>
        <Slide transition={["slide"]} bgColor="primary">
          <Heading fit caps lineHeight={1} textColor="secondary">
            Platform függő elemek
          </Heading>
        </Slide>
        <Slide transition={["slide"]} bgColor="primary">
          <Heading fit caps lineHeight={1} textColor="secondary">
            Platform-Specific Components
          </Heading>
          <CodePane
            lang="jsx"
            source={`
> CustomComponent.ios.js
> CustomComponent.android.js
`.trim()}
            margin="20px auto"
          />
          <CodePane
            lang="jsx"
            source={`
// Note - No extension specified
import CustomComponent from './CustomComponent';
`.trim()}
            margin="20px auto"
          />
        </Slide>
        <Slide transition={["slide"]} bgColor="primary">
          <Heading fit caps lineHeight={1} textColor="secondary">
            Platform-Specific styles
          </Heading>
          <CodePane
            lang="jsx"
            source={`
import { Platform, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  paddingTop: (Platform.OS === 'ios') ? 30 : 0,
});
`.trim()}
            margin="20px auto"
          />
        </Slide>
        <Slide transition={["slide"]} bgColor="primary">
          <Heading fit caps lineHeight={1} textColor="secondary">
            Unit tests: Jest
          </Heading>
          <List textColor="secondary">
            <ListItem>Snapshot Testing</ListItem>
            <ListItem>Zero configuration (.test.js, __tests__ )</ListItem>
            <ListItem>Built-in code coverage reports</ListItem>
          </List>
          <div className="show-case__separator" />

          <Layout>
            <Fill>
              <Image height="200px" src={images.jest}/>
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={["slide"]} bgColor="primary">
          <Heading fit caps lineHeight={1} textColor="secondary">
            End-to-end tests: Detox
          </Heading>
          <Layout>
            <Fill>
              <Image height="500px" src={images.detox}/>
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={["slide"]} bgColor="primary">
          <Heading fit caps lineHeight={1} textColor="secondary">
            Demo
          </Heading>
        </Slide>
        <Slide transition={["slide"]} bgColor="primary">
          <Heading fit caps lineHeight={1} textColor="secondary">
            Kérdések?
          </Heading>
        </Slide>
      </Deck>
    );
  }
}
