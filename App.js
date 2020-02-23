import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import MapboxGL from "@react-native-mapbox-gl/maps";
import { access_token } from "./mapboxToken"; //file includes Mapbox access token

MapboxGL.setAccessToken(access_token.MAPBOX_ACCESS_TOKEN); //make sure this is immediately below the imports

MapboxGL.setConnected(true); 

export default class App extends Component {
  componentDidMount() {
    MapboxGL.setTelemetryEnabled(false);
  }

  render() {
    return (
      <View style={styles.page}>
        <View style={styles.container}>
          <MapboxGL.MapView 
            style={styles.map}>
            <MapboxGL.Camera
              centerCoordinate={[-96.7500993, 32.9857619]} //UT Dallas 
              zoomLevel={14}>
            </MapboxGL.Camera>
          </MapboxGL.MapView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  container: {
    height: 425,
    width: 425,
    flex: 1,
    backgroundColor: "tomato"
  },
  map: {
    flex: 1
  }
});