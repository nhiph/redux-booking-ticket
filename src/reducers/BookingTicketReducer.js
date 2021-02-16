import { DAT_GHE, HUY_GHE } from "../constant/ActionTypes";

const stateDefault = {
    danhSachGheDangDat: [
        {soGhe: "A1", gia: 50000},
        {soGhe: "B5", gia: 75000}
    ]
};

const BookingTicketReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case DAT_GHE:{
            let danhSachGheDangDatUpdate = [...state.danhSachGheDangDat];
            let index=danhSachGheDangDatUpdate.findIndex(gheDangDat => gheDangDat.soGhe===action.ghe.soGhe);
            if(index!==-1){
                danhSachGheDangDatUpdate.splice(index, 1);
            }else{
                danhSachGheDangDatUpdate.push(action.ghe)
            }
            //cap nhat lai state=> rerender UI
            state.danhSachGheDangDat=danhSachGheDangDatUpdate;
            return {...state}
        }
        case HUY_GHE:{
            console.log(action);
            let danhSachGheDangDatUpdate = [...state.danhSachGheDangDat];
            let index=danhSachGheDangDatUpdate.findIndex(gheDangDat => gheDangDat.soGhe===action.soGhe);
            if(index!==-1){
                danhSachGheDangDatUpdate.splice(index, 1);
            }
            state.danhSachGheDangDat=danhSachGheDangDatUpdate;
            return {...state};
        }
        default:
            return {...state};
    }
}

export default BookingTicketReducer;