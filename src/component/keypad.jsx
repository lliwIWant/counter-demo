import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import counterStore from '../stores/counterStore'

const Keypad = () => {

    const {
        count, 
        zeroCount,
        left, 
        setLeft, 
        right, 
        setRight, 
        operation, 
        setBeforeCount, 
        setExpressionFlag, 
        clear, 
        operationResult,
        expressionFlag
    } = counterStore();
    
    const buttons = [
        ['7', '8', '9'],
        ['4', '5', '6'],
        ['1', '2', '3'],
        ['=', '0', 'AC'],
    ];

    const calculation = (btn)=>{
        console.log(operation);
        if(btn ==='='){
            if(left ==='' || right === '') return alert("Error");
            console.log(operation);
            operationResult(operation)
            clear();
            setExpressionFlag(false);
            console.log(count);
            return;
        }
        if(btn ==='AC'){
            clear();
            setExpressionFlag(false);
            if(count !== 0) zeroCount();
            return;
        }
        if(operation === ''){
            if(!expressionFlag) {
                setExpressionFlag(true);
            console.log(expressionFlag)
            }
            if (left === '' && btn === '0') return ;
            console.log(left);
            if(left.length === 5 ) return alert("5자리까지만 입력 가능합니다.");
            setLeft(btn);
            setBeforeCount(btn);
        }else{
            if(right.length === 5 ) return alert("5자리까지만 입력 가능합니다.");
            setRight(btn);
            setBeforeCount(btn);
        }
    }

  return (
    <div>
        
        {buttons.map((line, i)=>(
            <div className='numberLine' key={i}>
                {line.map((btn, j)=>(
                    <div key={j} onClick={()=>calculation(btn)}>
                        {btn=== 'B'? (<FontAwesomeIcon icon={faArrowLeft} />):(btn)}
                    </div>

                ))}
            </div>
        ))}
        
    </div>
  )
}

export default Keypad;