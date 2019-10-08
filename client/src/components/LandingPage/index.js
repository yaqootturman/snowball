import React from 'react'
import './index.css'

const LandingPage = () => {
  return (
    <>
      <div class='vertical'>
        <h1 class='the-tiltle'>
          Fight climate change together, every single day.
        </h1>
        <div class='div-contents'>
          <div class='circles-div'>
            <div class='circle numberCircle1'>1</div>
            <span class='span-style'>Learn what you can do</span>
          </div>

          <div class='circles-div'>
            <div class='circle numberCircle2'>2</div>
            <span class='span-style'>See what others are doing</span>
          </div>

          <div class='circles-div'>
            <div class='circle numberCircle3'>3</div>
            <span class='span-style'>Commit to a better future</span>
          </div>
        </div>

        <div class='div-contents'>
          <h3>The Vision</h3>
          <p>
            A global network of people, fighting climate change together,
            through our everyday actions.
          </p>
        </div>

        <div class='div-contents'>
          <h3>How do we get there?</h3>
          <p>
            By showing people what they can do, giving them the tools to do it
            and allowing them to commit to a better future. When we act
            together, small changes have a big impact.
          </p>
        </div>

        <div class='div-contents'>
          <h3>What’s the goal?</h3>
          <p>
            If we bring people together, the power lies with the people in the
            fight against climate change. We want to create a movement to
            release that inner power!
          </p>
        </div>
      </div>
      <div class='button-div'>
        <button
          onClick={console.log('this should push to home page')}
          class='lets-go'
        >
          Let’s go!
        </button>
      </div>
    </>
  )
}
export default LandingPage
