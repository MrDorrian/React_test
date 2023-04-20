import React, {Component} from 'react';
import styles from './SignInForm.module.css';
import cx from 'classnames';

class SignInForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            isEmailValid: true,
            isPasswordValid: true,
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            email: '',
            password: '',
        })
    }

    handleChange = ({target: {name, value}}) => {
        if (value.include(' ')){

        }
        this.setState({[name]: value});
    }

    render() {
        const {email, password, isEmailValid, isPasswordValid} = this.state;
        const emailClassNames = cx(styles.input, {[styles.invalid]: !isEmailValid})
        const passwordClassNames = cx(styles.input, {[styles.invalid]: !isPasswordValid})
        return (
            <form className={styles.container} onSubmit={this.handleSubmit}>
                <input className={emailClassNames} value={email} type="email" name="email" placeholder="Email"
                       onChange={this.handleChange}/>
                <input className={passwordClassNames} value={password} type="password" name="password"
                       placeholder="Password" onChange={this.handleChange}/>
                <input className={styles.input} type="submit"/>
            </form>
        );
    }
}

export default SignInForm;
