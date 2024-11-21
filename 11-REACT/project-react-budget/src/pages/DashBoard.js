import {userLoaderData} from 'react-router-dom'
import { fetchData } from '../helpers'


export function dashboardLoader() {
    const userName = fetchData('userName')
    return  {userName}
}


const Dashboard = () => {
    const {userName} = dashboardLoader()

    return (
        <div className='dashoard'>
            <h2>Welcome {userName}</h2>  
        </div>
      );
}
 
export default Dashboard;

