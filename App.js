import React, {useState, useEffect} from "react";
import {DeviceEventEmitter, StyleSheet, View} from 'react-native';

const App = () => {
  
  useEffect(() => {
    const subscription = DeviceEventEmitter.addListener("keydown", handleKeyPress);
    
        return () => {
            subscription.remove();
          }
        },[])
        
        const checkCollision = () => {
          if(playerPossition.x === bugPosssition.x && playerPossition.y === bugPosssition.y) {
            alert("Hello");
          }
        };
        const handleKeyPress = (event) => {
          let x = playerPossition.x;
          let y = playerPossition.y;

        switch(event.key) {
            case 'RightArrow':
                x -= 1;
                break;
                case 38:
                  y -= 1;
                  break;
                  case 39:
                x += 1;
                break;
            case 40:
              y += 1;
              break;  
        }
        
        setPlayerPossition( {x,y} );
        checkCollision();
        
      }
    const randomPosition = () => {
        return Math.floor(Math.random() * 10);
    }

    const [playerPossition,setPlayerPossition] = useState({x:0, y:0});
  
    const [bugPosssition, setBugPossition] = useState({x: randomPosition(), y: randomPosition()});

    return (
        <View style={styles.container}>
            <View style={[styles.player, {top: playerPossition.x * 50, left: playerPossition.y * 50 } ]}></View>
            <View style={[styles.bug, {top: bugPosssition.x * 50, left: bugPosssition.y * 50 } ]}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
    },
    player: {
        position: "absolute",
        width: 50,
        height: 50,
        backgroundColor: 'red',
    },
    bug: {
        position: "absolute",
        width: 50,
        height: 50,
        backgroundColor: 'green',
    }
})

export default App