import { Link } from "react-router-dom"

function Main({change}){
    return(
        <div className='main_btn_resume'>
            <Link to='/resume'><button className='btn_resume'>{change}</button></Link>
        </div>
    )
}

export default Main