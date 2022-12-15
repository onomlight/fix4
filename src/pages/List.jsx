import React, { useState } from 'react';
import TodoBoard from '../components/TodoBoard';


export default function List() {
    const [inputValue,setInputValue] = useState ('')
    const [todoList,setTodoList] = useState([])
    const addItem =() => {
        console.log("hellooooo!",inputValue)
        setTodoList([...todoList,inputValue])
    }
  return (
    <div className='max'>
        <div className="main">
                <div className="loginset">
                    <div className="logback-list">
                        <img src="./logo.png" alt="" />
                        <span>김스타</span>
                    </div>                    
                    <div className='inputbar-list'>
                        <div className="textfiled">
                            <div>
                                <div className='filedwarp'>
                                    <h4>김스타</h4>
                                    <div className='textwarp'>
                                        <p> 스타법무 법인에 오신것을 환영합니다!</p>
                                    </div>    
                                </div>
                                <div className='filedwarp'>
                                    <h4>김스타</h4>
                                    <div className='textwarp'>
                                        <p> 안녕하세요. 저는 김스타입니다.</p>
                                    </div>
                                </div>
                            </div>

                            
                               
                            <TodoBoard todoList={todoList}/>
                            </div>
                    </div>
                        <div className='bar-list'>
                            <input 
                            value={inputValue}
                            type="text"
                            placeholder="오늘은 어떤 일이 있었나요?" 
                            className="account-list" 
                            onChange={(event)=>setInputValue(event.target.value)} 
                            />   <span>|</span>
                            <button  className="list-btn" onClick={addItem}>전송</button>
                        </div>
                    
                
                </div>
            </div>
        </div>
  )
}
