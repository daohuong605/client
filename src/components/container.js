import React from 'react'

const container = (props) => {
  return (
    <>
        <section className={props.class1}>
            <div className='container-xxl'>{props.children}</div>
        </section>
    </>
  )
}

export default container