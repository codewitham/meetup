'use client';
import React from 'react'
import { getSingleWebinar } from '@/lib/actions/webinar.actions';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

const Room = ({ room, user }: { room: Webinar, user: User }) => {

    function randomID(len: number) {
        let result = '';
        if (result) return result;
        var chars = '12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP',
            maxPos = chars.length,
            i;
        len = len || 5;
        for (i = 0; i < len; i++) {
            result += chars.charAt(Math.floor(Math.random() * maxPos));
        }
        return result;
    }


    const myMeeting = async (element: any) => {

        // generate Kit Token
        const appID = 2051687189;
        // app sign = bb58b02b55b9b8337fb8798cfa64db2f0850278254cd605cefe87e101e23be37
        // calllback = bb58b02b55b9b8337fb8798cfa64db2f

        // wss://webliveroom2051687189-api.coolzcloud.com/ws
        // wss://webliveroom2051687189-api-bak.coolzcloud.com/ws

        const serverSecret = "898dc209bd9c99ffc7f48e32eecb627a";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, room.id, randomID(5), user.name || "");

        // Create instance object from Kit Token.
        const zp = ZegoUIKitPrebuilt.create(kitToken);
        // start the call
        zp.joinRoom({
            container: element,
            maxUsers: room.maxPersons,
            sharedLinks: [
                {
                    name: 'Personal link',
                    url:
                        window.location.protocol + '//' +
                        window.location.host + window.location.pathname +
                        '?roomID=' +
                        room.id,
                },
            ],
            scenario: {
                mode: ZegoUIKitPrebuilt.VideoConference,

            },
            preJoinViewConfig: {
                title: room.title,
            },
            turnOnMicrophoneWhenJoining: room.organizerId === user.id ? true : false,
            turnOnCameraWhenJoining: room.organizerId === user.id ? true : false,

        });
    };


    return (
        <div
            className="myCallContainer"
            ref={myMeeting}
            style={{ width: '100vw', height: '100vh' }}
        ></div>
    )
}

export default Room