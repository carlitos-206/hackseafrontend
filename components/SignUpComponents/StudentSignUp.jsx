import React from 'react'
import {
    Input, Select
} from '@chakra-ui/react'

const StudentSignUp = () => {
    return (
        <div className='StudentSignUp'>
            <Input mt="15px" placeholder='User Name' />
            <Input mt="15px" placeholder='First Name' />
            <Input mt="15px" placeholder='Last Name' />
            <Input mt="15px" placeholder='Email' />
            <Input mt="15px" placeholder='Password' />

            <Select mt="15px" placeholder='Gender'>
                <option value='option1'>Male</option>
                <option value='option2'>Female</option>
                <option value='option2'>Others</option>
                <option value='option2'>Rather not say</option>
            </Select>
        </div>
    )
}

export default StudentSignUp