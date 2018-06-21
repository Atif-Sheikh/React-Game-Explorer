import ActionTypes from '../constant/constant';
import history from '../../History';
// import axios from 'axios';

export function submitDate(maxDate, minDate){
    return dispatch => {
        // console.log(maxDate.getFullYear(), minDate.getFullYear());
        // console.log(`${minDate.getFullYear()}-${minDate.getMonth()+1}-${minDate.getDate()}`);        
        // console.log(`${maxDate.getFullYear()}-${maxDate.getMonth()+1}-${maxDate.getDate()}`);
        const URL = 'https://www.giantbomb.com/api/games/?api_key=5426a188f2c999f9efca435f1fd83c36895b040d&format=json&filter=original_release_date:2017-02-17|2018-02-17&field_list=name,image,original_release_date,site_detail_url';
        console.log(URL);
        // fetch(URL, {
        //     method: 'GET',
        // })
        // .then(resp => {
        //     console.log('resp', resp);
        // })
        // let minDate = `${minDate.getFullYear()}-${minDate.getMonth()+1}-${minDate.getDate()}`;
        // let maxDate = `${maxDate.getFullYear()}-${maxDate.getMonth()+1}-${maxDate.getDate()}`;
        fetch(`https://www.giantbomb.com/api/games/?api_key=5426a188f2c999f9efca435f1fd83c36895b040d&format=json&filter=original_release_date:2017-02-17|2018-02-17&field_list=name,image,original_release_date,site_detail_url`)
            .then((result) => {
                console.log(result);
            });
        // fetch('https://www.giantbomb.com/api/games/?api_key=5426a188f2c999f9efca435f1fd83c36895b040d&format=json&filter=original_release_date:2017-02-17|2018-02-17&field_list=name,image,original_release_date,site_detail_url', {
        //     method: 'GET',
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json',
        //     },
        //     // body: JSON.stringify()
        //     })
        //     .then(function(resp){
        //         // your response
        //         console.log(resp);
        //     })
    //     axios.get(`https://www.giantbomb.com/api/games/?api_key=5426a188f2c999f9efca435f1fd83c36895b040d&format=json&filter=original_release_date:2017-02-17|2018-02-17&field_list=name,image,original_release_date,site_detail_url`)
    //         .then((resp) => {
    //             console.log(resp);
    //         })
    };
};
