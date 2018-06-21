import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { submitDate } from '../store/action/action';
import DatePicker from 'material-ui/DatePicker';
// import moment, { max } from 'moment';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';

class Home extends Component {
    constructor(props) {
        super(props);

        const minDate = new Date();
        const maxDate = new Date();
        
        minDate.setFullYear(minDate.getFullYear() - 1);
        minDate.setHours(0, 0, 0, 0);
        this.state = {
          minDate: minDate,
          maxDate: minDate,
        };
    };
    componentWillMount(){
        fetch('//www.giantbomb.com/api/games/?api_key=5426a188f2c999f9efca435f1fd83c36895b040d&format=json&filter=original_release_date:2017-02-17|2018-02-17&field_list=name,image,original_release_date,site_detail_url')
            .then((res) => {
                return res.json();
            })
            .then((res) => {
                console.log(res.results)
            })
    };
    handleChangeMinDate = (event, date) => {
        this.setState({
          minDate: date,
        });
        console.log(date.getFullYear(), date.getMonth(), date.getDate());
    };
    handleChangeMaxDate = (event, date) => {
        this.setState({
          maxDate: date,
        });
        console.log(date.getFullYear(), date.getMonth(), date.getDate());
    };
    submitForm = (e) => {
        e.preventDefault();
        const {maxDate, minDate} = this.state;
        // if(maxDate.getFullYear() > minDate.getFullYear() || maxDate.getMonth() > minDate.getMonth() || maxDate.getDate() >= minDate.getDate()){
        if(maxDate >= minDate){   
            alert('please enter correct date')
        }else{
            this.props.submitDate(minDate, maxDate);
        };
    };
    render() {
        return (
            <div >
                <AppBar
                    title="React Games Explorer"
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                />
                <Paper style={styles.paper} zDepth={3}>
                    <DatePicker
                        onChange={this.handleChangeMaxDate}
                        autoOk={true}
                        floatingLabelText="Starting Date"
                        defaultDate={this.state.minDate}
                        // formatDate={(date) => moment(date).format('YYYY-MM-DD')}                    
                    />
                        <br />
                    <DatePicker
                        onChange={this.handleChangeMinDate}
                        autoOk={true}
                        floatingLabelText="Ending Date"
                        defaultDate={this.state.minDate}
                        // formatDate={(date) => moment(date).format('YYYY-MM-DD')}                    
                    />
                        <br />                
                    <RaisedButton label="Search" onClick={this.submitForm} primary={true} style={styles.button} />
                </Paper>
            </div>
        )
    }
}

function mapStateToProp(state){
    return({
        // userName: state.root.userName
    })
};
function mapDispatchToProp(dispatch){
    return({
        // changeUserName: ()=>{dispatch(changeUserName())}
        submitDate: (minDate, maxDate) => { dispatch(submitDate(minDate, maxDate)) }
    })
};
const styles = {
    button: {
        width: '20%'
    },
    paper: {
        height: '250px',
        width: '30%',
        margin: '0 auto',
        marginLeft: '30%',
        textAlign: 'center',
        display: 'inline-block',
        borderRadius: '5px',
    },
};

export default connect(mapStateToProp,mapDispatchToProp)(Home);

