import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Test from './test.jsx'
import { Loader} from '@react-three/drei';




const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(


    <>
    <Canvas
        // flat // color issue quand import model ? set toneMapping to Three.NoToneMapping
        shadows
        camera={{ position: [-2, 3.5, 2], fov: 15 }}
    >
        <color attach="background" args={['#101010']} />
         {/* <color attach="background" args={['#c6e5db']} /> */}
        <Test />
     
    </Canvas>
    <Loader/>
    </>
)