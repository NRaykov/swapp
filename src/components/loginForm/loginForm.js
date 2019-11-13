import React from 'react';
import { FormGroup, } from 'reactstrap';
import Form from '../../components/elements/form/form'
import styles from './styles.module.css';

import Input from '../../components/elements/inputs/inputs';
import Button from '../../components/elements/button/button';


export default class LoginForm extends React.Component {
  state = { email: '', password:'' };

  onChange = ({ target: { value: email } }) => {
    this.setState({ email });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.login({ variables: { email: this.state.email, password: this.state.password } });
  };

  render() {
    return (
            <>
              <div className={`${styles.formPanel}`}>
                <h1 className={`${styles.primaryHeading}`}
                    onClick={this.props.themeChanger}
                >SWAPP</h1>

                <Form variant="primary" className={`${styles.formGroupPanel}`} onSubmit={this.handleSubmit}>
                  <div className={`${styles.error}`}>Invalid credentials!</div>
                  <FormGroup>
                    <Input variant="primary" className={`${styles.input}`}
                           type="email" name="email" id="emailAddress" placeholder="email"
                           value={this.state.email}
                           onChange={this.onChange}/>
                  </FormGroup>
                  <FormGroup>
                    <Input variant="primary" className={`${styles.input}`}
                           type="password" name="password" id="password" placeholder="password"
                           value={this.state.password}
                           onChange={e => this.setState({ password: e.target.value })}/>
                  </FormGroup>


                  <div className={`${styles.buttonPanel}`}>
                    <Button variant="primary" className={`${styles.btnLogin}`}
                            type="submit">Login</Button>
                  </div>
                </Form>
              </div>
            </>

    );
  }
}
