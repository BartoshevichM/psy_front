import React from "react";
import classes from './services.module.css'

export default function ({props}) {
    return (
        <div className={classes.Services} id='services'>
            <div className={classes.title}>Услуги</div>
            <div className={classes.itemsWrapper}>
                <div className={classes.item}>
                    <h3>Коучинг</h3>
                    <div className={classes.content}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda dicta eligendi incidunt ipsum</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda dicta eligendi incidunt ipsum
                        necessitatibus nemo quae quos similique? Dolore, quos.</p>
                    </div>
                </div>
                <div className={classes.item}>
                    <h3>Консультирование</h3>
                    <div className={classes.content}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda dicta eligendi incidunt ipsum</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda dicta eligendi incidunt ipsum
                            necessitatibus nemo quae quos similique? Dolore, quos.</p>
                    </div>
                </div>
                <div className={classes.item}>
                    <h3>Терапия</h3>
                    <div className={classes.content}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda dicta eligendi incidunt ipsum</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda dicta eligendi incidunt ipsum
                        necessitatibus nemo quae quos similique? Dolore, quos.</p>
                    </div>
                    </div>
            </div>
        </div>
    )
}
