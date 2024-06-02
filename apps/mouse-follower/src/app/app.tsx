import { useEffect, useState } from 'react'

export function App() {
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const onMouseMove = ({ clientX, clientY }: MouseEvent) => {
      setPosition({ x: clientX, y: clientY })
    }

    if (enabled) {
      window.addEventListener('mousemove', onMouseMove)
    }

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
    }
  }, [enabled])

  useEffect(() => {
    document.body.classList.toggle('no-cursor', enabled)

    return () => {
      document.body.classList.remove('no-cursor')
    }
  }, [enabled])

  return (
    <main>
      <div
        style={{
          position: 'absolute',
          backgroundColor: '#09f',
          border: '1px solid #099',
          borderRadius: '50%',
          opacity: 0.8,
          pointerEvents: 'none',
          left: -25,
          top: -25,
          width: 50,
          height: 50,
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      ></div>
      <h3>Mouse follower</h3>
      <button onClick={() => setEnabled(!enabled)}>{enabled ? 'Deactivate' : 'Activate'}</button>
    </main>
  )
}

export default App
