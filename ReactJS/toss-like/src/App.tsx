import { useState } from 'react'
import './App.css'
import Text from './components/shared/Text'
import Button from './components/shared/Button'


function App() {

  return (
    <>
      <div>
        <Text typography="t1" color="red">t1</Text>
        <Text typography="t2" color="blue">t2</Text>
        <Text typography="t3">t3</Text>
        <Text typography="t4">t4</Text>
        <Text typography="t5">t5</Text>
      </div>

      <div style={{ width: '100%' }}>
        <Button color="primary">클릭해주세요</Button>
        <Button color="success">클릭해주세요</Button>
        <Button color="error">클릭해주세요</Button>

        <Button color="primary" weak={true}>클릭해주세요</Button>
        <Button color="success" weak={true}>클릭해주세요</Button>
        <Button color="error" weak={true}>클릭해주세요</Button>

        <Button color="primary" full={true}>클릭해주세요</Button>
        <Button color="primary" full={true} disabled={true}>클릭해주세요</Button>
      </div>
    </>
  )
}

export default App
