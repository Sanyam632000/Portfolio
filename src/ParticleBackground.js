import React from 'react';
import Particles from 'react-particles-js';
import Particle from './Particle'

export default function ParticleBackground(){
    return<>
            <Particles params={Particle}></Particles>
          </>
}