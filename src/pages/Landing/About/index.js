import React, {Fragment} from "react";
import classes from './about.module.css'

export default function ({props}) {
    return (
            <div className={classes.About} id='about'>
                <div className={classes.Info}>
                    <h2>Lorem ipsum dolor sit amet</h2>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam aspernatur error fugiat
                    laboriosam magnam maxime molestias, nisi officiis recusandae suscipit temporibus voluptas,
                    voluptatem. Adipisci blanditiis ducimus facilis fugit, itaque libero, magni minima mollitia
                    necessitatibus nobis perferendis placeat quas quibusdam. Aperiam nemo nobis officia quae quia
                    recusandae. Assumenda aut corporis deserunt dolore eos et excepturi explicabo fuga harum hic id
                    incidunt laboriosam laborum laudantium minima modi mollitia neque nostrum officia officiis porro
                    quae quaerat quidem rem sapiente tempora, totam ut. Adipisci assumenda consectetur debitis eaque
                    enim, error facere illo necessitatibus placeat quisquam, reprehenderit temporibus veniam
                    voluptatibus. Deserunt exercitationem hic in incidunt nostrum odit officia possimus rem veritatis
                    voluptatem! Accusantium animi, consectetur corporis dolorem hic laboriosam, maxime molestias nihil
                    nobis officiis recusandae repudiandae sequi tempore? Alias aliquid aut corporis, culpa deleniti
                    dolor dolores ducimus eveniet excepturi fugit id illo incidunt iste, iure modi nesciunt nihil nulla
                    officiis pariatur praesentium quaerat quam, quo rem saepe sequi similique tempora voluptatum! Eius
                    facilis laboriosam velit! Cum eum incidunt iure natus porro quo sunt! Deserunt eligendi enim eum
                    libero quas repellendus saepe sed tenetur vitae.
                </div>
                <div className={classes.PhotoBlock}>
                    <img src="photo.jpg" alt="Olga Galperina" className={classes.Photo}/>
                </div>
            </div>
    )
}
