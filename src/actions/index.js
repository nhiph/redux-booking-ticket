import {DAT_GHE, HUY_GHE} from '../constant/ActionTypes';

export const datGhe = (ghe) => {
    return {
        type: 'DAT_GHE',
        ghe
    }
}

export const huyGhe = (soGhe) => {
    return {
        type: 'HUY_GHE',
        soGhe
    }
}