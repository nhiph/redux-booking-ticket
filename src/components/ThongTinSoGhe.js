import React, { Component } from 'react';
import {connect} from 'react-redux';

class ThongTinSoGhe extends Component {
    render() {
        return (
            <div>
                <div className="mt-4">
                    <button className="gheDuocChon mr-3"></button>
                    <span className="text-light" style={{ fontSize: '20px' }}>ghế đã đặt</span>
                    <br />
                    <button className="gheDangChon mr-3"></button>
                    <span className="text-light" style={{ fontSize: '20px' }}>ghế đang đặt</span>
                    <br />
                    <button className="ghe mr-3"></button>
                    <span className="text-light" style={{ fontSize: '20px' }}>ghế chưa đặt</span>
                    <br />
                </div>

                <div className="mt-4">
                    <table className="table">
                        <thead>
                            <tr className="text-light" style={{fontSize: '30px'}}>
                                <th>Số ghế</th>
                                <th>Giá</th>
                                <th>Hủy</th>
                            </tr>
                        </thead>
                        <tbody className="text-warning">
                            {this.props.danhSachGheDangDat.map((gheDangDat, index) =>{
                                return <tr key={index}>
                                    <td>{gheDangDat.soGhe}</td>
                                    <td>{gheDangDat.gia}</td>
                                    <td>
                                        <button 
                                            onClick={()=>this.props.dispatch({
                                                type: 'HUY_GHE',
                                                soGhe: gheDangDat.soGhe
                                            })}
                                            className="btn btn-danger">
                                            X
                                        </button>
                                    </td>
                                </tr>
                            })}
                        </tbody>
                        <tfoot>
                            <tr className="text-warning">
                                <td></td>
                                <td>Tổng tiền</td>
                                <td>
                                    {this.props.danhSachGheDangDat.reduce((tongTien, gheDangDat, index) => {
                                        return tongTien += gheDangDat.gia
                                    },0).toLocaleString()}
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>

        )
    }
}

const mapStateToProps = state => {
    return {
        danhSachGheDangDat: state.BookingTicketReducer.danhSachGheDangDat
    }
}

export default connect(mapStateToProps,null)(ThongTinSoGhe);