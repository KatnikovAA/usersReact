import { Header } from "../components/header/header"
import { Content } from "../components/content/content"
import "./main.css"
import { useEffect , useState} from "react"
import { apiUsers } from "../api"
export const Main = () => {

    const[usersArr,setUsersArr] = useState(null)

    useEffect(()=>{
        apiUsers()
        .then(response =>
            setUsersArr(response))
    },[])


    return(
        <div>
            <div className="header">
                <Header></Header>
            </div>
            <div className="contentList">
                {
                    
                   usersArr ?
                   usersArr.map((val)=>{
                    console.log(val)
                    return <Content arrUsers={val} key={val.id}></Content>
                })  : <></>
                
                }

            </div>
        </div>
    )
}