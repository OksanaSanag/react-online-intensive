//Core
import React, { Component } from 'react';

//Instruments

import styles from './styles.m.css';

export default class Composer extends Component {
    render () {
        return (
            <section className = { styles.composer }>
                <img src = { this.props.avatar } />
                <form>
                    <textarea
                        placeholder = { `Whats on your mind, ${this.props.currentUserFirstName} ?` }
                    />
                    <input type = 'submit' value = 'Post' />
                </form>
            </section>
        );
    }
}
