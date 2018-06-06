import React from 'react';

const ExpensifyEditPage = (props) => 
{
    console.log(props);
    return (
        <div>
            Edit the expensify id = {props.match.params.id}
        </div>
    );
};

export default ExpensifyEditPage;