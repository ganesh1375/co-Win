export interface Sessions{
    center_id: string;
    name: string;
    address: string;
    state_name: string;
    district_name: string;
    block_name: string;
    pincode: string;
    from: string;
    to: string;
    lat: string;
    long: string;
    fee_type: string;
    session_id: string;
    date: string;
    available_capacity: string;
    available_capacity_dose1: string;
    available_capacity_dose2: string;
    fee: string;
    min_age_limit: number;
    vaccine: string;
    slots: [];
}
