import { App, Dialog, Grid, Picker, render, Text, TextInput, Window } from 'proton-native'; // import the proton-native components
import React, { Component } from 'react'; // import from react

class Main extends Component {
  render() {
    return (
      <App>
        <Window title="MD5 Generator" size={{ w: 500, h: 500 }}>
          <Grid padded={true}>
            <Text row={0} column={0}>
              Project is setup with Typescript and React.
            </Text>
            <TextInput onChange={() => Dialog('Error', { title: "Message" })} row={0} column={1}>
              Proton does not have File Picker or Drag/Drop functionality right now.
            </TextInput>
            <Picker row={1} column={1}>
              <Picker.Item>Option 1</Picker.Item>
              <Picker.Item>Option 2</Picker.Item>
              <Picker.Item>Option 3</Picker.Item>
            </Picker>
          </Grid>
        </Window>
      </App>
    );
  }
}

render(<Main />);
