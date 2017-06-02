import React from 'react'
import DuckImage from '../assets/Duck.jpg'
import './HomeView.scss'
import greenCar from 'img/greenCar.png'
import policeCar from 'img/policeCar.png'
import cloud from 'img/cloud.png'
import tree1 from 'img/tree1.png'
import tree2 from 'img/tree2.png'
import blueship1 from 'img/blueship1.png'
import aves from 'img/aves.gif'
import fight from 'img/fight.gif'

export const HomeView = () => (
  <div className='containerView'>
    <div className='containerHeaven'>
      <img alt='This is a duck, because Redux!' className='cloudIcon2' src={cloud} />
      <img alt='This is a duck, because Redux!' className='cloudIcon' src={cloud} />
      <img alt='This is a duck, because Redux!' className='aves' src={aves} />
      <img alt='This is a duck, because Redux!' className='fight' src={fight} />
      <img alt='This is a duck, because Redux!' className='ship' src={blueship1} />
      {/*<div className='circle'> Hoover Me </div>*/}
    </div>
    <div  className='roadContainer'>
     <img alt='This is a duck, because Redux!' className='policeCar' src={policeCar} />
      <img alt='This is a duck, because Redux!' className='greenCar' src={greenCar} />
      <div className='linesRoad'> </div>
    </div>
    <div className='grassContainer'>
      <img alt='This is a duck, because Redux!' className='tree1' src={tree1} />
      <img alt='This is a duck, because Redux!' className='tree2' src={tree2} />
      <img alt='This is a duck, because Redux!' className='tree2-1' src={tree2} />
      <img alt='This is a duck, because Redux!' className='tree2-2' src={tree2} />
    </div>
  </div>
)

export default HomeView
