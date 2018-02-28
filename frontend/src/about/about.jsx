import React, { Component } from 'react'
import PageHeader from '../template/pageHeader'

export default class About extends Component {
    render() {
        return (
            <div>
                <PageHeader name="Sobre" small="Nós"></PageHeader>
                <h2>Nossa História</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur temporibus unde soluta, hic asperiores saepe debitis molestiae sint doloremque dignissimos, eaque cumque atque, quasi quo ipsam labore explicabo. Dolorem, deserunt?</p>
                <h2>Missão e Visão</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et maxime exercitationem, nemo dolore sed repellendus, rem doloremque labore magnam sint iste minus, dolorum iusto expedita? Impedit officiis nisi voluptate ad?</p>
                <h2>Imprensa</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et maxime exercitationem, nemo dolore sed repellendus, rem doloremque labore magnam sint iste minus, dolorum iusto expedita? Impedit officiis nisi voluptate ad?</p>
            </div>
        )
    }
}