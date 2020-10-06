// init state as object with dynamic input fields. spread all props from previous state and edit the pair that was passed
import { sendEmail } from '../utils/sendEmail';


export function reducer(state, action) {
    switch(action.type) {
        case "UPDATE_INPUT":
            return {...state, [action.payload.field]: action.payload.value};
        case "SEND_EMAIL":
            return sendEmail(action.payload);
        case "RESET_INPUT":
            return {...state, name: action.payload.name, email: action.payload.email, company: action.payload.company, body: action.payload.body};
        default:
            return state;
    }
    
}