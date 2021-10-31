import { BackgroundProps } from '@/typings'

function Background({ children }: BackgroundProps) {
  return (
    <div className="bg-gray-500 flex justify-center items-center w-screen h-screen">
      {children}
    </div>
  )
}

export default Background
