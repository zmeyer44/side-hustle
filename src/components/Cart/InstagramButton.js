import React, { Component } from 'react';
import {ButtonContainerInsta} from '../Button';
export default class InstagramButton extends Component {
    
    render() {
        return (
            <div>
                <a href="https://www.instagram.com/sidehustlebread/">
                <ButtonContainerInsta>
                        <span className="mr-2">
                            <i className="fab fa-instagram" />
                        </span>
                        place order via instagram
                    </ButtonContainerInsta>
                            </a>
            </div>
        )
    }
}
