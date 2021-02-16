import React, { Component } from 'react';
import './BookingTicket.css';
import ThongTinSoGhe from './ThongTinSoGhe';
import danhSachGheData from '../data/danhSachGhe.json';
import HangGhe from './HangGhe';

export default class BookingTicket extends Component {

    renderHangGhe = () => {
        return danhSachGheData.map((hangGhe, index) => {
            return(
                <div key={index}>
                    <HangGhe hangGhe={hangGhe} soHangGhe={index}/>
                </div>
            );
        })
    }

    render() {
        return (
            <div className="bookingMovie" style={{width: '100%', height: '100%', position: 'fixed', backgroundImage:"url('./images/bgmovie.jpg')", backgroundSize: '100%'}}>
                <div style={{width: '100%', height: '100%', position: 'fixed', backgroundColor:'rgba(0,0,0,0.7)'}}></div>   
                <div className="container">
                {/* row bat buoc nam trong container, k thi noi dung bai se tu co thanh scroll ngang */}
                    <div className="row"> 
                        <div className="col-8 text-center">
                            <div style={{fontSize: '35px'}} className="text-warning mt-0">ĐẶT VÉ TẠI CYBERLEARN.VN</div>
                            <div className="my-0 text-white" style={{fontSize: '25px'}}>Màn hình chính</div>
                            <div className="mt-0" style={{display: 'flex', justifyContent:'center', alignItems: 'center', flexDirection: 'column'}}>
                                <div className="screen"></div>
                                
                            </div>
                            {this.renderHangGhe()}
                        </div>

                        <div className="col-4 text-center">
                        <div style={{fontSize: '28px'}} className="text-warning mt-4">DANH SÁCH GHẾ ĐÃ CHỌN</div>
                            <ThongTinSoGhe />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
