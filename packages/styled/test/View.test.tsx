import { View, Text } from 'react-native';
import renderer from 'react-test-renderer';
import { describe, expect, it } from 'vitest';
import { styled } from '../src';

function toJson(component: renderer.ReactTestRenderer) {
  const result = component.toJSON();
  expect(result).toBeDefined();
  expect(result).not.toBeInstanceOf(Array);
  return result as renderer.ReactTestRendererJSON;
}

const StyledView = styled(View);
const StyledText = styled(Text);

describe('@universal-labs/styled', () => {
  it('View render', () => {
    const component = renderer.create(
      <StyledView className='flex-1'>
        <StyledText>Test View</StyledText>
      </StyledView>,
    );
    let tree = toJson(component);
    expect(tree).toMatchSnapshot();
  });
});
