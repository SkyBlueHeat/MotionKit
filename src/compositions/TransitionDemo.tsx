import React from 'react';
import {AbsoluteFill, useCurrentFrame} from 'remotion';
import {SceneTransition, TransitionWrapper} from '../components/motion/SceneTransition';
import {designTokens} from '../design/tokens';

const Scene1 = () => (
  <div style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    fontSize: 64,
    fontWeight: 600,
    color: designTokens.colors.foreground,
  }}>
    Scene 1: Fade Transition
  </div>
);

const Scene2 = () => (
  <div style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    fontSize: 64,
    fontWeight: 600,
    color: designTokens.colors.accent,
  }}>
    Scene 2: Slide Transition
  </div>
);

const Scene3 = () => (
  <div style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    fontSize: 64,
    fontWeight: 600,
    color: designTokens.colors.foreground,
  }}>
    Scene 3: Wipe Transition
  </div>
);

const Scene4 = () => (
  <div style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    fontSize: 64,
    fontWeight: 600,
    color: designTokens.colors.accentSecondary,
  }}>
    Scene 4: Zoom Transition
  </div>
);

export const TransitionDemo: React.FC = () => {
  const frame = useCurrentFrame();
  const sceneDuration = 60;
  
  const currentScene = Math.floor(frame / sceneDuration);
  const sceneProgress = (frame % sceneDuration) / sceneDuration;
  
  return (
    <AbsoluteFill style={{backgroundColor: designTokens.colors.background}}>
      {currentScene === 0 && (
        <SceneTransition type="fade" progress={sceneProgress}>
          <TransitionWrapper>
            <Scene1 />
          </TransitionWrapper>
        </SceneTransition>
      )}
      {currentScene === 1 && (
        <SceneTransition type="slide" direction="left" progress={sceneProgress}>
          <TransitionWrapper>
            <Scene2 />
          </TransitionWrapper>
        </SceneTransition>
      )}
      {currentScene === 2 && (
        <SceneTransition type="wipe" direction="right" progress={sceneProgress}>
          <TransitionWrapper>
            <Scene3 />
          </TransitionWrapper>
        </SceneTransition>
      )}
      {currentScene === 3 && (
        <SceneTransition type="zoom" progress={sceneProgress}>
          <TransitionWrapper>
            <Scene4 />
          </TransitionWrapper>
        </SceneTransition>
      )}
    </AbsoluteFill>
  );
};
