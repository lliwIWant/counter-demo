import { useState } from 'react'
import './App.css'
import CountBox from './component/CountBox'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';
import { faDivide } from '@fortawesome/free-solid-svg-icons';

import Keypad from './component/keypad';

// state 보관 파일 연결
import counterStore from './stores/counterStore'


function App() {
  // const [count, setCount] = useState(0)
  // App에 저장된 state이다.
  const {count, increase, increaseBy, decrease, decreaseBy, left, setBeforeCount, operation, setOperation,  expressionFlag} = counterStore()

  // 연산자 입력시
  const operationFunc = (op)=>{

    if(left === '') return alert("수를 입력해주세요");
    if(operation  !=='') return alert("이미 연산자를 입력했습니다.")
    setBeforeCount(op);
    setOperation(op);
  }
  // 식이 존재하는 경우
  const refuse = ()=>{
    if(expressionFlag){
      alert('0또는 결과 값이 존재할 때 작동됩니다.');      
      return false;
    }
  }
  
  return (
    <>
      <div className='box-area centerCol'>
        <h2 className='fontDigit'>Calculator</h2>
        
        <div className='spaceEvenly start counter-screen'>
          {/* <h2>count: {count}</h2> */}
          <CountBox />
        </div>

        <div className='spaceEvenly'>
          <button onClick={()=>{refuse(); increase()}}>+1</button>
          <button onClick={()=>{refuse();increaseBy(10)}}>+10</button>
          <button onClick={()=>{refuse();decrease();}}>-1</button>
          <button onClick={()=>{refuse();decreaseBy(10)}}>-10</button>
        </div>
        
        <div className='numberKeyArea'>
            <div className='numberLine'>
                <div onClick={()=>operationFunc('+')}><FontAwesomeIcon icon={faPlus} /></div>
                <div onClick={()=>operationFunc('-')}><FontAwesomeIcon icon={faMinus} /></div>
                <div onClick={()=>operationFunc('*')}><FontAwesomeIcon icon={faXmark} /></div>
                <div onClick={()=>operationFunc('/')}><FontAwesomeIcon icon={faDivide} /></div>
            </div>
            <Keypad/>
        </div>
        
      </div>
      {/* 자식 컴포넌트에 state 연결결 */}
    </>
  )
}

export default App
