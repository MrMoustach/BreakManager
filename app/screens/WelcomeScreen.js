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
  TimePickerAndroid,
} from "react-native";
import { AsyncStorage } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
export default class WelcomeScreen extends Component {
  async saveshit(shit) {
    try {
      await AsyncStorage.setItem("@BreakManager:test1", shit);
      console.log(shit);
    } catch (error) {
      // Error saving data
      console.log(error);
    }
  }
  async removeshit(shit) {
    try {
      await AsyncStorage.removeItem("@BreakManager:test1");
      console.log("deleted");
    } catch (error) {
      // Error saving data
      console.log(error);
    }
  }
  async componentDidMount() {
    try {
      const value = await AsyncStorage.getItem("@BreakManager:test1");
      if (value !== null) this.setState({ data: JSON.parse(value), pick: 0 });
      this.dtps = null;
    } catch (error) {
      // Error retrieving data
      console.log(error);
    }
  }
  async getshit() {
    if (this.state != null) console.log(this.state.data);
  }
  showPicker() {
    let dtp = [
      <DateTimePicker
        testID="dateTimePicker"
        value={new Date()}
        mode={"time"}
        is24Hour={true}
        display="default"
        onChange={(event, selectedDate) => this.changeThis(selectedDate, 0)}
      />,
      <DateTimePicker
        testID="dateTimePicker"
        value={new Date()}
        mode={"time"}
        is24Hour={true}
        display="default"
        onChange={(event, selectedDate) => this.changeThis(selectedDate, 1)}
      />,
    ];
    this.dtps = dtp[0];
    this.showPicker2(1);
    this.forceUpdate();
  }
  showPicker2() {
    let dtp = [
      <DateTimePicker
        testID="dateTimePicker"
        value={new Date()}
        mode={"time"}
        is24Hour={true}
        display="default"
        onChange={(event, selectedDate) => this.changeThis(selectedDate, 0)}
      />,
      <DateTimePicker
        testID="dateTimePicker"
        value={new Date()}
        mode={"time"}
        is24Hour={true}
        display="default"
        onChange={(event, selectedDate) => this.changeThis(selectedDate, 1)}
      />,
    ];
    this.dtps = dtp[1];
  }
  changeThis(date, id) {
    if (id == 0) this.start = date;
    if (id == 1) this.end = date;
  }
  render() {
    var cards = [];
    this.start = "00:00";
    this.end = "00:00";
    if (this.state != null) {
      let i = 0;
      this.start = this.state.data.start;
      this.end = this.state.data.end;
      this.state.data.cards.forEach((element) => {
        cards.push(
          <TimeframeCard
            key={i++}
            title={element.title}
            at={element.at}
            for={element.for}
          />
        );
      });
    }
    // let data = {
    //   start: "16:00",
    //   end: "21:00",
    //   cards: [
    //     {
    //       at: "15:00",
    //       for: "5",
    //       title: "lmao",
    //     },
    //     {
    //       at: "15:00",
    //       for: "5",
    //       title: "lmao",
    //     },
    //     {
    //       at: "15:00",
    //       for: "5",
    //       title: "lmao",
    //     },
    //     {
    //       at: "15:00",
    //       for: "5",
    //       title: "lmao",
    //     },
    //   ],
    // };
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar style={styles.status}></StatusBar>
        <Text style={styles.greeting}>BreakManager</Text>
        {this.dtps}
        <View>
          <Text style={{ fontSize: 20, padding: "1%" }}>
            {this.start} - {this.end}
          </Text>
        </View>
        <View style={styles.tfs}>
          <ScrollView>{cards}</ScrollView>
        </View>
        <View
          style={{
            width: "40%",
            position: "absolute",
            bottom: 20,
            left: "50%",
          }}
        >
          <TouchableHighlight
            style={{}}
            onPress={() => this.saveshit(JSON.stringify(this.state.data))}
          >
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
          <TouchableHighlight style={{}} onPress={this.showPicker}>
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
