import React, { useEffect, useRef, useState } from 'react'
import SimplePeer from 'simple-peer';

const VideoStream = () => {
    const [stream, setStream] = useState(null);
    const [peer, setPeer] = useState(null);
    const localVideoRef = useRef();
    const remoteVideoRef = useRef();

    useEffect(() => {
        navigator.mediaDevices
        .getUserMedia({ video: true, audio: true})
        .then((stream) => {
            setStream(stream);
            localVideoRef.current.srcObject = stream;
        })
        .catch(console.error);
    }, []);

    const createPeerConnection = () => {
        const peerInstance = new SimplePeer({
            initiator: true,
            trickle: false,
            stream: stream,
        });

        peerInstance.on("signal", (data) => {
            console.log("SIGNAL:", data);
        });

        peerInstance.on("stream", (remoteStream) => {
            remoteVideoRef.current.srcObject = remoteStream;
        });

        setPeer(peerInstance);
    };

  return (
    <div className='flex flex-col items-center justify-center space-y-4'>
        <video ref={localVideoRef} autoPlay muted className='w-1/2 rounded-md' />
        <video ref={remoteVideoRef} autoPlay className='w-1/2 rounded-md' />
        <button
        onClick={createPeerConnection}
        className='px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700'
        >
            Start Call
        </button>
    </div>
  );
};

export default VideoStream;