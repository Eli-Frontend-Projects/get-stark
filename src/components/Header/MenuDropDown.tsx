import * as React from 'react'
import './MenuDropDown.scss'

const MenuDropDown : React.FC = () =>{
    return (
        <div className='MenuDropDown'>
            <p>Log in</p>
            <hr/>
            <section>
                <div>USE CASES</div>
                <div className='UseCaseListContainer'>
                    <p>For Designers</p>
                    <p>For Developers</p>
                    <p>For Product Managers</p>
                    <p>For Compliance Managers</p>
                </div>
            </section>
            <p> PRICING </p>
            <hr/>
            <p>Support</p>
            <hr/>
            <p>Blog</p>
            <hr/>
            <p>Library</p>
            <hr/>
            <p>The WCAG explained</p>
            <hr/>
            <p>Community</p>
        </div>
    )
}

export default MenuDropDown;