import React , {  useRef, useState, useEffect} from "react";


// import {getData} from "../../service/fetcher";
// import { encrypt } from '../../public/data/data.json'

import axios from 'axios';
import { useNavigate } from "react-router-dom";

//redux로 json 파서 토큰처리
// import { useDispatch } from "react-redux";
// import { loginUser } from '../redux/authSlice'

export default function Login() {
    // const { setAuth } = useContext(AuthContext);
    const [Id, setID] = useState("");
    const [Password, setPassword] = useState("");
    const navigate = useNavigate()
    const [errMsg, setErrMsg] = useState('');
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
// json 가져오기 시도1 
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

    //암호화 시도 라인
    //   const dispatch = useDispatch()
  

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            //서버가 없을땐 post, get으로 json 받기 / 링크 수정만하면됨
            const response = await axios.get(
                // 엑세스 토큰 
                'data/data.json',
                JSON.stringify({ Id, Password }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
                
            );
            // 일치여부 확인 콘솔확인
            // console.log(JSON.stringify(response?.data));
                const user = response.data.users.find((user)=>{
                    // console.log(user)
                    // console.log(Id,Password)
                    return (user.id===Id && user.password===Password)
                    
                })
                if(!user)throw new Error('일치하는 유저가 없음')

                // 맞으면 list로 위치 이동완료 
                navigate('/List')
                setErrMsg('')
            //console.log(JSON.stringify(response));
                 //서버가 없어서 만든 후 서버 실행
            // const accessToken = response?.data?.accessToken;
            // const roles = response?.data?.roles;
            // setAuth({ Id, Password , name : user.name });
        
            // setID('');
            // setPassword('');
           

        } catch (err) {
            
            setErrMsg(err.message)
           
            errRef.current.focus();
            
        }
        
    }
    // dispatch(loginUser({Id,Password}))
    const secretKey = process.env.REACT_APP_AES_SECRETKEY

// //암호화
//  const encrypt = ( ) => {
//     let text =  toString();
//     const data = {
//         id:text
//     };
//     const encrypted = CryptoJS.AES.encrypt(JSON.stringify(data), secretKey);
//     let result = encrypted.toString()
//     return encodeURIComponent(result)
// } 



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
                        {/* 에러메세지 확인 */}
                        <div className="" ref={errRef}>
                            
                        {errMsg}
                        </div>
                        <div className='bar'>
                            <button  className="account" 
                            // onClick={()=>{navigate('/List')}}
                            >로그인</button>
                        </div>
                    </div>
                    </form>
                </div>
            </div>
        </div>
  )
  
}
