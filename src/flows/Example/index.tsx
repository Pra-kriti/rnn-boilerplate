import * as React from 'react'
import { StyleSheet, Text, View, Button, ScrollView, Share } from 'react-native'
import { Navigation, Options } from 'react-native-navigation'
import { publicRoute } from 'navigation/public/routes'

interface Props {
  componentId: string
}

export class Example extends React.Component<Props> {
  static options(): Options {
    return {
      topBar: {
        noBorder: false,
        title: { text: 'Example 1' },
        largeTitle: { visible: true },
      },
    }
  }

  render() {
    return (
      <ScrollView contentContainerStyle={{ flex: 1 }}>
        <View style={styles.container}>
          <Text style={styles.welcome}>Share API crash repo</Text>
          <Button
            title="Share"
            onPress={() => {
              Share.share({
                title: 'Share Title',
                message: 'Share Message',
                url: 'https://www.google.com.au'
              })
            }}
          />
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
})
