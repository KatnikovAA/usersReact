import { Header } from "../components/header/header"
import { Content } from "../components/content/content"
import "./main.css"
import { useEffect , useState} from "react"
import { apiUsers } from "../api"
export const Main = () => {

    const[usersArr,setUsersArr] = useState(null)

    const timerCall = () => {
        setInterval(callApi,5000)
    }

    const callApi = () => {
        apiUsers()
        .then(response =>
            setUsersArr(response))
    }
    useEffect(()=>{
        timerCall();
    },[])
   
    return(
        <div>
            <div className="header">
                <Header></Header>
            </div>
            <div className="contentList">
                {
                   usersArr &&
                   usersArr.map((val)=>{
                        return <Content arrUsers={val} key={val.id}></Content>
                    })
                }
            </div>
        </div>
    )
}