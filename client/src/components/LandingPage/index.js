import React from 'react'
import './style.css'

const LandingPage = props => {
  const { history } = props
  return (
    <>

      <div className="title-div">
        <h1 className='title-div__top-title'>
          snowball
        </h1>
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

        <div className='vertical__contents'>
          <h3>The Vision</h3>
          <p>
            A global network of people, fighting climate change together,
            through our everyday actions.
          </p>
        </div>

        <div className='vertical__contents'>
          <h3>How do we get there?</h3>
          <p>
            By showing people what they can do, giving them the tools to do it
            and allowing them to commit to a better future. When we act
            together, small changes have a big impact.
          </p>
        </div>

        <div className='vertical__contents'>
          <h3>What’s the goal?</h3>
          <p>
            If we bring people together, the power lies with the people in the
            fight against climate change. We want to create a movement to
            release that inner power!
          </p>
        </div>
      </div>
      <div className='start'>
        <button
          type='submit'
          onClick={() => {
            history.push('/home')
          }}
          className='start__letsgo'
        >
          Let’s go!
        </button>
      </div>
    </>
  )
}
export default LandingPage
