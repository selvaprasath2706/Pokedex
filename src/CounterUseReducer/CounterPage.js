
import React, { useReducer, useRef, useEffect } from "react"
import { Text, TouchableOpacity, View } from "react-native"
let interval = null;
const CounterPage = () => {
    const initialState = { count: 0, timer: false }
    function reducer(state, action) {
        switch (action.type) {
            case "INCREMENT_COUNT":
                return { ...state, count: state.count + 10 }
            case "DECREMENT_COUNT":
                if (state.count - 10 < 0)
                    return { ...state, count: 0 }
                return { ...state, count: state.count - 10 }
            case "RESET_TIMER":
                return { ...state, count: 0 }
            case "START_TIMER":
                return { ...state, timer: true }
            case "STOP_TIMER":
                return { ...state, timer: false }
            case "INCREMENT_COUNT_DEFAULT":
                return { ...state, count: state.count + 1 }
            default:
                return state
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState)
    console.log("state val",state)
    if (state.timer) {
        if (interval) {
            console.log("ccu", interval, "state timer", state.timer, "state count", state.count)
            clearInterval(interval)
        }
        interval = setInterval(() => dispatch({ type: "INCREMENT_COUNT_DEFAULT" }), 1000)
        console.log("outer", interval, "state timer", state.timer, "state count", state.count)

    }
    else{
        if (interval) {
            console.log("ccu", interval, "state timer", state.timer, "state count", state.count)
            clearInterval(interval)
        }
    }

    return (
        <View>
            <View style={{margin:10}}>
                <Text style={{ alignSelf: "center" }}>Count {state.count}</Text>
                {/* <Text style={{ alignSelf: "center" }}>Timer {state.timer}</Text> */}
                <View style={{ flexDirection: "row", justifyContent: "space-around",marginTop:15 }}>
                    <TouchableOpacity onPress={() => dispatch({ type: 'INCREMENT_COUNT' })}><Text>Add</Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => dispatch({ type: 'DECREMENT_COUNT' })}><Text>Sub</Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => dispatch({ type: 'START_TIMER' })}><Text>Start</Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => dispatch({ type: 'STOP_TIMER' })}><Text>Stop</Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => dispatch({ type: 'RESET_TIMER' })}><Text>Reset</Text></TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
export default CounterPage








// const CounterPage = () => {

//     // useEffect(() => {
//     //     console.log("mount")

//     //     return () => {
//     //         console.log("unmount")
//     //     }
//     // }, [])

//     // const interval = useRef(null);
//     const initialState = { count: 0, timer: 5000 }
//     function reducer(state, action) {
//         switch (action.type) {
//             case "INCREMENT_TIMER":
//                 return { ...state, timer: state.timer + 1000 }
//             case "DECREMENT_TIMER":
//                 if (state.timer - 10 < 0)
//                     return { ...state, timer: 0 }
//                 return { ...state, timer: state.timer - 1000 }
//             case "INCREMENT_COUNT":
//                 return { ...state, count: state.count + 1 }
//             default:
//                 return state
//         }
//     }

//     const [state, dispatch] = useReducer(reducer, initialState)
//     // if (interval?.current) {
//     //     console.log("ccu", interval.current, "state timer", state.timer, "state count", state.count)
//     //     clearInterval(interval.current)
//     // }
//     // console.log("outer", interval.current, "state timer", state.timer, "state count", state.count)
//     // interval.current = setInterval(() => dispatch({ type: "INCREMENT_COUNT" }), state.timer)

//     if (interval) {
//         console.log("ccu", interval, "state timer", state.timer, "state count", state.count)
//         clearInterval(interval)
//     }
//     interval = setInterval(() => dispatch({ type: "INCREMENT_COUNT" }), state.timer)
//     console.log("outer", interval, "state timer", state.timer, "state count", state.count)


//     return (
//         <View>
//             <View>
//                 <Text style={{ alignSelf: "center" }}>Count {state.count}</Text>
//                 <Text style={{ alignSelf: "center" }}>Timer {state.timer}</Text>
//                 <View style={{flexDirection:"row",justifyContent:"space-around"}}>
//                     <TouchableOpacity onPress={() => dispatch({ type: 'INCREMENT_TIMER' })}><Text>Add</Text></TouchableOpacity>
//                     <TouchableOpacity onPress={() => dispatch({ type: 'DECREMENT_TIMER' })}><Text>Sub</Text></TouchableOpacity>
//                 </View>
//             </View>
//         </View>
//     )
// }
// export default CounterPage
