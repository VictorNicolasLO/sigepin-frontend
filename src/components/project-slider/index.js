import React from 'react';
import {
  Container,
  Content,
  Area,
  Title,
  Description,
  Buttons,
  Button,
} from './styled';
import { AnimationBottomToUp, AnimationOpacity } from '../animations';
import Controls from './components/controls';

function ProjectSlider({
  articles,
  currentArticleIndex,
  onChangeArticle,
  onArticleClick,
}) {
  const currentArticle = articles[currentArticleIndex || 0];
  return (
    <Container img={currentArticle.img}>
      <Content key={currentArticleIndex}>
        <AnimationBottomToUp time=".5">
          <Area>{currentArticle.area}</Area>
        </AnimationBottomToUp>
        <AnimationBottomToUp time=".5" delay=".1">
          <Title>{currentArticle.title}</Title>
        </AnimationBottomToUp>
        <AnimationBottomToUp time=".5" delay=".2">
          <Description>{currentArticle.description}</Description>
        </AnimationBottomToUp>

        <Buttons>
          {currentArticle.actions.map((action) => (
            <AnimationOpacity time=".3" delay=".3">
              <Button
                onClick={() => {
                  onArticleClick(action);
                }}>
                {action.name}
              </Button>
            </AnimationOpacity>
          ))}
        </Buttons>

        <Controls
          currentItemIndex={currentArticleIndex}
          items={articles}
          onSelectItem={onChangeArticle}
        />
      </Content>
    </Container>
  );
}

export default ProjectSlider;
