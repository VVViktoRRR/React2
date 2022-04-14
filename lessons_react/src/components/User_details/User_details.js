const UserDetails = ({userId, getPostId}) => {
let {id, name, username, email, address, phone, website, company } = userId;
    return (
        <div style={{marginLeft:'20px', paddingLeft:'20px', borderLeft: ' 2px solid silver'}}>
            id : {id}  <br/>
            name: {name}<br/>
            username: {username}<br/>
            email: {email} <br/>
            address:  <br/>
            street: {address.street} <br/>
            suite: {address.suite} <br/>
            city: {address.city} <br/>
            zipcode: {address.zipcode} <br/>
            geo: <br/>
            lat: {address.geo.lat} <br/>
            lng: {address.geo.lat} <br/>
            phone : {phone}  <br/>
            website: {website}<br/>
            company:<br/>
            name: {company.name} <br/>
            catchPhrase: {company.catchPhrase} <br/>
            bs: {company.bs} <br/>
                <hr/>
           <button style={{marginLeft:'10px', borderRadius:'20px'}}
           onClick={() => getPostId(id)}> Posts User </button>
        </div>
    );
};

export {UserDetails};

