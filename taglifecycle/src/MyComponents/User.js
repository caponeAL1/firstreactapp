import { fireEvent } from "@testing-library/react";

class User{
    constructor(fisrtName,lastName,Address)
    {
        this.firstName=fisrtName;
        this.lastName=lastName;
        this.Address=Address;
      
    }
    fisrtName = 'Unknown';
    Address='Unknown';
    lastName='Unknown';
}
export default User;