import React from "react";
import { ThreeDots } from "react-loader-spinner";
import { Html } from "@react-three/drei";
import {BounceLoader} from 'react-spinners'
const Loader = () =>{
    return (
        <Html>
            <div className="mt-10">
                <BounceLoader
                color="#804dee"
                size={30}
                cssOverride={{
                    marginTop: "80px"
                  }}
                />
            </div>
        </Html>
        
    )
}

export default Loader;