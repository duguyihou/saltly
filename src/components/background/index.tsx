import { Canvas } from '@react-three/fiber'

import Box from './Box'

function Background() {
  return (
    <div className="w-full h-full absolute bg-gray-500">
      <Canvas>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <Box position={[-3, 0, 0]} />
        <Box position={[3, 0, 0]} />
      </Canvas>
    </div>
  )
}

export default Background
