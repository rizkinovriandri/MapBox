import React from 'react';
import {View, StyleSheet} from 'react-native';
import MapboxGL from '@react-native-mapbox-gl/maps';

const mapboxAccessToken =
  'pk.eyJ1Ijoicml6a2lub3ZyaWFuZHJpIiwiYSI6ImNraWl0bThkOTBvd2kyenA4dTRzMzUwZGMifQ.-wiLB_TOntAl34C6yO_NSA';
MapboxGL.setAccessToken(mapboxAccessToken);

const App = () => {
  const startingPoint = [116.01816047001944, -0.5170451859804928];
  const Aceh = [96.82414215755512, 4.283969269647841];
  const Medan = [98.66124488607966,3.584936297762283];
  const Padang = [100.36016412127071,-0.9607626713013104];
  const Palembang = [104.76391382902261,-2.9850783809084476];
  const Jakarta = [106.7996288069728,-6.187434856258065];
  const Bandung = [107.56821464551263,-6.9586457884267645];
  const Surabaya = [112.73392960792944,-7.236061421131097];
  const Pontianak = [109.34289618973708,-0.008474357923745401];
  const Palangkaraya = [113.84289055434283,-2.2099002978020508];
  const Makassar = [119.43315035120793,-5.135191850047107];
  const Manado = [124.84193068336572,1.4901542714034122];
  const Lombok = [116.27551362031,-8.76065400439758];
  const Bali = [115.14561404539631,-8.383976938082114];
  const Papua = [133.68783752541822,-1.8905525939262446];
  const startDestinationPoints = [
                                    Aceh, 
                                    Medan,
                                    Padang,
                                    Palembang,
                                    Jakarta,
                                    Bandung,
                                    Surabaya,
                                    Pontianak,
                                    Palangkaraya,
                                    Makassar,
                                    Manado,
                                    Lombok,
                                    Bali,
                                    Papua
                                ];

  return (
    <View style={styles.container}>
      <MapboxGL.MapView style={styles.map}>
        <MapboxGL.Camera zoomLevel={5} centerCoordinate={startingPoint} />
        {startDestinationPoints.map((point, index) => (
          <MapboxGL.PointAnnotation
            key={`${index}-PointAnnotation`}
            id={`${index}-PointAnnotation`}
            coordinate={point}>
            <View style={styles.annotationContainer}>
              <View style={styles.annotationFill} />
            </View>
				    <MapboxGL.Callout title={point} />
          </MapboxGL.PointAnnotation>
        ))}
      </MapboxGL.MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  map: {
    flex: 1,
  },
});

export default App;
