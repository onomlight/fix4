import React from 'react'


export default function Login() {
  return (
    <div className='max'>
        <div className="main">
                <div className="loginset">
                    <div className="logback">
                        <img src="./logo.png" alt="" />
                    </div>
                    <div className="some">
                    <h2 >로그인 페이지</h2>
                    <h3>아래 양식을 채워주세요.</h3>
                    </div>
                    <div className='inputbar'>
                        <div className="bar">
                            <div><h4>ID</h4></div>
                            
                                <input type="text"  placeholder="ID"  className="account" />
                            </div>
                        <div className="bar">
                            <div><h4>PASSWORD</h4></div>
                        
                            <input type="password"placeholder="PASSWORD" className="account" />   
                        </div>
                        <div className='bar'>
                            <button  className="account" >로그인</button>
                        </div>
                    </div>
                
                </div>
            </div>
        </div>
  )
}
