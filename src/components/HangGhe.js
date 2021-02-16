import React, { Component } from 'react';
import {connect} from 'react-redux';
import { datGhe } from '../actions';

class HangGhe extends Component {

    renderGhe = () => {
        return this.props.hangGhe.danhSachGhe.map((ghe, index) => {

            let cssGheDaDat = '';
            let disabled = false;
            // trang thai ghe da duoc dat truoc
            if(ghe.daDat===true){
                cssGheDaDat='gheDuocChon';
                disabled=true;
            }
            // trang thai ghe dang dat
            let cssGheDangDat = '';
            let indexGheDangDat = this.props.danhSachGheDangDat.findIndex(gheDangDat => gheDangDat.soGhe === ghe.soGhe);
            if(indexGheDangDat !== -1){
                cssGheDaDat = 'gheDangChon'
            }

            return <button 
                onClick={()=>this.props.datGhe(ghe)}
                disabled={disabled} 
                className={`ghe ${cssGheDaDat} ${cssGheDangDat}`} key={index}>
                {ghe.soGhe}
            </button>
        })
    }

    renderSoHang = () => {
        return this.props.hangGhe.danhSachGhe.map((hang, index)=>{
            return <span className="rowNumber">
                {hang.soGhe}
            </span>
        })}
    

    renderHangGhe = () => {
        if(this.props.soHangGhe===0){
            return <div className="ml-4">
                 {this.props.hangGhe.hang} {this.renderSoHang()}
            </div>
        }else{
            return <div>
            {this.props.hangGhe.hang} {this.renderGhe()}
        </div>
        }
        
    }
    
    render() {
        return (
            <div className="text-light text-left ml-5" style={{fontSize: '30px'}}>

                {this.renderHangGhe()}    
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        danhSachGheDangDat: state.BookingTicketReducer.danhSachGheDangDat
    }
}

const mapDispatchToProps = dispatch => {
    return {
        datGhe: (ghe) => {
            dispatch(datGhe(ghe))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HangGhe);