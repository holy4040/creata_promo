import axios from "axios";
import { message } from 'antd';
export const submitPromotionCode = async (values) => {
    try {
        const url = "http://127.0.0.1:8080/api/v1/promotioncode/submit/";
        var formdata = new FormData();
        formdata.append("promo_code", values.promo_code);
        formdata.append("email", values.email);
        formdata.append("first_name", values.firstname);
        formdata.append("last_name", values.lastname);
        formdata.append("phone_number", values.phone);

        var requestOptions = {
            method: 'POST',
            body: formdata,
            redirect: 'follow'
        };

        fetch(url, requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log(result);
                if (result.hasOwnProperty('success')) {
                    message.success(result['success']);
                }else if(result.hasOwnProperty('detail')){
                    message.warning(result['detail']);
                }else if(result.hasOwnProperty('error')){
                    message.error(result['error']);
                }else if(result.hasOwnProperty('phone_number')){
                    message.error(result['phone_number'][0]);
                }
            })
            .catch(error => {
                console.log('error', error);
                message.error(error);
            });

        // axios.post(url,{
        //     promo_code: data.promo_code,
        //     first_name: data.firstname,
        //     last_name:data.lastname,
        //     email:data.email,
        //     phone_number:data.phone,
        // }).then(response => {

        //     let statusCode = response.status,
        //         success = response.ok;

        //     response.json().then(response => {

        //         if(!success){
        //             //handle errors here
        //             console.log(response.message)
        //             return;
        //         }

        //         // handle successful requests here
        //         console.log(response.message)

        //     })
        // }).catch((error) => {
        //     // catch any unexpected errors
        //     console.log(error);
        // })
    } catch (error) {
        console.log(error);
    }
}