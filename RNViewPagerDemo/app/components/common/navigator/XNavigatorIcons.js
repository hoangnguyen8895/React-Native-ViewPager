/**
 * Created by tangzhibin on 16/3/21.
 */
"use strict";
import React from "react";
import { StyleSheet, Image } from "react-native";
import { ImagePropTypes } from "deprecated-react-native-prop-types";

export class BackIcon extends React.Component {
  static propTypes = ImagePropTypes;

  render() {
    return (
      <Image
        style={[styles.backIcon, this.props.style]}
        source={require("./imgs/ic_back.png")}
        resizeMode={"contain"}
      />
    );
  }
}

const styles = StyleSheet.create({
  backIcon: {
    width: 10,
    height: 18,
  },
});
