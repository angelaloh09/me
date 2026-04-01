import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Bookshelf from './Bookshelf'
import Thoughts from './Thoughts'
import Home from './Home'
import AboutMe from './AboutMe'
import Scratchpad from './Scratchpad'
import Photography from './Photography'
import Projects from './Projects'
import HowToAvoidAClimateDisaster from './books/HowToAvoidAClimateDisaster'
import CapacitiveTouch from './thoughts/capacitive-touch'
import NoeLamp from './tinkio-projects/NoeLamp'
import CloudVase from './tinkio-projects/CloudVase'
import Vimputer from './tinkio-projects/Vimputer'

const AppRoutes = ({ location }) => (
  <Routes location={location} key={location.pathname}>
    <Route path="/" element={<Home />} />
    <Route path="/aboutme" element={<AboutMe />} />
    <Route path="/bookshelf" element={<Bookshelf />} />
    <Route path="/bookshelf/how-to-avoid-a-climate-disaster" element={<HowToAvoidAClimateDisaster />} />
    <Route path="/thoughts" element={<Thoughts />} />
    <Route path="/thoughts/capacitive-touch" element={<CapacitiveTouch />} />
    <Route path="/photography" element={<Photography />} />
    <Route path="/projects" element={<Projects />} />
    <Route path="/scratchpad" element={<Scratchpad />} />
    <Route path="/tinkio-projects/noe-lamp" element={<NoeLamp />} />
    <Route path="/tinkio-projects/cloud-vase" element={<CloudVase />} />
    <Route path="/tinkio-projects/vimputer" element={<Vimputer />} />
    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes>
)

export default AppRoutes
