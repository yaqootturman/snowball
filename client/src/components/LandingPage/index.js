import React from 'react'
import './style.css'

const LandingPage = props => {
  const { history } = props
  return (
    <div className="container">

      <div className="title-div">
        <h1 className='title-div__top-title'>
          snowball
        </h1>
        <hr className="title-div__horizantal-line"></hr>
      </div>
      <div className="main-description-div">
        <h1 className='main-description-div__description'>
          Together powerful in the fight against climate change
        </h1>
      </div>
      <div className='vertical'>
        <div className='vertical__contents'>
          <div className='vertical__contents__circles'>
            <div className='vertical__contents__circles__circle vertical__contents__circles__numberCircle1'>
              1
            </div>
            <span className='vertical__contents__circles__span'>
              Learn what you can do
            </span>
          </div>

          <div className='vertical__contents__circles'>
            <div className='vertical__contents__circles__circle vertical__contents__circles__numberCircle2'>
              2
            </div>
            <span className='vertical__contents__circles__span'>
              See what others are doing
            </span>
          </div>

          <div className='vertical__contents__circles'>
            <div className='vertical__contents__circles__circle vertical__contents__circles__numberCircle3'>
              3
            </div>
            <span className='vertical__contents__circles__span'>
              Commit to a better future
            </span>
          </div>
        </div>

        <div className='vertical__contents2'>
          <h3 className="vertical__contents-subtitle">The Vision</h3>
          <p className="vertical__contents__description2">
            A global network of people, fighting climate change together,
            through our everyday actions.
          </p>
        </div>

        <div className='vertical__contents2'>
          <h3 className="vertical__contents-subtitle">How do we get there?</h3>
          <p className="vertical__contents__description">
            By showing people what they can do, giving them the tools to do it
            and allowing them to commit to a better future.
            </p>
          <p className="vertical__contents__description2">When we act
            together, small changes have a big impact.
          </p>
        </div>

        <div className='vertical__contents'>
          <h3 className="vertical__contents-subtitle">What’s the goal?</h3>
          <p className="vertical__contents__description">
            If we bring people together, the power lies with the people in the
            fight against climate change.
            </p>
          <p className="vertical__contents__description2">
            We want to create a movement to
           release that inner power!
          </p>
        </div>
      </div>
      <div className='start'>
        <button
          type='submit'
          onClick={() => {
            const userId = 1
            history.push(`/home/${userId}`)
          }}
          className='start__letsgo'
        >
          Let’s go!
        </button>
      </div>
    </div>
  )
}
export default LandingPage
