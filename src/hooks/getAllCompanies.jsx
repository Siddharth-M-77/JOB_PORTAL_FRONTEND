import { setCompanies} from '@/redux/companySlice'
import { COMPANY_API_END_POINT} from '@/utils/constant'
import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const getAllCompanies = () => {
    const dispatch = useDispatch()
    useEffect(()=>{
    const fetchCompanies = async()=>{
        try {
            const response = await axios.get(`COMPANY_API_END_POINT`/get,
                {withCredentials:true}
            );
            if(response.data.message){
                dispatch(setCompanies(res.data))
                console.log(response.data.companies)
                
            }
            
        } catch (error) {
            
        }
    }
    fetchCompanies();
    })

  return (
    <div>
      
    </div>
  )
}

export default getAllCompanies
