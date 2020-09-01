const  initialState = {
    users : [
        {
          name: "Calvin",
         gen: "14", 
         email: "calvin@email.com"
        },

        {
          name: "Doreen",
         gen: "15", 
         email: "doreen@email.com"
        },

        {
          name: "Irene",
         gen: "2",
          email: "irene@email.com"
        }
      ]
    
};




const UsersReducers = (state = initialState, action) => {
    switch(action.type){
        case "ADD_USER":
            const newUser = {
                name: this.state.name,
                email: this.state.email,
                gen: this.state.gen
              };
            return { ...state, users: [...state.users, newUser] };
            default:
                return state;
    }
};
export default UsersReducers;