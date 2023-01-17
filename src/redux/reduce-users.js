let initialState = {
    usersData: [
        {id: 1,name: 'Dosya', location: {country: "Kyrgyzstan", city: "Biskek"}, description: "ghifjgbfdnbkfjdnbdfjb", followed: false},            
        {id: 1,name: 'Dosya', location: {country: "Kyrgyzstan", city: "Biskek"}, description: "ghifjgbfdnbkfjdnbdfjb", followed: false},        
        {id: 1,name: 'Dosya', location: {country: "Kyrgyzstan", city: "Biskek"}, description: "ghifjgbfdnbkfjdnbdfjb", followed: false},        
        {id: 1,name: 'Dosya', location: {country: "Kyrgyzstan", city: "Biskek"}, description: "ghifjgbfdnbkfjdnbdfjb", followed: false},        
        {id: 1,name: 'Dosya', location: {country: "Kyrgyzstan", city: "Biskek"}, description: "ghifjgbfdnbkfjdnbdfjb", followed: false},        
        {id: 1,name: 'Dosya', location: {country: "Kyrgyzstan", city: "Biskek"}, description: "ghifjgbfdnbkfjdnbdfjb", followed: false},        
        {id: 1,name: 'Dosya', location: {country: "Kyrgyzstan", city: "Biskek"}, description: "ghifjgbfdnbkfjdnbdfjb", followed: false},            
    ]
}

const userReducer = (state = initialState, action) => {

    switch(action.type) {
        default: 
            return state
    }

} 

export default userReducer;
