import {useState} from "react";
import './todoList.css'

let globalId=2;

const Todolist = (props)=>{
    const date = new Date();
    const today= (date.getMonth()+1)+"월"+(date.getDate())+"일";
    const [lists, setLists] = useState([
        {
            id:1,
            date:(date.getMonth()+1)+"월"+(date.getDate()-1)+"일",
            todo:"첫번째 할일",
            checked:true
        }
    ]);
    const [inputTodo, setInputTodo] = useState("");
    const [isCheck, setCheck]=useState(true);
    
    const deleteList=(id)=>{
        const newLists = lists.filter(
            (l)=>l.id !== id
        )
        setLists(newLists);
    }
    const inputChange = (e)=>{
        setInputTodo(e.target.value)
    };
    const addList =()=>{
        // 값을 받아와서 새로운 배열로 만들어준다.
        // 새로운 배열을 students에 할당
        const newLists = lists.concat(
            {
                id:globalId,
                date : today,
                todo : inputTodo
            }
        );
        globalId++;
        setLists(newLists);
        // reset
        setInputTodo("");
    }
    return (
        <div class="all-background">
            <h1>Todo-list</h1>
            <div class="input-form">
                <input type="text" 
                        onChange={inputChange}
                        value={inputTodo}
                        class="todo-input"
                />
                <button
                    onClick={addList}
                >
                    add
                </button>
            </div>
            <hr />
            
            <button class="todo-btn" onClick={()=>{
                setCheck((e)=>!e);
            }}>
                {isCheck ? "All" : "Today"}
            </button>
            <ul>
                {
                    isCheck && (
                        lists.map((list)=>
                        <li key={list.id}
                        className={list.checked ? "on" : ""}
                        >
                            <h3>{list.date}</h3>
                            <input type="checkbox"
                                readOnly
                                checked={list.checked}
                                onClick={()=>{
                                    const newLists=lists.map((l)=>{
                                        if(list.id !== l.id){
                                            return l;
                                        } else {
                                            return {...l, checked: !l.checked }
                                        }
                                    })
                                    setLists(newLists);

                                }}
                            
                            />
                            {list.todo}
                            <button
                                onClick={()=>deleteList(list.id)}
                            >x</button>

                        </li>
                        )
                    )
                    
                }
                {/** 오늘 할일만 출력 */}
                {/** 삼항연산자에 조건문을 두개이상 할 시, 조건문마다 소괄호를 해야한다.
                 * 안 그러면 모든 연산자의 우선순위가 평등하기 때문에 조건문이 나눠서 실행되지않고
                 * 동등하게 실행되서 뒤의 조건문이 덮어씌워져버린다.
                 */}
                {
                    !isCheck && (
                        lists.map((list)=>
                        <li key={list.id}
                        className={(list.checked ? "on" : "") + (list.date !== today ? " not-today" : "")}
                        >
                            <h3>{list.date}</h3>
                            <input type="checkbox"
                                readOnly
                                checked={list.checked}
                                onClick={()=>{
                                    const newLists=lists.map((l)=>{
                                        if(list.id !== l.id){
                                            return l;
                                        } else {
                                            return {...l, checked: !l.checked }
                                        }
                                    })
                                    setLists(newLists);

                                }}
                            
                            />
                            {list.todo}
                            <button
                                onClick={()=>deleteList(list.id)}
                            >
                                x
                            </button>

                        </li>
                        )
                    )
                    
                }
            </ul>
        </div>
    )
}

export default Todolist;