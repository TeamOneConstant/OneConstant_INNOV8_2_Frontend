import React from 'react'
import { useParams } from 'react-router-dom'
import {ZegoUIKitPrebuilt} from "@zegocloud/zego-uikit-prebuilt"

function RoomPage() {
    const{roomId} = useParams();
    const mymeeting = async(element)=>{
        const appID=1934878834;
        const serverSecret="69d84b37c78b650205706c0b2562398a";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
            appID,
            serverSecret,
            roomId,
            Date.now().toString(),
            "Akash Dange"
        );

        const zc = ZegoUIKitPrebuilt.create(kitToken);
        zc.joinRoom(
            {
                container:element,
                scenario:{
                    mode:ZegoUIKitPrebuilt.oneONoneCall,
                },
                showScreenSharingButton:false,
            }
        );

    }
  return (
    <div>
        <div ref={mymeeting} />
    </div>
  )
}

export default RoomPage