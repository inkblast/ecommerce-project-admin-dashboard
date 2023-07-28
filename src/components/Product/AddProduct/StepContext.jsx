import React,{useState}from 'react'
import Addproduct from './Addproduct';
import axios from 'axios';


export const multiStepContext = React.createContext();

export default function StepContext() {
    const [currentStep, setStep] = useState(1);
    const [userData, setUserData] = useState([]);
    const [finalData, setFinalData] = useState([]);

    const submitData = async () => {
        let formField = new FormData()
        formField.append('category_id', userData['cid'])
        formField.append('name', userData['pname'])
        formField.append('description', userData['pdes'])
        formField.append('quantity', userData['qty'])
        formField.append('price', userData['price'])
        formField.append('sku', userData['sku'])
        formField.append('image', userData['photo'])
        
        await axios({
            method: 'post',
            url: 'http://localhost:8000/products/padd/',
            data: formField
        }).then((response)=>{
            console.log(response.data);
            location.reload();
        })
    }
    
  return (
    <div>
        <multiStepContext.Provider value={{currentStep, setStep, userData, setUserData, finalData, setFinalData, submitData}}>
          <Addproduct />
        </multiStepContext.Provider>
    </div>
  )
}
