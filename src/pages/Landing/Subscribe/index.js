import React from 'react'
import classes from './subscribe.module.css'
import SubscribeForm from '../../../components/SubscribeForm'

export default function () {
    return (
        <div className={classes.Subscribe} id='subscribe'>
            <SubscribeForm/>
        </div>
    )
}
