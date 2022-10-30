import React from 'react'
import UserSelectionBlock from '../../components/SignUpComponents/UserSelectionBlock';
import StudentSignUp from '../../components/SignUpComponents/StudentSignUp';
import axios from 'axios'
import { BackendLink } from '../../utlis/BakendLink';
import {
    Button
} from '@chakra-ui/react'

const index = () => {
    fetch('http://vibez.ngrok.io/users/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'usernameOrEmail': 'user1',
            'password': 'secrets!'
        })
    }).then((res) => {
        console.log(res);
    })

    return (
        <div className='signInPage'>
            <div className='signinheader'>
                <div className='signinheaderText'>
                    <p className='headone'>Welcome</p>
                    <p className='headtwo'>Sign In Here</p>
                </div>

                <div className="signUpOptionLogos">
                    <UserSelectionBlock
                        img="signup_icons/Group1.png"
                        title="Student"
                    />
                    <UserSelectionBlock
                        img="signup_icons/Parent Logo Login.png"
                        title="Parent"
                    />
                    <UserSelectionBlock
                        img="signup_icons/Group2.png"
                        title="Provider"
                    />
                </div>

                <div className="signUpFields">
                    <StudentSignUp />

                    <Button
                        colorScheme='blue'
                        display="block"
                        margin="0 auto"
                        mt="30px"
                        size='md'
                        height='48px'
                        width='100%'
                    >
                        Submit
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default index