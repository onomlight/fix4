// import { useEffect, useState } from "react";
import React , {  useRef, useState, useEffect, useContext} from "react";
// import {getData} from "../../service/fetcher";
import AuthContext from "../context/AuthProvider";

import axios from 'axios';

export default function Login() {
    const { setAuth } = useContext(AuthContext);
    const [Id, setID] = useState("");
    const [Password, setPassword] = useState("");
    // const [errMsg, setErrMsg] = useState('');
    const errRef = useRef();
    useEffect(() => {
        // setErrMsg('');
    }, [Id, Password])
    const onIdHandler = (event) =>{
        setID(event.currentTarget.value);
    }
    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value);
    }
//     const onSubmitHandler = (event) => {
//         // 버튼만 누르면 리로드 되는것을 막아줌
//         event.preventDefault();

//         console.log('Id', Id);
//         console.log('Password', Password);
        
//         // let body = {
//         //     id: Id,
//         //     password: Password,
//         // }
        
       
//     }
//       axios.get('data/data.json')
//   .then((Response)=>{console.log(Response.data)})
//   .catch((Error)=>{console.log(Error)})

  
    // useEffect(() => {
    //     getData().then((data) => {
    //         setID(
    //         data.data.Id.find((Id) => Id.id === parseInt(Id))
            
    //       );
    //       console.log(Id);
    //     });
    //   }, [Id.id]);


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.get('data/data.json',
                JSON.stringify({ Id, Password }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
            console.log(JSON.stringify(response?.data));
            //console.log(JSON.stringify(response));
            const accessToken = response?.data?.accessToken;
            const roles = response?.data?.roles;
            setAuth({ Id, Password, roles, accessToken });
            setID('');
            setPassword('');
            
        } catch (err) {
            // if (!err?.response) {
            //     setErrMsg('No Server Response');
            // } else if (err.response?.status === 400) {
            //     setErrMsg('Missing Username or Password');
            // } else if (err.response?.status === 401) {
            //     setErrMsg('Unauthorized');
            // } else {
            //     setErrMsg('Login Failed');
            // }
            errRef.current.focus();
        }
    }
  return (
    <div className='max'>
        <div className="main">
                <div className="loginset">
                    <form action="" onSubmit={handleSubmit}>
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
                            
                                <input type="text"  placeholder="ID"  className="account"
                                    value={Id} onChange={onIdHandler}
                                />
                            </div>
                        <div className="bar">
                            <div><h4>PASSWORD</h4></div>
                        
                            <input type="password"placeholder="PASSWORD" className="account" 
                                value={Password} onChange={onPasswordHandler}
                            />   
                        </div>
                        <div className='bar'>
                            <button  className="account" >로그인</button>
                        </div>
                    </div>
                    </form>
                </div>
            </div>
        </div>
  )
}
