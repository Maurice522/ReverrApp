import React,{useContext, useState} from "react";
import AgoraUiKit from 'agora-rn-uikit';
import CallEnded from "./callEnded";
import {useNavigation} from '@react-navigation/native';
import { UserContext } from "../../App";
import firestore from '@react-native-firebase/firestore';

export const VideoCall = (props)=>{
    const navigation = useNavigation();
    const token = props.route.params.token;
    const userData = props.route.params.userData;
    const {state,dispatch} = useContext(UserContext);

    const meetingEnded = async ()=>{

        const data={
            meeting:{
                channelName:"",
                host:""
            }
        }

        await firestore().collection("Users").doc(state.email).update(data)
        await firestore().collection("Users").doc(userData.email).update(data)

        dispatch({type:"MEETING",payload:data})

        navigation.goBack();
        setvc(false);
    }

    console.log("vc ka token "+token)
    const [vc,setvc] = useState(true)
    return vc?(
        <AgoraUiKit
            rtcProps={{
                appId:'904538e9e76546c49aabef629237f0fd',
                channel:'demo',
                token:token
            }}
            callbacks = {{EndCall:()=>meetingEnded()}}
        />    
    ):<CallEnded/>
};
