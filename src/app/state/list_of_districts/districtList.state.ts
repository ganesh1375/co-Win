import { District } from 'src/app/store/districtList.model';

export interface DistrictState{
    districts: District[];
}

export const InitialState: DistrictState = {
    districts: []
};
