import React, { Component } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Image,
  ImageBackground,
  Button,
  Icon,
  TouchableNativeFeedback,
  TouchableHighlight,
  ScrollView,
  TouchableHighlightBase,
} from "react-native";
import bg from "../../assets/bg.jpg";
export default class WelcomeScreen extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar style={styles.status}></StatusBar>
        <Text style={styles.greeting}>BreakManager</Text>
        <View>
          <Text style={{ fontSize: 20, padding: "1%" }}>16:00 - 21:00</Text>
        </View>
        <View style={styles.tfs}>
          <ScrollView>
            <TimeframeCard title="lmao" at="15:00" for="5" />
            <TimeframeCard title="lmao" at="12:00" for="5" />
            <TimeframeCard title="lmao" at="16:00" for="5" />
            <TimeframeCard title="lmao" at="16:00" for="5" />
            <TimeframeCard title="lmao" at="16:00" for="5" />
            <TimeframeCard title="lmao" at="16:00" for="5" />
            <TimeframeCard title="lmao" at="16:00" for="5" />
            <TimeframeCard title="lmao" at="16:00" for="5" />
            <TimeframeCard title="lmao" at="16:00" for="5" />
            <TimeframeCard title="lmao" at="16:00" for="5" />
            <TimeframeCard title="lmao" at="16:00" for="5" />
            <TimeframeCard title="lmao" at="16:00" for="5" />
            <TimeframeCard title="lmao" at="16:00" for="5" />
            <TimeframeCard title="lmao" at="16:00" for="5" />
            <TimeframeCard title="lmao" at="16:00" for="5" />
            <TimeframeCard title="lmao" at="16:00" for="5" />
            <TimeframeCard title="lmao" at="16:10" for="5" />
            <TimeframeCard title="lmao" at="16:00" for="5" />
            <TimeframeCard title="lmao" at="16:00" for="5" />
            <TimeframeCard title="lmao" at="16:00" for="5" />
          </ScrollView>
        </View>
        <View
          style={{
            width: "40%",
            position: "absolute",
            bottom: 20,
            left: "50%",
          }}
        >
          <TouchableHighlight style={{}} onPress={() => console.log("MOK")}>
            <Text style={styles.btntime}>ADD A BREAK</Text>
          </TouchableHighlight>
        </View>
        <View
          style={{
            width: "40%",
            position: "absolute",
            bottom: 20,
            left: "10%",
          }}
        >
          <TouchableHighlight style={{}} onPress={() => console.log("MOK")}>
            <Text style={styles.btnadjust}>ADJUST TIME</Text>
          </TouchableHighlight>
        </View>
      </SafeAreaView>
    );
  }
}
let i = 0;
class TimeframeCard extends Component {
  render() {
    let a =
      new Date("1970-01-01T" + this.props.at + "Z").getHours() -
      1 +
      new Date("1970-01-01T" + this.props.at + "Z").getMinutes() / 100;
    let b = new Date().getHours() + new Date().getMinutes() / 100;
    return (
      <TouchableHighlight>
        <View style={styles.tfCard}>
          {console.log(a + " " + b)}
          <Text style={a > b ? styles.tfTitle : styles.tfTitleDone}>
            {this.props.title} time | start at {this.props.at} for{" "}
            {this.props.for} minutes
          </Text>
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ecf0f1",
    flex: 1,
    width: "100%",
    alignContent: "center",
    alignItems: "center",
  },
  status: {
    color: "#ea2c62",
  },
  greeting: {
    color: "white",
    fontSize: 40,
    padding: "5%",
    width: "100%",
    textAlign: "center",
    backgroundColor: "#ea2c62",
  },
  img: {
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
  btntime: {
    backgroundColor: "#adb36e",
    width: "100%",
    height: 70,
    textAlign: "center",
    textAlignVertical: "center",
  },
  btnadjust: {
    backgroundColor: "#ea2c62",
    width: "100%",
    height: 70,
    textAlign: "center",
    textAlignVertical: "center",
  },
  tfs: {
    width: "100%",
    height: "75%",
    padding: 10,
  },
  tfCard: {
    margin: 2.5,
    padding: 10,
  },
  tfTitle: {
    fontSize: 20,
    color: "#adb36e",
    textAlign: "center",
  },
  tfTitleDone: {
    fontSize: 20,
    color: "#ea2c62",
    textAlign: "center",
  },
});
