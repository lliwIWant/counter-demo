import {create} from "zustand"
// 이 폴더 장소를 state를 보관하는 장소로 정하겠다
                                        //create가 set 함수 제공
const counterStore = create((set)=>({
   // 결과 값
    count:0,
    zeroCount:()=>set(()=>({
        count:0
    })),
    left: '',
    setLeft:(btn)=>set((state)=>({
        left: state.left + btn
    })),
    right: '',
    setRight:(btn)=>set((state)=>({
        right: state.right + btn
    })),
    // 식 작성한 것 화면 보여주기
    beforeCount: "",
    setBeforeCount:(value)=>set((state) =>({
        beforeCount :  state.beforeCount + value
    })),
    /* 식 다 지우기 */
    clear:()=>set(()=>({
        beforeCount: "",
        left: '',
        right: '',
        operation: "",
    })),
    //식을 작성하면 true
    expressionFlag: false,
    setExpressionFlag:(value)=>set((state)=>({
        expressionFlag: value
    })),
    /* 연산자 */
    operation: '',
    setOperation: (value)=>set((state)=>({
        operation: value
    })),
    /* 연산 작동 */
    operationResult: (op) =>set((state)=>{
        const right = Number(state.right);
        const left = Number(state.left);
        console.log("left",left);
        console.log("right",right);
        let result  = Number(0);
        console.log(result);
        switch(op){
            case '+': result =left + right; console.log("더하기"); break;
            case '-':  result = left - right; console.log("빼기"); break;
            case '*': result = left * right; console.log("곱하기"); break;
            case '/': result = right !== 0 ? left / right : 'Error';  console.log("나누기");break;
            default: "Error";
        }
        console.log(result);

        return({count : result});
        
    }),


    // 값을 변경 시키는 함수 set()
    increase:()=>set((state)=>({
        count: state.count + 1,
    })),
    increaseBy: (value)=>set((state)=>({
        count:state.count + value,
    })),
    decrease:()=>set((state)=>({
        count: state.count - 1,
    })),
    decreaseBy: (value)=>set((state)=>({
        count:state.count - value,
    })),


}));

export default counterStore;