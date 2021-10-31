import { useFrame } from '@react-three/fiber'
import { useRef, useState } from 'react'

function Box({ position }: { position: [x: number, y: number, z: number] }) {
  const ref = useRef<any>()
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  useFrame(() => {
    if (ref.current !== undefined) ref.current.rotation.x += 0.01
  })
  return (
    <mesh
      position={position}
      ref={ref}
      scale={active ? 1.5 : 1}
      onClick={() => setActive(!active)}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'purple' : 'orange'} />
    </mesh>
  )
}

export default Box
